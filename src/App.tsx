import React from "react";
import { ToastContainer } from "react-toastify";
import Table from "./components/Table";
import "react-toastify/dist/ReactToastify.css";

function App(): JSX.Element {
  return (
    <div className="App">
      <ToastContainer />
      <Table></Table>
    </div>
  );
}

export default App;
