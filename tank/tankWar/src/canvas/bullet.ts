import model from "../model/bullet"
import audio from "../service/audio";
import canvasAbstract from "./canvasAbstract"
import player from "./player";
import tank from "./tank";
export default new (class Bullet extends canvasAbstract implements ICanvas {
  intervalid = 0
  num(): number {
    return 0
  }
  model(): BulletModelConstructor {
    return model
  }
  stop(): void {
    if(this.intervalid){
      clearInterval(this.intervalid)
    }
  }
  render(): void {
    super.createModels()
    super.renderModels()
    this.intervalid = setInterval(() => {
      this.createBullet()
      this.renderModels()
    }, 10)

  }
  createBullet() {
    tank.models.forEach(tank => {
      const isExists = this.models.some(m => m.tank == tank)
      if (!isExists) {
        this.models.push(new model(tank))
      }
    })
  }
  addPalyerBullet() {
    this.models.push(new model(player.models[0]))
    audio.fire()
  }
})('bullet')