import React from 'react'
import "../styles/SecondCard.css"
import ThankYouImage from "../assets/illustration-thank-you.svg"

const SecondCard = ({selectedRating}) => {
  return (
    <div className="second-card">
        <img src={ThankYouImage} />
        <h4>You selected {selectedRating} out of 5</h4>
        <h1>Thank You!</h1>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    </div>
  )
}

export default SecondCard