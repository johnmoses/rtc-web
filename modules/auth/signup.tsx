import React from 'react';

export const SignUp = () => {
  return (
    <main className="auth-form">
      <form>
        <h1>Please sign up</h1>
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <br></br>
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button type="submit">Sign up</button>
      </form>
    </main>
  );
};
