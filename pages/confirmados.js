import { useEffect, useState } from "react";
import ContainerBlock from "../components/ContainerBlock";
import Description from "../components/UI/Descrption";
import Title from "../components/UI/Title";

export default function Confirmados() {
  const [confirmados, setConfirmados] = useState([]);
  const [cancelados, setCancelados] = useState([]);
  const [porConf, setPorConf] = useState([]);
  const [totalConfirmados, setTotalConfirmados] = useState(0);
  const [totalCancelados, setTotalCancelados] = useState(0);
  const [totalPorConf, setTotalPorConf] = useState(0);
  const [totalTequila, setTotalTequila] = useState(0);
  const [totalWhiskey, setTotalWhiskey] = useState(0);
  const [totalCerveza, setTotalCerveza] = useState(0);
  const [totalBrandi, setTotalBrandi] = useState(0);
  const [totalRon, setTotalRon] = useState(0);
  const [totalNoCont, setTotalNoCont] = useState(0);
  const [totalNoToma, setTotalNoToma] = useState(0);

  useEffect(() => {
    async function getInvitados() {
      const response = await fetch(
        "https://the-wedding-app-96e78-default-rtdb.firebaseio.com/invitados.json"
      );
      const responseData = await response.json();
      const loadedConf = [];
      const loadedCanc = [];
      const loadedPorConf = [];

      let tequila = 0;
      let cerveza = 0;
      let whiskey = 0;
      let brandi = 0;
      let ron = 0;
      let notoma = 0;
      let nocont = 0;

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
            bebida: responseData[key].bebida,
          });
          switch (responseData[key].bebida) {
            case 0:
              brandi += 1;
              break;
            case 1:
              cerveza += 1;
              break;
            case 2:
              ron += 1;
              break;
            case 3:
              tequila += 1;
              break;
            case 4:
              whiskey += 1;
              break;
            case 5:
              notoma += 1;
              break;

            default:
              nocont += 1;
              break;
          }
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
        } else {
          loadedPorConf.push({
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
      setPorConf(loadedPorConf);

      setTotalBrandi(brandi);
      setTotalCerveza(cerveza);
      setTotalTequila(tequila);
      setTotalWhiskey(whiskey);
      setTotalRon(ron);
      setTotalNoCont(nocont);
      setTotalNoToma(notoma);
    }

    getInvitados();
  }, []);

  useEffect(() => {
    console.log("CONFIRMADOS");
    function effectconfirmados() {
      let total = 0;
      for (const conf in confirmados) {
        console.log(confirmados[conf].noConf);
        total += confirmados[conf].noConf;
      }
      setTotalConfirmados(total);
    }

    function effectcancelados() {
      let total = 0;
      for (const canc in cancelados) {
        total += cancelados[canc].invitados;
      }
      setTotalCancelados(total);
    }

    function effectporconf() {
      let total = 0;
      for (const canc in porConf) {
        total += porConf[canc].invitados;
      }
      setTotalPorConf(total);
    }
    effectconfirmados();
    effectcancelados();
    effectporconf();
  }, [confirmados, cancelados, porConf]);

  function renderSwitch(param) {
    switch (param) {
      case 0:
        return "Brandi";
      case 1:
        return "Cerveza";
      case 2:
        return "Ron";
      case 3:
        return "Tequila";
      case 4:
        return "Whiskey";
      case 5:
        return "No toma";
      default:
        return "NO CONTESTó";
    }
  }

  return (
    <ContainerBlock title="Confirmados">
      <Title title="Invitados" />

      <Description text={`Boletos: ${totalPorConf + totalConfirmados}`} />

      <Description text={`Bebidas ${confirmados.length}`} />
      <div className="grid grid-cols-7">
        <div className="text-center text-black-txt">Brandis: {totalBrandi}</div>
        <div className="text-center text-black-txt">
          Tequila: {totalTequila}
        </div>
        <div className="text-center text-black-txt">
          Cerveza: {totalCerveza}
        </div>
        <div className="text-center text-black-txt">Ron: {totalRon}</div>
        <div className="text-center text-black-txt">
          Whiskey: {totalWhiskey}
        </div>
        <div className="text-center text-black-txt">No Toma: {totalNoToma}</div>
        <div className="text-center text-black-txt">
          No Contesto: {totalNoCont}
        </div>
      </div>

      <div className="grid grid-cols-3">
        <div>
          <Description text="Confirmados" />
          <div className="text-center text-black-txt">
            Total boletos: {totalConfirmados}
          </div>
          {confirmados.map((inv) => (
            <div className="text-center text-black-txt p-5" key={inv.id}>
              <p className="text-lg"> Inivitado: {inv.name} </p>
              <div className="grid grid-cols-2">
                <p>Boletos: {inv.noConf} </p>
                <p>Bebida: {renderSwitch(inv.bebida)} </p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <Description text="Cancelados" />
          <div className="text-center text-black-txt">
            Total cancelados: {totalCancelados}
          </div>
          {cancelados.map((inv) => (
            <div className="text-center text-black-txt" key={inv.id}>
              Invitado: {inv.name} | Boletos: {inv.invitados}
            </div>
          ))}
        </div>
        <div>
          <Description text="Por Confirmar" />
          <div className="text-center text-black-txt">
            Total x conf: {totalPorConf}
          </div>
          {porConf.map((inv) => (
            <div className="text-center text-black-txt" key={inv.id}>
              Invitado: {inv.name} | Boletos: {inv.invitados}
            </div>
          ))}
        </div>
      </div>
    </ContainerBlock>
  );
}
