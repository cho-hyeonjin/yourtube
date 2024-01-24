import { useLocation } from "react-router-dom";

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title } = video.snippet;

  return (
    <>
      <section>
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="720"
          src={`http://www.youtube.com/embed/${video.id}`}
          className="rounded-2xl"
        />
        <div>
          <h2>{title}</h2>
        </div>
      </section>
    </>
  );
}
