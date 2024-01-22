import axios from "axios";

export async function search(keyword) {
  return axios
    .get(`/videos/${keyword ? "kwonjinah" : "hot"}.json`)
    .then((res) => res.data.items);
}
