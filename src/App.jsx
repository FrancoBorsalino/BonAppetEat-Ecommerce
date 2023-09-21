import { useState } from 'react'
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer"
import './index.css'
const ItemListContainer = (props) => <div> {props.greetings} </div>

function App() {
  const mensajeBienvenida = "Una app de recetas para pensar menos en qué comer, y disfrutar más comiendo."
  return (
    <main class="main__grid">
    <NavBar />
    <ItemListContainer greetings={mensajeBienvenida} />
    <Footer />
    </main>
  );
}

export default App;