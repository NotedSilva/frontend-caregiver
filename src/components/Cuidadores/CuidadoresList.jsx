import { cuidadores } from '../../assets/data/cuidadores';
import CuidadoresCard from './CuidadoresCard';

const CuidadoresList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[75px] mt-[30px] lg:mt-[55px]">
      {cuidadores.map((cuidador) => <CuidadoresCard key={cuidador.id} cuidador={cuidador}/>)}</div> 
  )
}

export default CuidadoresList;