import "../styles/App.scss";
import users from "./data/Users";
import Filters from "./filters/Filters";
import { useState, useEffect } from "react";

function App() {
  // Guarda el texto del buscador para filtrar usuarias.
  const [searchUsers, setSearchUsers] = useState("");

  //LocalStorage
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      return JSON.parse(savedFavorites);
    } else {
      return [];
    }
  });

  //Guarda los cambios en localStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  //Función para añadir/quitar favoritos
  const handleFavorites = (userId) => {
    if (favorites.includes(userId)) {
      setFavorites(favorites.filter((id) => id !== userId));
    } else {
      setFavorites([...favorites, userId]);
    }
  };

  return (
    <div>
      <header className="header">
        <h1 className="title">Listado de usuarias</h1>
        <Filters searchUsers={searchUsers} setSearchUsers={setSearchUsers} />
        {/* Contador de favoritos */}
        <h2>💖 Contador de favoritos: {favorites.length}</h2>
      </header>

      {/* Filtrado de usuarias */}
      {users
        .filter((user) =>
          user.name.toLowerCase().includes(searchUsers.toLowerCase())
        )

        // Visualización de usuarias

        .map((user) => (
          <div key={user.id} className="user-card">
            <h2 className="h2">{user.name}</h2>
            <p>E-mail: {user.email}</p>
            <p>Ciudad: {user.city}</p>
            <button onClick={() => handleFavorites(user.id)}>
              {favorites.includes(user.id)
                ? "❤️ Favorito"
                : "🤍 Añadir a favoritos"}
            </button>
          </div>
        ))}
    </div>
  );
}

export default App;
