import '../styles/globals.css'
// import '../styles/bannerStyles.css'
import {parseCookies} from 'nookies';
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import { Router } from 'next/router';
import UserContextProvider from '../Context/UserContext';

const client = new ApolloClient({
  uri: 'localhost:1337/api/graphql',
  cache: new InMemoryCache()
})

function MyApp({ Component, pageProps}) {
  return(
    <ApolloProvider client={client}>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </ApolloProvider>
  ) 
}

const redirectUser = (ctx, location) => {
  if (ctx.req) {
      ctx.res.writeHead(302, { Location: location });
      ctx.res.end();
  } else {
      Router.push(location);
  }
}

MyApp.getInitialProps = async ({Component, ctx}) => {
  let pageProps = {};
  const jwt = parseCookies(ctx).jwt;
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }
  if(!jwt) {
    if(ctx.pathname === "/write") {
      redirectUser(ctx, "/auth/login");
    }
  }
  if(jwt) {
    if(ctx.pathname === "/auth/login" || ctx.pathname === "/auth/signup") {
      redirectUser(ctx, "/");
    }
  }
  const user = jwt!=='' ? true : false;
  return {
    pageProps
  }
}



export default MyApp
