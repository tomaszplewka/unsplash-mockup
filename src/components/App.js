import React from "react";
import { Routes, Route } from "react-router-dom";

import FrontPage from "./pages/front-page/FrontPage";
import SearchResultsPageContainer from "./containers/SearchResultsPageContainer";
import Logo from "./logo/Logo";

const App = () => {
  return (
    <>
      <Logo />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/search" element={<SearchResultsPageContainer />}>
          <Route
            path=":searchTerm"
            element={<SearchResultsPageContainer />}
          ></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
