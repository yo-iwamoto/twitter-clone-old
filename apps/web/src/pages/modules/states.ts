import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

export const isComposeTweetModalOpenState = atom<boolean>({
  key: 'isComposeTweetModalOpenState',
  default: false,
});

export const useIsComposeTweetModalOpenStateValue = () => {
  return useRecoilValue(isComposeTweetModalOpenState);
};

export const useSetIsComposeTweetModalOpenState = () => {
  return useSetRecoilState(isComposeTweetModalOpenState);
};
