import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-amber-50 to-orange-50 py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About Food Lovers
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Food Lovers is a platform designed for anyone who loves exploring
            culinary delights. From authentic international recipes to trending
            dishes, we provide a community-driven space to share, discover, and
            enjoy food.
          </p>
          <Link
            href="/foods"
            className="btn bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded-lg transition duration-200"
          >
            Explore Foods
          </Link>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Our mission is to bring together food enthusiasts from around the
            world to celebrate flavors, recipes, and culinary creativity. We aim
            to make discovering and sharing recipes easy, fun, and interactive
            for everyone.
          </p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: "Community",
                description:
                  "We believe in a vibrant, supportive community of food lovers sharing experiences and knowledge.",
                icon: "👥",
              },
              {
                title: "Authenticity",
                description:
                  "We focus on authentic recipes and real flavors from cuisines all over the world.",
                icon: "🍽️",
              },
              {
                title: "Innovation",
                description:
                  "We embrace creativity, discovering new dishes, and exploring culinary trends.",
                icon: "🌟",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-6 bg-amber-50 rounded-lg hover:shadow-lg transition duration-300"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Our Food Community
          </h2>
          <p className="text-xl text-amber-50 mb-8 max-w-2xl mx-auto">
            Start exploring delicious recipes, connect with food lovers, and
            share your own culinary creations today.
          </p>
          <Link
            href="/signup"
            className="btn bg-white hover:bg-gray-100 text-amber-600 font-bold py-3 px-10 rounded-lg transition duration-200 inline-block"
          >
            Sign Up Now
          </Link>
        </div>
      </section>
    </div>
  );
}
