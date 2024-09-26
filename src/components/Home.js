import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [showText, setShowText] = useState(false);

  const handleDoubleClick = () => {
    setShowText(true);
  };

  return (
    <main className="home" onDoubleClick={handleDoubleClick}>
      <div className={`text-container ${showText ? 'show-text' : ''}`}>
        <p className="line1">
          The full moon painted the sprawling forest with its cold, silver light
        </p>
        <p className="line2">
          In the heart of the woods, a howl echoed
        </p>
        <p className="line3">
          a passionate cry that sang of timeless devotion and a love deeper than the night itself
        </p>
        <p className="line4">
          Two shadows, larger than life, danced in the pale light… forever intertwined.
        </p>
      </div>
    </main>
  );
}

export default Home;