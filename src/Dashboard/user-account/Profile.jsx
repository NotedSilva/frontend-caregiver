import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import uploadImageToCloudinary from '../../utils/uploadCloudinary';
import { BASE_URL, token } from '../../config';
import { toast } from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader';

const Profile = ({user}) => {

  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photo: null,
    gender: '',
    idade: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    setFormData({ name: user.name, email:user.email, photo: user.photo, gender: user.gender, idade: user.idade });
  }, [user]);

  const handleInputChange = e => {
    setFormData(({ ...formData, [e.target.name]: e.target.value }));
  };

  const handleFileInputChange = async (event) => {

    const file =event.target.files[0]

    const data = await uploadImageToCloudinary(file)

    setSelectedFile(file);
    setFormData({ ...formData, photo:data.url});

    document.getElementById('customFileLabel').textContent = "Carregar imagem";
  };

  

  const submitHandler = async event => {

    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/usuarios/${user._id}`,{
        method: 'PUT',
        headers:{
          'Content-Type': 'application/json',
          Authorization: ` Bearer ${token} `
        },
        body: JSON.stringify(formData)
      });

      const {message} = await res.json()

      if(!res.ok){
        throw new Error(message)
      }

      setLoading(false)
      toast.success(message)
      navigate("/usuarios/perfil/me");

    } catch (err) {
      toast.error(err.message)
      setLoading(false)
    }

  };


  return (
    <div className="mt-10">
      <form onSubmit={submitHandler}>
        <div className="mb-5">
            <input 
              type="text"
              placeholder="Nome completo"
              name="name" 
              value={formData.name}
              onChange={handleInputChange}
              className="w-full pr-4 py-3 border-b border-solid border-[#778899] focus:outline-none focus:border-b-orange-500
              text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
              required
            />
          </div>
          <div className="mb-5">
            <input 
              type="email"
              placeholder="Endereço de email"
              name="email" 
              value={formData.email}
              onChange={handleInputChange}
              className="w-full pr-4 py-3 border-b border-solid border-[#778899] focus:outline-none focus:border-b-orange-500
              text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
              aria-readonly
              readOnly
            />
          </div>
          <div className="mb-5">
            <input 
              type="password"
              placeholder="Senha"
              name="password" 
              value={formData.password}
              onChange={handleInputChange}
              className="w-full pr-4 py-3 border-b border-solid border-[#778899] focus:outline-none focus:border-b-orange-500
              text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
            />
          </div>

          <div className="mb-5">
            <input 
              type="number"
              placeholder="Idade"
              name="idade" 
              value={formData.idade}
              onChange={handleInputChange}
              className="w-full pr-4 py-3 border-b border-solid border-[#778899] focus:outline-none focus:border-b-orange-500
              text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
              required
            />
          </div>


          <div className="mb-5 flex items-center justify-between">

            <label
             className="text-headingColor font-bold text-[16px] leading-7"
             >
              Gênero: 
               <select 
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="text-textColor font-semibold text-[15px] ml-4 leading-7 px-5 py-3
              focus:outline-none"
              >
                <option value="">Selecione</option>
                <option value="homem">Homem</option>
                <option value="mulher">Mulher</option>
                <option value="outros">Outros</option>
              </select>
            </label>
          </div>


            <div className="mb-5 flex items-center gap-3">
              { formData.photo && <figure className="w-[55px] h-[60px] rounded-full border-2 border-solid border-orange-500 flex items-center justify-center">
                <img
                src={formData.photo}
                alt=""
                className="w-full rounded-full" />
              </figure>}

              <div className="relative w-[160px] h-[50px]"> 
                <input type="file"
                name="photo"
                id="customFile"
                onChange={handleFileInputChange}
                accept=".jpg, .png"
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                />

                <label htmlFor="customFile" className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem]
                py-[0.75rem] text-[16px] leading-6 overflow-hidden bg-[#f59f7e] text-headingColor font-semibold rounded-lg truncate cursor-pointer">{selectedFile ? selectedFile.name : "Carregar imagem"}</label>
              </div>
            </div>

            <div className="mt-7 ">
              <button
              disabled={loading && true}
              type="submit"
              className="w-full bg-orange-500 text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
              >
                { loading ?(
                <HashLoader size={25} color="#ffffff"/>
              ) : ("Atualizar"
                )}
                </button>
            </div>

        </form>
    </div>
  )
};

export default Profile