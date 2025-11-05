import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
    const navigate = useNavigate();

    const {usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        alert("O usuário foi desconectado com sucesso!")
        navigate('/')
    }

    return (
        <>
            <div className="w-full flex justify-center py-4 bg-orange-400 text-white">
                <div className="container flex justify-between text-xl mx-8 font-turret font-bold">
                    <Link to="/home" className=" text-2xl hover:text-3xl">Blog Pessoal - Sr. Café</Link>
                    {usuario.token !== "" ? (
                        <div>
                        <Link to='/postagens' className="hover:underline"> Publicações | </Link>
                        <Link to='/temas' className="hover:underline"> Assuntos | </Link>
                        <Link to='/cadastrartema' className="hover:underline"> Cadastrar assunto | </Link>
                       <Link to='/perfil' className='hover:underline'> Perfil | </Link>
                        <Link to='' onClick={logout} className="hover:underline"> Sair</Link>
                    </div>
                    ) : (
                        <></>
                    )}
                    
                </div>

            </div>
        </>
    )
}

export default Navbar