import { Layout } from "../components/Layout"
import React, { useState } from "react"
import CryptoJS from "crypto-js"

export const FileEncryption = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [encryptedFile, setEncryptedFile] = useState(null)
  const [file, setFile] = useState(null)
  const [decryptedFile, setDecryptedFile] = useState(null)

  const key = CryptoJS.enc.Hex.parse("0918273645suco0918273645")
  const iv = CryptoJS.enc.Hex.parse("zyxwvutsrqponmlkjihgfedcba")

  const handleFirstFileChange = e => {
    setSelectedFile(e.target.files[0])
    setEncryptedFile(null)
    setDecryptedFile(null)

    const reader = new FileReader()

    reader.onloadend = () => {
      setSelectedFile(reader.result)
    }

    if (selectedFile) {
      reader.readAsDataURL(selectedFile)
    }
  }

  const encryptImage = () => {
    if (!selectedFile) return
    const reader = new FileReader()
    reader.readAsDataURL(selectedFile)
    reader.onload = () => {
      const encrypted = CryptoJS.Rabbit.encrypt(reader.result, key, {
        iv: iv
      })
      setEncryptedFile(encrypted.toString())
    }
    reader.onerror = error => {
      console.log("Error: ", error)
    }
  }

  const handleSecondFileChange = e => {
    setFile(e.target.files[0])
    setEncryptedFile(null)
    setDecryptedFile(null)

    const reader = new FileReader()

    reader.onloadend = () => {
      setFile(reader.result)
    }

    if (file) {
      reader.readAsText(file)
    }
  }

  const decryptImage = () => {
    if (!file) return
    const reader = new FileReader()
    reader.readAsText(file)
    reader.onloadend = () => {
      const decrypted = CryptoJS.Rabbit.decrypt(reader.result, key, {
        iv: iv
      }).toString(CryptoJS.enc.Utf8)
      fetch(decrypted)
        .then(res => res.blob())
        .then(blob => {
          const decryptedAsFile = new File([blob], "decrypted", {
            type: blob.type
          })
          setDecryptedFile(decryptedAsFile)
        })
    }
  }

  return (
    <Layout>
      <div className="grid grid-cols-2 gap-4 px-4 pb-4 pt-32 max-h-screen">
        <div className="flex flex-col h-[500px] rounded-md p-5 bg-gray-700 items-center justify-center">
          <label
            htmlFor="image"
            className="flex w-full h-full items-center justify-center font-light">
            {!selectedFile ? (
              <span className="hover:underline hover:ease-linear hover:underline-offset-4">
                Escolha o <span className="font-bold">Ficheiro</span> para{" "}
                <span className="underline underline-offset-4">Encriptar</span>
              </span>
            ) : (
              selectedFile.name
            )}
          </label>

          <input
            hidden
            id="image"
            type="file"
            onChange={handleFirstFileChange}
          />
        </div>
        <div className="flex flex-col h-[500px] items-center p-5 justify-center rounded-md overflow-hidden bg-gray-700">
          <div className="w-full h-full">
            <label
              htmlFor="file"
              className="flex w-full h-full items-center justify-center font-light">
              {!file ? (
                <span className="hover:underline hover:ease-linear hover:underline-offset-4">
                  Escolha o <span className="font-bold">Ficheiro</span> para{" "}
                  <span className="underline underline-offset-4">
                    Desencriptar
                  </span>
                </span>
              ) : (
                file.name
              )}
            </label>
            <input
              hidden
              id="file"
              type="file"
              onChange={handleSecondFileChange}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 px-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <button
            className="w-56 h-10 rounded-md italic bg-gray-700 shadow-lg disabled:cursor-not-allowed"
            onClick={encryptImage}
            disabled={!selectedFile}>
            Encrypt
          </button>
          {encryptedFile && (
            <a
              className="w-56 h-10 rounded-md bg-gray-700 shadow-lg inline-flex items-center justify-center"
              download="encrypted"
              href={URL.createObjectURL(
                new File([encryptedFile], "encrypted")
              )}>
              Download
            </a>
          )}
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <button
            onClick={decryptImage}
            className="w-56 h-10 rounded-md italic bg-gray-700 shadow-lg disabled:cursor-not-allowed"
            disabled={!file}>
            Decrypt
          </button>
          {decryptedFile && (
            <a
              className="w-56 h-10 rounded-md bg-gray-700 shadow-lg inline-flex items-center justify-center"
              download="decrypted"
              href={URL.createObjectURL(decryptedFile)}>
              Download
            </a>
          )}
        </div>
      </div>
    </Layout>
  )
}
