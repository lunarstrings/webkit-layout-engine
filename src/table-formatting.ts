export class TableLayoutContext {
  resolveColumnWidths(cells: number[]): number[] {
    return cells.map(w => Math.max(w, 20));
  }
}
