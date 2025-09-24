import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-green-100 px-6">
      <h1 className="text-9xl font-extrabold text-green-700 mb-6">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
        Page Not Found
      </h2>
      <p className="text-lg md:text-xl text-gray-600 mb-8 text-center max-w-md">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-lg transition"
      >
        Go Back Home
      </button>
    </div>
  );
}
