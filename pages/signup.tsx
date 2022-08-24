import Layout from 'components/layout';
import { SignUp } from 'modules/auth/signup';
import React from 'react';

function SignUpPage() {
  return (
    <Layout title="Sign up">
      <SignUp />
    </Layout>
  );
}

export default SignUpPage;
