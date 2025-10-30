import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import type Usuario from "../../models/Usuario";
import { ClipLoader } from "react-spinners";
import { cadastrarUsuario } from "../../services/Service";

function Cadastro() {
  const navigate = useNavigate(); //navegação entre páginas

  const [isLoading, setIsLoading] = useState<boolean>(false); //a tipagem não é obrigatória para tipos primitivos

  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  useEffect(() => {
    if (usuario.id !== 0) {
      retornar();
    }
  }, [usuario]);

  function retornar() {
    navigate("/login");
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value);
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmarSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true);

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
        alert("Usuário cadastrado com sucesso!");
      } catch (error) {
        alert("Erro ao cadasrar usuário!");
      }
    } else {
      alert(
        "Dados do usuário inconsistentes! Verifique as informações do cadastro."
      );
      setUsuario({ ...usuario, senha: "" });
      setConfirmarSenha("");
    }
    setIsLoading(false);
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
        <div className="bg-[url('https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687')] lg:block hidden bg-no-repeat w-full min-h-screen bg-cover bg-center"></div>
        <form className="flex justify-center items-center flex-col w-2/3 gap-3 font-turret" onSubmit={cadastrarNovoUsuario}>
          <h2 className="text-orange-800 text-4xl">Cadastre-se</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="nome" className="px-5 text-orange-800 text-xl">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="border-3 border-orange-800 rounded-full p-2 focus:border-orange-400 focus:outline text-orange-800"
              value = {usuario.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="usuario" className="px-5 text-orange-800 text-xl">
              Usuário
            </label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuário"
              className="border-3 border-orange-800 rounded-full p-2 focus:border-orange-400 focus:outline text-orange-800"
              value = {usuario.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="foto" className="px-5 text-orange-800 text-xl">
              Foto
            </label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Foto"
              className="border-3 border-orange-800 rounded-full p-2 focus:border-orange-400 focus:outline text-orange-800"
              value = {usuario.foto}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="senha" className="px-5 text-orange-800 text-xl">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-3 border-orange-800 rounded-full p-2 focus:border-orange-400 focus:outline text-orange-800"
              value = {usuario.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>

          <div className="flex flex-col w-full">
            <label
              htmlFor="confirmarSenha"
              className="px-5 text-orange-800 text-xl"
            >
              Confirmar senha
            </label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirmar senha"
              className="border-3 border-orange-800 rounded-full p-2 focus:border-orange-400 focus:outline text-orange-800"
              value={confirmarSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
            />
          </div>

          <div className="flex justify-around w-full gap-8">
            <button
              type="reset"
              className="rounded-full text-white bg-orange-800 hover:bg-orange-400 w-1/2 py-2"
              onClick={retornar}
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="rounded-full text-white bg-orange-400 hover:bg-orange-800 w-1/2 py-2 flex justify-center"
            >
              { isLoading ?
              <ClipLoader
              color="#ffffff"
              size={24}
              />:
                <span>Cadastrar</span>
                 }
         
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Cadastro;
