import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"


export default function App() {
  //passing props(parameters) to the card component which is dynamic 
      const cards = data.map( item => {
            return (
              <Card
                key = {item.id}
                {...item}
              />
            )
          })


  //returning all the components
      return(
        <div>
            <Navbar/>
            <Hero/>
            <section className="cards-list">
              {cards}
            </section>
        </div>
      )
}

