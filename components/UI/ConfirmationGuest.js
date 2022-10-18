import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ConfirmationGuest({ open, onClose, guest, isCancel }) {
  const [selectedDrink, setSelectedDrink] = useState(null);

  const handleSelectedDrink = (event) => {
    setSelectedDrink(event.target.value);
    guest.bebida = event.target.value;
  };

  const confirmationComplete = async () => {
    const repsonse2 = await axios.put(
      `https://the-wedding-app-96e78-default-rtdb.firebaseio.com/invitados/${guest.id}/bebida.json`,
      selectedDrink
    );
    console.log(repsonse2);
    onClose();
  };

  console.log(guest);

  return (
    <div>
      {!isCancel && (
        <Dialog open={open} onClose={onClose}>
          <DialogTitle>Gracias por confirmar, {guest.name} !!!!</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Los Esperamos en {guest.horario}
            </DialogContentText>
            <DialogContentText>
              Por último, ayudanos a seleccionar que deseas tomar?
            </DialogContentText>
            <Box
              noValidate
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                m: "auto",
                width: "fit-content",
              }}
            >
              <FormControl sx={{ mt: 2, minWidth: 120 }}>
                <InputLabel htmlFor="max-width">Bebida</InputLabel>
                <Select
                  autoFocus
                  value={selectedDrink}
                  onChange={handleSelectedDrink}
                  label="Bebida"
                  inputProps={{
                    name: "max-width",
                    id: "max-width",
                  }}
                >
                  <MenuItem value={0}>Brandi</MenuItem>
                  <MenuItem value={1}>Cerveza</MenuItem>
                  <MenuItem value={2}>Ron</MenuItem>
                  <MenuItem value={3}>Tequila</MenuItem>
                  <MenuItem value={4}>Whiskey</MenuItem>
                  <MenuItem value={5}>Gracias, no tomo</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <DialogContentText>
              Consulta más adelante tu número de mesa aquí mismo!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={confirmationComplete} autoFocus>
              Confirmar
            </Button>
          </DialogActions>
        </Dialog>
      )}

      {isCancel && (
        <Dialog open={open} onClose={onClose}>
          <DialogTitle>Gracias por confirmar, {guest.name} !!!!</DialogTitle>
          <DialogActions>
            <Button onClick={onClose} autoFocus>
              Cerrar
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
}
