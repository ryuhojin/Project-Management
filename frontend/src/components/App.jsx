import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import routes from "../routes";
import theme from "../styles/theme";
import { Suspense } from "react";
const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          {routes.map((route, i) => {
            return (
              <Route
                key={i}
                path={route.path}
                element={
                  <Suspense fallback={<></>}>
                    <route.component />
                  </Suspense>
                }
              />
            );
          })}
        </Routes>
      </ThemeProvider>
    </>
  );
};
export default App;
