"use client";

import { useEffect, useMemo, useState } from "react";
import {
  soilProfiles,
  cropRecommendations,
  priceSeries,
  commodityList,
} from "../assets/market";

function LineChart({ data, width = 640, height = 220, color = "#38B6A1" }) {
  if (!data?.length)
    return <div className="text-gray-500 text-center italic">No data</div>;

  const padding = { top: 16, right: 16, bottom: 28, left: 36 };
  const innerW = width - padding.left - padding.right;
  const innerH = height - padding.top - padding.bottom;

  const xs = data.map((d) => new Date(d.date).getTime());
  const ys = data.map((d) => d.price);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);

  const xScale = (x) => ((x - minX) / (maxX - minX || 1)) * innerW;
  const yScale = (y) => innerH - ((y - minY) / (maxY - minY || 1)) * innerH;

  const path = data
    .map(
      (d, i) =>
        `${i === 0 ? "M" : "L"} ${
          padding.left + xScale(new Date(d.date).getTime())
        } ${padding.top + yScale(d.price)}`
    )
    .join(" ");

  const yTicks = 4;
  const yTickVals = Array.from(
    { length: yTicks + 1 },
    (_, i) => minY + ((maxY - minY) * i) / yTicks
  );

  return (
    <svg
      width={width}
      height={height}
      role="img"
      aria-label="Commodity price chart"
      className="bg-[#F7FAF5] rounded-xl"
    >
      <rect x="0" y="0" width={width} height={height} rx="12" fill="#F7FAF5" />
      {yTickVals.map((v, i) => {
        const y = padding.top + yScale(v);
        return (
          <g key={i}>
            <line
              x1={padding.left}
              x2={width - padding.right}
              y1={y}
              y2={y}
              stroke="#E0E0E0"
              strokeDasharray="4 4"
            />
            <text
              x={8}
              y={y + 4}
              fontSize="12"
              fill="#666"
              className="font-sans"
            >
              {v.toFixed(0)}
            </text>
          </g>
        );
      })}
      <path d={path} fill="none" stroke={color} strokeWidth="3" />
      <text
        x={padding.left}
        y={height - 6}
        fontSize="12"
        fill="#666"
        className="font-sans"
      >
        {new Date(minX).toLocaleDateString()}
      </text>
      <text
        x={width - padding.right - 90}
        y={height - 6}
        fontSize="12"
        fill="#666"
        className="font-sans"
      >
        {new Date(maxX).toLocaleDateString()}
      </text>
    </svg>
  );
}

function Stat({ label, value, hint }) {
  return (
    <div className="bg-[#e6f0ea] px-4 py-3 rounded-lg text-center min-w-[110px] shadow">
      <div className="font-semibold text-[#2c6e4f] mb-1">{label}</div>
      <div className="text-xl font-bold text-[#1b4229]">{value}</div>
      {hint && <div className="text-sm text-[#6b8e65] mt-1">{hint}</div>}
    </div>
  );
}

export default function MarketAnalysis() {
  const [soilType, setSoilType] = useState(soilProfiles[0]?.id || "loam");
  const [crop, setCrop] = useState(cropRecommendations[0]?.crop || "Wheat");
  const soil = useMemo(
    () => soilProfiles.find((s) => s.id === soilType),
    [soilType]
  );
  const cropRec = useMemo(
    () => cropRecommendations.find((c) => c.crop === crop),
    [crop]
  );
  const [commodity, setCommodity] = useState(commodityList[0] || "Wheat");
  const baseSeries = priceSeries[commodity] || [];
  const [userPrices, setUserPrices] = useState([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("user-price-feedback");
      if (raw) setUserPrices(JSON.parse(raw));
    } catch (e) {
      console.log("Failed to parse user feedback", e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("user-price-feedback", JSON.stringify(userPrices));
    } catch (e) {
      console.log("Failed to save user feedback", e);
    }
  }, [userPrices]);

  const mergedSeries = useMemo(() => {
    const extras = userPrices
      .filter((u) => u.commodity === commodity)
      .map((u) => ({ date: u.date, price: Number(u.price), user: true }));
    return [...baseSeries, ...extras].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
  }, [baseSeries, userPrices, commodity]);

  const stats = useMemo(() => {
    if (!mergedSeries.length) return null;
    const prices = mergedSeries.map((d) => d.price);
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    const avg = prices.reduce((a, b) => a + b, 0) / prices.length;
    const first = mergedSeries[0].price;
    const last = mergedSeries[mergedSeries.length - 1].price;
    const changePct = ((last - first) / (first || 1)) * 100;
    return { min, max, avg, changePct, last };
  }, [mergedSeries]);

  const [form, setForm] = useState({
    commodity: commodityList[0] || "Wheat",
    price: "",
    location: "",
    date: new Date().toISOString().slice(0, 10),
    notes: "",
  });

  function submitFeedback(e) {
    e.preventDefault();
    if (!form.price || !form.location) return;
    const entry = {
      id:
        (crypto?.randomUUID && crypto.randomUUID()) ||
        `id_${Date.now()}_${Math.random().toString(36).slice(2)}`,
      ...form,
      price: Number(form.price),
    };
    setUserPrices((prev) => [...prev, entry]);
    setForm((f) => ({ ...f, price: "", notes: "" }));
  }

  return (
    <main className="max-w-4xl mx-auto p-6 bg-[#f7faf5] font-sans text-[#264d27]">
      {/* Header */}
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold text-[#2c6e4f] mb-2">
          Market Analysis
        </h1>
        <p className="text-sm text-[#6b8e65]">
          Analyze commodity prices, get soil input recommendations, and
          contribute local price feedback.
        </p>
      </header>

      {/* Soil Recommendation */}
      <section className="bg-white rounded-xl p-6 shadow mb-8">
        <h2 className="text-lg font-semibold text-[#3a6f44] mb-4">
          Soil Recommendation
        </h2>
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex flex-col flex-1 min-w-[200px]">
            <label className="mb-1 font-semibold text-[#2b6b44] text-sm">
              Soil type
            </label>
            <select
              className="p-2 border border-[#88b18f] rounded-lg focus:border-[#38b6a1] focus:ring-2 focus:ring-[#b9e6dba6]"
              value={soilType}
              onChange={(e) => setSoilType(e.target.value)}
            >
              {soilProfiles.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col flex-1 min-w-[200px]">
            <label className="mb-1 font-semibold text-[#2b6b44] text-sm">
              Crop
            </label>
            <select
              className="p-2 border border-[#88b18f] rounded-lg focus:border-[#38b6a1] focus:ring-2 focus:ring-[#b9e6dba6]"
              value={crop}
              onChange={(e) => setCrop(e.target.value)}
            >
              {cropRecommendations.map((c) => (
                <option key={c.crop} value={c.crop}>
                  {c.crop}
                </option>
              ))}
            </select>
          </div>
        </div>

        <ul className="list-disc pl-5 text-sm leading-relaxed text-[#264d27]">
          <li>
            <strong>Soil pH:</strong> {soil?.pH}
          </li>
          <li>
            <strong>Organic matter:</strong> {soil?.organicMatter}%
          </li>
          <li>
            <strong>Recommended N-P-K for {crop}:</strong> {cropRec?.npk}
          </li>
          <li>
            <strong>Water advice:</strong> {cropRec?.water}
          </li>
          <li>
            <strong>Additional tip:</strong> {soil?.tip}
          </li>
        </ul>
      </section>

      {/* Market Price Tracking */}
      <section className="bg-white rounded-xl p-6 shadow mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-[#3a6f44]">
            Market Price Tracking
          </h2>
          <select
            className="p-2 border border-[#88b18f] rounded-lg"
            value={commodity}
            onChange={(e) => setCommodity(e.target.value)}
          >
            {commodityList.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <LineChart data={mergedSeries} />

        {stats && (
          <div className="flex flex-wrap justify-between gap-4 mt-4">
            <Stat label="Last price" value={stats.last.toFixed(0)} />
            <Stat label="Avg price" value={stats.avg.toFixed(0)} />
            <Stat
              label="Low / High"
              value={`${stats.min.toFixed(0)} / ${stats.max.toFixed(0)}`}
            />
            <Stat
              label="Trend"
              value={`${stats.changePct >= 0 ? "+" : ""}${stats.changePct.toFixed(
                1
              )}%`}
              hint="from first to latest"
            />
          </div>
        )}
      </section>

      {/* Feedback Section */}
      <section className="bg-white rounded-xl p-6 shadow mb-8">
        <h2 className="text-lg font-semibold text-[#3a6f44] mb-4">
          Contribute Local Price (Feedback)
        </h2>
        <form onSubmit={submitFeedback} className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col flex-1 min-w-[200px]">
              <label className="mb-1 font-semibold text-[#2b6b44] text-sm">
                Commodity
              </label>
              <select
                className="p-2 border border-[#88b18f] rounded-lg"
                value={form.commodity}
                onChange={(e) => setForm({ ...form, commodity: e.target.value })}
              >
                {commodityList.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col flex-1 min-w-[200px]">
              <label className="mb-1 font-semibold text-[#2b6b44] text-sm">
                Price
              </label>
              <input
                type="number"
                className="p-2 border border-[#88b18f] rounded-lg"
                placeholder="e.g., 2100"
                required
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
              />
            </div>

            <div className="flex flex-col flex-1 min-w-[200px]">
              <label className="mb-1 font-semibold text-[#2b6b44] text-sm">
                Date
              </label>
              <input
                type="date"
                className="p-2 border border-[#88b18f] rounded-lg"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col flex-1 min-w-[200px]">
              <label className="mb-1 font-semibold text-[#2b6b44] text-sm">
                Location
              </label>
              <input
                className="p-2 border border-[#88b18f] rounded-lg"
                placeholder="District / Market"
                required
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
              />
            </div>
            <div className="flex flex-col flex-1 min-w-[200px]">
              <label className="mb-1 font-semibold text-[#2b6b44] text-sm">
                Notes
              </label>
              <input
                className="p-2 border border-[#88b18f] rounded-lg"
                placeholder="Optional notes"
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-[#38b6a1] to-[#5aa469] text-white font-bold py-2 px-6 rounded-lg hover:from-[#5aa469] hover:to-[#38b6a1] self-start"
          >
            Submit Feedback
          </button>
        </form>

        <div className="mt-6">
          <h3 className="text-md font-semibold text-[#2c6e4f] mb-2">
            Recent Submissions
          </h3>
          {userPrices.length === 0 ? (
            <div className="text-gray-500 italic">No submissions yet.</div>
          ) : (
            <ul className="list-disc pl-5 text-sm leading-relaxed text-[#264d27]">
              {[...userPrices]
                .reverse()
                .slice(0, 6)
                .map((u) => (
                  <li key={u.id}>
                    <strong>{u.commodity}</strong> — {u.price} @ {u.location} on{" "}
                    {new Date(u.date).toLocaleDateString()}
                    {u.notes && (
                      <span className="text-gray-500"> — {u.notes}</span>
                    )}
                  </li>
                ))}
            </ul>
          )}
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 italic mb-10">
        Note: Demo data only. In production, connect with official government
        datasets.
      </footer>
    </main>
  );
}
