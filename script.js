const canvas = document.getElementById('cardCanvas')
const ctx = canvas.getContext('2d')

const input = document.getElementById('nameInput')
const downloadBtn = document.getElementById('downloadBtn')

const template = new Image()
template.src = 'ucapan.png'

const font = new FontFace('Montserrat', 'url(Montserrat-SemiBold.ttf)')
font.load().then(f => {
  document.fonts.add(f)
})

// tunggu gambar + font siap
Promise.all([
  document.fonts.ready
]).then(() => {
  template.onload = () => {
    drawCard('')
  }
})

input.addEventListener('input', () => {
  drawCard(input.value)
})

function drawCard(name) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  ctx.drawImage(template, 0, 0, canvas.width, canvas.height)

  ctx.fillStyle = '#FFFFFF'
  ctx.font = '60px "Montserrat"'
  ctx.textAlign = 'center'

  ctx.fillText(name, canvas.width / 2, canvas.height / 3 + 750)
}

downloadBtn.addEventListener('click', () => {
  const link = document.createElement('a')
  link.download = 'idulfitri.png'
  link.href = canvas.toDataURL('image/png')
  link.click()
})
