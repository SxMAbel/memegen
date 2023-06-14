import { Giphy } from "./QueryMeme/Giphy";
import { Reddit } from "./QueryMeme/Reddit";
import { RandomMeme } from "./RandomMeme";

export class MemeGen {
  /** Get a random meme. */
  public random = new RandomMeme();
  /** Search for a meme using reddit API. */
  public reddit = new Reddit();
  /** Search for a meme using Giphy API. */
  public giphy = new Giphy();
}
