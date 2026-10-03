import { createFileRoute } from '@tanstack/react-router'
import { getProducts } from '#/server/products'

export const Route = createFileRoute('/ssr')({
  loader: () => getProducts(),
  component: SsrPage,
})

function SsrPage() {
  const products = Route.useLoaderData()
  return (
    <main>
      <h1>SSR版 商品一覧</h1>
      <p>現在時刻：{new Date().toLocaleTimeString('ja-JP')}</p>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name} {product.price}円</li>
        ))}
      </ul>
    </main>
  )
}
