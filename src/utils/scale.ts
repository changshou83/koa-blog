interface ScaleOptions {
  o: [number, number];
  t: [number, number];
}
export function scale(
  num: number,
  opts: ScaleOptions = { o: [0, 10], t: [0, 100] }
) {
  const { o, t } = opts;
  return ((num - o[0]) * (t[1] - t[0])) / (o[1] - o[0]) + t[0];
}
