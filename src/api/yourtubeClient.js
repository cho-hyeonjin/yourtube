import axios from "axios";

export default class YourtubeClient {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: { key: import.meta.env.VITE_REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async search(params) {
    return this.httpClient.get("search", params);
  }

  async videos(params) {
    return this.httpClient.get("videos", params);
  }

  // 채널 상세정보 중 썸네일URL
  async channelThumbnails(params) {
    return this.httpClient.get("channels", params);
  }

  async playlist(params) {
    return this.httpClient.get("playlists", params);
  }
}
