import axios from "axios";

export default class FakeYourtubeClient {
  async search() {
    return axios.get("/videos/kwonjinah.json");
  }
  async videos() {
    return axios.get("/videos/hot.json");
  }

  // 채널 상세정보 중 썸네일URL
  // channels.json은 Channels: list > Common use cases > list (by channel ID)
  async channelThumbnails() {
    return axios.get("/videos/channels.json");
  }

  async playlist() {
    return axios.get("/videos/playlists.json");
  }
}
