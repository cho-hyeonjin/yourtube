import axios from "axios";

export default class FakeYourtube {
  constructor() {}

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  // 클래스 내부에서 #을 붙여 정의한 함수는 private 함수. ---> 클래스 내부적으로만 호출이 가능하고 외부적으로는 호출 불가능.
  async #searchByKeyword() {
    return axios
      .get(`/videos/kwonjinah.json`)
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async #mostPopular() {
    return axios.get(`/videos/hot.json`).then((res) => res.data.items);
  }
}
