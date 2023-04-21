import canvasAbstract from "./canvasAbstract";
import model from "../model/tank"
import config from "../config";
import position from "../service/position";
export default new ( class tank extends canvasAbstract implements ICanvas {
  num(): number {
    return config.tank.num
  }
  model(): ModelConstructor {
    return model
  }
  render(): void {
    this.createModels()
    this.renderModels()
    setInterval(()=>this.renderModels(),config.timeout)
  }
  public renderModels(){
    this.ctx.clearRect(0,0,config.canvas.width,config.canvas.height)
    this.models.forEach(model => {
      model.render()
      this.ctx.drawImage(model.image(),model.x,model.y,config.model.width,config.model.height)
    })
  }
  protected createModels(): void {
    for (let i = 0; i < this.num(); i++) {
      const pos = position.position()
      const model = this.model()
      const instance = new model(pos.x, 0)
      this.models.push(instance)
    }
  }
})('tank')