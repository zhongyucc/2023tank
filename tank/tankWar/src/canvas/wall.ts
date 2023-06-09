import config from "../config";
import model from "../model/wall";
import canvasAbstract from "./canvasAbstract";
export default new (class Wall extends canvasAbstract implements ICanvas {
  stop(): void {
    throw new Error("Method not implemented.");
  }
  num(): number {
    return config.wall.num
  }
  model(): ModelConstructor {
    return model
  }
  render(): void {
    super.createModels()
    this.createBossWall()
    super.renderModels()
  }
  createBossWall() {
    const cw = config.canvas.width
    const ch = config.canvas.height
    const mw = config.model.width
    const mh = config.model.height
    const pos = [
      { x: cw / 2 - mw * 2, y: ch - mh },
      { x: cw / 2 - mw * 2, y: ch - mh * 2 },
      { x: cw / 2 - mw * 2, y: ch - mh * 3 },
      { x: cw / 2 - mw, y: ch - mh * 3 },
      { x: cw / 2, y: ch - mh * 3 },
      { x: cw / 2 + mw, y: ch - mh * 3 },
      { x: cw / 2 + mw * 2, y: ch - mh * 3 },
      { x: cw / 2 + mw * 2, y: ch - mh * 3 },
      { x: cw / 2 + mw * 2, y: ch - mh * 2 },
      { x: cw / 2 + mw * 2, y: ch - mh },
    ]
    pos.forEach(position => {
      const model = this.model() as ModelConstructor
      const instance = new model(position.x, position.y)
      this.models.push(instance)
    })
  }
})('wall')