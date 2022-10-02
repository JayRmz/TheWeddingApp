import ContainerBlock from "../components/ContainerBlock";
import CustomMap from "../components/CustomMap";
import { Card } from "antd";
import Image from "next/image";
const { Meta } = Card;

export default function Salon() {
  return (
    <ContainerBlock>
      <div className="h-screen">
        <h1 className="text-8xl text-bold font-serif text-center">Salón</h1>
        <div className="grid grid-cols-1 p-10">
          <div className="bg-pink-700 p-5 ">
            <h2 className="text-center text-2xl  p-2 font-thin">
              Las Cruces Eventos
            </h2>

            <div className="grid grid-cols-2 drop-shadow-md">
              <Image
                src={"/img/salon.jpeg"}
                alt="Salón las cruces"
                width={300}
                height={400}
              />
              <div>
                <CustomMap />
                <p className="text-center justify-self-center mx-10 px-10">
                  Av. Miguel Aleman km 26, Las Cruces, 66615 Cd Apodaca, N.L.
                </p>
                <div className="grid justify-items-stretch grid-cols-3 px-20 text-center">
                  <a
                    href="https://goo.gl/maps/ciUd3HU8xrZjCU1Z8"
                    className="justify-self-auto underline"
                  >
                    Google Maps
                  </a>
                  <a
                    className="justify-self-auto underline"
                    href="https://www.waze.com/en/live-map/directions/mx/n.l./cd-apodaca/eventos-or-bodas-apodaca-or-las-cruces-eventos?place=ChIJuUJxKzvvYoYR6z1kqzQGYUI"
                  >
                    Waze
                  </a>
                  <a
                    href="https://maps.apple.com/?address=Apodaca,%20Nuevo%20Le%C3%B3n,%20M%C3%A9xico&auid=15936924153735466449&ll=25.797977,-100.114197&lsp=9902&q=Las%20Cruces%20Eventos&_ext=CisKBQgEEKUBCgQIBRADCgQIBhARCgQIChAACgQIUhABCgQIVRAPCgQIWRACEiQpOR593TPMOUAxj3HFxVEHWcA5+nKwSF3MOUBBLbDHREoHWcA%3D"
                    className="underline justify-self-auto"
                  >
                    Apple Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContainerBlock>
  );
}
