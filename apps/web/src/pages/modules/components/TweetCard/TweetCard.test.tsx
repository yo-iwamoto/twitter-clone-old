import { TweetCard } from '.';
import { render } from '@testing-library/react';

describe('TweetCard', () => {
  it('正しく表示されること', () => {
    // act
    const { getByText, asFragment } = render(
      <TweetCard
        tweet={{
          id: '1',
          text: 'Hello World!',
          createdAt: '2022-02-04T10:40:23.885Z',
        }}
      />
    );

    // assert
    expect(getByText('Hello World!')).toBeDefined();
    expect(getByText('2022-02-04T10:40:23.885Z')).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });
});
