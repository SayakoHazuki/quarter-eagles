"use client";

import React, { useState, useEffect } from "react";

function toTimestring(date: Date) {
  // HH:MM:SS
  return date.toTimeString().split(" ")[0];
}

function toDatestring(date: Date) {
  // d mmm yyyy
  return date.toDateString().split(" ").slice(1).join(" ");
}

function getTimeBeforeDSE() {
  const now = new Date();
  const chiDseDate = /* 2 Apr 8:30 hkt */ new Date(2025, 3, 2, 8, 30, 0);

  // If within 2 days: "H hours before DSE"
  // Else: "D days H hours before DSE"
  const days = Math.floor(
    (chiDseDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24),
  );
  const hours =
    Math.floor((chiDseDate.getTime() - now.getTime()) / (1000 * 60 * 60)) % 24;
  if (days < 2) {
    return `${hours} hours before DSE`;
  } else {
    return `${days} days ${hours} hours before DSE`;
  }
}

export function Clock() {
  const [time, setTime] = useState(toTimestring(new Date()));
  const [dateString, setDateString] = useState(toDatestring(new Date()));
  const [timeUntilDse, setTimeUntilDse] = useState(getTimeBeforeDSE());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(toTimestring(new Date()));
      setDateString(toDatestring(new Date()));
      setTimeUntilDse(getTimeBeforeDSE());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="noto-sans text-6xl">{time}</div>
      <div className="pt-sans text-3xl flex flex-wrap whitespace-nowrap justify-center gap-x-2">
        <p>{dateString}</p> 
        <p>―</p> 
        <p>{timeUntilDse}</p>
      </div>
    </>
  );
}
