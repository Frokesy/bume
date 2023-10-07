import { NextApiHandler } from 'next'
import puppeteer from 'puppeteer'
import fs from 'fs'
import path from 'path'

const Handler: NextApiHandler = async (req, res) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto('http://localhost:3000/')
  await page.emulateMediaType('screen')

  const pdfBuffer = await page.pdf({ format: 'A4' })

  const pdfPath = path.join(process.cwd(), 'public', 'my-pdf.pdf')
  fs.writeFileSync(pdfPath, pdfBuffer)

  res.send(`/my-pdf.pdf`)

  await browser.close()
}