import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import HomeView from "./views/HomeView";

function App() {
  return (
    <MantineProvider
      theme={{
        colorScheme: "dark",
        fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
        headings: {
          fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
        },
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <Router>
        <Routes>
          <Route path="/" element={<HomeView />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
}

export default App;
