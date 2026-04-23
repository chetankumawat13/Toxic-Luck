import React, { useState } from 'react'
import Navbar from './components/Navbar'
import './style/base.css'
import Card from './components/Card'
import Bat from './components/Bat'
import Button from './components/Button'

function App() {

  const cardList  = [
    {
      id: 1,
      img: "/A.png"
    },
    {
      id: 2,
      img: "/K.png"
    },
    {
      id: 3,
      img: "/Q.png"
    },
    {
      id: 4,
      img: "/J.png"
    }
  ]

  const [amount, setAmount] = useState(600)

  const [bet, setBet] = useState(0)

  const [cards, setCards] = useState([
    "/Back.png",
    "/Back.png",
    "/Back.png"
  ])

  const handleReset = () => {
    setCards([
      "/Back.png",
      "/Back.png",
      "/Back.png"
    ])
    setMessage("")
  }

  const [message, setMessage] = useState("")

  const getRandomCard = () => {
    const random = Math.floor(Math.random() * cardList.length)
    return cardList[random].img
  }

  const handleCheckLuck = () => {
     if(bet === 0){
      alert("Please place a bet first.")
      return
     }

     const newCards = [
      getRandomCard(),
      getRandomCard(),
      getRandomCard()
     ]

     setCards(newCards)

    setTimeout(() => {
      const [c1, c2, c3] = newCards

      if(c1 === c2 && c2 === c3){
        const winAmount = bet * 2
        setAmount(prev => prev + winAmount)
        alert(`Congratulations! You won $${winAmount}!`)
      }
      else if(c1 === c2 || c2 === c3 || c1 === c3){
        const winAmount = bet * 1.5
        setAmount(prev => prev + winAmount)
        alert(`Congratulations! You won $${winAmount}!`)
      }
      else{
        alert("Sorry, you lost. Better luck next time!")
      }
      
      setBet(0)
    }, 500);

  }




  return (
    <div className='main'>
       <Navbar amount = {amount} />
       <div className="cards">
         {cards.map((card, index) => (
           <Card key={index} img={card} />
         ))}
       </div>
       <Bat setAmount={setAmount} setBet={setBet} amount={amount} />
       <Button handleCheckLuck={handleCheckLuck} handleReset={handleReset} />
    </div>
  )
}

export default App