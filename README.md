## How To Use memegen-techstack

## Typescript

```ts
import { MemeGen } from "memegen-techstack";
```

## Javascript

```js
const { MemeGen } = require("memegen-techstack");
```

## Get Random Memes

**Example**

```js
const memeGen = new MemeGen();
const meme = await memeGen.random.fetch();
```

> **`meme` will return:**

- HDPreview `- string`
- Author `- string`
- NSFW `- boolean`
- Preview `- array`
- Spoiler `- boolean`
- Title `- string`
- URL `- string`

> **Each time you use `.random.fetch()` you will get a different meme.**

## Search For A Meme From Your Input Phrase

## Using Reddit API

**Example**

```js
const memeGen = new MemeGen();
const meme = await memeGen.reddit.fetch({ query: "", sort: "" });
```

> **`meme` will return `.memes` either an array or a string if no memes found for the search input.**

**`.memes` array is consists of:**

- title `- string`
- url `- string`

## Using Giphy API

**Example**

```js
const memeGen = new MemeGen();
const meme = await memeGen.giphy.fetch({
  giphyApiKey: "apikey",
  query: "",
  limit: 1,
});
```

> **`meme` will return `.memes` if limit greater than 1. `.title` & `.imageURL` will return null.**

> **`meme` will return `.title` & `.imageURL` if limit is 1. `.memes` will return null.**

NOTE: **The `.memes` will return and array with object(s):**

- title `- string`
- imageURL `- string`
