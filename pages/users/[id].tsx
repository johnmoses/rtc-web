import Layout from 'components/layout';
import { useRouter } from 'next/router';
import React from 'react';

const UserPage = () => {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  console.log('user id: ', id);
  return (
    <Layout title="User">
      <h3>User</h3>
      <div>{id}</div>
    </Layout>
  );
};

export default UserPage;
