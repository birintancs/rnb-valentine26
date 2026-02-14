"use client";

import { useState } from "react";

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [accepted, setAccepted] = useState(false);

  return (
    <main className="flex min-h-screen items-center justify-center bg-pink-200">
      <div className="text-center">
        <div className={`relative w-72 h-48 bg-white rounded shadow-xl overflow-hidden`}>
          
          {/* Envelope flap */}
          <div
            className={`absolute top-0 left-0 w-full h-full bg-red-400 
              transition-transform duration-700 origin-top
              ${opened ? "rotate-x-180" : ""}`}
            style={{
              clipPath: "polygon(0 0, 100% 0, 50% 50%)",
            }}
          />

          {/* Letter */}
          {opened && (
            <div className="absolute inset-0 p-4 bg-white animate-slideUp">
              {!accepted ? (
                <>
                  <h2 className="text-red-500 text-xl font-bold">
                    Will you be my Valentine? 💖
                  </h2>
                  <button
                    onClick={() => setAccepted(true)}
                    className="mt-4 px-6 py-2 bg-red-500 text-white rounded-full"
                  >
                    YES
                  </button>
                </>
              ) : (
                <>
                  <h2 className="text-red-500 text-xl font-bold">
                    Our Day 💕
                  </h2>
                  <p className="mt-2 text-gray-700">
                    Coffee ☕ <br />
                    Long walks 🚶‍♂️ <br />
                    Good food 🍽️ <br />
                    Movie night 🎬❤️
                  </p>
                </>
              )}
            </div>
          )}
        </div>

        {!opened && (
          <button
            onClick={() => setOpened(true)}
            className="mt-6 px-6 py-2 bg-red-500 text-white rounded-full"
          >
            Open Me
          </button>
        )}
      </div>
    </main>
  );
}
