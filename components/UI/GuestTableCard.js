import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function GuestTableCard({ guest = {} }) {
  return (
    <Card
      sx={{ maxWidth: 250, height: 200 }}
      color="pink"
      className="m-2 bg-pink-100"
    >
      <CardContent color="pink-2">
        <Typography variant="h5" component="div">
          {guest.name}
        </Typography>
        <Typography variant="h8" component="div">
          tu y {guest.acompanantes}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          tienen la mesa: {guest.mesa}
        </Typography>
        <Typography variant="subtitle1" className="">
          Recuerda, les esperamos: {guest.horario}
        </Typography>
      </CardContent>
    </Card>
  );
}
