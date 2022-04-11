type Diff<O extends object, O1 extends object> =
Exclude<keyof O1, keyof O> extends never ?
  Pick<O, Exclude<keyof O, keyof O1>> :
  Pick<O1, Exclude<keyof O1, keyof O>>
