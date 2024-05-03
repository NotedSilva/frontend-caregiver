import { formateDate } from '../../utils/FormateDate';

const SobreCuidadores = () => {
  return <div>
    <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
            Sobre
            <span className="text-irisBlueColor font-bold text-[24px] leading-9">Rafael Prates</span>
            </h3>
            <p className="text__para">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Voluptatem sapiente optio repudiandae reiciendis sunt, cum maxime illum itaque,
             dignissimos dicta ipsa voluptate perferendis ducimus explicabo, fuga voluptates?
             Ab sint quo nulla necessitatibus, error assumenda vero illo architecto aperiam
             sequi eum voluptates officiis possimus provident dolores perferendis totam. Iusto, culpa nobis?</p> 
    </div>

        <div className="mt-12">
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
                Formação
                </h3>
                <ul className="pt-4 md:p-5">
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                        <div>
                            <span className="text-irisBlueColor text-[15-px] leading-6 font-semibold">{formateDate("12-04-2010")} - {formateDate("10-12-2015")}</span> 
                            <p className="text-[16px] leading-6 font-medium text-textColor">Bacharel em Pedagogia</p>
                        </div>
                            <p className="text-[14px] leading-5 font-medium text-textColor">Escola Estadual São João, Guarulhos</p>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                        <div>
                            <span className="text-irisBlueColor text-[15-px] leading-6 font-semibold">{formateDate("02-12-2015")} - {formateDate("12-07-2018")}</span>
                            <p className="text-[16px] leading-6 font-medium text-textColor">Bacharel em Pedagogia</p>
                        </div>
                            <p className="text-[14px] leading-5 font-medium text-textColor">Escola Estadual São João, Guarulhos</p>
                    </li>
                </ul>
        </div>


        <div className="m2-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
                Experiência
                </h3>

                <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                    <li className="p-4 rounded bg-[#fff9ea]">
                        <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                        {formateDate("02-12-2015")} - {formateDate("15-07-2018")}
                        </span>
                        <p className="text-[16px] leading-6 font-medium text-textColor">Professor Integral</p>
                        <p className="text-[14px] leading-5 font-medium text-textColor">Escola Estadual São João, Guarulhos</p>
                    </li>
                    <li className="p-4 rounded bg-[#fff9ea]">
                        <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                        {formateDate("02-12-2015")} - {formateDate("15-07-2018")}
                        </span>
                        <p className="text-[16px] leading-6 font-medium text-textColor">Professor Integral</p>
                        <p className="text-[14px] leading-5 font-medium text-textColor">Escola Estadual São João, Guarulhos</p>
                    </li>
                </ul>
        </div>

  </div>
}

export default SobreCuidadores;