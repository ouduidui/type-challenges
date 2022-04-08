type KebabCase<S extends string, U extends string = ''> =
S extends `${infer F}${infer L}`
  ? F extends Uncapitalize<F>
    ? KebabCase<L, `${U}${F}`>
    : U extends ''
      ? KebabCase<L, `${Uncapitalize<F>}`>
      : KebabCase<L, `${U}-${Uncapitalize<F>}`>
  : `${U}${S}`
