export const soilProfiles = [
  {
    id: "loam",
    name: "Loam",
    pH: 6.5,
    organicMatter: 4.2,
    tip: "Balanced texture and fertility, excellent water retention.",
  },
  {
    id: "clay",
    name: "Clay",
    pH: 6.8,
    organicMatter: 3.1,
    tip: "Improve drainage with organic matter and avoid overworking when wet.",
  },
  {
    id: "sandy",
    name: "Sandy",
    pH: 6.2,
    organicMatter: 2.5,
    tip: "Frequent light irrigation and compost to improve water holding.",
  },
  {
    id: "alluvial",
    name: "Alluvial",
    pH: 6.5,
    organicMatter: 3.8,
    tip: "Fertile soil deposited by rivers; suitable for a wide range of crops.",
  },
  {
    id: "black_cotton",
    name: "Black Cotton",
    pH: 7.2,
    organicMatter: 3.5,
    tip: "Highly moisture-retentive, ideal for cotton and soybean cultivation.",
  },
  {
    id: "red_soil",
    name: "Red Soil",
    pH: 5.5,
    organicMatter: 2.8,
    tip: "Rich in iron, requires liming and organic matter for best crop growth.",
  },
  {
    id: "laterite",
    name: "Laterite",
    pH: 5.0,
    organicMatter: 2.0,
    tip: "Acidic, low fertility; best suited for tea, coffee, and spices.",
  },
  {
    id: "desert",
    name: "Desert",
    pH: 7.8,
    organicMatter: 1.0,
    tip: "Sandy and saline; requires irrigation and soil amendments for crops.",
  },
  {
    id: "mountain",
    name: "Mountain",
    pH: 6.0,
    organicMatter: 5.0,
    tip: "Rich organic matter, suitable for fruits and tea cultivation.",
  },
  {
    id: "peaty",
    name: "Peaty",
    pH: 4.5,
    organicMatter: 15.0,
    tip: "High organic content, acidic; good for paddy and coconut with drainage.",
  }
];

export const cropRecommendations = [
  { crop: "Wheat", npk: "N:120 kg/ha, P:60 kg/ha, K:40 kg/ha", water: "Moderate; avoid waterlogging near heading." },
  { crop: "Corn", npk: "N:150 kg/ha, P:60 kg/ha, K:60 kg/ha", water: "High during tasseling and grain fill." },
  { crop: "Rice", npk: "N:100 kg/ha, P:50 kg/ha, K:50 kg/ha", water: "Maintain standing water; careful drainage at maturity." },
  { crop: "Barley", npk: "N:110 kg/ha, P:55 kg/ha, K:40 kg/ha", water: "Moderate; avoid drought stress." },
  { crop: "Soybean", npk: "N:60 kg/ha, P:50 kg/ha, K:60 kg/ha", water: "Moderate; sensitive during flowering." },
  { crop: "Potato", npk: "N:130 kg/ha, P:70 kg/ha, K:90 kg/ha", water: "High; prefer consistent moisture." },
  { crop: "Sugarcane", npk: "N:150 kg/ha, P:70 kg/ha, K:120 kg/ha", water: "High; requires frequent irrigation." },
  { crop: "Sorghum", npk: "N:90 kg/ha, P:50 kg/ha, K:40 kg/ha", water: "Low to moderate; drought tolerant." },
  { crop: "Millet", npk: "N:80 kg/ha, P:40 kg/ha, K:30 kg/ha", water: "Low; grows in dry areas." },
  { crop: "Cotton", npk: "N:100 kg/ha, P:60 kg/ha, K:50 kg/ha", water: "Moderate; avoid water stress at flowering." }
];

export const commodityList = [
  "Wheat",
  "Corn",
  "Rice",
  "Barley",
  "Soybean",
  "Potato",
  "Sugarcane",
  "Sorghum",
  "Millet",
  "Cotton"
];

// Example price series data for the added commodities (dates aligned)
export const priceSeries = {
  Wheat: [
    { date: "2025-07-01", price: 2000 },
    { date: "2025-07-15", price: 2100 },
    { date: "2025-08-01", price: 2150 },
    { date: "2025-08-15", price: 2200 },
    { date: "2025-09-01", price: 2180 },
    { date: "2025-09-15", price: 2250 },
  ],
  Corn: [
    { date: "2025-07-01", price: 1500 },
    { date: "2025-07-15", price: 1520 },
    { date: "2025-08-01", price: 1580 },
    { date: "2025-08-15", price: 1600 },
    { date: "2025-09-01", price: 1620 },
    { date: "2025-09-15", price: 1650 },
  ],
  Rice: [
    { date: "2025-07-01", price: 2400 },
    { date: "2025-07-15", price: 2380 },
    { date: "2025-08-01", price: 2420 },
    { date: "2025-08-15", price: 2450 },
    { date: "2025-09-01", price: 2475 },
    { date: "2025-09-15", price: 2500 },
  ],
  Barley: [
    { date: "2025-07-01", price: 1800 },
    { date: "2025-07-15", price: 1850 },
    { date: "2025-08-01", price: 1900 },
    { date: "2025-08-15", price: 1880 },
    { date: "2025-09-01", price: 1920 },
    { date: "2025-09-15", price: 1950 }
  ],
  Soybean: [
    { date: "2025-07-01", price: 2100 },
    { date: "2025-07-15", price: 2150 },
    { date: "2025-08-01", price: 2200 },
    { date: "2025-08-15", price: 2225 },
    { date: "2025-09-01", price: 2250 },
    { date: "2025-09-15", price: 2280 }
  ],
  Potato: [
    { date: "2025-07-01", price: 1700 },
    { date: "2025-07-15", price: 1750 },
    { date: "2025-08-01", price: 1800 },
    { date: "2025-08-15", price: 1850 },
    { date: "2025-09-01", price: 1830 },
    { date: "2025-09-15", price: 1880 }
  ],
  Sugarcane: [
    { date: "2025-07-01", price: 1900 },
    { date: "2025-07-15", price: 1930 },
    { date: "2025-08-01", price: 1980 },
    { date: "2025-08-15", price: 2020 },
    { date: "2025-09-01", price: 2000 },
    { date: "2025-09-15", price: 2050 }
  ],
  Sorghum: [
    { date: "2025-07-01", price: 1600 },
    { date: "2025-07-15", price: 1620 },
    { date: "2025-08-01", price: 1640 },
    { date: "2025-08-15", price: 1650 },
    { date: "2025-09-01", price: 1680 },
    { date: "2025-09-15", price: 1700 }
  ],
  Millet: [
    { date: "2025-07-01", price: 1500 },
    { date: "2025-07-15", price: 1510 },
    { date: "2025-08-01", price: 1520 },
    { date: "2025-08-15", price: 1530 },
    { date: "2025-09-01", price: 1540 },
    { date: "2025-09-15", price: 1550 }
  ],
  Cotton: [
    { date: "2025-07-01", price: 2200 },
    { date: "2025-07-15", price: 2250 },
    { date: "2025-08-01", price: 2300 },
    { date: "2025-08-15", price: 2320 },
    { date: "2025-09-01", price: 2310 },
    { date: "2025-09-15", price: 2350 }
  ]
};