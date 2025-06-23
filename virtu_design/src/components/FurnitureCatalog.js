import React from 'react';

// PUBLIC_INTERFACE
/**
 * FurnitureCatalog - Browse and select furniture and decor items.
 */
export default function FurnitureCatalog() {
  return (
    <aside
      style={{
        width: "100%",
        height: "100%",
        background: "#f4f7fb",
        borderRight: "2px solid #e2ecf3",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        padding: "14px 0 10px 0"
      }}
      aria-label="Furniture Catalog placeholder"
    >
      <div
        style={{
          padding: "12px 20px",
          background: "#dcedfa",
          color: "#2b75b3",
          borderBottom: "1px solid #e2ecf3",
          fontWeight: 600,
          fontSize: 16,
          letterSpacing: 0.2,
        }}
      >
        Furniture Catalog
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0.55,
          fontWeight: 500,
          fontSize: 14,
          color: "#7ea4c4"
        }}
      >
        (Furniture & Decor items go here)
      </div>
    </aside>
  );
}
