import canvasAbstract from "./canvasAbstract";
import model from "../model/tank"
import config from "../config";
import position from "../service/position";
class tank extends canvasAbstract implements ICanvas {
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
  protected renderModels(){
    this.canvas.clearRect(0,0,config.canvas.width,config.canvas.height)
    this.models.forEach(model => {
      model.render()
      this.canvas.drawImage(model.image(),model.x,model.y,config.model.width,config.model.height)
    })
  }
  protected createModels(): void {
    for (let i = 0; i < this.num(); i++) {
      const pos = position.position()
      const model = this.model()
      const instance = new model(this.canvas, pos.x, 0)
      this.models.push(instance)
    }
  }
}
export default new tank()