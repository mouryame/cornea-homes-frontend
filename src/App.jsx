import { Provider } from "react-redux";
import Router from "./router";
import "./App.css";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
