import React from 'react';

// PUBLIC_INTERFACE
/**
 * TopNavBar - The top navigation bar for the application.
 */
export default function TopNavBar() {
  return (
    <nav
      aria-label="VirtuDesign Top Navigation"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 56,
        padding: "0 24px",
        background: "#1A1A1A",
        color: "#fff",
        borderBottom: "1px solid #222",
        zIndex: 101
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontWeight: 700,
          fontSize: 21,
          letterSpacing: "0.03em"
        }}
      >
        <span style={{
          width: 30,
          height: 30,
          background: "linear-gradient(35deg, #4A90E2 60%, #F5A623 100%)",
          borderRadius: 8,
          display: "inline-block",
          marginRight: 10
        }}></span>
        VirtuDesign
      </div>

      <div
        style={{
          flex: "0 0 auto",
          display: "flex",
          alignItems: "center",
          gap: 24,
          opacity: 0.73
        }}
      >
        <span
          style={{
            padding: "8px 0",
            fontWeight: 500,
            fontSize: 15
          }}
        >
          (Feature navigation soon)
        </span>
      </div>
    </nav>
  );
}
