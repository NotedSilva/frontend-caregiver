import React, { useState } from 'react';

import SobreCuidadores from './SobreCuidadores';
import Opiniao from './Opiniao';
import PainelLateral from './PainelLateral';

import img01 from '../../assets/images/doctor-img02.png';
import starIcon from '../../assets/images/Star.png';
import { useParams } from 'react-router-dom';

const Detalhes = () => {


  const [tab, setTab] = useState('sobre')


  return <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">


          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className="max-w-[200px] max-h-[200px]">
                <img src={img01} alt="Imagem doutor" className="w-full"/>
              </figure>

              <div>
                <span className="bg-[#fdc500] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                Pets
                </span>
                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                  Rafael Prates
                  </h3>
                  <div className="flex items-center gap-[6px]">
                    <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                      <img src={starIcon} alt="Imagem estrela" /> 4.8
                    </span>
                    <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-textColor">(272)</span>
                  </div>

                    <p className="text__para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]">
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                       Itaque neque nemo saepe! Eveniet ea molestias nulla reiciendis
                       dolore fugiat temporibus non sit, molestiae nam aperiam doloribus
                       dolores porro, consequatur earum!
                       </p>
              </div>
            </div>


              <div className="mt-[50px] border-b border-solid border-[#0066FF34]">
                <button onClick={() => setTab('sobre')} className={` ${tab === 'sobre' && 'border-b border-solid border-amber-500'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold `}>Sobre</button>

                <button onClick={() => setTab('opinião')}  className={` ${tab === 'opinião' && 'border-b border-solid border-amber-500'}  py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold `}>Opinião</button>
              </div>

              <div className="mt-[50px]">
                {
                  tab==='sobre' && <SobreCuidadores />
                }
                {
                  tab==='opinião' && <Opiniao />
                }
              </div>


          </div>

          <div>
            <PainelLateral/>
          </div>
        </div>
      </div>
  </section>
}

export default Detalhes;