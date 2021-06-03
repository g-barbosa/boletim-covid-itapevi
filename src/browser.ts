import * as puppeteer from 'puppeteer'

export const start = async () => {
  let browser
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      'ignoreHTTPSErrors': true
    })
  } catch(err) {
    console.log(err)
  }
  return browser
}