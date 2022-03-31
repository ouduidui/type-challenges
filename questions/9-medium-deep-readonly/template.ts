// type DeepReadonly<T> = any

type DeepReadonly<T extends object> = {
  readonly [K in keyof T]:
  T[K] extends Record<string | number | symbol, unknown> ?
    DeepReadonly<T[K]> :
    T[K]
}
