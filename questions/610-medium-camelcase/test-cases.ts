import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<CamelCase2<'foo-bar-baz'>, 'fooBarBaz'>>,
  Expect<Equal<CamelCase2<'foo-Bar-Baz'>, 'foo-Bar-Baz'>>,
  Expect<Equal<CamelCase2<'foo-Bar-baz'>, 'foo-BarBaz'>>,
  Expect<Equal<CamelCase2<'foo-bar'>, 'fooBar'>>,
  Expect<Equal<CamelCase2<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<CamelCase2<'foo--bar----baz'>, 'foo-Bar---Baz'>>,
  Expect<Equal<CamelCase2<'a-b-c'>, 'aBC'>>,
  Expect<Equal<CamelCase2<'a-b-c-'>, 'aBC-'>>,
  Expect<Equal<CamelCase2<'ABC'>, 'ABC'>>,
  Expect<Equal<CamelCase2<'-'>, '-'>>,
  Expect<Equal<CamelCase2<''>, ''>>,
  Expect<Equal<CamelCase2<'😎'>, '😎'>>,
]
