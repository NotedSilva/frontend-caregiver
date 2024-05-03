import React from 'react';

import {servicos} from '../../assets/data/servicos';
import ServiceCard from "./ServiceCard";

const ServiceList = () => {
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
    {servicos.map((item, index) =>(
        <ServiceCard item={item} index={index} key={index}/>
        ))}
  </div>
}

export default ServiceList;