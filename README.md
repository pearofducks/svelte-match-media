# svelte-match-media

a matchMedia plugin for svelte 3

## install

```console
npm install --save-dev svelte-match-media
```

```console
yarn add --dev svelte-match-media
```

## use

First, in your `main.js`, set up your media queries

```js
import { setup } from 'svelte-match-media'

setup({
  desktop: 'screen and (min-width: 769px)',
  mobile: 'screen and (max-width: 768px)'
})

// or if those are the exact media queries you want, just call setup()
```

Then use your media queries in your svelte components

```js
<script>
import { media } from 'svelte-match-media'
</script>

<main class:foo={$media.mobile}>
  {#if $media.desktop}
    <nav />
  {/if}
</main>
```

## api

#### queries (argument)

All `queries` specified below should be an object of the form `{ mediaName: mediaQuery }`

#### `setup(queries)`

This sets up a Svelte store on the `media` export with `queries` mapped to their `window.matchMedia` result

#### `media`

The store initialized by `setup` above

#### `createMedia(queries)`

If you'd like to compartmentalize your media queries, or for whatever reason create multiple stores, this will create a standalone `media` object
