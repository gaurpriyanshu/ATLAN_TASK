import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Buttons from "./components/Buttons";
import PredefinedQuery from "./components/PredefinedQuery";
import SqlEditor from "./components/SqlEditor";
import Table from "./components/Table";
import DataDraw from "./components/TableDrawer/DataDraw";

function App() {
  const [value, setValue] = useState("select * from customers;");
  const [rows, setRows] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [query, setQuery] = useState("");
  const [defaults, setDefaults] = useState(1);
  const [csvData, setCSVData] = useState([]);

  if (value === "") {
    toast.error("Please remove the code and run the query");
    setValue(
      "-- Online SQL Editor to Run SQL Online. \n-- Use the editor to view all tables in SQL operations.\n\n-- Remove the code and Start exploring!\n\n-- Happy Coding!"
    );
  }

  useEffect(() => {
    if (value.toLowerCase() === "select * from categories;") {
      setDefaults(1);
    }else if (value.toLowerCase() === "select * from customers;") {
      setDefaults(2);
    } else if (value.toLowerCase() === "select * from suppliers;") {
      setDefaults(3);
    } else if (value.toLowerCase() === "select * from products;") {
      setDefaults(4);
    } else if (value.toLowerCase() === "select * from territories;") {
      setDefaults(5);
    }  else if (value.toLowerCase() === "select * from employees;") {
      setDefaults(6);
    }else {
      setDefaults(0);
    }
  }, [value]);

  return (
    <div className="dark:bg-slate-800 flex flex-wrap justify-center items-start w-full bg-dark-mode-white ">
      <div className="w-full lg:w-9/12">
        <div className="flex flex-wrap justify-center items-start w-full">
          <div className="w-full lg:w-3/12">
            <PredefinedQuery setValue={setValue} setDefaults={setDefaults} />
          </div>
          <div className="w-full lg:w-8/12">
            <div className="flex w-full justify-between">
              {/* <div className="font-bold text-center py-4 w-28 text-white bg-dark-mode-white ">
                MySQL
              </div> */}




              <Buttons
                setQuery={setQuery}
                setHeaders={setHeaders}
                setRows={setRows}
                setCSVData={setCSVData}
                value={value}
                setValue={setValue}
                setDefaults={setDefaults}
                defaults={defaults}
              />
            </div>
            <SqlEditor value={value} setValue={setValue} />
          </div>
        </div>
        <Table query={query} headers={headers} rows={rows} csvData={csvData} />
      </div>

      <div className="w-full lg:w-3/12">
        <DataDraw />
      </div>

      <Toaster
        position="bottom-left"
        gutter={8}
        toastOptions={{
          duration: 3000,
        }}
      />
    </div>
  );
}

export default App;
