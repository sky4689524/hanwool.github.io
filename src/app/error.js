"use client";
import { useEffect } from "react";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    // Automatically refresh the page after 1 second
    const timeout = setTimeout(() => {
      window.location.reload();
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        paddingTop: "100px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h1>Something went wrong.</h1>
      <p>Attempting to reload the page...</p>
    </div>
  );
}
