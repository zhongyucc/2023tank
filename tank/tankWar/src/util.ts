import boss from "./canvas/boss"
import wall from "./canvas/wall"
import whiteWall from "./canvas/whiteWall"
import config from "./config"

export default {
  isCanvasTouch(x: number, y: number, width = config.model.width, height = config.model.height):boolean{
    return x < 0 || x + width > config.canvas.width || y < 0 || y + height > config.canvas.height
  },
  isModelTouch(x: number, y: number, width = config.model.width, height = config.model.height, models = [ ...wall.models, ...whiteWall.models,...boss.models]): IModel|undefined {
    return models.find(model => {
      const state = x + width <= model.x ||
        x >= model.x + model.width ||
        y + height <= model.y ||
        y >= model.y + model.height  
      return !state
    })
  }
}