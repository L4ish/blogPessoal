import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
    const navigate = useNavigate();

    const { handleLogout } = useContext(AuthContext)

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
                    <div>
                        Publicações | 
                        <Link to='/temas' className="hover:underline"> Assuntos | </Link>
                        <Link to='/cadastrartema' className="hover:underline"> Cadastrar assunto | </Link>
                        
                        Perfil |
                        <Link to='' onClick={logout} className="hover:underline"> Sair</Link>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Navbar