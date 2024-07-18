import React, { useEffect, useState } from "react";
import Fab from "@mui/material/Fab";
import { RiRestTimeFill } from "react-icons/ri";

export default function FloatingTime() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Cleanup function to clear the interval on component unmount
    return () => clearInterval(interval);
  });

  return (
    <div className="floating-time">
      <Fab variant="extended">
        <RiRestTimeFill />
        {seconds}
      </Fab>
    </div>
  );
}
