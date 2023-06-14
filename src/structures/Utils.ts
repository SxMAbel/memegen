export interface RandomMemeResponse {
  /** Title of the meme. */
  title: string;
  /** Source of the meme. */
  url: string;
  /** Is the meme age sensitive. */
  nsfw: boolean;
  /** Is the meme a spoiler. */
  spoiler: boolean;
  /**The owner of the meme. */
  author: string;
  /** Images of the meme sorted from lowest to highest quality. */
  preview: string[];
  /**Highest quality of the meme. */
  HDPreview: string;
}

export interface RedditMemesObject {
  /** Title of the meme from query. */
  title: string;
  /** URL of the meme from query. */
  url: string;
}

export interface RedditMemeArray {
  /** An array full of memes from your query term. */
  memes?: RedditMemesObject[];
}

export interface RedditMemeFetchOptions {
  /** Name of the meme or search term. */
  query: string;
  /** Filter memes by new, hot, top and rising. */
  sort?: string;
}

export interface GiphyMemesObject {
  /** Title of the meme from query. */
  title?: string;
  /** Image URL of the meme from query. */
  imageURL?: string;
}

export interface GiphyMemesArray {
  /** An array of memes from query if limit is higher than 1. */
  memes?: GiphyMemesObject[];
}

export interface GiphyMemesFetchOptions {
  /** The API key for sending requests to Giphy API. */
  giphyApiKey: string;
  /** Name of the meme or search term. */
  query: string;
  /** How much memes to return. */
  limit?: number;
}

export const randomMemeEndpoint = "https://meme-api.com/gimme";
export const redditMemeEndpoint = "https://reddit.com/r/memes/search.json?q=";
export const giphyMemeEndpoint =
  "https://api.giphy.com/v1/gifs/search?api_key=";
export const redditSortTypes = ["hot", "new", "top", "rising"];

export enum RequestTypes {
  Delete = "DELETE",
  Get = "GET",
  Patch = "PATCH",
  Post = "POST",
  Put = "PUT",
}
