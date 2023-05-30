import React, { useState } from "react"
import CryptoJS from "crypto-js"
import { Layout } from "../components/Layout"

export const ImageEncryption = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [encryptedImage, setEncryptedImage] = useState(null)
  const [file, setFile] = useState(null)
  const [decryptedImage, setDecryptedImage] = useState(null)

  const key = CryptoJS.enc.Hex.parse("0918273645suco0918273645")
  const iv = CryptoJS.enc.Hex.parse("zyxwvutsrqponmlkjihgfedcba")

  const handleImageChange = e => {
    setSelectedImage(e.target.files[0])
    setEncryptedImage(null)
    setDecryptedImage(null)

    const reader = new FileReader()

    reader.onloadend = () => {
      setSelectedImage(reader.result)
    }

    if (selectedImage) {
      reader.readAsDataURL(selectedImage)
    }
  }

  const encryptImage = () => {
    if (!selectedImage) return
    const reader = new FileReader()
    reader.readAsDataURL(selectedImage)
    reader.onload = () => {
      const encrypted = CryptoJS.Rabbit.encrypt(reader.result, key, {
        iv: iv
      })
      setEncryptedImage(encrypted.toString())
    }
    reader.onerror = error => {
      console.log("Error: ", error)
    }
  }

  const handleFileChange = e => {
    setFile(e.target.files[0])
    setEncryptedImage(null)
    setDecryptedImage(null)

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
          setDecryptedImage(decryptedAsFile)
        })
    }

    // converter decrypted de base64 para File
    /* setDecryptedImage(decrypted.toString(CryptoJS.enc.Utf8))
    console.log(decryptedImage) */
  }

  return (
    <Layout>
      <div className="grid grid-cols-2 gap-4 px-4 pb-4 pt-32 max-h-screen">
        <div className="flex flex-col h-80 rounded-md p-5 bg-gray-700 items-center justify-center">
          <label
            htmlFor="image"
            className="flex w-full h-full items-center justify-center font-light">
            {!selectedImage
              ? "Escolha a Imagem para Encriptar"
              : selectedImage.name}
          </label>

          {selectedImage && (
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Preview"
              className="max-h-[16rem] h-full object-contain w-full"
            />
          )}

          <input hidden id="image" type="file" onChange={handleImageChange} />
        </div>
        <div className="flex flex-col h-80 items-center justify-center rounded-md overflow-hidden bg-gray-700">
          <div className="w-full h-full">
            <label
              htmlFor="file"
              className="flex w-full h-full items-center justify-center font-light">
              {!file ? "Escolha a Imagem para Desencriptar" : file.name}
            </label>
            {decryptedImage && (
              <img
                src={URL.createObjectURL(decryptedImage)}
                alt="Preview"
                className="max-h-[16rem] h-full object-contain w-full"
              />
            )}
            <input hidden id="file" type="file" onChange={handleFileChange} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 px-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <button
            className="w-56 h-10 rounded-md italic bg-gray-700"
            onClick={encryptImage}
            disabled={!selectedImage}>
            Encrypt
          </button>
          {encryptedImage && (
            <a
              className="w-56 h-10 rounded-md bg-gray-700 inline-flex items-center justify-center"
              download="encrypted"
              href={URL.createObjectURL(
                new File([encryptedImage], "encrypted")
              )}>
              Download
            </a>
          )}
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <button
            onClick={decryptImage}
            className="w-56 h-10 rounded-md italic bg-gray-700">
            Decrypt
          </button>
          {decryptedImage && (
            <a
              className="w-56 h-10 rounded-md bg-gray-700 inline-flex items-center justify-center"
              download="decrypted"
              href={URL.createObjectURL(decryptedImage)}>
              Download
            </a>
          )}
        </div>
      </div>
    </Layout>
  )
}
