import React, { useEffect } from "react";
import MealCard from "./MealCard";
import Spinner from "./Spinner";
import { useState } from "react";

const CategorySection = () => {
  const [category, setCategory] = useState("Seafood");
  const [mealCardData, setMealCardData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        );
        console.log("res is", res);
        if (res) {
          const data = await res.json();
          setMealCardData(data.meals);
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [category]);

  return loading ? (
    <Spinner />
  ) : (
    <div className="h-[100vh] w-full pt-8 mt-80 md:mt-2">
      <div className="flex flex-col justify-center items-center  ">
        <div className="flex flex-col gap-2">
          <p className="text-center text-lg font-bold text-[#141414]">
            Shop by Category
          </p>
          <h1 className="text-center text-[#313131] text-3xl font-semibold pb-4 w-[300px] md:w-full mx-auto">
            Top Categories Of Organic Food{" "}
          </h1>

          <div className={`grid grid-cols-1 md:grid-cols-5  max-w-[600px] md:max-w-[600px] `}>
            <button
              onClick={() => setCategory("Chicken")}
              className={`py-2 px-6 rounded-3xl ${
                category === "Chicken"
                  ? "bg-[#345333] text-white font-semibold"
                  : "bg-[#F2F2EC]"
              }`}
            >
              Chicken
            </button>
            <button
              className={`py-2 px-6  rounded-3xl ${
                category === "Pasta"
                  ? "bg-[#345333] text-white font-semibold"
                  : "bg-[#F2F2EC]"
              }`}
              onClick={() => setCategory("Pasta")}
            >
              Pasta
            </button>
            <button
              className={`py-2 px-6 rounded-3xl ${
                category === "Seafood"
                  ? "bg-[#345333] text-white font-semibold"
                  : "bg-[#F2F2EC]"
              }`}
              onClick={() => setCategory("Seafood")}
            >
              {" "}
              Sea Food
            </button>
            <button
              className={`py-2 px-6 rounded-3xl ${
                category === "Vegan"
                  ? "bg-[#345333] text-white font-semibold"
                  : "bg-[#F2F2EC]"
              }`}
              onClick={() => setCategory("Vegan")}
            >
              {" "}
              Vegan
            </button>
            <button
              className={`py-2 px-6 rounded-3xl ${
                category === "Breakfast"
                  ? "bg-[#345333] text-white font-semibold"
                  : "bg-[#F2F2EC]"
              }`}
              onClick={() => setCategory("Breakfast")}
            >
              Breakfast
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1000px]  place-items-center gap-20 md:gap-10 mx-auto   pt-12">
        {mealCardData.map((cat, ind) => (
          <div key={ind} className="max-w-[600px]  ">
            <MealCard name={cat.strMeal} pic={cat.strMealThumb} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
