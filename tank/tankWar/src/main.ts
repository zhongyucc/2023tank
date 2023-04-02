import './style.scss'
import config from './config'
import straw from './canvas/straw' 
import { image, promises } from './service/image'
const app = document.querySelector<HTMLDivElement>('#app')!
app.style.width = config.canvas.width + 'px'
app.style.height = config.canvas.height + 'px'

async function bootstrap() {
  await Promise.all(promises)
  straw.render()
}

void bootstrap()