"use client";

import { useContext } from "react";
import { DataContext } from "@/components/DataContext";
import { PieChart, Pie, Tooltip, Legend } from "recharts";

const StatsPage = () => {
  const { timeline } = useContext(DataContext);

  const callCount = timeline.filter((t) => t.action === "Call").length;
  const textCount = timeline.filter((t) => t.action === "Text").length;
  const videoCount = timeline.filter((t) => t.action === "Video").length;

  const data = [
    { name: "Text", value: textCount, fill: "#7E35E1" },
    { name: "Call", value: callCount, fill: "#244D3F" },
    { name: "Video", value: videoCount, fill: "#37A163" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      
      <h2 className="text-4xl lg:text-5xl font-bold text-[#1F2937] mb-10">
        Friendship Analytics
      </h2>

      <div className="bg-white rounded-2xl shadow-md p-8">

        <h3 className="text-lg font-semibold text-[#244D3F] mb-6">
          By Interaction Type
        </h3>

        <div className="flex justify-center items-center">
          <PieChart width={300} height={300}>
            <Pie
              data={data}
              innerRadius={80} 
              outerRadius={110}
              paddingAngle={5}
              dataKey="value"
              cornerRadius={10}
            />
            <Tooltip />
            <Legend />
          </PieChart>
        </div>

      </div>
    </div>
  );
};

export default StatsPage;