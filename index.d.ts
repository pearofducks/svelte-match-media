declare module 'svelte-match-media' {
  import { Readable } from 'svelte/store';

  type queriesArg = { [name: string]: string }
  type mediaObject = Readable<{ [name: string]: boolean }>
  type mediaStore = { media: mediaObject }

  export let media: mediaObject;
  export function setup(queries: queriesArg): void;
  export function createMedia(queries: queriesArg): mediaStore;
}
