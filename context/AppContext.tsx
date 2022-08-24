import { useApolloClient } from '@apollo/client';
import { MeQueryDocument, MeQueryQuery } from 'lib/schemas';
import React, { Dispatch, useReducer } from 'react';
import { createContext } from 'react';
import {
  AppActions,
  appReducer,
  DoAuth,
  DoSignOut,
  IAppState,
  initialAppState,
  SetTheme,
  SetToken,
  SetUserId,
  SetUserName,
} from 'store/slices/app';
import { log } from 'utils/logs';

interface IAppContext {
  state: IAppState;
  dispatch: Dispatch<AppActions>;
  setup: () => void;
  setTheme: (appTheme: string) => void;
  signout: () => void;
}

interface Props {
  children: React.ReactNode;
}

const AppContext = createContext<IAppContext>({
  state: initialAppState,
  dispatch: () => null,
  setup: () => {},
  setTheme: () => {},
  signout: () => {},
});

const AppProvider = ({ children }: Props) => {
  const client = useApolloClient();
  const [state, dispatch] = useReducer(appReducer, initialAppState);

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      const authToken = localStorage.getItem('authToken');
      const userId: any = localStorage.getItem('userId');
      const userName: any = localStorage.getItem('userName');
      const theme = localStorage.getItem('appTheme');
      if (authToken) {
        dispatch(SetToken(authToken));
        dispatch(SetUserId(userId));
        dispatch(SetUserName(userName));
        dispatch(DoAuth());
        dispatch(SetTheme(theme));
        showSettings();
      } else {
        signout();
      }
    };
    bootstrapAsync();
  }, [state.authToken, dispatch]);

  const showSettings = () => {
    log('current settings');
    log('authToken : ' + state.authToken);
    log('isAuth : ' + state.isAuth);
    log('authUserId : ' + state.authUserId);
    log('authUserName : ' + state.authUserName);
    log('appTheme : ' + state.appTheme);
  };

  const setup = async () => {
    try {
      const res = await client.query<MeQueryQuery>({
        query: MeQueryDocument,
      });
      if (res !== undefined) {
        const me = res.data.me;
        log('me: ' + me);
        dispatch(DoAuth());
        dispatch(SetUserId(me?.id || ''));
        dispatch(SetUserName(me?.username || ''));
        localStorage.setItem('isAuth', JSON.stringify(true));
        localStorage.setItem('authUserId', me?.id || '');
        localStorage.setItem('authUserName', me?.username || '');
        localStorage.setItem('appTheme', 'dark');
        showSettings();
      } else {
        log('Could not complete setup this time');
      }
    } catch (e) {
      log('setup error: ' + e);
    }
    log('Could not set up new user');
  };

  const setTheme = (appTheme: string) => {
    localStorage.setItem('appTheme', appTheme);
    dispatch(SetTheme(appTheme));
  };

  const signout = (): void => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('isAuth');
    localStorage.removeItem('authUserId');
    localStorage.removeItem('authUserName');
    localStorage.removeItem('appTheme');
    dispatch(DoSignOut());
    client.clearStore();
    log('User signed out');
  };

  return (
    <AppContext.Provider value={{ state, dispatch, setup, setTheme, signout }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
