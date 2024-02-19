import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
    --sections: #FFDAB9;
    --navbar: #5A98C1;
    --buttons: #98FB98;
    --background: #7FD8BE;
    --text: #black;
}

html {
    scroll-behavior: smooth;
}

body {
    margin: 0;
    padding: 0;
    background-color: var(--background);
    font-family: Arial, Helvetica, sans-serif;
    color: var(--text);
    overflow-x:hidden;
}

a {
    text-decoration: none;
    color: var(--text);
}
a:visited {
    color: var(--buttons);
}
li {
    list-style: none;
}

`