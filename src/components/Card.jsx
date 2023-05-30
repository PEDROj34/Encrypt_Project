import clsx from "clsx"
import { Link } from "react-router-dom"


export function Card({ title, src, href, linkLabel, gridArea }) {
  return (
    <div
      className={clsx(
        gridArea,
        "flex flex-col h-full items-center justify-between w-full py-5 gap-10 rounded-xl bg-gray-800"
      )}>
      <div className="px-5">
        <h3 className="text-2xl">{title}</h3>
      </div>
      <div className="w-full h-full max-h-[200px] shadow-lg shadow-blue-700/30">
        <img className="w-full h-full object-cover" src={src} alt="image" />
      </div>
      <div className="px-5 w-full h-10 text-lg">
        <Link
          to={href}
          className="flex bg-gray-900 items-center hover:shadow-lg transition-shadow hover:shadow-blue-700/40 justify-center w-full h-full">
          {linkLabel}
        </Link>
      </div>
    </div>
  )
}
