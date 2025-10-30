/*Diferente dos arquivos que definem um componente react, o arquivo que define a interface model, utilizará extensão .ts*/
import type Postagem from "./Postagem";

export default interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  foto: string;
  senha: string;
  postagem?: Postagem[] | null;
}
