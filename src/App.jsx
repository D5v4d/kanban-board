import React, { createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";
import MainHome from "./pages/Main/MainHome/MainHome";
import MainTasks from "./pages/Main/MainTasks/MainTasks";
import useLocalStorage from "./hooks/useLocalStorage";

export const DataContext = createContext();

const App = () => {
  // Используем хук для работы с localStorage
  const [datataskList, setDatataskList] = useLocalStorage("taskList", {});

  return (
    <DataContext.Provider value={{ datataskList, setDatataskList }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/tasks/:id" element={<MainTasks />} />
        </Routes>
        <Footer />
      </Router>
    </DataContext.Provider>
  );
};

export default App;