import type { TweetEntity } from '@/api/@types';

type Props = {
  tweet: TweetEntity;
};

export const TweetCard = ({ tweet: { text, createdAt } }: Props) => {
  return (
    <article className='whitespace-pre-wrap border-b p-4'>
      <p>{text}</p>
      <p className='text-xs text-gray-500'>{createdAt}</p>
    </article>
  );
};
