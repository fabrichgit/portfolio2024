import { useState, useEffect } from "react";

interface NavigatorConnection {
  effectiveType?: string;
  addEventListener?: (type: string, listener: () => void) => void;
  removeEventListener?: (type: string, listener: () => void) => void;
}

interface Navigator {
  connection?: NavigatorConnection;
}


const SlowConnectionWarning = () => {
  const [isSlowConnection] = useState(false);

  useEffect(() => {
    const checkConnectionSpeed = () => {
      if ("connection" in navigator && navigator.connection) {
        const effectiveType = navigator.connection.effectiveType;
        if (["2g", "slow-2g"].includes(effectiveType)) {
          console.log("Connexion lente détectée !");
        }
      }
    };
  
    checkConnectionSpeed();
  
    if ("connection" in navigator && navigator.connection) {
      navigator.connection.addEventListener("change", checkConnectionSpeed);
    }
  
    return () => {
      if ("connection" in navigator && navigator.connection) {
        navigator.connection.removeEventListener("change", checkConnectionSpeed);
      }
    };
  }, []);
  

  return isSlowConnection ? (
    <div className="absolue left-0 top-0 w-full h-full" style={{ backgroundColor: "#ffcc00", padding: "10px", textAlign: "center" }}>
      <p>Votre connexion est lente. Certaines fonctionnalités pourraient être affectées.</p>
    </div>
  ) : null;
};

export default SlowConnectionWarning;
