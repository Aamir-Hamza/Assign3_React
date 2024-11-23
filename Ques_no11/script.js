const ToggleMessage = () => {
  const [isMessageVisible, setIsMessageVisible] = React.useState(false);
  const handleToggle = () => {
    setIsMessageVisible((prevState) => !prevState);
  };
return (
    <div>
      <button onClick={handleToggle}>
        {isMessageVisible ? "Hide" : "Show"}
      </button>
      {isMessageVisible && (
        <p style={{ marginTop: "10px" }}>
          Hello, welcome to React state management!
        </p>
      )}
    </div>
  );
};
function App(){
    return(<>
    <ToggleMessage/>
    </>)

}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)