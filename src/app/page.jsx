import React from "react";
import Link from "next/link";
import FeaturedFoods from "@/components/FeaturedFoods";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-amber-50 to-orange-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to Food Lovers
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover, share, and explore the world&apos;s most delicious recipes
            and culinary experiences.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/login"
              className="btn btn-warning bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded-lg transition duration-200"
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="btn btn-outline border-amber-600 text-amber-600 hover:bg-amber-50 font-medium py-3 px-8 rounded-lg transition duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose Food Lovers?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🍳",
                title: "Diverse Recipes",
                description:
                  "Access thousands of recipes from cuisines around the world.",
              },
              {
                icon: "👥",
                title: "Community Driven",
                description:
                  "Connect with food enthusiasts and share your favorite dishes.",
              },
              {
                icon: "⭐",
                title: "Highly Rated",
                description:
                  "Find the best recipes based on community ratings and reviews.",
              },
              {
                icon: "📱",
                title: "Mobile Friendly",
                description:
                  "Access your recipes anytime, anywhere on any device.",
              },
              {
                icon: "🔔",
                title: "Personalized",
                description:
                  "Get recommendations based on your taste preferences.",
              },
              {
                icon: "💾",
                title: "Save Favorites",
                description: "Bookmark your favorite recipes for quick access.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition duration-300"
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Recipes Section */}
      <FeaturedFoods />

      {/* Categories Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Breakfast", emoji: "🥐" },
              { name: "Lunch", emoji: "🥗" },
              { name: "Dinner", emoji: "🍽️" },
              { name: "Desserts", emoji: "🍰" },
              { name: "Beverages", emoji: "🥤" },
              { name: "Appetizers", emoji: "🥒" },
              { name: "Salads", emoji: "🥙" },
              { name: "Soups", emoji: "🍲" },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-linear-to-br from-amber-100 to-orange-100 p-6 rounded-lg text-center hover:shadow-lg transition duration-300 cursor-pointer"
              >
                <div className="text-4xl mb-3">{category.emoji}</div>
                <h3 className="text-lg font-bold text-gray-900">
                  {category.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Food Blogger",
                testimonial:
                  "Food Lovers has transformed how I discover and share recipes. The community is amazing!",
                avatar: "👩",
              },
              {
                name: "Mike Chen",
                role: "Home Chef",
                testimonial:
                  "Best platform for finding authentic international recipes. Love the ratings system!",
                avatar: "👨",
              },
              {
                name: "Emma Wilson",
                role: "Nutrition Expert",
                testimonial:
                  "The app is intuitive and user-friendly. I recommend it to all my clients.",
                avatar: "👩‍🍳",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  &rdquo;{testimonial.testimonial}&rdquo;
                </p>
                <div className="mt-4 flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50K+", label: "Active Users" },
              { number: "10K+", label: "Recipes" },
              { number: "100+", label: "Cuisines" },
              { number: "1M+", label: "Reviews" },
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <h3 className="text-4xl font-bold text-amber-600 mb-2">
                  {stat.number}
                </h3>
                <p className="text-lg text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-linear-to-r from-amber-600 to-orange-600 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Explore Delicious Recipes?
          </h2>
          <p className="text-xl text-amber-50 mb-8 max-w-2xl mx-auto">
            Join thousands of food lovers and start your culinary journey today.
          </p>
          <Link
            href="/signup"
            className="btn btn-lg bg-white hover:bg-gray-100 text-amber-600 font-bold py-3 px-10 rounded-lg transition duration-200 inline-block"
          >
            Sign Up Now
          </Link>
        </div>
      </section>
    </div>
  );
}
