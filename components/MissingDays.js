import { Col, Row, Statistic } from "antd";
const { Countdown } = Statistic;
const deadline = new Date(2022, 10, 18, 18, 0, 0);

export default function MissingDays() {
  return (
    <div className="bg-gradient-to-r from-transparent to-pink-500 p-10 mx-5 p-10 text-center">
      <p className="text-bold text-2xl text-center font-serif">
        {deadline.toLocaleDateString()}, {deadline.toLocaleTimeString()}
      </p>
      <Countdown
        title="Faltan"
        value={deadline}
        className="text-ellipsis text-6xl font-serif m-2"
        format="DD,  HH:mm:ss"
      />
    </div>
  );
}
