import { createServerFn } from "@tanstack/react-start"

export const getProducts = createServerFn().handler(async () => {
  await new Promise((resolve) => { setTimeout(resolve, 1000)})
  return [
    { id: 1, name: 'りんご', price: 100 },
    { id: 2, name: 'みかん', price: 200 },
    { id: 3, name: 'ぶどう', price: 300 },
  ]
})
