"use client";

// Real time clock component
import React, { useState, useEffect } from 'react';

function toTimestring(date: Date) {
    // HH:MM:SS
    return date.toTimeString().split(' ')[0];
}

export function Clock() {
  const [time, setTime] = useState(toTimestring(new Date()));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(toTimestring(new Date()));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>{time}</div>;
}