import config from "../config"
import model from "../model/boss"
import canvasAbstract from "./canvasAbstract"
export default new (class Boss extends canvasAbstract implements ICanvas {
  stop(): void {
    throw new Error("Method not implemented.")
  }
  num(): number {
    return 0
  }
  model(): ModelConstructor {
    return model
  }
  render(): void {
    this.createModels()
    this.renderModels()   
    
  }
  protected createModels() { 
   [{x:config.canvas.width/2,y:config.canvas.height-config.model.height}].forEach(position=>{
      const model = this.model() as ModelConstructor
      const instance = new model(position.x,position.y)
      this.models.push(instance)
    })
  }
})('boss')