<script lang="ts">
  import axios from "axios";
  import type { Format } from "./app.types";
  import VideoInfo from "./lib/VideoInfo.svelte";
  import LinkCard from "./lib/LinkCard.svelte";
  import Loader from "./lib/Loader.svelte";

  let formats: Format[] = [];
  let info: VideoInfo | undefined = undefined;
  let formatsPromise: null | Promise<any> = null;
  type Event = SubmitEvent & {
    currentTarget: EventTarget & HTMLFormElement;
  };
  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    if (!e.target) return;
    formats = [];
    info = undefined;
    const form = new FormData(e.target as HTMLFormElement);
    const link = form.get("link");
    formatsPromise = axios
      .post(import.meta.env.VITE_BACKEND + "/formats", {
        link,
      })
      .then(({ data }) => {
        formats = data.formats;
        info = data.info;
      });
  };
</script>
<head>
  <title>Amogus</title>
</head>

<main class="w-full min-h-screen flex flex-col justify-between h-full bg-slate-900 text-white">
  <div class="flex flex-grow flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-20 object-fill w-auto"
        src="/icon.png"
        alt="Your Company"
      />
      <h2
        class=" text-center text-2xl font-bold leading-9 tracking-tight text-white"
      >
        Amogustube
      </h2>
    </div>

    <div
      class=" sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-stretch w-full space-y-4"
    >
      <form
        class="space-y-6 flex items-end justify-center"
        method="POST"
        on:submit={(e) => handleSubmit(e)}
      >
        <div>
          <label
            for="link"
            class="block text-sm font-medium leading-6 text-white"
            >Link de youtube</label
          >
          <div class="mt-2 grid grid-cols-6">
            <input
              id="link"
              name="link"
              type="text"
              required
              class="col-span-4
                     block w-full rounded-md rounded-r-none
                     overflow-hidden text-ellipsis
                     border-0 py-1.5 text-gray-800 px-2 text-sm
                     font-semibold shadow-sm ring-1
                     !outline-none placeholder:text-gray-400
                     sm:text-sm sm:leading-6
                     focus:ring-offset-0
                     border-transparent focus:border-transparent focus:ring-0
                     "
            />
            <button
              type="submit"
              class="col-span-2 flex w-full h-full justify-center
                   rounded-md bg-indigo-600 px-3 py-1.5 text-sm
                   font-semibold leading-6 text-white shadow-sm
                   500 focus-visible:outline hover:bg-indigo-
                   focus-visible:outline-2 focus-visible:outline-offset-2
                   rounded-l-none focus-visible:outline-indigo-600 outline-r
                    "
            >
              Buscar
            </button>
          </div>
        </div>
      </form>
      <div />
      <div class="self-center">
        {#if formatsPromise}
          {#await formatsPromise}
            <Loader />
          {:catch}
            ¡Error!
          {/await}
        {/if}
        {#if info}
          <VideoInfo videoInfo={info} />
        {/if}
      </div>

      <div class="flex flex-col gap-2">
        {#each formats as link, i}
          <LinkCard {link} {i} />
        {/each}
      </div>
    </div>
  </div>
  <footer class="px-2 py-4 bg-slate-950 ">
    <a class="text-gray-500 hover:text-cyan-300 transition-all duration-500" href="https://www.linkedin.com/in/ignacioniglesias2405/">
      Iglesias Ignacio
    </a>
  </footer>
</main>
