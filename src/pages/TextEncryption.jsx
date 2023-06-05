import CryptoJS from "crypto-js"
import { useState } from "react"
import { Layout } from "../components/Layout"

export const TextEncryption = () => {
  const [texto, setTexto] = useState("")
  const [textoEncrypted, setTextoEncrypted] = useState("")

  const key = CryptoJS.enc.Hex.parse("0918273645suco0918273645")
  const iv = CryptoJS.enc.Hex.parse("zyxwvutsrqponmlkjihgfedcba")

  const handleChange = evento => {
    setTexto(evento.target.value)
  }

  const handleChangeDecrypt = evento => {
    setTextoEncrypted(evento.target.value)
  }

  const encriptarTexto = () => {
    const ciphertext = CryptoJS.Rabbit.encrypt(texto, key, { iv: iv })
    const cipherTextString = ciphertext.ciphertext.toString(CryptoJS.enc.Base64)
    setTextoEncrypted(cipherTextString)
    setTexto("")
    console.log("Key:", key.toString())
    console.log("IV:", iv.toString())
    console.log("Encriptado:", cipherTextString)
  }

  const desencriptarTexto = () => {
    const ciphertext = CryptoJS.lib.CipherParams.create({
      ciphertext: CryptoJS.enc.Base64.parse(textoEncrypted)
    })

    const desencryptado = CryptoJS.Rabbit.decrypt(ciphertext, key, { iv: iv })
    const plaintext = desencryptado.toString(CryptoJS.enc.Utf8)

    console.log("Key:", key.toString())
    console.log("IV:", iv.toString())
    console.log("Original:", plaintext)

    setTexto(plaintext)
    setTextoEncrypted("")
  }
  return (
    <Layout>
      <div className="grid grid-cols-2 gap-4 px-4 pb-4 pt-32 max-h-screen">
        <div className="flex flex-col gap-4 items-center justify-center">
          <textarea
            className="bg-gray-700 w-full md:h-[400px] h-[500px] resize-none p-4 rounded-md outline-none"
            value={texto}
            onChange={handleChange}
            placeholder="Write text here to encrypt..."></textarea>
          <button
            disabled={!texto}
            onClick={encriptarTexto}
            className="w-56 h-10 italic shadow-lg inline-flex items-center justify-center hover:bg-gray-800 bg-gray-700 rounded-md p-3 disabled:cursor-not-allowed">
            Encrypt
          </button>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <textarea
            className="bg-gray-700 w-full md:h-[400px] h-[500px] resize-none p-4 rounded-md outline-none"
            value={textoEncrypted}
            onChange={handleChangeDecrypt}
            placeholder="Write text here to encrypt..."></textarea>
          <button
            disabled={!textoEncrypted}
            onClick={desencriptarTexto}
            className="w-56 h-10 italic shadow-lg inline-flex items-center justify-center hover:bg-gray-800 bg-gray-700 rounded-md p-3 disabled:cursor-not-allowed">
            Decrypt
          </button>
        </div>
      </div>
    </Layout>
  )
}
