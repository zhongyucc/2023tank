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

const app = document.querySelector<HTMLDivElement>('#app')!
app.style.width = config.canvas.width + 'px'
app.style.height = config.canvas.height + 'px'

async function bootstrap() {
  await Promise.all(promises)
  straw.render()
  wall.render()
  whiteWall.render()
  water.render()
  tank.render()
  bullet.render()
  boss.render()
}
void bootstrap()