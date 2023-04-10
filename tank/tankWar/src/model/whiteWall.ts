import { image } from "../service/image";
import modelAbstract from "./modelAbstract";

export default class  extends modelAbstract {
  name: string = 'whiteWall';
  image(): HTMLImageElement {
   return image.get('whiteWall')!
  }
  render(): void {
    super.draw()
  }
}