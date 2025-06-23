import React from 'react';
import React, { useState } from 'react';
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
 * Handles modal overlays and dummy drag interaction.
 */
// PUBLIC_INTERFACE
export default function MainContainer() {
  // Modal visibility state
  const [showRoomDimensionSetup, setShowRoomDimensionSetup] = useState(false);
  const [showThemeTemplates, setShowThemeTemplates] = useState(false);
  const [showSaveSharePanel, setShowSaveSharePanel] = useState(false);
  const [showAISuggestions, setShowAISuggestions] = useState(false);
  const [showUserManagement, setShowUserManagement] = useState(false);

  // Dummy state for drag feedback for RoomLayoutEditor
  const [dummyDragState, setDummyDragState] = useState({
    dragging: false,
    dropped: false
  });

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
      pointerEvents: 'auto',
      opacity: 1,
    },
    modalHidden: {
      pointerEvents: 'none',
      opacity: 0
    },
    featureBtn: {
      padding: "8px 13px",
      background: "#F5A623",
      color: "#fff",
      border: "none",
      borderRadius: 7,
      fontWeight: 600,
      margin: "0 7px",
      fontSize: 15,
      cursor: "pointer",
      outline: "none",
      boxShadow: "0 2px 8px #efad4018"
    },
    overlayCloseBtn: {
      position: 'absolute', top: 14, right: 14,
      background: '#fff',
      color: '#1a1a1a',
      border: '1.5px solid #ccc',
      borderRadius: 4,
      padding: '3px 8px',
      cursor: 'pointer',
      fontWeight: 700,
      fontSize: 15,
      zIndex: 220
    },
    floatingFeaturePanel: {
      display: 'flex',
      gap: '8px',
      margin: '24px 0 0 0'
    }
  };

  // Feature trigger bar for modals (replace with icon sidebar in real UI)
  function FeatureBar() {
    return (
      <div style={styles.floatingFeaturePanel} aria-label="FeatureTriggerBar">
        <button style={styles.featureBtn} onClick={() => setShowRoomDimensionSetup(true)}>
          Room Dimensions
        </button>
        <button style={styles.featureBtn} onClick={() => setShowThemeTemplates(true)}>
          Themes
        </button>
        <button style={styles.featureBtn} onClick={() => setShowSaveSharePanel(true)}>
          Save/Share
        </button>
        <button style={styles.featureBtn} onClick={() => setShowAISuggestions(true)}>
          AI Suggest
        </button>
        <button style={styles.featureBtn} onClick={() => setShowUserManagement(true)}>
          User Mgmt
        </button>
      </div>
    );
  }

  // Wrapper to render a modal overlay with close button and modal toggling logic
  function ModalOverlay({ isOpen, onClose, children, ariaId }) {
    if (!isOpen) return null;
    return (
      <div id={ariaId} style={styles.modal} aria-modal="true" tabIndex={-1}>
        <button style={styles.overlayCloseBtn} onClick={onClose} aria-label="Close Modal">
          ×
        </button>
        {children}
      </div>
    );
  }

  // Dummy drag control handlers for the furniture item (for RoomLayoutEditor)
  function DummyDragFurnitureEditor() {
    // Only support drag and drop in this minimal mode
    const dragging = dummyDragState.dragging;
    const dropped = dummyDragState.dropped;

    // Furniture box style
    const furnitureItemStyle = {
      width: 72,
      height: 38,
      background: dragging ? "#e7f9ed" : "#b2f7cb",
      border: '2px solid #36b185',
      borderRadius: 7,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 600,
      fontSize: 15,
      color: '#1b6d5a',
      cursor: "grab",
      position: "absolute",
      top: 90,
      left: 100,
      opacity: dropped ? 0.32 : 1,
      zIndex: 22,
      boxShadow: dragging ? "0 0 10px 0 #64deae" : "0 2px 7px #b2f7cb55",
      userSelect: "none"
    };

    // Drop zone style
    const dropZoneStyle = {
      width: 170,
      height: 90,
      background: dropped ? "#e7fbea" : (dragging ? "#d1f9eb" : "#f5faf8"),
      border: "2.5px dashed #36b185",
      borderRadius: 14,
      position: 'absolute',
      bottom: 40,
      left: 180,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: 17,
      color: '#249785',
      zIndex: 21,
      opacity: dropped ? 1 : 0.92,
      transition: 'background 0.18s'
    };

    // Drag logic - pure React state without real HTML5 drag events (for simplicity)
    function handleMouseDown(e) {
      setDummyDragState(s => ({ ...s, dragging: true }));
      // Prevent text selection
      document.body.style.userSelect = 'none';
    }
    function handleMouseUp(e) {
      if (dummyDragState.dragging) {
        // Simulate drop if mouseup is inside the dropzone area (hardcoded)
        const dropZoneRect = { left: 180, top: 340, right: 350, bottom: 430 };
        const x = e.clientX, y = e.clientY;
        if (x >= dropZoneRect.left && x <= dropZoneRect.right &&
          y >= dropZoneRect.top && y <= dropZoneRect.bottom) {
          setDummyDragState({ dragging: false, dropped: true });
        } else {
          setDummyDragState({ dragging: false, dropped: false });
        }
      }
      document.body.style.userSelect = '';
    }
    // Attach/unattach listener for mouseup on document when dragging begins
    React.useEffect(() => {
      if (dragging) {
        document.addEventListener('mouseup', handleMouseUp);
        return () => {
          document.removeEventListener('mouseup', handleMouseUp);
        };
      }
    }, [dragging]);

    return (
      <div style={{ width: "100%", minHeight: 380, position: "relative" }}>
        <div
          style={furnitureItemStyle}
          onMouseDown={handleMouseDown}
          role="button"
          tabIndex={0}
          aria-grabbed={dragging}
          aria-label="Draggable dummy furniture"
        >
          Chair (dummy)
        </div>
        <div style={dropZoneStyle}>
          {dropped ? "Dropped!" : "Drop furniture here"}
        </div>
      </div>
    );
  }

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
          {/* Add a Save/Share button in the side panel for quick access too */}
          <div style={{ padding: "13px 19px 0 17px" }}>
            <button style={{ ...styles.featureBtn, width: 120 }} onClick={() => setShowSaveSharePanel(true)}>
              Save/Share
            </button>
          </div>
        </aside>

        {/* Main Canvas: Room Editor and direct children(+dim setup UI at top of editor) */}
        <main style={styles.canvas}>
          {/* Trigger bar to open overlays */}
          <FeatureBar />
          {/* Show RoomDimensionSetup as top-level bar/panel inside the editor area, allow floating modal mode */}
          {!showRoomDimensionSetup && (
            <RoomDimensionSetup />
          )}
          {/* Main interactive room canvas with dummy drag-and-drop */}
          <DummyDragFurnitureEditor />

          {/* Modals and overlays */}
          <ModalOverlay
            isOpen={showRoomDimensionSetup}
            onClose={() => setShowRoomDimensionSetup(false)}
            ariaId="room-dimension-setup-modal"
          >
            <RoomDimensionSetup />
          </ModalOverlay>
          <ModalOverlay
            isOpen={showThemeTemplates}
            onClose={() => setShowThemeTemplates(false)}
            ariaId="theme-templates-overlay"
          >
            <ThemeTemplates />
          </ModalOverlay>
          <ModalOverlay
            isOpen={showSaveSharePanel}
            onClose={() => setShowSaveSharePanel(false)}
            ariaId="save-share-panel-overlay"
          >
            <SaveSharePanel />
          </ModalOverlay>
          <ModalOverlay
            isOpen={showAISuggestions}
            onClose={() => setShowAISuggestions(false)}
            ariaId="ai-suggestions-overlay"
          >
            <AISuggestions />
          </ModalOverlay>
          <ModalOverlay
            isOpen={showUserManagement}
            onClose={() => setShowUserManagement(false)}
            ariaId="user-management-modal"
          >
            <UserManagement />
          </ModalOverlay>
        </main>
      </div>
    </div>
  );
}
