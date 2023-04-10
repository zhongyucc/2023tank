import config from "../config";
import model from "../model/straw";
import canvasAbstract from "./canvasAbstract";
class Straw extends canvasAbstract implements ICanvas {
  num(): number {
    return config.straw.num
  }
  model(): ModelConstructor {
    return model
  }
  render(): void {
    super.createModels()
    super.renderModels()
  }
}
export default new Straw()