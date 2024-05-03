import React, { useState } from 'react';

import avatar from '../../assets/images/patient-avatar.png';

import {AiFillStar} from 'react-icons/ai';

import OpiniaoForm from './OpiniaoForm';
import { formateDate } from '../../utils/FormateDate';

const Opiniao = () => {

    const  [showFeedbackForm, setshowFeedbackForm] = useState(false)


  return <div>
    <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">Todas as avaliações (272)</h4>


        <div className="flex justify-between gap-10 mb-[30px]">
            <div className="flex gap-3">
                <figure className="w-10 h-10 rounded-full"><img className="w-full" src={avatar} alt="Avatar imagem" /></figure>

                <div>
                    <h5 className="text-[16px] leading-6 text-orange-500 font-bold">Luiz Guilherme</h5>
                    <p className="text-[14px] leading-6 text-textColor">{formateDate("02-15-2023")}</p>
                    <p className="text__para mt-3 font-medium text-[15px]">ótimo serviço, recomendo demais.</p>
                </div>
            </div>

            <div className="flex gap-1">
                {[...Array(5).keys()].map((_,index)=>(
                <AiFillStar key={index} color="#eb634b" /> ))}
            </div>
        </div>
    </div>


        { !showFeedbackForm && <div className="text-center"><button className="btn" onClick={() => setshowFeedbackForm(true)}>Fazer avaliação</button></div>}

        {showFeedbackForm && <OpiniaoForm />}

  </div>
}

export default Opiniao;