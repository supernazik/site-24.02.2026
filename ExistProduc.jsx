// ExistProduc.jsx
// Відображає список куплених товарів у нижній секції

const ExistProduc = ({ purchasedItems }) => {
  return (
    <section className="purchased-section">
      <h2 className="purchased-title">
        Куплені товари:{" "}
        <span className="purchased-count">{purchasedItems.length}</span>
      </h2>
      {purchasedItems.length === 0 ? (
        <p className="no-items">Ви ще нічого не купили</p>
      ) : (
        <ul className="purchased-list">
          {purchasedItems.map((item, index) => (
            <li key={index} className="purchased-item">
              <img
                src={item.image}
                alt={item.name}
                className="purchased-item-img"
              />
              <span className="purchased-item-name">{item.name}</span>
              <span className="purchased-item-price">— {item.price}$</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default ExistProduc;
