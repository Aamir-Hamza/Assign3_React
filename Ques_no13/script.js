
const ShoppingList = () => {
  const [items, setItems] = React.useState([]); 
  const [name, setName] = React.useState(""); 
  const [quantity, setQuantity] =React. useState(""); 
 const handleAddItem = () => {
    if (name.trim() === "" || quantity <= 0) {
      alert("Please enter a valid name and quantity greater than 0.");
      return;
    }

    setItems((prevItems) => [
      ...prevItems,
      { id: Date.now(), name, quantity },
    ]);
    setName("");
    setQuantity("");
  };
  const handleRemoveItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  const handleClearAll = () => {
    setItems([]);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Shopping List</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          style={{ marginRight: "10px", padding: "5px", width: "80px" }}
        />
        <button onClick={handleAddItem} style={{ padding: "5px 10px" }}>
          Add Item
        </button>
      </div>
      <ul style={{ listStyleType: "none", padding: "0" }}>
        {items.map((item) => (
          <li
            key={item.id}
            style={{
              marginBottom: "10px",
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>
              {item.name} - {item.quantity}
            </span>
            <button
              onClick={() => handleRemoveItem(item.id)}
              style={{ padding: "5px 10px", background: "red", color: "white" }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      {items.length > 0 && (
        <button
          onClick={handleClearAll}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            background: "orange",
            color: "white",
          }}
        >
          Clear All
        </button>
      )}
    </div>
  );
};

 function App(){
    return(<>
    <ShoppingList/>
    
    
    </>)
 }

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)