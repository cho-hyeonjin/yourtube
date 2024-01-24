import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import ChannelPlaylist from "../components/ChannelPlaylist";

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;

  return (
    <>
      <section className="flex flex-col lg:flex-row">
        <article className="basis-4/6">
          <iframe
            id="player"
            type="text/html"
            width="100%"
            height="720"
            src={`http://www.youtube.com/embed/${video.id}`}
            title={title}
            className="rounded-2xl"
          />
          <div className="p-8">
            <h2 className="text-xl font-bold">{title}</h2>
            <ChannelInfo id={channelId} name={channelTitle} />
            <pre className="whitespace-pre-wrap">{description}</pre>
          </div>
        </article>
        <section className="basis-2/6">
          <ChannelPlaylist channelId={channelId} />
        </section>
      </section>
    </>
  );
}
