import { Link } from "react-router-dom"
import logo from "../assets/logo_navbar.png"

export function Navbar() {
  const links = [
    { name: "Texto", path: "/encriptarTexto" },
    { name: "Imagem", path: "/encriptarImagem" },
    { name: "Ficheiro", path: "/encriptarFicheiro" }
  ]

  return (
    <nav className="flex justify-between items-center px-16 h-24">
      <Link to="/">
        <img width="150px" height="30px" src={logo}></img>
      </Link>
      <div className="flex items-center gap-12">
        {links.map(link => (
          <Link
            className="py-1 px-3 hover:shadow-[0_1.5px_00#1d4ed8] transition-shadow hover:ease-in"
            key={link.path}
            to={link.path}>
            {link.name}
          </Link>
        ))}
      </div>
      <div className="w-[150px]" />
    </nav>
  )
}
