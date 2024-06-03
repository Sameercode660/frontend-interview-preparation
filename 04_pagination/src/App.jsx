import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

function App() {
  const [productsData, setProductsData] = useState([]);
  const [totalPage, setTotalPage] = useState(3);

  async function handleFetchData() {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=100");
      const data = await response.json();
      setProductsData(data.products);
    } catch (error) {
      console.log("unable to fetch the data");
    }
  }

  function handlePagination(pageNumber) {
    setTotalPage(pageNumber)
  }

  useEffect(() => {
    handleFetchData();
  }, []);
  return (
    <>
      <div className="w-full h-full flex flex-wrap justify-center ">
        {productsData.length > 0
          ? productsData
              .slice(totalPage * 10 - 10, totalPage * 10)
              .map((product) => {
                return (
                  <ProductCard
                    title={product.title}
                    image={product.thumbnail}
                    description={product.description}
                  ></ProductCard>
                );
              })
          : ""}
      </div>
      <div className="flex justify-center pb-10 items-center">
        {totalPage > 1 ? (
          <span
            className="cursor-pointer"
            onClick={() => {
              setTotalPage((prev) => prev - 1);
            }}
          >
            ⏪
          </span>
        ) : (
          ""
        )}
        {[...Array(productsData.length / 10)].map((_, i) => {
          return (
            <span
              onClick={() => {
                handlePagination(i+1)
              }}
              className={`grid place-items-center cursor-pointer font-semibold border pl-4 pr-4 pb-2 pt-4 m-2  ${
                totalPage == i + 1 ? "bg-gray-300" : ""
              }`}
            >
              {i + 1}
            </span>
          );
        })}
        {productsData.length / 10 == totalPage ? (
          ""
        ) : (
          <span
            className=" cursor-pointer"
            onClick={() => {
              setTotalPage((prev) => prev + 1);
            }}
          >
            ⏩
          </span>
        )}
      </div>
    </>
  );
}

export default App;
