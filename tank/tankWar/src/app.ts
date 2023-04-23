import './style.scss'
import config from './config'
import straw from './canvas/straw'
import { image, promises } from './service/image'
import wall from './canvas/wall'
import whiteWall from './canvas/whiteWall'
import water from './canvas/water'
import tank from './canvas/tank'
import bullet from './canvas/bullet'
import boss from './canvas/boss'
import player from './canvas/player'
import audio from './service/audio'

const app = document.querySelector<HTMLDivElement>('#app')!
app.style.width = config.canvas.width + 'px'
app.style.height = config.canvas.height + 'px'
export default {
  isStart: false,
  status: 9,
  Interval: 0,
  boorStrap() {
    app.addEventListener('click', async () => {
      await this.start()
      this.Interval = setInterval(() => {
        if (tank.models.length == 0) this.status = 1
        if (player.models.length == 0 || boss.models.length == 0) this.status = 2
        if (this.status != 9) this.stop()
      })
    })

  },
  async stop() { 
    clearInterval(this.Interval)
    tank.stop()
    bullet.stop()
    this.text()
  },
  text(){
    const el = document.createElement('canvas')
    el.width = config.canvas.width
    el.height = config.canvas.height
    const ctx = el.getContext('2d')!
    ctx.fillStyle = 'red'
    ctx.font = '80px CascadiaMono'
    ctx.textBaseline = 'top'
    ctx.textAlign = 'center'
    ctx.fillText(this.status ==1?'游戏胜利':'游戏失败',config.canvas.width/2,config.canvas.height/2)
    app.appendChild(el)
  },
  async start() {
    if (this.isStart) return
    audio.start()
    this.isStart = true
    app.style.backgroundImage = 'none'
    await Promise.all(promises)
    straw.render()
    wall.render()
    whiteWall.render()
    water.render()
    tank.render()
    bullet.render()
    boss.render()
    player.render()
  }
}