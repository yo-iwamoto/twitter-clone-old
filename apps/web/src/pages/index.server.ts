import { api } from '@/lib/api';
import { InferGetServerSidePropsType } from 'next';

export const getServerSideProps = async () => {
  const tweets = await api.tweets.$get();

  return {
    props: {
      tweets,
    },
  };
};

export type PageProps = InferGetServerSidePropsType<typeof getServerSideProps>;
