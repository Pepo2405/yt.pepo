<script context="module">
  import { waitLocale } from 'svelte-i18n'
  import "./i18n/index";

  export async function preload() {
    // awaits for the loading of the 'en-US' and 'en' dictionaries
  console.log('sexo')
    return waitLocale()
  }
  console.log('sexo')
</script>