// NAMESPACES are a way to group and organise related code
/*/
// STARTING WITH NAMESPACES
namespace MathUtils {
  export function add(a: number, b: number): number {
    return a + b;
  }

  export function subtract(a: number, b: number): number {
    return a - b;
  }
}

namespace StringUtils {
  export function add(a: string, b: string): string {
    return a + b;
  }

  export function subtract(a: string, b: string): string {
    return a.replace(b, "");
  }
}

const mathRes = MathUtils.add(1, 2);
console.log(mathRes); // 3

const strRes = StringUtils.subtract("abcd", "a");
console.log(strRes); // bcd
//*/

/*/
// LEGACY
/// <reference path="utils/math-utils.ts"/>
/// <reference path="utils/string-utils.ts"/>

let sum = MathUtils.add(5, 2);

// module: AMD
// outFile - makes the build in a single file.js
//*/

//*/
// ECS Ecma Script Modules
import { MathUtils } from "./utils/math-utils.js";
import { StringUtils } from "./utils/string-utils.js";
import { CommonUtils } from "./utils/common-utils.js";

const mathRes = MathUtils.add(1, 2);
console.log(mathRes); // 3

const strRes = StringUtils.subtract("abcd", "a");
console.log(strRes); // bcd
//*/
