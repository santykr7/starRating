import { useState } from "react"
import { FaStar } from "react-icons/fa"
import "./App.css"

function App({ starCount = 5 }) {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  const handleClick = (getCurrentIndex) => {
    console.log(getCurrentIndex)
    setRating(getCurrentIndex)
  }
  const handleMouseEnter = (getCurrentIndex) => {
    console.log(getCurrentIndex)
    setHover(getCurrentIndex)
  }

  const handleReset = () => {
    setRating(0)
    setHover(0)
  }

  return (
    <>
      <div className='star-rating'>
        {[...Array(starCount)].map((_, index) => {
          index += 1
          return (
            <FaStar
              className={index <= (hover || rating) ? "active" : "inactive"}
              key={index}
              onClick={handleClick}
              onMouseOver={() => handleMouseEnter(index)}
              size={35}
            />
          )
        })}
        <button class='resetBtn' onClick={handleReset}>
          Reset
        </button>
      </div>
    </>
  )
}

export default App
