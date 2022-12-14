import Image from "next/image";

export default function Hero() {
  return (
    <div className="my-2 mx-2 p-5">
      <div className="bg-gradient-to-r from-pink-back to-pink-200 ">
        <Image
          alt="wedding"
          width={1920}
          height={1080}
          src="/img/AnayRicardo-266.jpg"
        />
      </div>
    </div>
  );
}
