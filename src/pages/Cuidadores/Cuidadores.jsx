import { cuidadores } from "../../assets/data/cuidadores";
import CuidadoresCard from "../../components/Cuidadores/CuidadoresCard";
import Depoimento from "../../components/Depoimento/Depoimento";


const Cuidadores = () => {
  return <>
    <section className="bg-[#fffefd]">
      <div className="container text-center">
          <h2 className="heading">Encontre um cuidador</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#2c57972c] rounded-md flex items-center justify-between">

            <input type="search" className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
            placeholder="Procure um cuidador" />

            <button className="btn mt-0 rounded-[0px] rounded-r-md">Pesquisar</button>

          </div>
      </div>
    </section>

      <section>
        <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {cuidadores.map((cuidador) => <CuidadoresCard key={cuidador.id} cuidador={cuidador}/>)}</div>
        </div>
      </section>

      <section>
      <div className="container">
      <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">O que nossos clientes estão dizendo</h2>
          <p className="text__para text-center">Cuidados especializados para todos, garantimos uma qualidade de classe mundial.</p>
        </div>
        <Depoimento />
      </div>
    </section>

  </>
}

export default Cuidadores;