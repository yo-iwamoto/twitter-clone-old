import { api } from '@/lib/api';

export const getServerSideProps = async () => {
  const tweets = await api().tweets.$get();

  return {
    props: {
      fallback: {
        tweets,
      },
    },
  };
};
