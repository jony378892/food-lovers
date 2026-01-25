"use client";

import { useEffect, useState } from "react";
import FoodCard from "@/components/FoodCard";

export default function FoodsPage() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/foods")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-linear-to-r from-amber-50 to-orange-50 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Explore Foods
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover popular dishes from different cuisines, hand-picked for
            food lovers.
          </p>
        </div>
      </section>

      {/* Foods Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <p className="text-center text-gray-500 text-lg">
              Loading delicious foods...
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {foods.map((food) => (
                <FoodCard key={food.id} food={food} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
