import ContainerBlock from "../components/ContainerBlock";
import Title from "../components/UI/Title";
import Description from "../components/UI/Descrption";
import InvitadosSearch from "../components/UI/InvitadosSearch";
import { useEffect, useState } from "react";
import GuestCard from "../components/UI/GuestCard";

export default function Invitados() {
  const [invitados, setInvitados] = useState([]);
  const [horarios, setHorarios] = useState([]);
  const [selectedGuestInfo, setSelectedGuestInfo] = useState([]);

  useEffect(() => {
    async function getInvitados() {
      const response = await fetch(
        "https://the-wedding-app-96e78-default-rtdb.firebaseio.com/invitados.json"
      );
      const resposeData = await response.json();
      const loadedInv = [];

      for (const key in resposeData) {
        if (!resposeData[key].confirmado) {
          loadedInv.push({
            id: key,
            name: resposeData[key].principal,
            horario: resposeData[key].horario,
            invitados: resposeData[key].no,
            conf: resposeData[key].confirmado,
            noConf: resposeData[key].noConf,
          });
        }
      }

      setInvitados(loadedInv);
    }

    async function getHorarios() {
      const response = await fetch(
        "https://the-wedding-app-96e78-default-rtdb.firebaseio.com/itinerarios.json"
      );
      const responseData = await response.json();
      const loadedItinierario = [];
      for (const key in responseData) {
        loadedItinierario.push({
          id: key,
          evento: responseData[key].evento,
          hora: responseData[key].hora,
        });
      }
      setHorarios(loadedItinierario);
    }

    getHorarios();
    getInvitados();
  }, []);

  const selectInvHandler = (inv) => {
    console.log("selected: ", inv);
    console.log(invitados.filter((guest) => guest.name == inv));
    setSelectedGuestInfo(invitados.filter((guest) => guest.name == inv));
  };

  // console.log(invitados, horarios);
  return (
    <ContainerBlock>
      <Title title="Invitados" />
      <Description text="Ayúdanos a confirmar tu asistencia." />
      <p className="px-10 text-md font-medium text-center pb-20 pt-5">
        Escribe tu nombre (o el principal de la familia) y confirma el número de
        invitados.
      </p>
      <div className="grid p-5 grid-cols-1 md:grid-cols-2 bg-pink-800 h-96">
        <div className="self-center">
          <InvitadosSearch
            invitados={invitados}
            horarios={horarios}
            onSelectInv={selectInvHandler}
          />
        </div>
        {/* {selectedGuestInfo.length > 0 && (
          <div>Hola:{selectedGuestInfo[0].name}</div>
        )} */}
        {selectedGuestInfo.length > 0 && (
          <GuestCard guest={selectedGuestInfo[0]} />
        )}
      </div>
    </ContainerBlock>
  );
}
