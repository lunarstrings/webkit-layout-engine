export interface BoxMetrics {
  width: number;
  height: number;
  margin: number;
  padding: number;
}
export function calculateContentBox(m: BoxMetrics): number {
  return m.width - (m.padding * 2);
}
