import { GetStaticProps } from 'next';
import { addApolloState, initializeApollo } from 'lib/apollo';
import { useMeetingListQuery } from 'lib/schemas';
import Layout from 'components/layout';

const HomePage = () => {
  const { data } = useMeetingListQuery();
  return (
    <Layout title="Home">
      <div className="main common">
        <section className="main__section">
          {data?.meetings?.edges.map(meeting => (
            <div key={meeting?.node?.id}>
              <p>{meeting?.node?.name}</p>
            </div>
          ))}
        </section>
        <div>
          <p>Paragraph</p>
          <button>Button</button>
          <a href="/">Anchor</a>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default HomePage;
