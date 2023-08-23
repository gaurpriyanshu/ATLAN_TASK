import React from "react";
import TableStructure from "./TableStructure";

function DataDraw() {
  
  let categories = require("../DataStore/categories.json");
  let customers = require("../DataStore/customers.json");
  let suppliers = require("../DataStore/suppliers.json");
  let products = require("../DataStore/products.json");
  let territories = require("../DataStore/territories.json");
  let employees = require("../DataStore/employees.json");
  return (
    <div className="w-full h-screen overflow-auto scrollbar-hide py-4">
    <div className="mx-auto flex items-center font-bold justify-center mt-2 py-2 h-11 px-4 rounded text-black bg-violet-500 font-mono w-56 text-lg md:text-xl">
        Tables
      </div>
      <div className="w-8/12 border-b-2 mx-auto mt-8 mb-4"></div>
      <TableStructure
        tableHead={categories[0]}
        tableName="categories"
        tableNo={1}
      />
      <div className="w-8/12 border-b-2 mx-auto mt-8 mb-4"></div>
      <TableStructure
        tableHead={customers[0]}
        tableName="customers"
        tableNo={2}
      />
      <div className="w-8/12 border-b-2 mx-auto mt-8 mb-4"></div>
      <TableStructure
        tableHead={suppliers[0]}
        tableName="suppliers"
        tableNo={3}
      />
      <div className="w-8/12 border-b-2 mx-auto mt-8 mb-4"></div>
      <TableStructure
        tableHead={products[0]}
        tableName="products"
        tableNo={4}
      />
      <div className="w-8/12 border-b-2 mx-auto mt-8 mb-4"></div>
      <TableStructure
        tableHead={territories[0]}
        tableName="territories"
        tableNo={5}
      />
      <div className="w-8/12 border-b-2 mx-auto mt-8 mb-4"></div>
      <TableStructure
        tableHead={employees[0]}
        tableName="employees"
        tableNo={6}
      />
    </div>
  );
}

export default DataDraw;
