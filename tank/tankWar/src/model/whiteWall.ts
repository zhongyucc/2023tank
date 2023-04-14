import whiteWall from "../canvas/whiteWall";
import { image } from "../service/image";
import modelAbstract from "./modelAbstract";

export default class WhiteWall  extends modelAbstract {
  canvas: ICanvas = whiteWall;
  name: string = 'whiteWall';
  image(): HTMLImageElement {
   return image.get('whiteWall')!
  }
  render(): void {
    super.draw()
  }
}