import React from 'react';
import TopNavBar from './TopNavBar';
import FurnitureCatalog from './FurnitureCatalog';
import RoomLayoutEditor from './RoomLayoutEditor';
import ThemeTemplates from './ThemeTemplates';
import SaveSharePanel from './SaveSharePanel';
import AISuggestions from './AISuggestions';
import UserManagement from './UserManagement';

/**
 * MainContainer - Primary app container for VirtuDesign.
 * Implements main layout, side FurnitureCatalog, central RoomLayoutEditor,
 * top navigation, and placeholders for overlays/panels.
 */
// PUBLIC_INTERFACE
export default function MainContainer() {
  // Color palette
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

  // Style objects in place of extra CSS files for clarity
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
      height: 'calc(100vh - 56px)', // assume topbar height ≈ 56px
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
    // Placeholder overlays/modal areas are styled but hidden by default
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
      <div style={styles.topBar}>
        <TopNavBar />
      </div>
      <div style={styles.flexContent}>
        <aside style={styles.furniturePanel}>
          <FurnitureCatalog />
        </aside>
        <main style={styles.canvas}>
          <RoomLayoutEditor />
          {/* Overlays & panels as placeholders (can be shown as modals/panels when needed) */}
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
