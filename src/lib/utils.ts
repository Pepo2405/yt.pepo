import axios from "axios";

export function axiosDownloadFile(url: string, fileName: string) {
  return axios({
    url,
    method: "GET",
    responseType: "blob",
  })
    .then((response) => {
      const href = window.URL.createObjectURL(response.data);

      const anchorElement = document.createElement("a");

      anchorElement.href = href;
      anchorElement.download = fileName;

      document.body.appendChild(anchorElement);
      anchorElement.click();

      document.body.removeChild(anchorElement);
      window.URL.revokeObjectURL(href);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
}

export const dummyData = {
  title:
    "¡MARAVILLOSO! Mira lo que hicieron los músicos del Colón cuando escrachaban a Milei",
  thumbnails: [
    {
      url: "https://i.ytimg.com/vi/eSauCSDiP8M/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAHbg1KMMDA6Ps9TbqVfl6C42XT_A",
      width: 168,
      height: 94,
    },
    {
      url: "https://i.ytimg.com/vi/eSauCSDiP8M/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBrVwZ2dup7qvznnSWms5GYkyr2Hg",
      width: 196,
      height: 110,
    },
    {
      url: "https://i.ytimg.com/vi/eSauCSDiP8M/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDnJi4aGeqI4IcPjgih1dvMWVG4sQ",
      width: 246,
      height: 138,
    },
    {
      url: "https://i.ytimg.com/vi/eSauCSDiP8M/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB0W5J_Za5SGeunEFrTLfEi5D4udA",
      width: 336,
      height: 188,
    },
    {
      url: "https://i.ytimg.com/vi/eSauCSDiP8M/maxresdefault.jpg",
      width: 1920,
      height: 1080,
    },
  ],
};

export const audioQualities = {
  AUDIO_QUALITY_LOW: "Baja",
  AUDIO_QUALITY_MEDIUM: "Media",
};

export function checkURL(url: string):boolean {
  const regex = /^(ftp|http|https):\/\/[^ "]+$/;

  return regex.test(url);
}
