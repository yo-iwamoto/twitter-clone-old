import { useSetIsComposeTweetModalOpenState } from '@/templates/TimelinePage/states';
import { PlusCircleIcon } from '@heroicons/react/24/solid';

export const ComposeTweetButton = () => {
  const setIsModalOpen = useSetIsComposeTweetModalOpenState();
  const onClick = () => setIsModalOpen(true);

  return (
    <button className='fixed bottom-10 right-10' type='button' onClick={onClick} aria-label='ツイートする'>
      <PlusCircleIcon className='h-20 w-20 text-blue-400 transition-colors hover:text-blue-400/90' aria-hidden='true' />
    </button>
  );
};
