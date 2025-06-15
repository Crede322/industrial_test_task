"use client";

import Countdown from "react-countdown";
import { useEffect, useState } from "react";

const Completionist = () => (
  <p className="title1 text-[2.7rem] filter-five-orange text-orange">
    Сервер открыт!
  </p>
);

interface RendererProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

const renderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: RendererProps) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <p className="title1 text-[2.7rem] filter-five-orange text-orange ">
        {days}:{hours.toString().padStart(2, "0")}:
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </p>
    );
  }
};

const HeroCountdown = () => {
  const [mounted, setMounted] = useState(false);

  // Ждём, пока компонент будет отрендерен на клиенте
  useEffect(() => {
    setMounted(true);
  }, []);

  const targetDate = new Date("2025-06-17T15:00:00");

  return (
    <div className="min-h-[64.8px] min-w-[310px] w-[310px] mb-[20px]">
      {mounted && <Countdown date={targetDate} renderer={renderer} />}
    </div>
  );
};

export default HeroCountdown;
