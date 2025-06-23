import React from 'react';

// PUBLIC_INTERFACE
/**
 * UserManagement - Handle user accounts and saved designs.
 */
export default function UserManagement() {
  return (
    <div
      style={{
        background: "#eaf5fb",
        border: "2px solid #7bc2e5",
        color: "#2270a7",
        borderRadius: 13,
        minWidth: 300,
        minHeight: 100,
        padding: "22px 30px",
        boxShadow: "0 2px 8px 0 #7bc2e514",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 600,
        fontSize: 17
      }}
      aria-label="User Management placeholder"
    >
      User Management
      <div style={{ fontSize: 13, fontWeight: 400, color: "#73aee2", marginTop: 5, opacity: 0.74 }}>
        (Account & saved designs)
      </div>
    </div>
  );
}
