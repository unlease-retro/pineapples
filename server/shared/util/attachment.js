const fs = require('fs')
const uuid = require('node-uuid')
const PDFKit = require('pdfkit')

const doc = new PDFKit()


exports.create = (from, to, message) => {

  let filename = uuid.v4()
  let filepath = `/tmp/pineapples/${filename}.pdf`
  let writeStream = fs.createWriteStream(filepath)

  return new Promise((resolve, reject) => {

    doc.pipe(writeStream)
    doc.fontSize(25).text(`From: ${from}`, 100, 80)
    doc.fontSize(25).text(`To: ${to}`, 100, 120)
    doc.fontSize(25).text('Message:', 100, 160)
    doc.fontSize(12).text(message, 100, 200)
    doc.end()

    writeStream.on('finish', () => resolve(filepath) )
    writeStream.on('error', () => reject() )

  })

}