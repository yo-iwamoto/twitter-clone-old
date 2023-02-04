import { getServerSideProps } from './index.server';
import { PageProps } from './index.server';
import { api } from '@/lib/api';
import { Fragment, KeyboardEvent, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { PlusCircleIcon } from '@heroicons/react/24/solid';
import useSWR from 'swr';

export { getServerSideProps };

export default function Page({ tweets }: PageProps) {
  const { data, mutate } = useSWR('tweets', () => api.tweets.$get(), {
    fallbackData: tweets,
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [text, setText] = useState('');

  const onKeyDownTextarea = ({ key, metaKey }: KeyboardEvent<HTMLTextAreaElement>) => {
    if (key === 'Enter' && metaKey) {
      createTweet();
    }
  };

  const initialFocusRef = useRef<HTMLTextAreaElement | null>(null);

  const createTweet = async () => {
    await api.tweets.$post({ body: { text } });
    await mutate();
    setText('');
    setIsDialogOpen(false);
  };

  return (
    <div className='relative min-h-screen'>
      {data.map((tweet) => (
        <article className='border-b p-4' key={tweet.id}>
          <p>{tweet.text}</p>
          <p>{tweet.createdAt}</p>
        </article>
      ))}

      <button
        className='absolute bottom-10 right-10'
        type='button'
        onClick={() => setIsDialogOpen(true)}
        aria-label='ツイートする'
      >
        <PlusCircleIcon className='h-20 w-20 text-blue-700 hover:text-blue-600 transition-colors' aria-hidden='true' />
      </button>

      <Transition.Root show={isDialogOpen} as={Fragment}>
        <Dialog static as='div' className='relative z-10' initialFocus={initialFocusRef} onClose={setIsDialogOpen}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-200'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          <div className='fixed inset-0 z-10 overflow-y-auto'>
            <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-200'
                enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                enterTo='opacity-100 translate-y-0 sm:scale-100'
                leave='ease-in duration-100'
                leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              >
                <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-gray-50 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                  <div className='px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                    <textarea
                      className='text-lg p-3 w-full'
                      rows={10}
                      value={text}
                      onKeyDown={onKeyDownTextarea}
                      onChange={({ target: { value } }) => setText(value)}
                      ref={initialFocusRef}
                    />
                  </div>
                  <div className='bg-gray-50 px-4 py-3 sm:flex sm:justify-end sm:px-6'>
                    <button
                      type='button'
                      className='mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
                      onClick={() => setIsDialogOpen(false)}
                    >
                      キャンセル
                    </button>
                    <button
                      type='button'
                      className='inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm'
                      onClick={createTweet}
                    >
                      ツイート
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
