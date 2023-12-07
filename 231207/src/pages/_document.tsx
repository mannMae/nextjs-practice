import { MainLayout } from '@/components/Layout';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <MainLayout>
          <Main />
        </MainLayout>
        <NextScript />
      </body>
    </Html>
  );
}
