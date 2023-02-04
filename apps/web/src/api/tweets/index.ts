/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  post: {
    status: 201
    resBody: Types.TweetEntity
    reqBody: Types.CreateTweetDto
  }

  get: {
    status: 200
    resBody: Types.TweetEntity[]
  }
}
