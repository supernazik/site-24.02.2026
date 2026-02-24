// AddMoney.jsx
// При кліку на коло додає 1$ до балансу користувача

const AddMoney = ({ onAddMoney }) => {
  return (
    <div className="add-money-section">
      <p className="add-money-hint">Натисни на коло, щоб заробити 1$</p>
      <div
        className="money-circle"
        onClick={onAddMoney}
        title="Клікни щоб отримати 1$"
      >
        <span className="money-icon">💰</span>
        <span className="money-text">+1$</span>
      </div>
    </div>
  );
};

export default AddMoney;
