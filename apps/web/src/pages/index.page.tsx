import { getServerSideProps } from './index.server';
import { PageProps } from './index.server';

export { getServerSideProps };

export default function Page({ tweets }: PageProps) {
  return (
    <>
      {tweets.map((tweet) => (
        <article key={tweet.id}>
          <p>{tweet.text}</p>
          <p>{tweet.createdAt}</p>
        </article>
      ))}
    </>
  );
}
