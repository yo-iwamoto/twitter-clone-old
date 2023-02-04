import { api } from '@/lib/api';
import useSWR, { useSWRConfig } from 'swr';

export const useTweets = () => {
  const config = useSWRConfig();

  return useSWR('tweets', () => api().tweets.$get(), {
    fallbackData: config.fallback['tweets'],
  });
};
