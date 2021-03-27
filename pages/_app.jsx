import { Container } from 'next/app';
import Page from '../components/Page';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Container>
      <Page>
        <Component />
      </Page>
    </Container>
  );
};

MyApp.getInitialProps = async (ctx) => {
  let pageProps = {};
  // this exposes the query to the user
  pageProps.query = ctx.query;
  return { pageProps };
};

export default MyApp;
