import Sarah from "./screens/Sarah";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";


//mport CourseDetails from "./components/CourseDetails";

const App = () => {
  return (

                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={Sarah} />
                    </Routes>
                </BrowserRouter>

    
  );
};

export default App;
