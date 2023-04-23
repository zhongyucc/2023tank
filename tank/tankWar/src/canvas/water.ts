import config from "../config";
import model from "../model/water";
import canvasAbstract from "./canvasAbstract";
export default new ( class Water extends canvasAbstract implements ICanvas{
  stop(): void {
    throw new Error("Method not implemented.");
  }
  num(): number {
    return config.water.num
  }
  model(): ModelConstructor {
    return model
  }
  render(): void {
    super.createModels()
    super.renderModels()
  }
})('water')