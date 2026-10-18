export interface LineBox {
  fragments: string[];
  baseline: number;
}
export function createLineBox(): LineBox {
  return { fragments: [], baseline: 16 };
}
