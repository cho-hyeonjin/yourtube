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
      <header className="flex">
        <Link to="/">
          <BsYoutube />
          <h1>YourTube</h1>
        </Link>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="검색"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button>
            <BsSearch />
          </button>
        </form>
      </header>
    </>
  );
}
