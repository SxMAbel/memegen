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
  private key: string;
  /** Default neme return limit. */
  private limit: number;
  /** An array of memes from API response. */
  private memes: GiphyMemesObject[] = [];
  /** The url to which we make the request for memes on Giphy. */
  private endpoint: string = giphyMemeEndpoint;

  /**
   * Get meme(s) from Giphy API endpoint.
   */
  public async fetch(
    options: GiphyMemesFetchOptions
  ): Promise<GiphyMemesArray | GiphyMemesObject> {
    this.limit = 1;

    if (!options?.giphyApiKey) {
      throw new Error("Missing Giphy API key.");
    }

    this.key = options.giphyApiKey;

    if (!options?.query) {
      throw new Error("Missing search query.");
    }

    if (options?.limit) {
      this.limit = options.limit;
    }

    try {
      const response = await axios({
        url: `${this.endpoint}${this.key}&q=${options.query}$limit=${this.limit}`,
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
    } catch (error) {
      throw error;
    }
  }
}
