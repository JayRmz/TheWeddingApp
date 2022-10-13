import ContainerBlock from "../components/ContainerBlock";
import CustomMap from "../components/CustomMap";
import { Card } from "antd";
import Image from "next/image";
const { Meta } = Card;
import Title from "../components/UI/Title";

export default function Salon() {
  return (
    <ContainerBlock title="R & R">
      <Title title="Salón" />
      <div className="h-full bg-pink-txt ">
        <h2 className="text-center text-2xl  p-2 font-thin text-black-txt">
          Las Cruces Eventos
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 drop-shadow-md">
          <Image
            src={"/img/salon.jpeg"}
            alt="Salón las cruces"
            width={300}
            height={400}
          />
          <div>
            <div className="grid grid-rows-2 p-5">
              <div className="grid grid-cols-1 p-3">
                <Image
                  src={"/img/R1.png"}
                  alt="Salón las cruces"
                  width={400}
                  height={350}
                />
              </div>
              <div className="grid grid-cols-1 p-3">
                <Image
                  src={"/img/r2.png"}
                  alt="Salón las cruces"
                  width={400}
                  height={350}
                />
              </div>
            </div>

            <p className="text-center justify-self-center p-10 md:p-20 text-black-txt">
              Av. Miguel Aleman km 26, Las Cruces, 66615 Cd Apodaca, N.L.
            </p>
            <div className="grid justify-items-stretch grid-cols-3 md:px-20 text-center pb-3">
              <a
                href="https://goo.gl/maps/XCahocz6SwrFK3377"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-normal text-black-txt"
              >
                Google Maps
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-normal text-black-txt"
                href="https://www.waze.com/en/live-map/directions/mx/n.l./cd-apodaca/eventos-or-bodas-apodaca-or-las-cruces-eventos?place=ChIJuUJxKzvvYoYR6z1kqzQGYUI"
              >
                Waze
              </a>
              <a
                href="https://maps.apple.com/?address=Apodaca,%20Nuevo%20Le%C3%B3n,%20M%C3%A9xico&auid=15936924153735466449&ll=25.797977,-100.114197&lsp=9902&q=Las%20Cruces%20Eventos&_ext=CisKBQgEEKUBCgQIBRADCgQIBhARCgQIChAACgQIUhABCgQIVRAPCgQIWRACEiQpOR593TPMOUAxj3HFxVEHWcA5+nKwSF3MOUBBLbDHREoHWcA%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-normal text-black-txt"
              >
                Apple Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </ContainerBlock>
  );
}
