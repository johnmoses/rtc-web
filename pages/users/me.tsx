import Layout from 'components/layout';
import { Profile } from 'modules/users/profile';
import React from 'react';

const MePage = () => {
  return (
    <Layout title="Me">
      <Profile />
    </Layout>
  );
};

export default MePage;
