type Chainable<T extends object = {}> = {
  option<K extends string, V>(key: Exclude<K, keyof T>, value: V): Chainable<T & Record<K, V>>
  get(): T
}
