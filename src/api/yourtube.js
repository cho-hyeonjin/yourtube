export default class Yourtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  // 채널 상세정보 중 썸네일URL
  // channels.json은 Channels: list > Common use cases > list (by channel ID) 목업
  async channelThumbnailURL(id) {
    return this.apiClient
      .channelThumbnails({
        params: { part: "snippet,contentDetails,statistics", id },
      })
      .then(
        (res) =>
          // console.log(
          //   "아이디: ",
          //   id,
          //   "응답.데이터: ",
          //   res.data.items[0].snippet.thumbnails.default.url
          // )
          res.data.items[0].snippet.thumbnails.default.url
      );
  }

  // 현재 채널의 다른 영상 리스트 (우측) - https://developers.google.com/youtube/v3/docs/playlists/list
  // playlists.json은 Playlists: list > Common use cases > list (all playlists for a channel) 목업
  // async searchByChannelId(channelId) {
  //   return this.apiClient
  //     .playlists({ params: { part: "snippet, contentDetails", channelId } })
  //     .then((res) => console.log(res.data.items));
  // }
  async searchByChannelId(channelId) {
    return this.apiClient
      .playlist({
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          channelId,
        },
      })
      .then((res) => res.data.items);
  }

  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({
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
    return this.apiClient
      .videos({
        params: {
          part: "snippet",
          maxResults: 25,
          chart: "mostPopular",
        },
      })
      .then((res) => res.data.items);
  }
}
