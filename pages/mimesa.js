import ContainerBlock from "../components/ContainerBlock";
import Title from "../components/UI/Title";
import Description from "../components/UI/Descrption";
import InvitadosSearch from "../components/UI/InvitadosSearch";
import { useEffect, useState } from "react";
import GuestCard from "../components/UI/GuestCard";
import ConfirmationGuest from "../components/UI/ConfirmationGuest";
import Router from "next/router";
import GuestsTables from "../components/UI/GuestsTables";
import GuestTableCard from "../components/UI/GuestTableCard";
import Image from "next/image";

export default function MiMesa() {
  const [invitados, setInvitados] = useState([]);
  const [horarios, setHorarios] = useState([]);
  const [selectedGuestInfo, setSelectedGuestInfo] = useState([]);
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [isCancel, setIsCancel] = useState(false);

  useEffect(() => {
    async function getInvitados() {
      const response = await fetch(
        "https://the-wedding-app-96e78-default-rtdb.firebaseio.com/invitados.json"
      );
      const resposeData = await response.json();
      const loadedInv = [];

      for (const key in resposeData) {
        if (resposeData[key].confirmado && resposeData[key].noConf > 0) {
          loadedInv.push({
            id: key,
            name: resposeData[key].principal,
            horario: resposeData[key].horario,
            invitados: resposeData[key].no,
            conf: resposeData[key].confirmado,
            noConf: resposeData[key].noConf,
            acompanantes: resposeData[key].acompanantes,
            mesa: resposeData[key].mesa,
            bebida: resposeData[key].bebida,
          });
        }
      }
      setInvitados(loadedInv);
    }
    getInvitados();
  }, []);

  const selectInvHandler = (inv) => {
    console.log("Selected INV: ", inv);
    setSelectedGuestInfo(invitados.filter((guest) => guest.name == inv));
  };

  const onConfirmedAssistance = () => {
    setOpenConfirmation(true);
    setIsCancel(false);
  };

  const onCanceledAssistance = () => {
    setOpenConfirmation(true);
    setIsCancel(true);
  };

  const closeConfirmation = () => {
    setOpenConfirmation(false);
    selectInvHandler(null);
    Router.reload(window.location.pathname);
  };

  // console.log(invitados, horarios);
  return (
    <ContainerBlock title="R & R">
      <Title title="Mi mesa" />
      <Description text="Gracias por confirmar tu asistencia." />
      <p className="px-5 text-md font-medium text-center  pt-5 text-black-txt">
        Ahora puedes escribir tu nombre y ver tu número de mesa
      </p>
      <div className=" p-5 self-center grid grid-cols-1 md:grid-cols-2 bg-pink-txt  ">
        <div>
          <GuestsTables
            invitados={invitados}
            horarios={horarios}
            onSelectInv={selectInvHandler}
          />
          {selectedGuestInfo.length > 0 ? (
            <GuestTableCard guest={selectedGuestInfo[0]} />
          ) : null}
        </div>
        <div>
          {selectedGuestInfo.length > 0 ? (
            <Image
              src={"/img/mesas.jpeg"}
              alt="Crouis"
              width={400}
              height={350}
            />
          ) : null}
        </div>
      </div>
    </ContainerBlock>
  );
}
