"use client";
import { postData } from "@/utils/fetch";
import { useState } from "react";

export const MovieRating = ({ id }: { id: number }) => {
  const [rate, setRate] = useState<number>(0);
  const sendRate = () => {
    postData(
      `https://api.themoviedb.org/3/movie/${id}/rating?api_key=e5c8c687398efb7d72ece3026833bb0f`,
      {
        value: rate,
      }
    );
  };
  return (
    <div className="flex flex-col items-center justify-between p-24">
      <input
        className=" text-black w-full rounded-t-lg h-50 md:h-auto md:w-30 md:rounded-none md:rounded-s-lg"
        onChange={(e) => setRate(Number(e.target.value))}
        type="number"
        min="0"
        max="10"
      />
      <button onClick={() => sendRate()}>Rate Movie</button>
    </div>
  );
};
