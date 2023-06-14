import axios from "axios";

import {
  RedditMemeFetchOptions,
  RedditMemeArray,
  RedditMemesObject,
  RequestTypes,
  redditMemeEndpoint,
  redditSortTypes,
} from "../Utils";

export class Reddit {
  /** An array full of memes from your query term. */
  private memes?: RedditMemesObject[] = [];
  /** The url to which we make the request for memes on reddit. */
  private endoint: string = redditMemeEndpoint;

  /**
   * Get memes from Reddit API endpoint.
   */
  public async fetch(
    options: RedditMemeFetchOptions
  ): Promise<RedditMemeArray> {
    if (!options?.query) {
      throw new TypeError("Enter a meme search query.");
    }

    if (!redditSortTypes.indexOf(options?.sort)) {
      throw new TypeError(
        "Sort in options must be either 'new', 'hot', 'top' or 'rising'."
      );
    }
    try {
      const response = await axios({
        url: `${this.endoint}${options.query}&sort=${options?.sort}`,
        method: RequestTypes.Get,
        headers: {
          "User-Agent": "Mozilla/5.0",
        },
      });

      const { data } = response.data;

      if (data && data.children) {
        for (const meme of data.children) {
          this.memes.push({ title: meme.data.children, url: meme.data.url });
        }

        return {
          memes: this.memes,
        };
      }
    } catch (error) {
      throw error;
    }
  }
}
