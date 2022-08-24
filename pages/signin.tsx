import Layout from 'components/layout';
import { SignIn } from 'modules/auth/signin';
import React from 'react';

function SignInPage() {
  return (
    <Layout title="Sign in">
      <SignIn />
    </Layout>
  );
}

export default SignInPage;
