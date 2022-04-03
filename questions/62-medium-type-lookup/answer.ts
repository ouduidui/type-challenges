type LookUp<
  U extends object,
  T extends string,
> =
U extends U ?
  T extends U[keyof U]
    ? U
    : never
  : never
