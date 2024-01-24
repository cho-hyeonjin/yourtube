import { useQuery } from "react-query";
import { useYourtubeApi } from "../context/YourtubeApiContext";

export default function ChannelInfo({ id, name, title }) {
  const { yourtube } = useYourtubeApi();
  const {
    error,
    isLoading,
    data: url,
  } = useQuery(["channel", id], () => yourtube.channelThumbnailURL(id));

  return (
    <div className="flex my-4 mb-8 items-center">
      {url && <img src={url} alt={name} />}
      <p>{name}</p>
    </div>
  );
}
