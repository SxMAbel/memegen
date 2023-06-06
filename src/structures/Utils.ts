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
  preview: Array<string>;
  /**Highest quality of the meme. */
  HDPreview: string;
}

export const randomMemeEndpoint = "https://meme-api.com/gimme";

export enum RequestTypes {
  Delete = "DELETE",
  Get = "GET",
  Patch = "PATCH",
  Post = "POST",
  Put = "PUT",
}
