import React, { useState } from "react";
import VegetablesCard from "../components/cards/VegetableCard";
import DetailCard from "../components/cards/DetailCard";

import bellpepperImg from "../assets/image/bellpepper.png";
import carrotImg from "../assets/image/carrots.png";
import cucumberImg from "../assets/image/cucumber.png";
import potatoImg from "../assets/image/potato.png";
import tomatoImg from "../assets/image/tomato.png";
const Vegetables = () => {
  const [selectedVegetable, setSelectedVegetable] = useState(null);

  const vegetables = [
    {
      id: 1,
      name: "Bellpepper",
      image: bellpepperImg,
      description: "Bellpepper is a colorful vegetable rich in vitamins and often used in salads and stir-fries.",
      details: " Bellpepper, also known as capsicum, comes in various vibrant colors like red, green, yellow, and orange. It is not only visually appealing but also packed with essential nutrients like vitamin C, vitamin A, and antioxidants. This vegetable is versatile and can be grilled, roasted, stuffed, or eaten raw in salads, adding a sweet and crisp flavor to any dish. It also contributes to boosting immunity and maintaining skin health.",
    },
    {
      id: 2,
      name: "Carrot",
      image: carrotImg,
      description: "Carrot is a crunchy root vegetable known for its high beta-carotene content and sweetness.",
      details: "Carrots are one of the most popular root vegetables worldwide. They are an excellent source of beta-carotene, which the body converts to vitamin A, promoting good vision, skin health, and a robust immune system. Carrots can be eaten raw, juiced, steamed, or added to a variety of dishes, offering a natural sweetness and nutritional boost. They are also rich in fiber, which aids digestion and supports heart health.",
    },
    {
      id: 3,
      name: "Cucumber",
      image: cucumberImg,
      description: "Cucumbers are a refreshing and nutritious vegetable, commonly used in salads, sandwiches, and as a snack.",
      details: "Cucumbers are rich in vitamin C, potassium, and antioxidants, making them an excellent choice for supporting overall health. They also have a high water content, which can help to keep you hydrated and support healthy digestion. Additionally, cucumbers contain anti-inflammatory compounds that may help to reduce inflammation and improve skin health. With their low calorie count and high nutrient density, cucumbers are a great addition to a healthy diet.",
    },
    {
      id: 4,
      name: "Potato",
      image: potatoImg,
      description: "Potatoes are a starchy vegetable, often used in a variety of dishes, such as fries, soups, and salads.",
      details: "Potatoes are a good source of vitamin C, vitamin B6, and minerals like potassium and manganese. They also contain a significant amount of fiber, which can help to support digestive health and promote feelings of fullness. Additionally, potatoes are rich in antioxidants and contain a variety of phytochemicals that may help to protect against chronic diseases. When cooked and prepared in a healthy way, potatoes can be a nutritious and satisfying addition to a balanced diet. They are also a good source of energy and can help to support healthy muscle function.",
    },
    {
      id: 5,
      name: "Tomato",
      image: tomatoImg,
      description: "Tomatoes are a nutrient-rich vegetable, high in vitamin C and lycopene, commonly used in salads, sauces, and as a pizza topping.",
      details: "Tomatoes are rich in antioxidants and have a high water content, making them an excellent choice for supporting overall health. They are also a good source of vitamin C, potassium, and fiber, which can help to support healthy digestion and promote feelings of fullness. Additionally, tomatoes contain a variety of phytochemicals, including lycopene, which may help to protect against chronic diseases such as heart disease and certain types of cancer. With their low calorie count and high nutrient density, tomatoes are a great addition to a healthy diet. They are also a versatile ingredient and can be used in a variety of dishes, from soups and sauces to salads and sandwiches.",
    },
  ];

  return (
    <section className="bg-white">
      {selectedVegetable ? (
        // Full-page DetailCard
        <DetailCard
          name={selectedVegetable.name}
          image={selectedVegetable.image}
          onClose={() => setSelectedVegetable(null)} // Kembali ke daftar
        />
      ) : (
        // Daftar sayuran
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="mb-8 lg:mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-textDark">
              All About Vegetables <br /> for Freshness and Quality
            </h2>
            <p className="text-textDark sm:text-xl">
              Dive into detailed information about each vegetable—its quality, benefits, and how <br /> to make the most of it in your meals.
            </p>
          </div>

          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            {vegetables.map((vegetable) => (
              <VegetablesCard
                key={vegetable.id}
                name={vegetable.name}
                image={vegetable.image}
                description={vegetable.description}
                onClick={() => setSelectedVegetable(vegetable)} // Pilih sayuran
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Vegetables;