const el = document.querySelector<HTMLCanvasElement>("#canvas")!
const app = el.getContext('2d')!
app.fillStyle='red'
// app.fillRect(0,0,300,300)
// app.fillStyle = '#16a098'
// app.fillRect(el.width/2-50,el.height/2-50,100,100)
// app.strokeStyle = '#8e44ad'
// app.lineWidth = 30
// app.lineJoin = 'round'
// app.strokeRect(50,50,200,200)
// app.fillStyle = '#8e44ad'
// app.beginPath()
// app.strokeStyle = 'red'
// app.lineWidth = 20
// app.arc(100,100,50,0,2*Math.PI)
// app.stroke()
// app.beginPath()
// app.strokeStyle = "red"
// app.lineWidth = 10
// app.moveTo(el.width/2,10)
// app.lineTo(el.width,250)
// app.lineTo(10,250)
// app.closePath()
// app.stroke()
// const gradient = app.createLinearGradient(0,0,300,300)
// gradient.addColorStop(0,'#16a085')
// gradient.addColorStop(0.5,'#e67e22')
// gradient.addColorStop(1,'#9b59b6')
// // app.strokeStyle = gradient
// // app.lineWidth = 10
// // app.lineJoin = 'round'
// // app.strokeRect(50,50,100,100)
// app.fillStyle = '#34495e'
// app.fillRect(0,0,el.width,el.height)
// app.font='60px SourceHanSansSC-Normal'
// app.fillStyle=gradient
// app.lineWidth = 2
// app.textBaseline='top'
// app.fillText('hello',50,0)
// const img = document.createElement('img')
// img.src = '../images/0.8371542293078.jpg'
// img.onload = ()=>{
//  const pattern =  app.createPattern(img,'repeat')!
//  app.fillStyle = pattern
//  app.fillRect(0,0,300,300)
// }
// app.fillStyle = '#000'
// const img = document.createElement('img')
// img.src = '../images/0.8371542293078.jpg'
// img.onload = ()=>{
//   el.width = img.naturalWidth*scale(img,el)
//   el.height = img.naturalHeight*scale(img,el)

//   app.fillRect(0,0,el.width,el.height)
//   app.drawImage(img,0,0,el.width,el.height)
// }
// function scale(img:HTMLImageElement,el:HTMLCanvasElement){
//   return Math.min(el.width/img.naturalWidth,el.height/img.naturalHeight)
// }

// app.fillStyle = '#000'
// app.fillRect(0,0,300,300)
// // for(let i =0;i<1000;i++)
// // {
// //   app.fillStyle = 'white'
// //   app.fillRect(Math.random()*el.width,Math.random()*el.height,5,5)
// // }
// for(let i =0;i<20;i++)
// {
//   app.beginPath()
//   app.fillStyle = ['#1abc9c','#27ea60','#29809b','#32809b','#29800b'].sort(()=>(Math.floor(Math.random()*3)?1:-1))[0]
//   app.arc(Math.random()*(el.width/2),Math.random()*(el.height/2),5+Math.random()*10,0,2*Math.PI)
//   app.fill()
// }
export default{}