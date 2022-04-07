type MyAwaited<P extends Promise<unknown>> =
P extends Promise<infer R> ?
  R extends Promise<unknown> ?
    MyAwaited<R> :
    R :
  never
