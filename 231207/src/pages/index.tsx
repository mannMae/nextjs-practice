import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { Wrapper } from './index.style';
import { useEffect, useState } from 'react';
import { axios } from '@/libraries/axios';
import { StompClient } from '@/libraries/stomp';
import { Form } from '@/components/Form';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [httpResponse, setHttpResponse] = useState('');
  useEffect(() => {
    // axios
    //   .get('/')
    //   .then((res) => {
    //     setHttpResponse(res.data);
    //   })
    //   .catch((error) => console.error(error));

    StompClient.connect(
      {},
      () => {
        console.log('Connect');
        StompClient.subscribe('/sub/chat', (message) => console.log(message));
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  return (
    <>
      <Head>
        <title>Next Practice</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        MAIN
        <p>http : {httpResponse}</p>
        <Form onSubmit={() => console.log('Submit')}>
          {({ register, formState }) => {
            return (
              <>
                FORM
                <button type="submit">Submit</button>
              </>
            );
          }}
        </Form>
      </Wrapper>
    </>
  );
}
