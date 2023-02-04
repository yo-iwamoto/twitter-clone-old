export const pagesPath = {
  "tweets": {
    _id: (id: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/tweets/[id]' as const, query: { id }, hash: url?.hash })
    })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
