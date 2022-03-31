// type MyPick<T, K> = any

type MyPick<T extends object, K extends keyof T> = {
  [Key in keyof T as Key extends K ? Key : never]: T[Key]
}
