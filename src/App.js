import "./App.css";
import { Counter1 } from "./Task/Counter1";
import { Counter2 } from "./Task/Counter2";
import { Counter3 } from "./Task/Counter3";
import { Counter4 } from "./Task/Counter4";
import { OnOffSwitch } from "./Task/OnOffSwitch";
import { RegisterForm } from "./Task/RegisterForm";
import { ToDoList } from "./Task/ToDoList";

function App() {
  return (
    <div className="App">
      {/* <ToDoList/> */}
      {/* <RegisterForm/> */}
      {/* <Counter1/> */}
      {/* <Counter2/> */}
      {/* <OnOffSwitch/> */}
      {/* <Counter3/> */}
      <Counter4 />
    </div>
  );
}

export default App;
