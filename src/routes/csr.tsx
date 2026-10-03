import { createFileRoute } from '@tanstack/react-router'
import { getProducts } from '../server/products'

export const Route = createFileRoute('/csr')({
  ssr: false, // このページはサーバーで描画しない
  loader: () => getProducts(),
  pendingComponent: () => <p>読み込み中...</p>,
  pendingMs: 0,
  component: CsrPage,
})

function CsrPage() {
  const products = Route.useLoaderData()
  return (
    <main>
      <h1>CSR版 商品一覧</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name} {product.price}円</li>
        ))}
      </ul>
    </main>
  )
}
