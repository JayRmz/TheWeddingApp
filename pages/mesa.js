import ContainerBlock from "../components/ContainerBlock";
import Description from "../components/UI/Descrption";
import Title from "../components/UI/Title";

export default function Mesa() {
  return (
    <ContainerBlock>
      <Title title="Mesa de regalos" />
      <div className="py-10">
        <Description text="El mejor regalo que nos puedes dar es tu prescencia pero si quieres obsequiarnos algo puedes hacerlo en." />
      </div>
      <div className=" h-screen p-20">
        <div className="text-center">
          <a
            target="_blank"
            className="underline text-pink-700 text-3xl sm:text-4xl md:text-6xl lg:text-8xl"
            rel="noopener noreferrer"
            href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/50851070"
          >
            Liverpool
          </a>
        </div>
        <div className="text-center font-mono text-2xl mt-40">
          Num: <span className="bg-gray-50 text-black p-1 m-1">50851070</span>
        </div>
      </div>
    </ContainerBlock>
  );
}
