import * as React from "react";
import Button from "../components/Button";
import Typography from "../components/Typography";
import HeroVeterinariaLayout from "./HeroVeterinariaLayout";
import FormDialog from "../components/FormDialog";


const backgroundImage = "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80";

export default function HeroVeterinaria() {
  return (
    <HeroVeterinariaLayout
      sxBackground={{
        backgroundImage:  `url(${backgroundImage})`,
        backgroundColor: "#000000", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2">
        Nuestra pasión es la salud de tu mascota.
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Más de 20 servicios para hacer feliz a tu mascota
      </Typography>
      <FormDialog></FormDialog>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        El amor extra que necesita tu mascota.
      </Typography>
    </HeroVeterinariaLayout>
  );
}
