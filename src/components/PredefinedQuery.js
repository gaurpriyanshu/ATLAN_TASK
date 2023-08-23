import React from "react";

function PredefinedQuery({ setDefaults, setValue }) {
  const qurtyValue = [
    {
      query: "select * from categories;",
      default: 1,
    },
    {
      query: "select * from customers;",
      default: 2,
    },
    {
      query: "select * from products;",
      default: 3,
    },
    {
      query: "select * from suppliers;",
      default: 4,
    },
    {
      query: "select * from territories;",
      default: 5,
    },
    {
      query: "select * from employees;",
      default: 6,
    }
  ];
  return (
    <div>
      <div className="mx-auto flex items-center font-bold justify-center mt-2 py-2 h-11 px-4 rounded text-black bg-violet-500 font-mono w-56 text-lg md:text-xl">
        ATLAN SQL TASK
      </div>
      <div className=" dark:bg-slate-800 p-4 text-violet-500">
        <div className="h-52 lg:h-48 overflow-auto scrollbar-hide mb- lg:mb-0">
          {qurtyValue.map((item, index) => (
            <p
              key={index}
              className="cursor-pointer bg-gray-300 hover:bg-violet-500 font-mono hover:text-white p-2 text-center text-sm rounded-sm my-4"
              onClick={() => {
                setDefaults(`${item.default}`);
                setValue(`${item.query}`);
              }}
            >
              {item.query}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PredefinedQuery;
