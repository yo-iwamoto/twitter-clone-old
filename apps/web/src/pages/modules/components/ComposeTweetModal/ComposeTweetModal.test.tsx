import { ComposeTweetModal } from '.';
import { isComposeTweetModalOpenState } from '../../states';
import { render, within } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

vi.mock('@/lib/api', () => {
  return {
    api: {
      tweets: {
        $post: vi.fn(),
      },
    },
  };
});

describe('ComposeTweetModal', () => {
  it('正しく表示されること', () => {
    // act
    const { getByRole } = render(
      <RecoilRoot
        initializeState={({ set }) => {
          set(isComposeTweetModalOpenState, true);
        }}
      >
        <ComposeTweetModal />
      </RecoilRoot>
    );

    // assert
    expect(getByRole('dialog')).toBeDefined();
    expect(within(getByRole('dialog')).getByRole('button', { name: 'ツイート' })).toBeDefined();
    expect(within(getByRole('dialog')).getByRole('button', { name: 'キャンセル' })).toBeDefined();
    // portal なので asFragment() が使えない
    expect(getByRole('dialog').children).toMatchSnapshot();
  });
});
