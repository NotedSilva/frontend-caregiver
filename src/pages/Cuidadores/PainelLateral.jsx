const PainelLateral = () => {
  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
        <div className="flex items-center justify-between">
            <p className="text__para mt-0 font-semibold">Preço</p>
            <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">R$ 300</span>
        </div>

        <div className="mt-[30px]">
            <p className="text__para mt-0 font-semibold text-headingColor">Horário disponível</p>
            <ul className="mt-3">
                <li className="flex items-center justify-between">
                    <p className="text-[15px] leading-6 text-textColor font-semibold">Segunda-feira</p>
                    <p className="text-[15px] leading-6 text-textColor font-semibold">08:00 - 16:30</p>
                </li>
                <li className="flex items-center justify-between">
                    <p className="text-[15px] leading-6 text-textColor font-semibold">Terça-feira</p>
                    <p className="text-[15px] leading-6 text-textColor font-semibold">08:00 - 16:30</p>
                </li>
                <li className="flex items-center justify-between">
                    <p className="text-[15px] leading-6 text-textColor font-semibold">Quarta-feira</p>
                    <p className="text-[15px] leading-6 text-textColor font-semibold">08:00 - 16:30</p>
                </li>
            </ul>
        </div>

        <button className="btn px-2 w-full rounded-md">Solicitar</button>
    </div>
  )
}

export default PainelLateral;