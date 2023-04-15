import { Header } from "./components/Header";
import { NewsPage } from "./components/NewsPage";
import { StateContext } from "./context/NewsContext";

function App() {
  return (
    <div className="App bg-[#fffbff] dark:bg-[#1c1c16] text-[#1c1c16] dark:text-[#e6e2d9] font-sans min-h-screen">
      <StateContext>
        <Header />
        <NewsPage h-full />
      </StateContext>
    </div>
  );
}

export default App;
