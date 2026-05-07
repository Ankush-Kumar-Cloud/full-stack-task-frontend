const StorySkeleton = () => {
  return (
    <div className="animate-pulse bg-white/5 border border-white/10 p-6 rounded-3xl">
      <div className="h-5 w-32 bg-gray-700 rounded mb-4"></div>

      <div className="h-8 bg-gray-700 rounded mb-4"></div>

      <div className="flex gap-4">
        <div className="h-4 w-20 bg-gray-700 rounded"></div>
        <div className="h-4 w-20 bg-gray-700 rounded"></div>
        <div className="h-4 w-20 bg-gray-700 rounded"></div>
      </div>
    </div>
  );
};

export default StorySkeleton;