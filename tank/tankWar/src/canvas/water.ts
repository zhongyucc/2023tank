import config from "../config";
import model from "../model/water";
import canvasAbstract from "./canvasAbstract";
class Water extends canvasAbstract {
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
}
export default new Water()