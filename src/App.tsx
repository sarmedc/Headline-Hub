import { Header } from "./components/Header";
import { NewsPage } from "./components/NewsPage";
import { StateContext } from "./context/NewsContext";

function App() {
  return (
    <div className="App bg-[#fffbff] text-[#1c1c16] min-h-screen">
      <StateContext>
        <Header />
        <NewsPage h-full />
      </StateContext>
    </div>
  );
}

export default App;
