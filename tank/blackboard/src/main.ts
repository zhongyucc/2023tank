import './style.css'
class Blackboard {
  constructor(
    public el = document.querySelector<HTMLCanvasElement>('#canvas')!,
    public app = el.getContext('2d')!,
    private height: number = el.height,
    private width: number = el.width,
    private btn: HTMLDivElement = document.createElement('div'),
    private bgColor = '#000',
    private lineColor = 'white',
    private oldLineColor = lineColor) {
    this.initCanvas()
    this.bindEvent()
    this.earsa()
    this.write()
  }

  private bindEvent() {
    const drawCallback = this.drawLine.bind(this)
    this.el.addEventListener('mousedown', (e: MouseEvent) => {
      this.app.beginPath()
      this.app.strokeStyle = this.lineColor
      this.el.addEventListener('mousemove', drawCallback)
    })
    document.addEventListener('mouseup', () => {
      this.el.removeEventListener('mousemove', drawCallback)
    })

  }
  private drawLine(event: MouseEvent) {
    this.app.lineTo(event.offsetX, event.offsetY)
    this.app.stroke()
  }
  private initCanvas() {
    this.el.insertAdjacentElement('afterend', this.btn)
    this.app.fillStyle = this.bgColor
    this.app.fillRect(0, 0, this.width, this.height)
  }
  public setBgColor(color: string) {
    this.bgColor = color
    this.app.fillStyle = this.bgColor
    this.app.fillRect(0, 0, this.el.width, this.el.height)
    return this
  }
  public setLineColor() {
    const colors = ['#e67e22', '#e74c3c', '#f39c12', '#9b59b6', '#ecf0f1']
    const container = document.createElement('div')
    container.classList.add('color_box')
    colors.forEach(color => {
      const div = document.createElement('div')
      div.style.cssText = `background:${color}`
      container.insertAdjacentElement('afterbegin', div)
      div.addEventListener('click', () => { 
        this.lineColor = color 
        this.oldLineColor = this.lineColor
      })
    })
    this.btn.insertAdjacentElement('beforebegin', container)
    return this
  }
  // 清屏
  public clear() {
    const el = document.createElement('button')
    el.innerHTML = '清屏'
    this.btn.insertAdjacentElement('afterbegin', el)
    el.addEventListener('click', () => {
      this.lineColor = this.oldLineColor
      this.app.lineWidth = 1
      this.app.fillStyle = this.bgColor
      this.app.fillRect(0, 0, this.width, this.height)
    })
    return this
  }
  // 橡皮擦
  public earsa() {
    const el = document.createElement('button')
    el.innerHTML = '橡皮'
    this.btn.insertAdjacentElement('afterbegin', el)
    el.addEventListener('click', () => {
      this.oldLineColor =this.lineColor
      this.lineColor = this.bgColor
      this.app.lineWidth = 10
    })
    return this
  }
  // 画画
  public write() {
    const el = document.createElement('button')
    el.innerHTML = '写字'
    this.btn.insertAdjacentElement('afterbegin', el)
    el.addEventListener('click', () => {
      this.lineColor = this.oldLineColor
      this.app.lineWidth =1
    })
    return this
  }
  //截图
  public short(){
    const el = document.createElement('button')
    el.innerHTML = '截图'
    this.btn.insertAdjacentElement('afterbegin', el)
    const img  = document.createElement('img')
    el.addEventListener('click', () => {
      img.src=  this.el.toDataURL('image/jepg')
      img.classList.add('img_short')
    })
    this.btn.insertAdjacentElement('afterend',img)
    return this
  }
}
const instance = new Blackboard()
instance.clear().setBgColor('#2ecc71')
instance.setLineColor().short()
