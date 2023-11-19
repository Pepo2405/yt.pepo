<script lang="ts">
  export let videoInfo : any
  
</script>

<div
  class="col-span-12 sm:col-span-6 md:col-span-3 bg-black rounded-md max-w-xs max-h-80 overflow-hidden"
>
  <card class="w-full flex flex-col ">
    <div class="relative">
      <!-- Image Video -->
      <div class="flex flex-row gap-2 px-2 py-1 absolute bg-black bg-opacity-80 w-full">
        <div class="flex flex-col">
          <p class="text-gray-100 text-sm font-semibold">
            {videoInfo.title}
          </p>
        </div>
      </div>
        <img
          src="{videoInfo.thumbnails.pop().url}"
          class="w-96 h-auto rounded"
          alt="img"
        />
    
    </div>
  </card>
</div>
