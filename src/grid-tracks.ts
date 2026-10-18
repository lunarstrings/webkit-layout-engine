export function resolveTracks(frUnits: number, availableWidth: number): number {
  return frUnits > 0 ? availableWidth / frUnits : 0;
}
