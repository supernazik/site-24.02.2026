// Products.jsx
// Відображає список товарів з можливістю купівлі

const Products = ({ products, balance, onBuy }) => {
  return (
    <section className="products-section">
      <h2 className="section-title">Товари</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-wrapper">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
            </div>
            <div className="product-info">
              <span className="product-category">{product.category}</span>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}$</p>
              <button
                className={`buy-btn ${balance < product.price ? "disabled" : ""}`}
                onClick={() => onBuy(product)}
                disabled={balance < product.price}
              >
                {balance < product.price ? "Недостатньо коштів" : "Купити"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
