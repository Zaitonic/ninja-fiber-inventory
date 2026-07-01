/**
 * PhoneMockup – 3D perspective phone device with mini dashboard preview.
 * Renders a CSS-only phone frame containing a scaled-down dashboard UI
 * to give users a premium visual preview on the login page.
 */

const statusColors = {
  primary: "#0C4E8A",
  teal: "#14B8A6",
  cta: "#F97316",
  emerald: "#10B981",
  violet: "#8B5CF6",
};

/* Mini stat card inside the phone preview */
function MiniStat({ label, value, color }) {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: 6,
        padding: "8px 10px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        border: "1px solid #e2e8f0",
      }}
    >
      <p style={{ fontSize: 7, color: "#64748b", fontWeight: 600, margin: 0, textTransform: "uppercase", letterSpacing: 0.5 }}>
        {label}
      </p>
      <p style={{ fontSize: 14, fontWeight: 800, color, margin: "2px 0 0" }}>{value}</p>
    </div>
  );
}

/* Mini bar chart visualization */
function MiniChart() {
  const bars = [35, 60, 45, 80, 55, 70, 40, 90, 50, 65, 75, 85];
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: 6,
        padding: "10px 10px 6px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        border: "1px solid #e2e8f0",
      }}
    >
      <p style={{ fontSize: 8, fontWeight: 700, color: "#0f172a", margin: "0 0 6px" }}>Revenue</p>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 40 }}>
        {bars.map((h, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: `${h}%`,
              background: i % 2 === 0
                ? `linear-gradient(180deg, ${statusColors.primary}, ${statusColors.primary}cc)`
                : `linear-gradient(180deg, ${statusColors.cta}, ${statusColors.cta}cc)`,
              borderRadius: "2px 2px 0 0",
              transition: "height 0.6s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* Phone screen content — a mini replica of the dashboard */
function PhoneScreen() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#f8fafc",
        fontFamily: "'Inter', sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #e2e8f0",
          padding: "10px 12px",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <div
          style={{
            width: 22,
            height: 22,
            borderRadius: 5,
            background: statusColors.primary,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 8,
            fontWeight: 800,
          }}
        >
          NF
        </div>
        <div>
          <p style={{ fontSize: 8, fontWeight: 800, color: "#0f172a", margin: 0 }}>Ninja Fiber</p>
          <p style={{ fontSize: 6, color: "#64748b", margin: 0 }}>Inventory</p>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: 4 }}>
          <div style={{ width: 16, height: 16, borderRadius: 4, border: "1px solid #e2e8f0", background: "#fff" }} />
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 4,
              background: statusColors.teal,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 7,
              fontWeight: 800,
            }}
          >
            R
          </div>
        </div>
      </div>

      {/* Dashboard content */}
      <div style={{ padding: "10px 12px" }}>
        <p style={{ fontSize: 6, fontWeight: 700, color: statusColors.teal, textTransform: "uppercase", letterSpacing: 1.5, margin: "0 0 2px" }}>
          Overview
        </p>
        <p style={{ fontSize: 11, fontWeight: 800, color: "#0f172a", margin: "0 0 10px" }}>Dashboard</p>

        {/* Stats grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 10 }}>
          <MiniStat label="Products" value="86" color={statusColors.primary} />
          <MiniStat label="Low Stock" value="72" color={statusColors.cta} />
          <MiniStat label="Tasks" value="42" color={statusColors.teal} />
          <MiniStat label="Revenue" value="₱363K" color={statusColors.violet} />
        </div>

        {/* Mini chart */}
        <MiniChart />

        {/* Activity items */}
        <div style={{ marginTop: 10 }}>
          <p style={{ fontSize: 8, fontWeight: 700, color: "#0f172a", margin: "0 0 6px" }}>Activity</p>
          {["Fiber Cable 1 Core added", "Zone 4 repair completed", "New product registered"].map((text, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "5px 0",
                borderBottom: i < 2 ? "1px solid #f1f5f9" : "none",
              }}
            >
              <div
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: statusColors.teal,
                  flexShrink: 0,
                }}
              />
              <p style={{ fontSize: 7, color: "#475569", margin: 0, lineHeight: 1.3 }}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PhoneMockup() {
  return (
    <div className="phone-perspective-wrapper">
      {/* Ambient glow behind the phone */}
      <div className="phone-glow" />

      {/* Phone device */}
      <div className="phone-device">
        {/* Notch */}
        <div className="phone-notch">
          <div className="phone-notch-camera" />
        </div>

        {/* Status bar */}
        <div className="phone-status-bar">
          <span style={{ fontSize: 8, fontWeight: 600 }}>9:41</span>
          <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
            <div style={{ width: 10, height: 6, borderRadius: 1, border: "1px solid #0f172a", position: "relative" }}>
              <div style={{ position: "absolute", right: 1, top: 1, bottom: 1, width: "60%", background: statusColors.emerald, borderRadius: 0.5 }} />
            </div>
          </div>
        </div>

        {/* Screen content */}
        <div className="phone-screen">
          <PhoneScreen />
        </div>

        {/* Home indicator */}
        <div className="phone-home-indicator" />
      </div>
    </div>
  );
}
