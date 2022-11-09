import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import ContainerBlock from "../components/ContainerBlock";
import Description from "../components/UI/Descrption";
import Title from "../components/UI/Title";
import Paper from "@mui/material/Paper";

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

      {/* Boletos */}
      <Description text={`Boletos: ${totalPorConf + totalConfirmados}`} />

      {/*  X confirmar */}
      <div className="m-5">
        <p className="py-3 text-lg text-black-txt">
          Invitados <span className="font-bold">por confirmar</span>:{" "}
          {totalPorConf}
        </p>
        <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Folio</TableCell>
                <TableCell align="right">Invitado</TableCell>
                <TableCell align="right">Boletos</TableCell>
                <TableCell align="right">Horario</TableCell>
                <TableCell align="right">Acompañante</TableCell>
                <TableCell align="right">Mesa</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {porConf.map((inv) => (
                <TableRow key={inv.id}>
                  <TableCell align="right">{inv.id.toUpperCase()}</TableCell>
                  <TableCell align="right">{inv.name}</TableCell>
                  <TableCell align="right">{inv.invitados}</TableCell>
                  <TableCell align="right">{inv.horario}</TableCell>
                  <TableCell align="right">{inv.acompanantes}</TableCell>
                  <TableCell align="right">{inv.mesa}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* Confrimados */}
      <div className="m-5">
        <p className="py-3 text-lg text-black-txt">
          Invitados <span className="font-bold">Confirmados</span>:{" "}
          {totalConfirmados}
        </p>
        <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Folio</TableCell>
                <TableCell align="right">Invitado</TableCell>
                <TableCell align="right">Confirmados</TableCell>
                <TableCell align="right">Horario</TableCell>
                <TableCell align="right">Acompañante</TableCell>
                <TableCell align="right">Mesa</TableCell>
                <TableCell align="right">Bebida</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {confirmados.map((inv) => (
                <TableRow key={inv.id}>
                  <TableCell align="right">{inv.id.toUpperCase()}</TableCell>
                  <TableCell align="right">{inv.name}</TableCell>
                  <TableCell align="right">
                    {inv.noConf} de {inv.invitados}
                  </TableCell>
                  <TableCell align="right">{inv.horario}</TableCell>
                  <TableCell align="right">{inv.acompanantes}</TableCell>
                  <TableCell align="right">{inv.mesa}</TableCell>
                  <TableCell align="right">
                    {renderSwitch(inv.bebida)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div className="m-5">
        <p className="py-3 text-lg text-black-txt">
          Invitados <span className="font-bold">Cancelados</span>:{" "}
          {totalCancelados}
        </p>
        <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Folio</TableCell>
                <TableCell align="right">Invitado</TableCell>
                <TableCell align="right">Boletos</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cancelados.map((inv) => (
                <TableRow key={inv.id}>
                  <TableCell align="right">{inv.id.toUpperCase()}</TableCell>
                  <TableCell align="right">{inv.name}</TableCell>
                  <TableCell align="right">{inv.invitados}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div className="m-5">
        <p className="py-3 text-lg text-black-txt">Bebidas</p>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Brandis</TableCell>
                <TableCell align="right">Tequila</TableCell>
                <TableCell align="right">Cerveza</TableCell>
                <TableCell align="right">Ron</TableCell>
                <TableCell align="right">Whiskey</TableCell>
                <TableCell align="right">No Toma</TableCell>
                <TableCell align="right">No Contesto</TableCell>
                <TableCell align="right">TOTAL</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="right">{totalBrandi}</TableCell>
                <TableCell align="right">{totalTequila}</TableCell>
                <TableCell align="right">{totalCerveza}</TableCell>
                <TableCell align="right">{totalRon}</TableCell>
                <TableCell align="right">{totalWhiskey}</TableCell>
                <TableCell align="right">{totalNoToma}</TableCell>
                <TableCell align="right">{totalNoCont}</TableCell>
                <TableCell align="right">{confirmados.length}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </ContainerBlock>
  );
}
