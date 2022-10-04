import React, { useState, useEffect } from "react";
import axios from "axios";
import Row from "./Row";
// import { Products } from "./../Product/Product.js";
import Pagination from "./../Pagination/Pagination";

const Table = () => {
  const baseURL = "http://localhost:5000";

  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState([]);
  const [item, setItem] = useState([]);
  let [choosen, setChoosen] = useState([]);
  const [sortValue, setSortValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  const sortItem = ["AGE", "SPICY", "SALTY", "SWEET"];

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = products.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    fetch("dummy.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  const handleSort = () => {

  }

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

      <h1 className="text-center text-1xl mb-5 flex flex-row">
        <div className="form-control">
          <label className="label">
            <span className="label-text bg-blue-800 rounded px-5 text-white p-1">
              Search by ID
            </span>
          </label>
          <div className="input-group">
            <input
              type="number"
              placeholder="Search by ID"
              className="input input-bordered  border-3 border-black"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="ml-5">
        <label className="label">
            <span className="label-text bg-blue-800 rounded px-5 text-white p-1">
              Sort
            </span>
          </label>
          <select className="select select-primary w-full max-w-xs" onChange={handleSort} >
            <option disabled selected>
              Sorting Selection  
            </option>
            {sortItem.map((item, index) => (
              <option value={item}>{item}</option>
            ))}
          </select>
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
              ? currentPosts.map((product, index) => (
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

      <div className="grid justify-items-center mt-[100px]">
        <Pagination
          totalPosts={products.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Table;
