export class StringUtils {
  static add(a: string, b: string): string {
    return a + b;
  }

  static subtract(a: string, b: string): string {
    return a.replace(b, "");
  }
}
