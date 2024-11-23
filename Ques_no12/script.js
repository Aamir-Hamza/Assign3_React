const CounterWithStep = () => {
  const [counter, setCounter] =React.useState(0); 
  const [step, setStep] = React.useState(1); 
  const handleStepChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setStep(isNaN(value) || value <= 0 ? 1 : value); 
  };
  const handleIncrease = () => {
    setCounter((prevCounter) => prevCounter + step);
  };
  const handleDecrease = () => {
    setCounter((prevCounter) => Math.max(0, prevCounter - step));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Counter: {counter}</h1>
      <div style={{ marginBottom: "10px" }}>
        <label>
          Step:{" "}
          <input
            type="number"
            value={step}
            onChange={handleStepChange}
            style={{ width: "50px", textAlign: "center" }}
            min="1"
          />
        </label>
      </div>
      <button onClick={handleIncrease} style={{ marginRight: "10px" }}>
        Increase
      </button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
};
 function App(){
    return(<>
    <CounterWithStep/>
    
    </>)
 }
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)