import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/home/Home";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";

import "./style/app.scss";
import "./style/header.scss";
import "./style/home.scss";
import "./style/founder.scss";
import "./style/menu.scss";
import "./style/footer.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
