"use client";
import { useState } from "react";

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [accepted, setAccepted] = useState(false);

  return (
    <main className="page">
      <div className="envelope-wrapper">
        <div className={`envelope ${opened ? "opened" : ""}`}>

          {/* Back of envelope */}
          <div className="envelope-back"></div>

          {/* Letter */}
          <div className={`letter ${opened ? "show" : ""}`}>
            {!accepted ? (
              <>
                <h2>Will you be my Valentine?</h2>
                <button onClick={() => setAccepted(true)}>YES</button>
              </>
            ) : (
              <>
                <h2>Our Valentine’s Day 21/02/2026</h2>
                <ul className="checklist">
                  <li>
                    <span>Coffee & Breakfast (Seven Shores or Café 22)</span>
                    <span className="empty-box"></span>
                  </li>
                  <li>
                    <span>Check into Hotel (Quality Inn @ 3:00PM)</span>
                    <span className="empty-box"></span>
                  </li>                  
                  <li>
                    <span>Get paint-by-numbers kit from Copper's Hobbies</span>
                    <span className="empty-box"></span>
                  </li>
                  <li>
                    <span>Dinner @ Charcoal Steakhouse</span>
                    <span className="empty-box"></span>
                  </li>
                  <li>
                    <span>Watch Movie (tere ishk mein)</span>
                    <span className="empty-box"></span>
                  </li>
                </ul>
              </>
            )}
          </div>

          {/* Front sleeve */}
          <div className="envelope-front"></div>

          {/* Flap */}
          <div className={`flap ${opened ? "flap-open" : ""}`}></div>

          {!opened && (
            <button className="open-btn" onClick={() => setOpened(true)}>
              Open Me
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
