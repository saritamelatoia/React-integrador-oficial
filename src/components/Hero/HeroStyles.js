import styled from "styled-components";

export const HeroContainerStyled = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
margin: 0;
gap: 30px;

h1 {
    margin-bottom: 2rem;
}

@media (max-width: 968px) {
    background-size: cover;
    background-position: center;
    height: 250px;
}
`;

export const HeroTextContainerStyled = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
width: 50%;

h1 {
    font-size: 4rem;
    margin: 10px 0;
}

h2 {  // Corregir el selector de h1 a h2
    font-size: 2.5rem;
    margin: 10px 0;
}

p {
    font-size: 1.2rem;
}

@media (max-width: 968px) {
    width: 80%;
    align-items: center;
    text-align: center;
    font-size: 10px;
}
`;

export const HeroImgContainerStyled = styled.div`
max-width: 60%;
`;
