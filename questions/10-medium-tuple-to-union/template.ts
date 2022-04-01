// type TupleToUnion<T> = any

type TupleToUnion<T extends unknown[]> = T[number]
