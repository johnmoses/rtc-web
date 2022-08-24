import { AppContext } from 'context/AppContext';
import { useTokenAuthMutation } from 'lib/schemas';
import { useRouter } from 'next/router';
import React, { useContext, useRef, useState } from 'react';
import { log } from 'utils/logs';

export const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [tokenAuth, { data, loading, error }] = useTokenAuthMutation({
    variables: {
      username: username,
      password: password,
    },
  });
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const router = useRouter();

  const { setup } = useContext(AppContext);

  const handleSignIn = async (tokenAuth: any) => {
    try {
      const res = await tokenAuth();
      if (res !== undefined) {
        localStorage.setItem('authToken', res.data?.tokenAuth?.token);
        setMessage('Verifying account... ');
        log('Got token, checking verification!');
        setup();
        router.push('/');
      } else {
        log('Not a valid user!');
      }
    } catch (e) {
      setMessage(' Sign in not successful! ');
      log('Sign in not successful!');
      console.log(error);
    }
  };
  return (
    <main className="auth-form">
      <form>
        <h1>Please sign in</h1>
        <div className="form-floating">
          <input
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            ref={usernameRef}
            name="username"
            value={username}
            autoCapitalize="none"
            type="text"
            onChange={event => setUsername(event.target.value)}
          />
          <br></br>
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            className="form-control"
            id="floatingPassword"
            ref={passwordRef}
            name="password"
            value={password}
            placeholder="Password"
            autoCapitalize="none"
            type="password"
            onChange={event => setPassword(event.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button
          type="submit"
          title="Sign in"
          placeholder="Submit"
          disabled={
            loading ||
            !/^(?!\s*$).+/.test(username) ||
            !/^(?!\s*$).+/.test(password)
          }
          onClick={() => handleSignIn(tokenAuth)}>
          Sign in
        </button>
      </form>
    </main>
  );
};
