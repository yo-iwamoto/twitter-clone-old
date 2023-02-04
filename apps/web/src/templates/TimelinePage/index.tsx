import { ComposeTweetButton } from './components/ComposeTweetButton';
import { TweetCard } from './components/TweetCard';
import { useTweets } from './hooks/useTweets';
import { ComposeTweetModal } from './components/ComposeTweetModal';
import { pagesPath } from '@/lib/$path';
import Link from 'next/link';

export const TimelinePage = () => {
  const { data } = useTweets();

  return (
    <div className='min-h-screen px-4'>
      {data.map((tweet) => (
        <Link key={tweet.id} href={pagesPath.tweets._id(tweet.id).$url()}>
          <TweetCard tweet={tweet} />
        </Link>
      ))}

      <ComposeTweetButton />
      <ComposeTweetModal />
    </div>
  );
};
