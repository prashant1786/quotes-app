import { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchRandomQuote = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        "https://api.freeapi.app/api/v1/public/quotes/quote/random",
        { cache: "no-store" },
      );

      if (!res.ok) throw new Error("Failed to fetch quote");

      const data = await res.json();

      setQuote(data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  if (loading && !quote) {
    return (
      <div className="h-screen flex items-center justify-center text-xl">
        Loading quote...
      </div>
    );
  }

  if (error && !quote) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <p className="text-red-600 mb-4">{error}</p>
        <button
          onClick={fetchRandomQuote}
          className="bg-black text-white px-5 py-3 rounded-lg"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 to-blue-600 text-white p-6">
      {/* Quote Box */}
      <div className="max-w-3xl text-center bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-xl">
        <p className="text-2xl md:text-3xl font-medium mb-6">
          “{quote?.content}”
        </p>

        <p className="text-lg text-gray-200">— {quote?.author}</p>
      </div>

      {/* Button */}
      <button
        onClick={fetchRandomQuote}
        className="mt-10 bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
      >
        🎲 New Quote
      </button>
    </div>
  );
}

export default App;
