import axios from "axios";

export default class Yourtube {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      // params: { key: process.env.REACT_APP_YOUTUBE_API_KEY }, // vite 번들러는 환경 변수를 가져올 때 process대신 import.meta를 통해서 환경 변수를 가져오기 때문에 process라 하면 에러가 난다.
      //                                                            또한, vite 환경에서는 .env 파일에 작성한 환경 변수 이름은 VITE_ 접두사를 붙여야 한다
      params: { key: import.meta.env.VITE_REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword) {
    return this.httpClient
      .get("search", {
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          q: keyword,
        },
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async #mostPopular() {
    return axios
      .get("videos", {
        params: {
          part: "snippet",
          maxResults: 25,
          chart: "mostPopular",
        },
      })
      .then((res) => res.data.items);
  }
}
