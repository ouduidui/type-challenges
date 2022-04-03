type TrimLeft<S extends string> =
S extends ` ${infer R}` | `\n\t${infer R}` ?
  TrimLeft<R> :
  S
