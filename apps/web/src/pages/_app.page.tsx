import { Layout } from '@/components/Layout';
import { SWRConfig } from 'swr';
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';
import '@/styles/global.css';

export default function App({ Component, pageProps: { fallback, ...pageProps } }: AppProps) {
  return (
    <SWRConfig value={{ fallback }}>
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </SWRConfig>
  );
}
