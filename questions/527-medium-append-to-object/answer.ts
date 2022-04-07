type AppendToObject<
  T extends object,
  U extends string | symbol | number,
  V
> =
{
  [K in (U | keyof T)]: K extends keyof T ? T[K] : V
}
