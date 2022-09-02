import '../styles/globals.css'
// import '../styles/bannerStyles.css'
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import { Router } from 'next/router';
import { getUserFromLocalCookie } from '../lib/auth';
import Cookies from 'js-cookie';

const client = new ApolloClient({
  uri: 'localhost:1337/api/graphql',
  cache: new InMemoryCache()
})

function MyApp({ Component, pageProps}) {
  return(
    <ApolloProvider client={client}>
        <Component {...pageProps} />
    </ApolloProvider>
  ) 
}

// const redirectUser = (ctx, location) => {
//   if (ctx.req) {
//       ctx.res.writeHead(302, { Location: location });
//       ctx.res.end();
//   } else {
//       Router.push(location);
//   }
// }

// MyApp.getInitialProps = async ({Component, ctx}) => {
//   let pageProps = {};
//   const user = getUserFromLocalCookie();
//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx)
//   }
//   if(!user) {
//     if(ctx.pathname === "/write") {
//       redirectUser(ctx, "/auth/login");
//     }
//   }
//   if(user) {
//     if(ctx.pathname === "/auth/login" || ctx.pathname === "/auth/signup") {
//       redirectUser(ctx, "/");
//     }
//   }
//   return {
//     pageProps
//   }
// }


export default MyApp
