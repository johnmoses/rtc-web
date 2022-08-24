import { GetStaticProps } from 'next';
import Link from 'next/link';
import { addApolloState, initializeApollo } from 'lib/apollo';
import { useMeetingListQuery } from 'lib/schemas';
import Layout from 'components/layout';

const MeetingsPage = () => {
  const { data } = useMeetingListQuery();
  return (
    <Layout title="Meetings">
      <h1>Meetings</h1>
      {data?.meetings?.edges.map(meeting => (
        <div key={meeting?.node?.id}>
          <p>{meeting?.node?.name}</p>
          <Link href={`/meetings/[id]`} as={`/meetings/${meeting?.node?.id}`}>
            <a>{meeting?.node?.description}</a>
          </Link>
        </div>
      ))}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default MeetingsPage;
