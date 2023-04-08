import { Header } from "./components/Header";
import { NewsPage } from "./components/NewsPage";
import { StateContext } from "./context/NewsContext";

function App() {
  return (
    <div className="App">
      <StateContext>
        <Header />
        <NewsPage />
      </StateContext>
    </div>
  );
}

export default App;
