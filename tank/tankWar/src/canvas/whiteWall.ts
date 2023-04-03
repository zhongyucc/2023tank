import config from "../config";
import model from "../model/whiteWall";
import canvasAbstract from "./canvasAbstract";
class WhiteWall extends canvasAbstract {
  num(): number {
    return config.whiteWall.num
  }
  model(): ModelConstructor {
    return model
  }
  render(): void {
    super.createModels()
    super.renderModels()
  }
}
export default new WhiteWall()