declare module 'svelte-match-media' {
  import { Readable } from 'svelte/store';

  export let media: Readable<{ [name: string]: boolean }>;
  export function setup(queries: { [name: string]: string }): () => void;
  export function createMedia(queries: { [name: string]: string }): () => { media: Readable<{ [name: string]: boolean }> };
}
