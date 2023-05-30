import { Layout } from "../components/Layout"
import React, { useState } from "react"
import CryptoJS from "crypto-js"

export const FileEncryption = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [previewImage, setPreviewImage] = useState(null)

  const key = CryptoJS.enc.Hex.parse("0918273645suco0918273645")
  const iv = CryptoJS.enc.Hex.parse("zyxwvutsrqponmlkjihgfedcba")

  const handleFileChange = event => {
    const file = event.target.files[0]
    setSelectedImage(file)

    // Create a FileReader instance
    const reader = new FileReader()

    // Read the selected file and set the preview image
    reader.onloadend = () => {
      setPreviewImage(reader.result)
    }

    if (file) {
      reader.readAsDataURL(file) // meme type encoded base 64 ---  text poajwd-osadaw das waodnjw
    }
  }

  const handleUpload = () => {
    if (!selectedImage) {
      return
    }

    const encrypted = CryptoJS.Rabbit.encrypt(selectedImage, key, {
      iv: iv
    })

    const encryptedBlob = new Blob([encrypted.toString()], {
      type: selectedImage.type
    })

    setEncryptedImage(encryptedBlob)
    console.log(encryptedBlob)
  }

  const decryptImage = () => {
    const decrypted = CryptoJS.Rabbit.decrypt(encryptedImage, key, {
      iv: iv
    })
    setDecryptedImage(decrypted.toString(CryptoJS.enc.Utf8))
    console.log(decryptedImage)
  }

  return (
    <Layout>
      <div className="grid grid-cols-2 gap-4 px-4 pb-4 pt-32 max-h-screen">
        <div className="flex flex-col h-80 rounded-3xl p-5 bg-gray-700 items-center justify-center">
          <label htmlFor="file" className="flex w-full h-full items-center justify-center">
            {!selectedImage ? "Escolha o Ficheiro" : selectedImage.name}
          </label>
          {previewImage && (
            <img
              src={previewImage}
              alt="Preview"
              className="max-h-[16rem] h-full object-contain w-full"
            />
          )}
          <input hidden id="file" type="file" onChange={handleFileChange} />
        </div>
        <div className="flex flex-col h-80 rounded-3xl overflow-hidden bg-gray-700">
          <div className="flex flex-col items-center">
            <p></p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 px-4">
        <div className="flex flex-col items-center justify-center">
          <button
            className="w-56 h-10 rounded-3xl bg-gray-700"
            onClick={handleUpload}
            disabled={!selectedImage}>
            Encrypt
          </button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <button onClick={decryptImage} className="w-56 h-10 rounded-3xl bg-gray-700">Decrypt</button>
        </div>
      </div>
    </Layout>
  )
}
