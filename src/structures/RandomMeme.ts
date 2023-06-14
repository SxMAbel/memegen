import axios from "axios";

import { RandomMemeResponse, RequestTypes, randomMemeEndpoint } from "./Utils";

export class RandomMeme {
  /** Title of the meme. */
  private title: string;
  /** Source of the meme. */
  private url: string;
  /** Is the meme age sensitive. */
  private nsfw: boolean;
  /** Is the meme a spoiler. */
  private spoiler: boolean;
  /**The owner of the meme. */
  private author: string;
  /** Images of the meme sorted from lowest to highest quality. */
  private preview: Array<string>;
  /**Highest quality of the meme. */
  private HDPreview: string;
  /** Random meme endpoint */
  private endPoint: string = randomMemeEndpoint;

  public async fetch(): Promise<RandomMemeResponse> {
    const response = await axios({
      url: this.endPoint,
      method: RequestTypes.Get,
      headers: {
        "Content-Type": "application/json",
      },
    }).catch(() => {});

    if (!response) {
      throw new Error("Not Found / Interal Server Error");
    }

    this.title = response.data.title;
    this.url = response.data.url;
    this.nsfw = response.data.nsfw;
    this.spoiler = response.data.spoiler;
    this.author = response.data.author;
    this.preview = response.data.preview;
    this.HDPreview = response.data.HDPreview[this.preview.length - 1];

    return {
      title: this.title,
      url: this.url,
      nsfw: this.nsfw,
      spoiler: this.spoiler,
      author: this.author,
      preview: this.preview,
      HDPreview: this.HDPreview,
    };
  }
}
