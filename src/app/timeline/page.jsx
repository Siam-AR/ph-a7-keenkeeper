"use client";

import { useContext, useState } from "react";
import { DataContext } from "@/components/DataContext";

const Timeline = () => {
  const { timeline } = useContext(DataContext);
  const [filter, setFilter] = useState("All");

  const filteredData =
    filter === "All"
      ? timeline
      : timeline.filter((item) => item.action === filter);

  const getIcon = (type) => {
    switch (type) {
      case "Call":
        return "📞";
      case "Text":
        return "💬";
      case "Video":
        return "🎥";
      default:
        return "📌";
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">
        TimeLine
      </h2>

      {/* Filter */}
      <div className="mb-6">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-10 py-2 text-[#64748B] rounded-md bg-gray-100 shadow-lg hover:bg-gray-200 cursor-pointer"
        >
          <option value="All">Filter timeline</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>
      </div>

      {filteredData.length === 0 ? (
        <p className="text-gray-800 text-2xl font-semibold text-center">No activity yet...</p>
      ) : (
        <div className="space-y-3">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-white px-4 py-3 rounded-lg shadow-lg"
            >
              {/* Icon */}
              <div className="text-3xl">
                {getIcon(item.action)}
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-700">
                  <span className="font-bold text-lg">
                    {item.action}
                  </span>{" "}
                  with {item.friendName}
                </p>

                <p className="text-sm text-gray-700">
                  {item.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Timeline;