import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function GuestTableCard({ guest = {} }) {
  return (
    <Card
      sx={{ maxWidth: 250, minHeight: 200 }}
      color="pink"
      className="m-2 bg-pink-100"
    >
      <CardContent color="pink-2">
        <Typography variant="h5" component="div">
          {guest.name}
        </Typography>
        {guest.acompanantes != "Sin Acompañante" ? (
          <Typography variant="h8" component="div">
            Tú y {guest.acompanantes}
          </Typography>
        ) : (
          <Typography variant="h8" component="div">
            Tú
          </Typography>
        )}
        {guest.acompanantes != "Sin Acompañante" ? (
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            tienen la mesa: {guest.mesa}
          </Typography>
        ) : (
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            tienes la mesa: {guest.mesa}
          </Typography>
        )}

        <Typography variant="subtitle1" className="">
          Recuerda, les esperamos: {guest.horario}
        </Typography>
      </CardContent>
    </Card>
  );
}
