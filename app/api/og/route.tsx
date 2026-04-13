import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background:
            "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        {/* Yellow accent bar top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "#f6de34",
          }}
        />

        {/* Logo text */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              fontSize: "72px",
              fontWeight: 800,
              color: "#f6de34",
              letterSpacing: "-2px",
            }}
          >
            Logic
          </div>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-2px",
            }}
          >
            Way
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "32px",
            color: "#ffffff",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.4,
          }}
        >
          Software WMS per Gestione Magazzino
        </div>

        <div
          style={{
            fontSize: "22px",
            color: "rgba(255,255,255,0.6)",
            marginTop: "16px",
            textAlign: "center",
          }}
        >
          Ricevimento · Inventario · Movimenti · Spedizioni · Monitoraggio
        </div>

        {/* Company info bottom */}
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div style={{ fontSize: "18px", color: "rgba(255,255,255,0.5)" }}>
            Sistemi Tre s.r.l. — Alba (CN)
          </div>
          <div style={{ fontSize: "18px", color: "#f6de34" }}>logic-way.it</div>
        </div>

        {/* Yellow accent bar bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "#f6de34",
          }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
