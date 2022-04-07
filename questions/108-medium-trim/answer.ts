type Trim<S extends string> = S extends
`${' ' | '\n' | '\t'}${infer O}` | `${infer O}${' ' | '\n' | '\t'}` ?
  Trim<O> :
  S
