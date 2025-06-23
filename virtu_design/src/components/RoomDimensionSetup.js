import React from 'react';

// PUBLIC_INTERFACE
/**
 * RoomDimensionSetup - Set dimensions for the room layout.
 */
export default function RoomDimensionSetup() {
  return (
    <div
      style={{
        background: "#fffbee",
        border: "1.5px solid #ffe6ad",
        color: "#a88800",
        borderRadius: 8,
        padding: "16px 24px",
        marginBottom: 16,
        boxShadow: "0 1px 4px rgba(245,166,35,0.03)",
        display: "inline-block",
        fontWeight: 500,
        fontSize: 15,
        minWidth: 280,
        textAlign: "center"
      }}
      aria-label="Room Dimension Setup placeholder"
    >
      Room Dimension Setup
      <div style={{ fontSize: 12, color: "#c9b349", fontWeight: 400, marginTop: 3 }}>
        (Set dimensions here)
      </div>
    </div>
  );
}
