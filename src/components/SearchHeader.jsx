import { useEffect, useState } from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { useNavigate, Link, useParams } from "react-router-dom";

export default function SearchHeader() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // 경로 이동
    navigate(`/videos/${text}`);
  };
  useEffect(() => setText(keyword || ""), [keyword]); // 경로가 이동될 때마다 parameter로 들어온 text value를 검색창 state에도 반영
  return (
    <>
      <header className="w-full flex p-4 text-xl border-b border-zinc-600 mb-4">
        <Link to="/" className="flex items-center">
          <BsYoutube className="text-5xl text-brand" />
          <h1 className="font-bold ml-2 text-3xl">
            YourTube<span className="text-zinc-400 font-thin">ᴷᴿ</span>
          </h1>
        </Link>
        <form onSubmit={handleSubmit} className="w-full flex justify-center">
          <input
            type="text"
            placeholder="검색"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-7/12 p-2 pl-6 outline-none bg-black text-gray-50 rounded-l-full border-y border-l border-zinc-500"
          />
          <button className="bg-zinc-600 px-6 rounded-r-full border border-zinc-500">
            <BsSearch />
          </button>
        </form>
      </header>
    </>
  );
}
