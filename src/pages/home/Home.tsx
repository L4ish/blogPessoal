import ListaPostagens from "../../components/postagem/listapostagens/ListaPostagens"
import ModalPostagem from "../../components/postagem/modalpostagem/ModalPostagem"

function Home() {
    return (
        <>
            <div className="bg-orange-800 flex justify-center pt-5 pb-5 font-turret">
                <div className="container grid grid-cols-2 text-white">
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className="text-5xl font-bold">
                            Seja Bem Vinde!
                        </h2>

                        <p className="text-x1">
                            Café: o verdadeiro framework da produtividade.
                        </p>

                        <div className="flex justify-around gap-4">
                             <ModalPostagem />
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
                            alt="Imagem Página Home"
                            className="w-4/7 rounded-full"
                        />
                    </div>
                </div>
            </div>
            <ListaPostagens />
        </>
    )
}

export default Home