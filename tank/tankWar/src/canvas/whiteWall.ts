import config from "../config";
import model from "../model/whiteWall";
import canvasAbstract from "./canvasAbstract";
export default new (class WhiteWall extends canvasAbstract implements ICanvas {
  stop(): void {
    throw new Error("Method not implemented.");
  }
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
})('whitewall')