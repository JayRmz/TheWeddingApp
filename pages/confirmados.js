import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ContainerBlock from "../components/ContainerBlock";
import Description from "../components/UI/Descrption";
import Title from "../components/UI/Title";

export default function Confirmados() {
  const [confirmados, setConfirmados] = useState([]);
  const [cancelados, setCancelados] = useState([]);
  const [totalConfirmados, setTotalConfirmados] = useState(0);

  useEffect(() => {
    async function getInvitados() {
      const response = await fetch(
        "https://the-wedding-app-96e78-default-rtdb.firebaseio.com/invitados.json"
      );
      const responseData = await response.json();
      const loadedConf = [];
      const loadedCanc = [];

      for (const key in responseData) {
        if (responseData[key].confirmado && responseData[key].noConf > 0) {
          loadedConf.push({
            id: key,
            name: responseData[key].principal,
            horario: responseData[key].horario,
            invitados: responseData[key].no,
            conf: responseData[key].confirmado,
            noConf: responseData[key].noConf,
            acompanantes: responseData[key].acompanantes,
            mesa: responseData[key].mesa,
          });
          console.log("BOletos: ", responseData[key].noConf);
          setTotalConfirmados(totalConfirmados + responseData[key].noConf);
        } else if (responseData[key].confirmado) {
          loadedCanc.push({
            id: key,
            name: responseData[key].principal,
            horario: responseData[key].horario,
            invitados: responseData[key].no,
            conf: responseData[key].confirmado,
            noConf: responseData[key].noConf,
            acompanantes: responseData[key].acompanantes,
            mesa: responseData[key].mesa,
          });
        }
      }

      setConfirmados(loadedConf);
      setCancelados(loadedCanc);
    }

    getInvitados();
  }, []);

  return (
    <ContainerBlock title="Confirmados">
      <Title title="Invitados" />

      <div className="grid grid-cols-2">
        <div>
          <Description text="Confirmados" />
          <div className="text-center text-black-txt">
            Total boletos: {totalConfirmados}
          </div>
          {confirmados.map((inv) => (
            <div className="text-center text-black-txt" key={inv.id}>
              Invitado: {inv.name} Confirmados: {inv.noConf}
            </div>
          ))}
        </div>
        <div>
          <Description text="Cancelados" />
          <div className="text-center text-black-txt">
            Total invitados: {cancelados.length}
          </div>
          {cancelados.map((inv) => (
            <div className="text-center text-black-txt" key={inv.id}>
              {inv.name}
            </div>
          ))}
        </div>
      </div>
    </ContainerBlock>
  );
}
