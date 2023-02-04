import { pagesPath } from '@/lib/$path';
import { SparklesIcon, Bars3BottomRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => (
  <>
    <header className='flex items-center justify-between p-2'>
      <Link href={pagesPath.$url()}>
        <SparklesIcon className='h-16 w-16 p-1 text-blue-400' />
      </Link>

      <button type='button'>
        <Bars3BottomRightIcon className='h-12 w-12 p-1 text-gray-800' />
      </button>
    </header>

    <main className='font-sans text-gray-800'>{children}</main>
  </>
);
