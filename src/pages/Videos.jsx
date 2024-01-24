import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import { useYourtubeApi } from "../context/YourtubeApiContext";

export default function Videos() {
  const { keyword } = useParams();
  const { yourtube } = useYourtubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => yourtube.search(keyword));
  return (
    <>
      <div>Videos {keyword ? `🔍${keyword}` : "🔥"}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>😱 에러가 났는걸?</p>}
      {videos && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
