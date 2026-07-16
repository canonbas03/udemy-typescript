import { CommonUtils } from "./common-utils.js";
export class MathUtils {
  static add(a: number, b: number): number {
    CommonUtils.log(`Adding ${a} and ${b}`);
    return a + b;
  }

  static subtract(a: number, b: number): number {
    return a - b;
  }
}
