import { useState } from "react";

function App() {
  const [designUrl, setDesignUrl] = useState<string | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setDesignUrl(URL.createObjectURL(file));
  };

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>PODPRO – Free Mockup Preview</h1>

      <input type="file" accept="image/png" onChange={handleUpload} />

      <div
        style={{
          position: "relative",
          width: 800,
          height: 800,
          marginTop: 30,
          border: "1px solid #ddd",
        }}
      >
        <img
          src="/mockups/tshirt.png"
          alt="Mockup"
          style={{ width: "100%", height: "100%" }}
        />

        {designUrl && (
          <img
            src={designUrl}
            alt="Design"
            style={{
              position: "absolute",
              top: 260,
              left: 220,
              width: 360,
              height: 360,
              objectFit: "contain",
            }}
          />
        )}

        <div
          style={{
            position: "absolute",
            bottom: 20,
            left: 0,
            right: 0,
            textAlign: "center",
            fontSize: 24,
            color: "rgba(255,255,255,0.5)",
            pointerEvents: "none",
          }}
        >
          PODPRO – Preview Only
        </div>
      </div>
    </div>
  );
}

export default App;
