import { GetStaticProps } from 'next';
import Link from 'next/link';
import { addApolloState, initializeApollo } from 'lib/apollo';
import { useUserListQuery } from 'lib/schemas';
import Layout from 'components/layout';

const UsersPage = () => {
  const { data } = useUserListQuery();
  return (
    <Layout title="Users">
      <h1>Users</h1>
      {data?.users?.edges.map(user => (
        <div key={user?.node?.id}>
          <p>{user?.node?.username}</p>
          <Link href={`/users/[id]`} as={`/users/${user?.node?.id}`}>
            <a>{user?.node?.username}</a>
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

export default UsersPage;
