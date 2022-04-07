type Merge<F extends object, S extends object> = {
  [K in (keyof S | keyof F)]:
  K extends keyof S ?
    S[K] : K extends keyof F ?
      F[K] :
      never
}
