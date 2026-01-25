import Link from "next/link";

export default function FoodCard({ food }) {
  return (
    <Link href={`/food-details/${food.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer">
        <img
          src={food.imageUrl}
          alt={food.name}
          className="h-48 w-full object-cover"
        />

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{food.name}</h3>

          <p className="text-gray-600 mb-2">
            {food.cuisine} Cuisine • {food.category}
          </p>

          <span className="text-amber-600 font-semibold">⭐ {food.rating}</span>
        </div>
      </div>
    </Link>
  );
}
