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
  desktop: 'screen and (min-width: 768px)',
  mobile: 'screen and (max-width: 767px)'
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
