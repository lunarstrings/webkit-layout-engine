export class FloatManager {
  private leftFloats: number[] = [];
  addFloat(width: number): void { this.leftFloats.push(width); }
  getClearance(): number { return Math.max(...this.leftFloats, 0); }
}
