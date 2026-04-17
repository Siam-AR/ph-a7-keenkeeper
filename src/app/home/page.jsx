"use client";

import { useContext } from "react";
import { DataContext } from "@/components/DataContext";
import { FaUserPlus } from "react-icons/fa";
import FriendsCard from "@/components/FriendsCard";

const HomePage = () => {
  const { friends, loading } = useContext(DataContext);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  const total = friends?.length || 0;
  const onTrack = friends?.filter(f => f.status === "on-track").length || 0;
  const overdue = friends?.filter(f => f.status === "overdue").length || 0;
  const almostDue = friends?.filter(f => f.status === "almost due").length || 0;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-16">

      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-[44px] font-bold text-[#1F2937]">
          Friends to keep close in your life
        </h1>

        <p className="mt-4 text-[#64748B] text-sm md:text-base px-4 md:px-16">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <button className="mt-6 bg-[#244D3F] hover:bg-green-800 text-white px-5 py-2 rounded-md shadow-md transition flex items-center gap-2 justify-center mx-auto cursor-pointer">
          <FaUserPlus className="text-xl" />
          Add a Friend
        </button>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">

        <div className="bg-white shadow-sm rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-[#244D3F]">{total}</h2>
          <p className="text-gray-500 mt-1 text-sm">Total Friends</p>
        </div>

        <div className="bg-white shadow-sm rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-green-600">{onTrack}</h2>
          <p className="text-gray-500 mt-1 text-sm">On Track</p>
        </div>

        <div className="bg-white shadow-sm rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-red-500">{overdue}</h2>
          <p className="text-gray-500 mt-1 text-sm">Need Attention</p>
        </div>

        <div className="bg-white shadow-sm rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-yellow-500">{almostDue}</h2>
          <p className="text-gray-500 mt-1 text-sm">Almost Due</p>
        </div>

      </div>

      <div className="mt-16 w-full max-w-6xl">
        <h2 className="text-2xl font-bold text-[#1F2937] mb-6">
          Your Friends
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {friends?.map((friend) => (
            <FriendsCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default HomePage;