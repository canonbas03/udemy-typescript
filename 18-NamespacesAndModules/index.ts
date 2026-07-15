// NAMESPACES are a way to group and organise related code
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
