import file_encrypt from "../assets/file_encryption.jpg"
import img_encrypt from "../assets/img_encrypt.jpg"
import { Card } from "../components/Card"
import Logo from "../components/Logo"
import Texto from "../components/Texto"

export const Home = () => {
  return (
    <div className="home_page p-5 h-screen grid gap-4 grid-cols-4 grid-rows-3">
      <Logo />
      <Texto />
      <Card
        href="/encriptarImagem"
        gridArea="img"
        src={img_encrypt}
        title="Imagens"
        linkLabel="Encriptar Imagens"
      />
      <Card
        href="/encriptarFicheiro"
        gridArea="ficheiro"
        src={file_encrypt}
        title="Ficheiros"
        linkLabel="Encriptar Ficheiros"
      />
    </div>
  )
}
