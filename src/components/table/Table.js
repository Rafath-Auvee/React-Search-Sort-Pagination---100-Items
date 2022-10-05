import React, { useState, useEffect } from "react";
import axios from "axios";
import Row from "./Row";
import { Products } from "./../Product/Product.js";
import Pagination from "./../Pagination/Pagination";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Table = () => {
  const baseURL = "http://localhost:5000";

  const [query, setQuery] = useState("");
  const [products, setProducts] = useState(Products);
  const [find, setFind] = useState(Products);
  // const [value, setValue] = useState([]);
  const [sorted, setSorted] = useState({ sorted: "id", reversed: false });
  const [item, setItem] = useState([]);
  let [choosen, setChoosen] = useState([]);
  const [sortValue, setSortValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const sortById = () => {
    const usersCopy = [...products];
    usersCopy.sort((userA, userB) => {
      if (sorted.reversed) {
        return userA.id - userB.id;
      }
      return userB.id - userA.id;
    });
    setProducts(usersCopy);
    setSorted({ sorted: "id", reversed: !sorted.reversed });
  };

  const sortByName = () => {
    const usersCopy = [...products];
    usersCopy.sort((userA, userB) => {
      const fullNameA = `${userA.name} `;
      const fullNameB = `${userB.name}`;
      if (sorted.reversed) {
        return fullNameB.localeCompare(fullNameA);
      }
      return fullNameA.localeCompare(fullNameB);
    });
    setProducts(usersCopy);
    // setQuery("")
    setSorted({ sorted: "name", reversed: !sorted.reversed });
  };

  const renderArrow = () => {
    if (sorted.reversed) {
      return <FaArrowUp />;
    }
    return <FaArrowDown />;
  };

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = products.slice(firstPostIndex, lastPostIndex);

  // useEffect(() => {
  //   fetch("dummy.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data);
  //       setProducts(data);
  //     });
  // }, []);

  const sortByAge = () => {
    const usersCopy = [...products];
    usersCopy.sort((userA, userB) => {
      if (sorted.reversed) {
        return userA.age - userB.age;
      }
      return userB.age - userA.age;
    });
    setProducts(usersCopy);
    setSorted({ sorted: "age", reversed: !sorted.reversed });
  };

  const sortBySpicy = () => {
    const usersCopy = [...products];
    usersCopy.sort((userA, userB) => {
      if (sorted.reversed) {
        return userA.spicy - userB.spicy;
      }
      return userB.spicy - userA.spicy;
    });
    setProducts(usersCopy);
    setSorted({ sorted: "spicy", reversed: !sorted.reversed });
  };
  const sortBySalty = () => {
    const usersCopy = [...products];
    usersCopy.sort((userA, userB) => {
      if (sorted.reversed) {
        return userA.salty - userB.salty;
      }
      return userB.salty - userA.salty;
    });
    setProducts(usersCopy);
    setSorted({ sorted: "salty", reversed: !sorted.reversed });
  };
  const sortBySweet = () => {
    const usersCopy = [...products];
    usersCopy.sort((userA, userB) => {
      if (sorted.reversed) {
        return userA.sweet - userB.sweet;
      }
      return userB.sweet - userA.sweet;
    });
    setProducts(usersCopy);
    setSorted({ sorted: "sweet", reversed: !sorted.reversed });
  };

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
        <button className="text-white btn btn-lg btn-outline bg-green-500">
          Click Name, Age, Spicy, Salty, Sweet for sorting Ascending Descending
          order
        </button>
      </h1>

      <div className="flex lg:flex-row flex-col m-3">
        <div className="card flex-auto bg-base-100 ">
          <div className="card-body">
            {(query === null || query === "" || query > Products.length || query < 1) ? (
              <div>
                <p className="no-underline card-title">ID: </p>
                <p className="no-underline card-title">NAME: </p>
                <p className="no-underline card-title">STATE: </p>
                <p className="no-underline card-title">AGE: </p>
                <p className="no-underline card-title">SPICY: </p>
                <p className="no-underline card-title">SALTY: </p>
                <p className="no-underline card-title">SWEET: </p>
              </div>
            ) : (
              <div>
                {
                  find
                    .filter((asd) =>
                      asd.id.toString().toLowerCase().includes(query)
                    )
                    .map((product, index) => (
                      <div key={index}>
                        <p className="no-underline card-title">
                          ID: {product.id}
                        </p>
                        <p className="no-underline card-title">
                          NAME: {product.name}
                        </p>
                        <p className="no-underline card-title">
                          STATE: {product.state}
                        </p>
                        <p className="no-underline card-title">
                          AGE: {product.age}
                        </p>
                        <p className="no-underline card-title">
                          SPICY: {product.spicy}
                        </p>
                        <p className="no-underline card-title">
                          SALTY: {product.salty}
                        </p>
                        <p className="no-underline card-title">
                          SWEET: {product.sweet}
                        </p>
                      </div>
                    ))[0]
                }
              </div>
            )}

            <div className="card-actions">
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
                      className="input input-bordered w-2/3 border-3 border-black"
                      onChange={(e) => setQuery(e.target.value)}
                      min="0"
                    />
                  </div>
                </div>
              </h1>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto w-full flex-auto">
          <table className={`table w-full `}>
            <thead>
              <tr className="bg-green-500 ">
                <th onClick={sortById}>
                  ID {sorted.sorted === "id" ? renderArrow() : null}
                </th>
                <th
                  onClick={sortByName}
                  className="text-1xl text-white bg-primary "
                >
                  Name {sorted.sorted === "name" ? renderArrow() : null}
                </th>
                <th className="text-1xl text-white bg-primary">State</th>
                <th
                  className="text-1xl text-white bg-primary"
                  onClick={sortByAge}
                >
                  Age {sorted.sorted === "age" ? renderArrow() : null}
                </th>
                <th
                  className="text-1xl text-white bg-primary"
                  onClick={sortBySpicy}
                >
                  Spicy {sorted.sorted === "spicy" ? renderArrow() : null}
                </th>
                <th
                  className="text-1xl text-white bg-primary"
                  onClick={sortBySalty}
                >
                  Salty {sorted.sorted === "salty" ? renderArrow() : null}
                </th>
                <th
                  className="text-1xl text-white bg-primary"
                  onClick={sortBySweet}
                >
                  Sweet {sorted.sorted === "sweet" ? renderArrow() : null}
                </th>
              </tr>
            </thead>
            <tbody>
              

              {currentPosts.map((product, index) => (
                <tr key={index}>
                  <td className="no-underline">{product.id}</td>
                  <td className="no-underline">{product.name}</td>
                  <td className="no-underline">{product.state}</td>
                  <td className="no-underline">{product.age}</td>
                  <td className="no-underline">{product.spicy}</td>
                  <td className="no-underline">{product.salty}</td>
                  <td className="no-underline">{product.sweet}</td>
                </tr>
              ))}
              
            </tbody>
          </table>
        </div>
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
