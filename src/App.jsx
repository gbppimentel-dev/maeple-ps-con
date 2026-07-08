import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 430);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 430);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isMobile) {
    return (
      <div className="unsupported">
        <h1>Mobile Device Required</h1>
        <p>This application is only available on supported mobile devices.</p>
        <p>Please access it using your phone.</p>
      </div>
    );
  }

  return (
    <div className="app">
      <h1>This is the app</h1>
    </div>
  );
}

export default App;