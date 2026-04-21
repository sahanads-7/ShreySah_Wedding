import { useEffect } from "react";

export default function Leaves() {
  useEffect(() => {
    const createLeaf = () => {
      const leaf = document.createElement("div");
      leaf.innerHTML = "🍂";
      leaf.style.position = "fixed";
      leaf.style.top = "-10px";
      leaf.style.left = Math.random() * window.innerWidth + "px";
      leaf.style.fontSize = "20px";
      leaf.style.animation = "fall 5s linear";

      document.body.appendChild(leaf);

      setTimeout(() => leaf.remove(), 5000);
    };

    const interval = setInterval(createLeaf, 500);
    return () => clearInterval(interval);
  }, []);

  return null;
}
