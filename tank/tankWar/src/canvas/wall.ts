import config from "../config";
import model from "../model/wall";
import canvasAbstract from "./canvasAbstract";
class Wall extends canvasAbstract implements ICanvas{
  num(): number {
    return config.wall.num
  }
  model(): ModelConstructor {
    return model
  }
  render(): void {
    super.createModels()
    super.renderModels()
  }
}
export default new Wall()