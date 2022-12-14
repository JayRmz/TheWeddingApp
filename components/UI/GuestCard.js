import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Title from "./Title";
import { useState } from "react";
import axios from "axios";

export default function GuestCard({
  guest,
  onConfirmedAssistance,
  onCanceledAssistance,
}) {
  const [conf, setConf] = useState("");
  const handleChange = (event) => {
    setConf(event.target.value);
  };

  const onConfirmAssist = async () => {
    console.log("Confirmando a:", conf);
    if (+conf > 0) {
      guest.conf = true;
      guest.noConf = conf;

      const response = await axios.put(
        `https://the-wedding-app-96e78-default-rtdb.firebaseio.com/invitados/${guest.id}/noConf.json`,
        guest.noConf
      );
      const repsonse2 = await axios.put(
        `https://the-wedding-app-96e78-default-rtdb.firebaseio.com/invitados/${guest.id}/confirmado.json`,
        true
      );

      onConfirmedAssistance();
    }
  };

  const onCancelAssist = async () => {
    console.log("Cancelando asistencia", guest);
    const response = await axios.put(
      `https://the-wedding-app-96e78-default-rtdb.firebaseio.com/invitados/${guest.id}/noConf.json`,
      -1
    );
    const repsonse2 = await axios.put(
      `https://the-wedding-app-96e78-default-rtdb.firebaseio.com/invitados/${guest.id}/confirmado.json`,
      true
    );

    onCanceledAssistance();
  };

  console.log(guest);
  return (
    <Card sx={{ maxWidth: 350, height: 250 }} color="pink" className="m-2">
      <CardContent color="pink-2">
        <Typography variant="h5" component="div">
          {guest.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Boletos: {guest.invitados}
        </Typography>
        <Typography variant="subtitle1" className="m-2">
          {guest.acompanantes}
        </Typography>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Asistir??n</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={conf}
            label="Asistir??n"
            onChange={handleChange}
          >
            {[...Array(guest.invitados)].map((x, i) => (
              <MenuItem key={i} value={i + 1}>
                {i + 1}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onCancelAssist}>
          Cancelar Asistencia(s)
        </Button>
        <Button size="small" onClick={onConfirmAssist}>
          Confirmar Asistencia(s)
        </Button>
      </CardActions>
    </Card>
  );
}
