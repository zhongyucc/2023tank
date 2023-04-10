import { image } from "../service/image";
import modelAbstract from "./modelAbstract";

export default class Straw extends modelAbstract {
  name: string = 'straw';
  image(): HTMLImageElement {
    return image.get('straw')!
  }
  render(): void {
    super.draw()
  }
}