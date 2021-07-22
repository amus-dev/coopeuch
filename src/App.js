import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";

import { Provider } from "react-redux";
import generateStore from "./redux/store";

const App = () => {
  const store = generateStore();
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
