import Categorias from "./components/Categorias/Categorias";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Layout from "./components/Layout/Layout";
import NavBar from "./components/NavBar/NavBar";
import UI from "./components/UI/Button";
import CardProductos from "./components/Productos/ProductCard";


function App() {

  return (
    <>
    <NavBar/>
    <Layout>
      <Hero/>
      <Categorias/>
      <CardProductos/>
    </Layout>
    <Footer/>
    </>
  )
}

export default App
