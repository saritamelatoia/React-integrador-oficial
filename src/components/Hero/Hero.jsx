//import Button from "../UI/Button"
import React from "react";
import { HeroContainerStyled, HeroTextContainerStyled, HeroImgContainerStyled } from "./HeroStyles";
import HeroImagen from "../../assets/img/hero.png";

function Hero() {
  return (
    <HeroContainerStyled>
      <HeroTextContainerStyled>
        <h1>Paws Paradise</h1>
        <h2> Donde el amor deja huella,</h2>
        <p>y tu mascota vive su paraíso mimado.</p>
      </HeroTextContainerStyled>
      <HeroImgContainerStyled>
        <img src={HeroImagen} alt="Portada" />
      </HeroImgContainerStyled>
    </HeroContainerStyled>
  );
}

export default Hero;
