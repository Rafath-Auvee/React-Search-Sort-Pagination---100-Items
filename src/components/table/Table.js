import React, { useState, useEffect } from "react";
import axios from "axios";
import Row from "./Row";
// import { Products } from "./../Product/Product.js";

const Table = () => {
  const baseURL = "http://localhost:5000";

  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [item, setItem] = useState([]);
  let [choosen, setChoosen] = useState([]);

  useEffect(() => {
    fetch("dummy.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  return (
    <div className="container mx-auto my-7 px-5">
      <h1 className="text-center text-1xl mb-5">
        <a
          href="https://github.com/Rafath-Bin-Zafar-Auvee/"
          className="btn btn-sm btn-outline bg-green-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed By : Rafath Bin Zafar Auvee 😎
        </a>
        <a
          href="mailto:rafath.auvee@gmail.com"
          className="ml-4 btn btn-sm btn-outline bg-green-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email Me! 📧
        </a>
      </h1>

      <h1 className="text-center text-1xl mb-5">
        <div className="form-control">
        <label className="label">
              <span className="label-text bg-blue-800 rounded px-5 text-white p-1">Search by ID</span>
          </label>
          <div className="input-group">
            
            <input
              type="text"
              placeholder="Search by ID"
              className="input input-bordered border-2 border-black"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
      </h1>

      <div className="overflow-x-auto">
        <table className={`table w-full `}>
          <thead>
            <tr className="bg-green-500">
              <th>ID</th>
              <th className="text-1xl">Name</th>
              <th className="text-1xl">State</th>
              <th className="text-1xl">Age</th>
              <th className="text-1xl">Spicy</th>
              <th className="text-1xl">Salty</th>
              <th className="text-1xl">Sweet</th>
            </tr>
          </thead>
          <tbody>
            {/* ({console.log(user)}) */}
            {query === ""
              ? products.map((product, index) => (
                  <tr key={index}>
                    <td className="no-underline">{product.id}</td>
                    <td className="no-underline">{product.name}</td>
                    <td className="no-underline">{product.state}</td>
                    <td className="no-underline">{product.age}</td>
                    <td className="no-underline">{product.spicy}</td>
                    <td className="no-underline">{product.salty}</td>
                    <td className="no-underline">{product.sweet}</td>
                  </tr>
                ))
              : products
                  .filter((asd) =>
                    // var resultObj = Products.find(v => v.id === 1);
                    asd.id.toString().toLowerCase().includes(query)
                  )
                  .map((product, index) => (
                    <tr key={index}>
                      <td className="no-underline">{product.id}</td>
                      <td className="no-underline">{product.name}</td>
                      <td className="no-underline">{product.state}</td>
                      <td className="no-underline">{product.age}</td>
                      <td className="no-underline">{product.spicy}</td>
                      <td className="no-underline">{product.salty}</td>
                      <td className="no-underline">{product.sweet}</td>
                    </tr>
                  ))[0]}
          </tbody>
        </table>
      </div>

      {/* {Products.filter((asd) => asd.name.toLowerCase().includes(query)).map(
        (product, index) => (
          <tr key={index}>
            <tr>{product.id}</tr>
            <tr>{product.name}</tr>
          </tr>
        )
      )} */}
    </div>
  );
};

export default Table;
