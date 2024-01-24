import { formatAgo } from "../util/date";
import { useNavigate } from "react-router-dom";

export default function VideoCard({ video, type }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  const isList = type === "list";
  return (
    <>
      <li
        className={isList ? "flex gap-3 m-3 hover:cursor-pointer" : ""}
        onClick={() => {
          navigate(`videos/watch/${video.id}`, { state: { video: video } });
        }}
        // className="hover:cursor-pointer"
      >
        <img
          className={isList ? "w-full rounded-xl mr-3" : "w-full"}
          // className="w-full rounded-xl"
          src={thumbnails.medium.url}
          alt={title}
        />
        <div>
          <p className="font-semibold my-2 line-clamp-2">{title}</p>
          <p className="text-sm opacity-80">{channelTitle}</p>
          <p className="text-sm opacity-80">{formatAgo(publishedAt, "ko")}</p>
        </div>
      </li>
    </>
  );
}
