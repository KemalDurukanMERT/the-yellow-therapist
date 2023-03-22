import React, { useEffect, useState } from "react";

const Timer = () => {
  const showTime = () => {
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    s = s < 10 ? "0" + s : s;
    m = m < 10 ? "0" + m : m;
    h = h < 10 ? "0" + h : h;
    return h + ":" + m + ":" + s;
  };

  const showDate = () => {
    let now = new Date();
    const days = [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
    ];
    const day = days[now.getDay()];
    const date = now.getDate();
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    const formattedDate = `${day}, ${date} ${month}, ${year}`;
    return formattedDate;
  };

  const [time, setTime] = useState(showTime());
  const [date, setDate] = useState(showDate());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(showTime());
      setDate(showDate());
    });
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div>{time}</div>
      <div>{date}</div>
    </div>
  );
};

export default Timer;
