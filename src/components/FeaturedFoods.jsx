"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function FeaturedFoods() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("/api/foods?limit=3");

        if (!response.ok) {
          throw new Error("Failed to fetch foods");
        }

        const result = await response.json();

        if (result.success) {
          console.log("✓ Foods loaded on home page:", result.data.length);
          setFoods(result.data);
        } else {
          throw new Error(result.error || "Unknown error");
        }
      } catch (err) {
        console.error("✗ Error loading foods:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  if (loading) {
    return (
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Featured Recipes
          </h2>
          <div className="flex justify-center items-center min-h-64">
            <div className="flex flex-col items-center gap-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
              <p className="text-gray-600">Loading recipes...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Featured Recipes
          </h2>
          <div className="flex justify-center items-center min-h-64">
            <div className="text-center">
              <p className="text-red-600 mb-4">⚠️ Error loading recipes</p>
              <p className="text-gray-600 text-sm">{error}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Featured Recipes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {foods.length > 0 ? (
            foods.map((food) => (
              <div
                key={food._id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer"
              >
                {/* Food Image */}
                <div className="relative bg-linear-to-r from-amber-400 to-orange-400 h-48 flex items-center justify-center overflow-hidden">
                  {food.strMealThumb ? (
                    <Image
                      src={food.strMealThumb}
                      alt={food.strMeal}
                      fill
                      className="object-cover hover:scale-110 transition duration-300"
                    />
                  ) : (
                    <div className="text-6xl">🍽️</div>
                  )}
                </div>

                {/* Food Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {food.strMeal}
                  </h3>

                  {food.strArea && (
                    <p className="text-gray-600 mb-3 text-sm">
                      {food.strArea} Cuisine
                    </p>
                  )}

                  {food.strCategory && (
                    <p className="mb-3 text-xs bg-amber-100 text-amber-800 inline-block px-3 py-1 rounded-full">
                      {food.strCategory}
                    </p>
                  )}

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                    <span className="text-sm font-medium text-amber-600 flex items-center gap-1">
                      ⭐ {food.rating || 4.5}
                    </span>
                    <button className="text-amber-600 hover:text-amber-700 font-medium text-sm transition">
                      View Recipe →
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <p className="text-gray-600">No recipes available yet</p>
            </div>
          )}
        </div>

        {foods.length > 0 && (
          <div className="text-center mt-12">
            <button className="btn btn-outline border-amber-600 text-amber-600 hover:bg-amber-50 font-medium py-3 px-8 rounded-lg transition duration-200">
              View All Recipes
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
