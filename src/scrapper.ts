import { readImage } from './ocr'
import { start } from './browser'

const boletimPage = 'https://itapevi.sp.gov.br/boletins-covid-19/'

export const getInfo = async () => {
  const browser = await start()
  const page = await browser.newPage();
  await page.goto(boletimPage, { waitUntil: 'networkidle0' })
  await page.waitForSelector('#wppm-ajax-posts-0-sub-1')
  const imgsURL = await page.evaluate(() => {
    let urls = []
    let articles = document.querySelectorAll("article")

    articles.forEach(article => {
      var imgUrl = article.children[0].children[0].children[0].children[0]['src']
      urls.push(imgUrl)
    })

    return urls

    });
  imgsURL.forEach(url => readImage(url))
  await browser.close()
  return imgsURL
}