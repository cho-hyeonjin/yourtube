import axios from "axios";

export default class FakeYourtubeClient {
  async search() {
    return axios.get("/videos/kwonjinah.json");
  }
  async videos() {
    return axios.get("/videos/hot.json");
  }
}
