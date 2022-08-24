import Layout from 'components/layout';
import { useRouter } from 'next/router';
import React from 'react';

const MeetingPage = () => {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  console.log('meeting id: ', id);
  return (
    <Layout title="Meeting">
      <h3>Meeting</h3>
      <div>{id}</div>
    </Layout>
  );
};

export default MeetingPage;
