// type MyReadonly<T> = any

type MyReadonly<T extends object> = {
  readonly [K in keyof T]: T[K]
}
