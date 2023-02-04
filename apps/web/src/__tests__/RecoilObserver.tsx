import { useEffect } from 'react';
import { RecoilValue, useRecoilValue } from 'recoil';

export const RecoilObserver = ({ node, onChange }: { node: RecoilValue<unknown>; onChange: (v: unknown) => void }) => {
  const value = useRecoilValue(node);
  useEffect(() => onChange(value), [onChange, value]);

  return null;
};
