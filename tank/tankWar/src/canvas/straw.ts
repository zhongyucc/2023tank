import config from "../config"
import model from "../model/straw"
import canvasAbstract from "./canvasAbstract"
export default new (class Straw extends canvasAbstract implements ICanvas {
  stop(): void {
    throw new Error("Method not implemented.")
  }
  num(): number {
    return config.straw.num
  }
  model(): ModelConstructor {
    return model
  }
  render(): void {
    super.createModels()
    super.renderModels()   
    console.log(this);
    
  }
})('straw')