
    import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
      <h1 className="text-4xl font-bold mb-4">Toggle Dark Mode</h1>
      <button
        onClick={toggleDarkMode}
        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        {isDarkMode ? "Modalità Chiara" : "Modalità Scura"}
      </button>
    </div>
  );
};

export default DarkModeToggle;
