import ContainerBlock from "../components/ContainerBlock";

export default function Mesa() {
  return (
    <ContainerBlock>
      <div className="h-screen">
        <h1 className="text-8xl text-bold font-serif text-center">
          Mesa de regalos
        </h1>
        <div className="pt-10">
          <p className="text-center text-xl">
            Nuestra mesa de regalos la encuentras en
          </p>
          <div className="text-center m-10">
            <a
              target="_blank"
              className="text-center underline text-9xl text-pink-700"
              rel="noopener noreferrer"
              href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/50851070"
            >
              Liverpool
            </a>
          </div>
          <div className="text-center font-mono text-3xl">
            Num: <span className="bg-gray-50 text-black p-1 m-1">50851070</span>
          </div>
          <div className="text-center font-serif text-3xl mt-5 p-10">
            <p>
              Mollit aliquip Lorem incididunt exercitation occaecat sit
              voluptate occaecat ipsum. Ex nostrud adipisicing do ea culpa
              dolore. Exercitation sit irure veniam laboris deserunt cupidatat
              duis aliquip elit fugiat qui laboris cillum.
            </p>
          </div>
        </div>
      </div>
    </ContainerBlock>
  );
}
