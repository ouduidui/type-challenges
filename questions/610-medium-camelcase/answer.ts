type CamelCase2<S extends string> =
S extends `${infer F}-${infer E}` ?
  E extends `${Capitalize<E>}` ?
    `${F}-${CamelCase2<E>}` :
    `${F}${CamelCase2<Capitalize<E>>}` :
  S
