import "./App.css";
// import test from "./test";
import { test2, test3, test4 } from "./test";
import Button from "./Button";

function App() {
  console.log(test2, test3, test4);
  return (
    <div className="App">
      <Button text="Qo'ng'iroq qilish" color="red" />
      <Button text="Qabulga yozilish" color="green" />
    </div>
  );
}

export default App;
// SPA - Single Page Application - Bir sahifali ilova
