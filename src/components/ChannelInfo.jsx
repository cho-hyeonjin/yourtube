import { useQuery } from "react-query";
import { useYourtubeApi } from "../context/YourtubeApiContext";

export default function ChannelInfo({ id, name }) {
  const { yourtube } = useYourtubeApi();
  const { data: url } = useQuery(
    ["channel", id],
    () => yourtube.channelThumbnailURL(id),
    { staleTime: 1000 * 60 * 5 }
  );

  return (
    <div className="flex my-4 mb-8 items-center">
      {url && <img className="w-10 h-10 rounded-full" src={url} alt={name} />}
      <p className="text-lg font-medium ml-2">{name}</p>
    </div>
  );
}
