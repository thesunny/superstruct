import { assert, object, number } from '../..'
import { test } from '..'

test<Record<string, unknown>>((x) => {
  assert(x, object())
  return x
})

test<{ a: number }>((x) => {
  assert(x, object({ a: number() }))
  return x
})
