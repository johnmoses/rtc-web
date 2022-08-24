export interface IAppState {
  isLoading: boolean;
  appTheme: string;
  authToken: any;
  authUserId: string;
  authUserName: string;
  isAuth: boolean;
}

export const initialAppState: IAppState = {
  isLoading: false,
  appTheme: 'theme-dark',
  authToken: null,
  authUserId: '',
  authUserName: '',
  isAuth: false,
};

export enum ActionType {
  FLIP_LOADING = 'FLIP_LOADING',
  SET_THEME = 'SET_THEME',
  SET_TOKEN = 'SET_TOKEN',
  SET_USER_ID = 'SET_USER_ID',
  SET_USER_NAME = 'SET_USER_NAME',
  DO_AUTH = 'DO_AUTH',
  DO_SIGN_OUT = 'DO_SIGN_OUT',
}

interface IFlipLoading {
  type: ActionType.FLIP_LOADING;
  payload: null;
}

interface ISetTheme {
  type: ActionType.SET_THEME;
  payload: string;
}

interface ISetToken {
  type: ActionType.SET_TOKEN;
  payload: any;
}

interface ISetUserId {
  type: ActionType.SET_USER_ID;
  payload: any;
}

interface ISetUserName {
  type: ActionType.SET_USER_NAME;
  payload: any;
}

interface IDoAuth {
  type: ActionType.DO_AUTH;
  payload: null;
}

interface IDoSignOut {
  type: ActionType.DO_SIGN_OUT;
  payload: null;
}

export type AppActions =
  | IFlipLoading
  | ISetTheme
  | ISetToken
  | ISetUserId
  | ISetUserName
  | IDoAuth
  | IDoSignOut;

export const FlipLoading = (): IFlipLoading => {
  return {
    type: ActionType.FLIP_LOADING,
    payload: null,
  };
};

export const SetTheme = (appTheme: string): ISetTheme => {
  // console.log('changSeed theme: ', appTheme);
  return {
    type: ActionType.SET_THEME,
    payload: appTheme,
  };
};

export const SetToken = (token: string): ISetToken => {
  return {
    type: ActionType.SET_TOKEN,
    payload: token,
  };
};

export const SetUserId = (authUserId: string): ISetUserId => {
  return {
    type: ActionType.SET_USER_ID,
    payload: authUserId,
  };
};

export const SetUserName = (authUserName: string): ISetUserName => {
  return {
    type: ActionType.SET_USER_NAME,
    payload: authUserName,
  };
};

export const DoAuth = (): IDoAuth => {
  return {
    type: ActionType.DO_AUTH,
    payload: null,
  };
};

export const DoSignOut = (): IDoSignOut => {
  return {
    type: ActionType.DO_SIGN_OUT,
    payload: null,
  };
};

export const appReducer = (state: IAppState, action: AppActions) => {
  switch (action.type) {
    case ActionType.FLIP_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case ActionType.SET_THEME:
      return {
        ...state,
        appTheme: action.payload,
      };
    case ActionType.SET_TOKEN:
      return {
        ...state,
        authToken: action.payload,
      };
    case ActionType.SET_TOKEN:
      return {
        ...state,
        authToken: action.payload,
      };
    case ActionType.SET_USER_ID:
      return {
        ...state,
        authUserId: action.payload,
      };
    case ActionType.SET_USER_NAME:
      return {
        ...state,
        authUserName: action.payload,
      };
    case ActionType.DO_AUTH:
      return {
        ...state,
        isAuth: true,
      };
    case ActionType.DO_SIGN_OUT:
      return {
        ...state,
        isAuth: false,
        authUserId: '',
        authToken: '',
      };
    default:
      return state;
  }
};
