import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import VideoCard from "./VideoCard";
// import { search } from "../api/yourtube";
import FakeYourtube from "../api/fakeYourtube";

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => {
    const yourtube = new FakeYourtube();
    return yourtube.search(keyword);
  });
  return (
    <>
      <div>Videos {keyword ? `🔍${keyword}` : "🔥"}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>😱 에러가 났는걸?</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard
              key={video.id.videoId ? video.id.videoId : video.id}
              video={video}
            />
          ))}
        </ul>
      )}
    </>
  );
}
