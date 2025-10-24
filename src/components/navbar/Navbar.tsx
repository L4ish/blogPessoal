import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className="w-full flex justify-center py-4 bg-orange-400 text-white">
                <div className="container flex justify-between text-xl mx-8 font-turret">
                    <Link to="/home" className=" text-2xl hover:text-3xl">Blog Pessoal - Sr. Café</Link>
                    <div>
                        Publicações
                        Assuntos
                        Cadastrar assunto
                        Perfil
                        Sair
                    </div>

                </div>

            </div>
        </>
    )
}

export default Navbar