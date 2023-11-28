<script lang="ts">
  import axios from "axios";
  import { quintOut } from "svelte/easing";
  import { scale } from "svelte/transition";
  import type { Format } from "../app.types";
  import { audioQualities } from "./utils";
  import Astronaut from "./Astronaut.svelte";
  export let link: Format;
  export let i: number;
  export let info: any;
  export let toast: any;

  let loading = false;

  const handleClick = async (url: any) => {
    loading = true;
    const backend = import.meta.env.VITE_BACKEND;
    try {
      const response = await axios.post(backend + "/download/link", {
        title: info.title,
        url: link.url,
        container: link.container,
        type: link.hasVideo ? "video" : "audio",
      });
      loading = false;
      const anchor = document.createElement("a");
      anchor.href = backend + "/download/file/" + response.data.path;
      // anchor.target = "_blank";
      anchor.click();
      document.removeChild(anchor);
    } catch (error) {
      toast.error("😥😭 Fallo la descarga! 😭😥");
    }
  };
</script>

<div
  class=" overflow-y-auto"
  transition:scale={{ delay: 125 * i, duration: 300, easing: quintOut }}
>
  <div
    class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
  >
    <div
      class="relative w-full max-w-[200px] transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-2 sm:w-full sm:max-w-lg"
    >
      <div
        class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 flex flex-col sm:flex-row justify-between items-center"
      >
        <div class="sm:flex sm:items-start">
          <div
            class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10"
          >
            <!-- <svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg> -->
            <svg
              class="h-6 w-6 text-cyan-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              {#if link.hasVideo}
                <path
                  stroke-linecap="round"
                  d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                />
              {:else}
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                />
              {/if}
            </svg>
          </div>
          <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
            <h3
              class="text-base font-semibold leading-6 text-gray-900 capitalize"
              id="modal-title"
            >
              {link.hasVideo ? link.container : "Mp3"}
            </h3>
            <div class="">
              <p class="text-sm text-gray-500">
                {link.qualityLabel ? `Calidad: ${link.qualityLabel}` : ""}
                {link.fps ? `  | FPS: ${link.fps}` : ""}
                {!link.hasVideo
                  ? ` Calidad: ${audioQualities[link.audioQuality]}`
                  : ""}
              </p>
            </div>
          </div>
        </div>
        {#if loading}
          <Astronaut />
        {:else}
          <button on:click={() => handleClick(link.url)} class="button">
            Descargar
          </button>
        {/if}
      </div>
      <div class="bg-gray-100 px-4 py-2 sm:flex sm:flex-row-reverse sm:px-6" />
    </div>
  </div>
</div>
