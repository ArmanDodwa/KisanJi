// data.js

export const stateData = {
  "Madhya Pradesh": {
    months: ["Jan", "Feb", "Mar", "Apr", "May"],
    crops: ["Rice", "Wheat", "Corn", "Sugarcane", "Soybean"],
    production: {
      Rice: [100, 105, 110, 115, 120],
      Wheat: [80, 82, 85, 87, 90],
      Corn: [50, 52, 53, 55, 57],
      Sugarcane: [60, 62, 64, 65, 66],
      Soybean: [40, 42, 43, 45, 47],
    },
    prices: {
      Rice: [40, 42, 41, 43, 45],
      Wheat: [30, 31, 30, 32, 33],
      Corn: [20, 21, 22, 23, 22],
      Sugarcane: [25, 26, 27, 28, 27],
      Soybean: [18, 19, 20, 21, 22],
    },
    currentMarketPrice: {
      Rice: 45,
      Wheat: 33,
      Corn: 22,
      Sugarcane: 27,
      Soybean: 22,
    },
    priceAlert: {
      Rice: { text: "Up", percent: "+4.88%" },
      Wheat: { text: "Up", percent: "+3.03%" },
      Corn: { text: "Down", percent: "-4.55%" },
      Sugarcane: { text: "Up", percent: "+3.70%" },
      Soybean: { text: "Up", percent: "+4.76%" },
    },
  },

  Gujarat: {
    months: ["Jan", "Feb", "Mar", "Apr", "May"],
    crops: ["Rice", "Wheat", "Corn", "Sugarcane", "Cotton"],
    production: {
      Rice: [90, 92, 95, 97, 100],
      Wheat: [70, 72, 73, 75, 77],
      Corn: [40, 42, 43, 44, 45],
      Sugarcane: [55, 57, 58, 60, 62],
      Cotton: [35, 36, 37, 38, 40],
    },
    prices: {
      Rice: [38, 39, 40, 41, 42],
      Wheat: [28, 29, 30, 31, 32],
      Corn: [18, 19, 20, 21, 20],
      Sugarcane: [24, 25, 26, 27, 26],
      Cotton: [35, 36, 37, 36, 38],
    },
    currentMarketPrice: {
      Rice: 42,
      Wheat: 32,
      Corn: 20,
      Sugarcane: 26,
      Cotton: 38,
    },
    priceAlert: {
      Rice: { text: "Up", percent: "+2.44%" },
      Wheat: { text: "Up", percent: "+3.13%" },
      Corn: { text: "Down", percent: "-4.76%" },
      Sugarcane: { text: "Down", percent: "-3.70%" },
      Cotton: { text: "Up", percent: "+5.56%" },
    },
  },
};
