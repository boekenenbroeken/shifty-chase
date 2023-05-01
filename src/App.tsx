import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Home } from 'pages/Home';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
);

export { App };
