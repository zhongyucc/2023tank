import config from "../config";
import model from "../model/player";
import canvasAbstract from "./canvasAbstract";
export default new (class Player extends canvasAbstract implements ICanvas {
  stop(): void {
    throw new Error("Method not implemented.");
  }
  num(): number {
    return 1
  }
  model(): ModelConstructor {
    return model
  }
  render(): void {
    this.createModels()
    super.renderModels()
  }
  // 生成模型实例
  protected createModels() {
    const cw: number = config.canvas.width
    const ch: number = config.canvas.height
    const mw: number = config.model.width
    const mh: number = config.model.height
    ;[{ x: cw / 2 - mw * 4, y: ch - mh }].forEach(position => {
      const model = this.model() as ModelConstructor
      const instance = new model(position.x, position.y)
      this.models.push(instance)
    })
  }
})('player')