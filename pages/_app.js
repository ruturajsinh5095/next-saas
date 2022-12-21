import '../styles/globals.css';
import { AuthProvider } from '@saas-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { theme as proTheme } from '@saas-ui/pro';
import { SaasProvider } from '@saas-ui/react';

const theme = extendTheme( proTheme)


export default function App({ Component, pageProps }) {
  return (
    <SaasProvider theme={theme} >
      <AuthProvider>
      <Component {...pageProps} />
      </AuthProvider>
    </SaasProvider>
  )
}
