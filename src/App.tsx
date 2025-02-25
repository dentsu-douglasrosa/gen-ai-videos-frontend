import "./styles/main.scss";
import React from "react";
import Header from "./components/Header";
import { Routes, Route } from 'react-router-dom';
import Sample from "./pages/Root";
import { useMain } from "./hooks/useMain";
import Providers from "./providers";

const Main: React.FC = () => {
  const { state, controller } = useMain()

  return (
    <div>
      <main>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Sample />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

const App: React.FC = () => {
  return (
    <Providers>
      <Header />
      <Main />
    </Providers>
  );
};

export default App;
