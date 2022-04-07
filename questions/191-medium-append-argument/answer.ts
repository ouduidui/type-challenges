type AppendArgument<Fn extends Function, A> =
Fn extends (...args: infer Args) => infer Res ?
  (...args: [...Args, A]) => Res :
  never
