import { useState } from "react";

export default function App() {
  const [designUrl, setDesignUrl] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setDesignUrl(URL.createObjectURL(file));
    setReady(false);
  };

  const generatePreview = () => {
    if (!designUrl) return;
    setReady(true);
  };

  return (
    <div style={{ padding: 40, fontFamily: "Arial, sans-serif" }}>
      <h1>PODPRO – Mockup Tool (Free)</h1>

      <input type="file" accept="image/png" onChange={handleUpload} />
      <br />
      <br />

      <button onClick={generatePreview} disabled={!designUrl}>
        Generate Preview
      </button>

      <div
        style={{
          position: "relative",
          width: 800,
          height: 800,
          marginTop: 30,
          border: "1px solid #ccc",
          backgroundColor: "#f7f7f7",
        }}
      >
        <img
          src="/mockups/tshirt.png"
          alt="T-shirt mockup"
          style={{ width: "100%", height: "100%" }}
        />

        {ready && designUrl && (
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

        {ready && (
          <div
            style={{
              position: "absolute",
              bottom: 20,
              left: 0,
              right: 0,
              textAlign: "center",
              fontSize: 22,
              color: "rgba(255,255,255,0.6)",
              pointerEvents: "none",
            }}
          >
            PODPRO – Preview Only
          </div>
        )}
      </div>
    </div>
  );
}
