import { useEffect, useState } from "react";
import "./NameAnimation.css";

export default function NameAnimation() {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true); // trigger fade out
    }, 2000); // match merge timing

    return () => clearTimeout(timer);
  }, []);
  setTimeout(() => setFade(true), 1800);

  return (
    <div className="name-animation">

      <h1 className={`name left ${fade ? "fade-out" : ""}`}>
        Shreyas
      </h1>

      <h1 className={`name right ${fade ? "fade-out" : ""}`}>
        Sahana
      </h1>

      <h1 className="final-name">ShreySah</h1>

      <div className="heart"></div>

    </div>
  );
}