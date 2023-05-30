import logo from "../assets/logo.png"

export default function Logo() {
  return (
    <div className="logo w-full h-full bg-gray-800 rounded">
      <img className="object-contain h-full w-full" src={logo} />
    </div>
  )
}
