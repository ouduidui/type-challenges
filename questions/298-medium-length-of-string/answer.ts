type LengthOfString<
  T extends string,
  N extends unknown[] = []
> = T extends `${infer S}${infer R}`
  ? R extends ''
    ? [...N, S]['length']
    : LengthOfString<R, [...N, S]>
  : 0
