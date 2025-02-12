import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Error() {

    const [count, setCount] = useState(5)

    useEffect(() => {
        const interval = setInterval(() => {
          setCount((prev) => prev - 1);
        }, 1000);
            const timeout = setTimeout(() => {
          window.location.href = "/";
        }, 5000);
        return () => {
          clearInterval(interval);
          clearTimeout(timeout);
        };
      }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-center p-6">
      <h1 className="text-6xl font-bold text-red-600 mb-4">Thank You</h1>
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
        Payment SuccessFully
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
      Your payment was successful. We appreciate your business!
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
      >
        Go Home (Redirecting {count} Second? )
      </Link>
    </div>
  );
}
