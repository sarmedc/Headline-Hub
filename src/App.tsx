import { NewsPage } from "./components/NewsPage";
import { StateContext } from "./context/NewsContext";

function App() {
  return (
    <div className="App">
      <StateContext>
        <NewsPage />
      </StateContext>
    </div>
  );
}

export default App;
