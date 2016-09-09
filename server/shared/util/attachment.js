const fs = require('fs')
const uuid = require('node-uuid')
const PDFKit = require('pdfkit')

exports.create = (deliveries, clusterName) => {

  let ctx  = new PDFKit()
  let filename = uuid.v4()
  let filepath = `/tmp/unlease/image/upload/${filename}.pdf`
  let writeStream = fs.createWriteStream(filepath)
  
  return new Promise( (resolve, reject) => {

    ctx.pipe(writeStream)

    ctx.fontSize(25).fillColor('red').text(`Cluster name : ${clusterName}`, 100, 100)
    ctx.moveDown(1)
    ctx.fontSize(12)

    for (let item of deliveries) {

      ctx.fillColor('#000000').text('From:')
      ctx.moveDown(0.5)
      ctx.fillColor('#555555').text(item.from || 'N/A')

      ctx.moveDown(1)

      ctx.fillColor('#000000').text('To:')
      ctx.moveDown(0.5)
      ctx.fillColor('#555555').text(item.to)

      ctx.moveDown(1)

      ctx.fillColor('#000000').text('Message:')
      ctx.moveDown(0.5)
      ctx.fillColor('#555555').text(item.message)

      ctx.moveDown(3)

    }

    ctx.end()

    writeStream.on( 'finish', () => resolve(filepath) )

    writeStream.on( 'error', (e) => reject(e) )

  } )

}