// NotFound404.jsx
// Сторінка помилки 404 — відображається коли маршрут не знайдено

const NotFound404 = ({ onGoHome }) => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.glitch} data-text="404">404</div>
      <h1 style={styles.title}>Сторінку не знайдено</h1>
      <p style={styles.subtitle}>
        Схоже, ця сторінка зникла... або ніколи не існувала 👻
      </p>
      <button style={styles.btn} onClick={onGoHome}>
        ← Повернутись на головну
      </button>
    </div>
  );
};

export default NotFound404;
