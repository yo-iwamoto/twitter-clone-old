import { ComposeTweetButton } from '.';
import { isComposeTweetModalOpenState } from '../../states';
import { RecoilObserver } from '@/__tests__/RecoilObserver';
import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import userEvent from '@testing-library/user-event';

describe('ComposeTweetButton', () => {
  it('正しく表示されること', () => {
    // act
    const { getByRole, asFragment } = render(
      <RecoilRoot>
        <ComposeTweetButton />
      </RecoilRoot>
    );

    // assert
    expect(getByRole('button', { name: 'ツイートする' })).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });

  it('クリックでダイアログを表示すること', async () => {
    // arrange
    const user = userEvent.setup();
    const onChange = vi.fn();
    const { getByRole } = render(
      <RecoilRoot>
        <RecoilObserver node={isComposeTweetModalOpenState} onChange={onChange} />
        <ComposeTweetButton />
      </RecoilRoot>
    );

    // act
    await user.click(getByRole('button', { name: 'ツイートする' }));

    // assert
    expect(onChange).toHaveBeenLastCalledWith(true);
  });
});
