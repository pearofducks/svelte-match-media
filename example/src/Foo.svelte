<script>
  import { createMedia } from '../../../index'
  const { media } = createMedia()
</script>

<div>
  {#if $media.desktop}
    <p>This is a desktop-width screen from another query</p>
  {:else}
    <p>This is a mobile-width screen from another query</p>
  {/if}
</div>
