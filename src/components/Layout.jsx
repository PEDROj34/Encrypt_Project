import { Navbar } from "./Navbar"

export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen w-full">
      <Navbar />
      <main className="h-full">{children}</main>
    </div>
  )
}
