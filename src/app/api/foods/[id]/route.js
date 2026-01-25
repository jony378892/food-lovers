import { NextResponse } from "next/server";

const foods = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    cuisine: "Italian",
    rating: 4.8,
    category: "Dinner",
    imageUrl: "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
  },
  {
    id: 2,
    name: "Pad Thai",
    cuisine: "Thai",
    rating: 4.9,
    category: "Lunch",
    imageUrl: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
  },
  {
    id: 3,
    name: "Beef Tacos",
    cuisine: "Mexican",
    rating: 4.7,
    category: "Dinner",
    imageUrl: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  },
  {
    id: 4,
    name: "Pancakes",
    cuisine: "American",
    rating: 4.6,
    category: "Breakfast",
    imageUrl: "https://images.unsplash.com/photo-1556386734-4227a180d19e",
  },
  {
    id: 5,
    name: "Chocolate Cake",
    cuisine: "Desserts",
    rating: 4.9,
    category: "Desserts",
    imageUrl: "https://images.unsplash.com/photo-1543161252-42609aa0e3d2",
  },
];

export async function GET(request, { params }) {
  const id = Number(params.id);

  const food = foods.find((food) => food.id === id);

  if (!food) {
    return NextResponse.json({ message: "Food not found" }, { status: 404 });
  }

  return NextResponse.json(food);
}
