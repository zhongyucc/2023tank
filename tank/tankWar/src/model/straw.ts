import { image } from "../service/image";
import modelAbstract from "./modelAbstract";

export default class Straw extends modelAbstract {
  render(): void {
    super.draw(image.get('straw')!)
  }
}