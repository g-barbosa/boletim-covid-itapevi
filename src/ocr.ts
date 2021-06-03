import * as tesseract from 'node-tesseract-ocr'

export const readImage = async (urlImg) => {
  try {
    const text = await tesseract.recognize(urlImg)
    console.log(text)
  } catch (error) {
    console.log(error.message)
  }
}