import MyClassComponent from "./MyClassComponent";
import "./App.css";
import MyFunctionalComponent from "./MyFunctionalComponent";

function App() {
  const copmonent = "functional";
  return (
    <div className="App">
      <header className="App-header">
        {copmonent === "functional" ? (
          <MyFunctionalComponent />
        ) : (
          <MyClassComponent />
        )}
      </header>
    </div>
  );
}

export default App;
