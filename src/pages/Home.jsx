import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import StorySkeleton from "../components/StorySkeleton";
import { motion } from "framer-motion";
import { FiExternalLink, FiBookmark } from "react-icons/fi";
import toast from "react-hot-toast";

const Home = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      const { data } = await API.get("/stories");
      setStories(data);
    } catch (error) {
      toast.error("Failed to fetch stories");
    } finally {
      setLoading(false);
    }
  };

  const handleBookmark = async (id) => {
    try {
      await API.post(`/stories/${id}/bookmark`);
      toast.success("Bookmark updated");
    } catch (error) {
      toast.error("Login required");
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden">
      <Navbar />

      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-6xl font-black leading-tight mb-4">
            Discover Trending
            <span className="text-orange-400"> Tech Stories</span>
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl">
            Real-time top stories scraped from Hacker News with modern MERN stack architecture.
          </p>
        </motion.div>

        {loading ? (
          <div className="grid gap-6">
            {[1, 2, 3, 4].map((item) => (
              <StorySkeleton key={item} />
            ))}
          </div>
        ) : (
          <div className="grid gap-6">
            {stories.map((story, index) => (
              <motion.div
                key={story._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-orange-400/50 hover:shadow-2xl hover:shadow-orange-500/10 transition duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-semibold">
                        #{index + 1} Trending
                      </span>

                      <span className="text-gray-400 text-sm">
                        {story.points} points
                      </span>
                    </div>

                    <a
                      href={story.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-2xl lg:text-3xl font-bold hover:text-orange-400 transition flex items-center gap-2"
                    >
                      {story.title}
                      <FiExternalLink className="opacity-0 group-hover:opacity-100 transition" />
                    </a>

                    <div className="flex flex-wrap gap-5 mt-5 text-gray-400 text-sm">
                      <span>👨‍💻 {story.author}</span>
                      <span>⏰ {story.postedAt}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleBookmark(story._id)}
                    className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-2xl font-semibold transition duration-300 hover:scale-105"
                  >
                    <FiBookmark /> Bookmark
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;