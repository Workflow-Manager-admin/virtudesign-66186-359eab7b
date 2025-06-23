import React from 'react';
import TopNavBar from './TopNavBar';
import FurnitureCatalog from './FurnitureCatalog';
import RoomLayoutEditor from './RoomLayoutEditor';
import RoomDimensionSetup from './RoomDimensionSetup';
import ThemeTemplates from './ThemeTemplates';
import SaveSharePanel from './SaveSharePanel';
import AISuggestions from './AISuggestions';
import UserManagement from './UserManagement';

/**
 * MainContainer - Primary app container for VirtuDesign.
 * Implements main layout: side FurnitureCatalog, central RoomLayoutEditor (with RoomDimensionSetup),
 * overlays for ThemeTemplates, SaveSharePanel, AISuggestions, and UserManagement as modals/panels,
 * and persistent TopNavBar across the app.
 */
// PUBLIC_INTERFACE
export default function MainContainer() {
  // Color palette for quick theme
  const palette = {
    primary: '#4A90E2',
    secondary: '#50E3C2',
    accent: '#F5A623',
    bg: '#F7FBFE',
    border: '#d8e4ec',
    text: '#222',
    panelBg: '#fff',
    shadow: '0 2px 8px 0 rgba(74,144,226,0.05)',
  };

  const styles = {
    mainWrapper: {
      minHeight: '100vh',
      background: palette.bg,
      display: 'flex',
      flexDirection: 'column',
    },
    topBar: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: palette.primary,
      color: '#fff',
      boxShadow: palette.shadow,
    },
    flexContent: {
      display: 'flex',
      flex: 1,
      height: 'calc(100vh - 56px)',
      background: palette.bg,
      overflow: 'hidden',
      minHeight: 0,
    },
    furniturePanel: {
      background: palette.panelBg,
      boxShadow: '2px 0 6px 0 rgba(74,144,226,0.08)',
      borderRight: `1px solid ${palette.border}`,
      width: 270,
      minWidth: 230,
      maxWidth: 340,
      zIndex: 10,
      padding: '0',
      overflowY: 'auto',
    },
    canvas: {
      flex: 1,
      background: '#F7FBFE',
      padding: '32px 28px 28px 28px',
      position: 'relative',
      height: '100%',
      overflow: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 200,
      background: 'rgba(36,45,65,0.19)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none',
      opacity: 0,
    },
  };

  return (
    <div style={styles.mainWrapper}>
      {/* App-wide top navigation */}
      <div style={styles.topBar}>
        <TopNavBar />
      </div>
      <div style={styles.flexContent}>
        {/* Left: Furniture Catalog Sidebar */}
        <aside style={styles.furniturePanel}>
          <FurnitureCatalog />
        </aside>

        {/* Main Canvas: Room Editor and direct children(+dim setup UI at top of editor) */}
        <main style={styles.canvas}>
          {/* Show RoomDimensionSetup as top-level bar/panel inside the editor area */}
          <RoomDimensionSetup />
          {/* Main interactive room canvas */}
          <RoomLayoutEditor />

          {/* Overlays/modal scaffolding below, ready to show if needed */}
          <div id="theme-templates-overlay" style={styles.modal}>
            <ThemeTemplates />
          </div>
          <div id="save-share-panel-overlay" style={styles.modal}>
            <SaveSharePanel />
          </div>
          <div id="ai-suggestions-overlay" style={styles.modal}>
            <AISuggestions />
          </div>
          <div id="user-management-modal" style={styles.modal}>
            <UserManagement />
          </div>
        </main>
      </div>
    </div>
  );
}
