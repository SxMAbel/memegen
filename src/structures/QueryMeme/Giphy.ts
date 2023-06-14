import axios from "axios";
import {
  GiphyMemesArray,
  GiphyMemesFetchOptions,
  GiphyMemesObject,
  RequestTypes,
  giphyMemeEndpoint,
} from "../Utils";

export class Giphy {
  /** The API key for sending requests to Giphy API. */
  key: string;
  /** Default neme return limit. */
  limit: number = 1;
  /** An array of memes from API response. */
  memes: GiphyMemesObject[] = [];
  /** The url to which we make the request for memes on Giphy. */
  endpoint: string = giphyMemeEndpoint;

  /**
   * Get meme(s) from Giphy API endpoint.
   */
  public async fetch(
    options: GiphyMemesFetchOptions
  ): Promise<GiphyMemesArray | GiphyMemesObject | string> {
    if (!options?.giphyApiKey) {
      throw new Error("Missing Giphy API key.");
    }

    if (!options?.query) {
      throw new Error("Missing search query.");
    }

    try {
      const response = await axios({
        url: `${this.endpoint}${options.giphyApiKey}&q=${options.query}$limit=${
          options?.limit ?? this.limit
        }`,
        method: RequestTypes.Get,
        headers: {
          "Content-Type": "application/json",
        },
      });

      const { data } = response.data;

      if (data && data.length > 1) {
        for (const meme of data) {
          this.memes.push({
            title: data.title,
            imageURL: meme.images.fixed_height_url,
          });
        }

        return {
          title: null,
          imageURL: null,
          memes: this.memes,
        };
      }

      if (data && data.length === 1) {
        return {
          title: data.title,
          imageURL: data.images.fixed_height_url,
          memes: null,
        };
      }

      return `No meme(s) found for query -> ${options.query}`;
    } catch (error) {
      throw error;
    }
  }
}
