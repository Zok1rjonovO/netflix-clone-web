"use client";
import React from "react";

const ClearSessionButton: React.FC = () => {
  const handleClearSession = () => {
    // Clear local storage
    localStorage.clear();

    // Clear session storage
    sessionStorage.clear();

    // Clear cookies
    document.cookie
      .split(";")
      .forEach(
        (cookie) =>
          (document.cookie = `${cookie.split("=")[0]}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`)
      );

    // Optionally reload the page
    window.location.reload();

    alert("Session cleared!");
  };

  return (
    <button
      onClick={handleClearSession}
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
    >
      Clear Session
    </button>
  );
};

export default ClearSessionButton;