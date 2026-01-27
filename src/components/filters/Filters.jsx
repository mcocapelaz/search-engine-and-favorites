// Función que captura el evento y actualiza el estado en App.jsx
function Filters({ searchUsers, setSearchUsers }) {
  const handleSearch = (ev) => {
    setSearchUsers(ev.target.value);
  };

  return (
    <div>
      <input
        className="searcher"
        type="text"
        placeholder="Busca por nombre"
        value={searchUsers}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Filters;
