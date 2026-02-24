// main.jsx — головний компонент застосунку
// Імпортує та зʼєднує всі компоненти

import { useState } from "react";
import Products from "./Products";
import AddMoney from "./AddMoney";
import ExistProduc from "./ExistProduc";
import productData from "./productData.json";

const App = () => {
  const [balance, setBalance] = useState(0);
  const [purchasedItems, setPurchasedItems] = useState([]);

  // Додати 1$ до балансу при кліку на коло
  const handleAddMoney = () => {
    setBalance((prev) => prev + 1);
  };

  // Купити товар: зняти кошти та додати до куплених
  const handleBuy = (product) => {
    if (balance >= product.price) {
      setBalance((prev) => prev - product.price);
      setPurchasedItems((prev) => [...prev, product]);
    }
  };

  return (
    <div className="app">
      {/* Секція 1 — Шапка з нікнеймом та балансом */}
      <header className="header">
        <div className="header-content">
          <div className="user-info">
            <div className="avatar">К</div>
            <span className="nickname">Ваш нікнейм: Користувач 1</span>
          </div>
          <div className="balance-display">
            <span className="balance-label">Ваш баланс:</span>
            <span className="balance-amount">{balance}$</span>
          </div>
        </div>
      </header>

      <main className="main-content">
        {/* Секція 2 — Заробіток грошей */}
        <AddMoney onAddMoney={handleAddMoney} />

        {/* Секція 3 — Список товарів */}
        <Products
          products={productData}
          balance={balance}
          onBuy={handleBuy}
        />
      </main>

      {/* Секція 4 — Куплені товари */}
      <ExistProduc purchasedItems={purchasedItems} />
    </div>
  );
};

export default App;
