import React from "react";

const plans = [
  {
    id: 1,
    name: "Beginner Plan",
    price: "₹20,000",
    duration: "3 Months",
    features: ["Access to basic courses", "Community support", "Certificate"],
    popular: false,
  },
  {
    id: 2,
    name: "Pro Plan",
    price: "₹35,000",
    duration: "6 Months",
    features: [
      "All beginner features",
      "Mentor guidance",
      "Projects & assignments",
      "Certificate of completion",
    ],
    popular: true,
  },
  {
    id: 3,
    name: "Master Plan",
    price: "₹50,000",
    duration: "12 Months",
    features: [
      "All Pro features",
      "1:1 mentorship",
      "Job assistance",
      "Exclusive workshops",
    ],
    popular: false,
  },
];

const Pricing = () => (
  <section className="py-16 bg-white dark:bg-gray-800">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
        Pricing Plans
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map(({ id, name, price, duration, features, popular }) => (
          <div
            key={id}
            className={`border rounded-lg shadow-md p-6 transform transition-all duration-300 bg-gray-50 dark:bg-gray-700 ${
              popular ? "scale-105 border-orange-500" : "hover:scale-105 hover:shadow-xl"
            }`}
          >
            {popular && (
              <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-xs mb-4">
                Most Popular
              </span>
            )}
            <h3 className="text-xl font-semibold mb-2 text-orange-600">{name}</h3>
            <p className="text-gray-800 dark:text-gray-200 font-bold text-2xl mb-2">{price}</p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{duration}</p>

            <ul className="mb-6 space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="text-gray-700 dark:text-gray-200">
                  • {feature}
                </li>
              ))}
            </ul>

            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2 rounded hover:from-orange-600 hover:to-orange-500 w-full transition-colors">
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
