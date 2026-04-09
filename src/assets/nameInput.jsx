export function NameInput({ filter, setFilter }) {
  return (
    <>
      <div className="container">
        <h1>Veldu þingmann</h1>
      </div>
      <div className="container">
        <input
          type="text"
          className="input-nafn searchbar"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Sláðu inn nafn..."
        />
      </div>
    </>
  );
}
