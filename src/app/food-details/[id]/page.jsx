// app/products/[id]/page.js

// This is a server component by default in Next.js 13+
export default async function ProductPage({ params }) {
  const { id } = Number(params);

  // Fetch data directly on the server
  const res = await fetch(`/api/foods/${id}`, {
    // cache: "no-store" ensures fresh data every request (optional)
    next: { revalidate: 60 }, // optional ISR: revalidate every 60s
  });

  if (!res.ok) {
    return <p>Failed to load product.</p>;
  }

  const product = await res.json();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <img src={product.image} alt={product.title} width={300} />
    </div>
  );
}
