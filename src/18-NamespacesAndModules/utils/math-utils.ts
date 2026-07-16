import AddOutput from "./addOutput.interface.js";
import { CommonUtils } from "./common-utils.js";
export class MathUtils {
  static add(a: number, b: number): AddOutput {
    CommonUtils.log(`Adding ${a} and ${b}`);
    return {
      sum: a + b,
      class: "MathUtils",
    };
  }

  static subtract(a: number, b: number): number {
    return a - b;
  }
}
