import { useQuery } from "react-query";
import { useYourtubeApi } from "../context/YourtubeApiContext";
import VideoCard from "./VideoCard";

export default function ChannelPlaylist({ channelId }) {
  const { yourtube } = useYourtubeApi();

  const { data: videos } = useQuery({
    queryKey: ["playlist", channelId],

    queryFn: () => {
      return yourtube.searchByChannelId(channelId);
    },
  });

  return (
    <div>
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} type="list" />
          ))}
        </ul>
      )}
    </div>
  );
}
