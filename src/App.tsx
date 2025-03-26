import { useEffect, useState } from "react";

import { IntervalButton } from "./IntervalButton";
import { announce, announceTime } from "./lib";

export function App() {
  const [intervalTime, setIntervalTime] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      const timeMinute = new Date().getMinutes();

      if (timeMinute % intervalTime === 0) {
        announceTime();
      }
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, [intervalTime]);

  return (
    <div className="size-full flex flex-col items-center justify-center p-2">
      <div className="rounded-lg bg-stone-50 shadow p-8 max-w-xs w-full flex flex-col gap-4">
        <div className="text-xl font-bold">Interval</div>

        {intervalTime === -1 && (
          <p className="text-red-400">
            Select an interval to start time announcements.
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-4 border-2 rounded divide-y-2 md:divide-y-0 md:divide-x-2 bg-white">
          {[15, 30, 45, 60].map((time) => (
            <IntervalButton
              key={time}
              time={time}
              active={intervalTime === time}
              onClick={() => {
                setIntervalTime(time);
                announce("Announcing time every " + time + " minutes.");
              }}
            />
          ))}
        </div>

        {intervalTime !== -1 && (
          <button
            onClick={() => {
              setIntervalTime(-1);
              announce("Time announcements stopped.");
            }}
            className="p-3 bg-red-400 text-white rounded"
          >
            Stop
          </button>
        )}
      </div>
    </div>
  );
}
