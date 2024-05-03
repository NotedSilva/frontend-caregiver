import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'

const OpiniaoForm = () => {


  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [reviewText, setReviewText] = useState("")

  const handleSubmitReview = async e=> {
    e.preventDefault()

    // preciso continuar depois
  }

  return <form action="">
    <div>
      <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">Como você avaliaria a sua experiência?*</h3> 

      <div>
        {[...Array(5).keys()].map((_,index) => {
          index+=1

          return (
          <button
           key={index}
           type="button"
           className={`${index <= (rating && hover) || hover  ? "text-yellowColor" : "text-gray-400"} bg-transparent border-none outline-none text-[22px] cursor-pointer `}
           onClick={() => setRating(index)}
           onMouseEnter={() =>setHover(index)}
           onMouseLeave={() => setHover(rating)}
           onDoubleClick={() => {setHover(0); setRating(0)}}
           >
            <span>
              <AiFillStar/>
              </span>
              </button>
            );
        })}
      </div>


    </div>




        <div className="mt-[30px] ">
          <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">Compartilhe sua opinião ou sugestões*</h3>

          <textarea className="border border-solid border-[#0066FF34] focus:outline outline-orange-500 w-full px-4 py-3 rounded-md"
          rows="5"
          placeholder="Escreva sua mensagem">
          onChange={((e) => setReviewText(e.target.value))}
          </textarea>
        </div>

        <button type="submit" onClick={handleSubmitReview} className="btn">Fazer avaliação</button>
  </form>
}

export default OpiniaoForm;