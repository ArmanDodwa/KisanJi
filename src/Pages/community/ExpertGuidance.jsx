import React from "react";

// Sample expert data
const expertData = [
  {
    id: 1,
    name: "Sh. K.A.P Sinha, IAS",
    phone: "+91-172-2740860",
    email: "23ashKAP@gmail.com",
    image: "https://www.hindustantimes.com/ht-img/img/2024/10/09/1600x900/The-Aam-Aadmi-Party--AAP--government-in-Punjab-on-_1728495466334.jpg",
    description: "Chief Secretary, Punjab. Located at 6th Floor R. No. 28, Chandigarh.",
  },
  {
    id: 2,
    name: "Sh. Basant Garg, IAS",
    phone: "+91-172-2747768",
    email: "Basant@gmail.com",
    image: "https://www.babushahi.com/upload/image/Dr-Basant-Garg-1479266132629.jpg",
    description:
      "Administrative Secretary Agriculture, Punjab. Office: R. No 10, 8th Floor Main Secretariat.",
  },
  {
    id: 3,
    name: "Smt. Baldeep Kaur, IAS",
    phone: "+91-172-2742356",
    email: "Baldeep@gmail.com",
    image: "https://www.witnessinthecorridors.com/ImgNewsPolitical/230822170326894.png",
    description: "Secretary Agriculture, Punjab. Office: Mini Sectt. 2nd Floor R. No. 226, Chandigarh.",
  },

  {
    id: 5,
    name: "Smt. Satnam Kaur",
    phone: "9815777417",
    email: "Satnam#gmail.com",
    image: "https://via.placeholder.com/200x200.png?text=Satnam+Kaur",
    description: "Deputy Secretary Agriculture, Punjab. Office: Mini Sectt. 7th Floor R. No. 702, Chandigarh.",
  },
];

export default function ExpertGuidance() {
  return (
    <div className="max-w-7xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold text-green-600 mb-8 text-center">
        Connects With Experts
      </h1>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {expertData.map((expert) => (
          <div
            key={expert.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={expert.image}
              alt={expert.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800">
                {expert.name}
              </h2>
              <p className="text-gray-600 mt-2">{expert.description}</p>
              <p className="text-gray-600 mt-2">📞 {expert.phone}</p>
              <p className="text-gray-600 mt-1">📧 {expert.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}