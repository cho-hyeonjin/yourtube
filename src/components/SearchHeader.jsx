import { useState } from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { useNavigate, Link } from "react-router-dom";

export default function SearchHeader() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // 경로 이동
    navigate(`/videos/${text}`);
  };
  return (
    <>
      <header>
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
