import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function ConfirmationGuest({ open, onClose, guest }) {
  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Gracias por confirmar, {guest.name} !!!!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Los Esperamos en {guest.horario}
          </DialogContentText>
          <DialogContentText>
            Tu número de mesa es: {guest.mesa}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} autoFocus>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
