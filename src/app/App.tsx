import { Routes, Route, BrowserRouter } from "react-router-dom";
import TaskPage from "../pages/TaskPage/TaskPage";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="" element={<TaskPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
