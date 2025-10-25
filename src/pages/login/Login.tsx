import { Link } from "react-router-dom"

function Login() {
    return(
        <>
        <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
            <form className="flex justify-center items-center flex-col w-1/2 gap-4 font-turret">
            <h2 className="text-orange-800 text-4xl">Entrar</h2>
            <div className="flex flex-col w-full">
                <label htmlFor="usuario" className="text-orange-800 text-xl px-5">Usuário</label>
                <input type="text" id="usuario" name="usuario" placeholder="Usuário" className="border-2 border-orange-800 rounded-full text-orange-800 focus:border-orange-400 focus:outline p-2" />
            </div>

            <div className="flex flex-col w-full">
                <label htmlFor="senha" className="px-5 text-orange-800 text-xl">Senha</label>
                <input type="password" id="senha" name="senha" placeholder="Senha" className="border-2 border-orange-800 rounded-full text-orange-800 focus:outline focus:border-orange-400 p-2" />
            </div>

            <button type="submit" className="rounded-full bg-orange-800 flex justify-center hover:bg-orange-400 text-white w-1/2 py-2">
            <span>Entrar</span>
            </button>

            <hr className="border-orange-400 w-full" />

            <p className="text-orange-800">
                Ainda não tem conta? {' '}
                <Link to="/cadastro" className="text-indigo-800 hover:text-orange-800">Cadastre-se</Link>
            </p>
            </form>
            <div className="bg-[url('https://plus.unsplash.com/premium_photo-1723651312201-b69641e26a54?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1119')] lg:block hidden bg-no-repeat w-full min-h-screen bg-cover bg-center">

            </div>

        </div>
        </>
    )
}
export default Login