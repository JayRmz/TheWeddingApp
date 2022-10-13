import { Statistic } from "antd";
import { useState } from "react";
const { Countdown } = Statistic;
// const deadline = new Date(2022, 10, 18, 19, 30, 0);

export default function MissingDays() {
  const [deadline, setDeadline] = useState(new Date(2022, 10, 18, 19, 30, 0));
  return (
    <div className="bg-gradient-to-r from-transparent to-pink-txt p-10 mx-5 p-10 text-center">
      <p className="text-bold text-2xl text-center font-serif text-black-txt">
        {deadline.toLocaleDateString()}, {deadline.toLocaleTimeString()}
      </p>
      <Countdown
        title="Faltan"
        value={deadline}
        className="text-ellipsis text-6xl font-serif m-2 text-black-txt"
        format="DD,  HH:mm:ss"
      />
    </div>
  );
}
