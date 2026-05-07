import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    fetchBookmarks();
  }, []);

  const fetchBookmarks = async () => {
    try {
      const { data } = await API.get("/bookmarks");

      setBookmarks(data);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#020617] text-white px-6 py-10">
        
        <div className="max-w-5xl mx-auto">

          <h1 className="text-5xl font-black mb-10">
            Your Bookmarks 🔖
          </h1>

          <div className="grid gap-6">

            {bookmarks.map((story) => (
              <div
                key={story._id}
                className="bg-white/5 border border-white/10 p-6 rounded-3xl"
              >
                <a
                  href={story.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-2xl font-bold hover:text-orange-400 transition"
                >
                  {story.title}
                </a>

                <div className="flex gap-5 mt-4 text-gray-400 text-sm">
                  <span>🔥 {story.points} points</span>
                  <span>👨‍💻 {story.author}</span>
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </>
  );
};

export default Bookmarks;