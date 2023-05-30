import { Link } from "react-router-dom"

export default function Texto() {
  return (
    <div className="before:bg-texto before:inset-0 before:absolute relative before:bg-cover before:opacity-50 bg-gray-800 texto rounded-xl overflow-hidden">
      <div className="relative rounded-xl flex flex-col items-center justify-center w-full h-full">
        <Link
          to="/encriptarTexto"
          className="fill-white relative group p-10 border border-white rounded-full flex items-center hover:border-blue-950 transition-colors justify-center">
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-gradient-radial from-blue-950 to-blue-800 hover:opacity-1 transition-opacity" />
          <svg
            className="z-10"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd">
            <path d="M6 6c0-3.311 2.689-6 6-6s6 2.688 6 6v4h3v14h-18v-14h3v-4zm14 5h-16v12h16v-12zm-13-5v4h10v-4c0-2.76-2.24-5-5-5s-5 2.24-5 5z" />
          </svg>
        </Link>
        <h3 className="text-2xl absolute bottom-5">Texto</h3>
      </div>
    </div>
  )
}
