import config from "../config";
import canvasAbstract from "./canvasAbstract";
class Straw extends canvasAbstract{
  render(): void {
    super.drawModels(config.straw.num)
  }
}
export default new Straw()