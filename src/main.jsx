import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import "./App.css"
import "./index.css"
import { FileEncryption, Home, ImageEncryption, TextEncryption } from "./pages"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/encriptarImagem",
    element: <ImageEncryption />
  },
  {
    path: "/encriptarFicheiro",
    element: <FileEncryption />
  },
  {
    path: "/encriptarTexto",
    element: <TextEncryption />
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
