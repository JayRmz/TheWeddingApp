import ContainerBlock from "../components/ContainerBlock";
import Title from "../components/UI/Title";
import Description from "../components/UI/Descrption";
import InvitadosSearch from "../components/UI/InvitadosSearch";
import { useEffect, useState } from "react";

export default function Invitados() {
  const [invitados, setInvitados] = useState([]);
  const [horarios, setHorarios] = useState([]);
  const [invOptions, setInvOptions] = useState([]);

  useEffect(() => {
    async function getInvitados() {
      const response = await fetch(
        "https://the-wedding-app-96e78-default-rtdb.firebaseio.com/invitados.json"
      );
      const resposeData = await response.json();
      const loadedInv = [];
      const opts = [];

      for (const key in resposeData) {
        loadedInv.push({
          id: key,
          name: resposeData[key].principal,
          horario: resposeData[key].horario,
          invitados: resposeData[key].no,
        });
        opts.push({
          text: key,
          value: resposeData[key].principal,
        });
      }

      setInvOptions(opts);
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

  console.log(invitados, horarios);
  return (
    <ContainerBlock>
      <Title title="Invitados" />
      <Description text="Ayúdanos a confirmar tu asistencia." />
      <p className="px-10 text-md font-medium text-center">
        Escribe tu nombre (o el principal de la familia) y confirma el número de
        invitados.
      </p>
      <div className="grid p-10 grid-cols-1 md:grid-cols-2 bg-pink-800">
        <div className="self-center">
          <InvitadosSearch invitados={invOptions} horarios={horarios} />
        </div>
        <p>Hello</p>
      </div>
    </ContainerBlock>
  );
}
