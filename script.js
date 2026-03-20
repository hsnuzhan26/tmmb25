const canvas = document.getElementById('cardCanvas')
const ctx = canvas.getContext('2d')

const input = document.getElementById('nameInput')
const downloadBtn = document.getElementById('downloadBtn')

const template = new Image()
template.src = 'ucapan.png'

// load font
const font = new FontFace('Montserrat', 'url(Montserrat-SemiBold.ttf)')
font.load().then(f => {
  document.fonts.add(f)
})

// ✅ gambar dulu yang pasti ke-load
template.onload = () => {
  // ✅ set ukuran canvas
  canvas.width = template.width
  canvas.height = template.height

  // ✅ tunggu font
  document.fonts.ready.then(() => {
    drawCard('')
  })
}

input.addEventListener('input', () => {
  drawCard(input.value)
})

function drawCard(name) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  ctx.drawImage(template, 0, 0)

  ctx.fillStyle = '#FFFFFF'
  ctx.font = '60px "Montserrat"'
  ctx.textAlign = 'center'

  // ✅ posisi lebih aman
  ctx.fillText(name, canvas.width / 2, canvas.height * 0.7)
}

downloadBtn.addEventListener('click', () => {
  // HP friendly
  window.open(canvas.toDataURL('image/png'))
})
