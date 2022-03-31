// type MyReadonly2<T, K> = any

type MyReadonly2<T extends object, K extends keyof T = keyof T> =
{
  readonly [Key in keyof T as Key extends K ? Key : never]: T[Key]
}&{
  [Key in keyof T as Key extends K ?never : Key]: T[Key]
}
