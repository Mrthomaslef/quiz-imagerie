import { useEffect, useRef, useState } from 'react';

export default function ImageViewer({ src, alt = 'Image radiologique', badgeText }) {
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [invert, setInvert] = useState(false);
  const [contrast, setContrast] = useState(100);
  const [brightness, setBrightness] = useState(100);
  const [showWindowing, setShowWindowing] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0, panX: 0, panY: 0 });

  // Reset viewer state when image changes
  useEffect(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setInvert(false);
    setContrast(100);
    setBrightness(100);
  }, [src]);

  useEffect(() => {
    if (!fullscreen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setFullscreen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [fullscreen]);

  const handleZoomIn = () => {
    setZoom((z) => Math.min(4, +(z + 0.5).toFixed(1)));
  };

  const handleZoomOut = () => {
    setZoom((z) => {
      const next = Math.max(1, +(z - 0.5).toFixed(1));
      if (next === 1) setPan({ x: 0, y: 0 });
      return next;
    });
  };

  const handleReset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setInvert(false);
    setContrast(100);
    setBrightness(100);
  };

  const onMouseDown = (e) => {
    if (zoom <= 1) return;
    e.preventDefault();
    setDragging(true);
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      panX: pan.x,
      panY: pan.y,
    };
  };

  const onMouseMove = (e) => {
    if (!dragging) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    setPan({
      x: dragStartRef.current.panX + dx,
      y: dragStartRef.current.panY + dy,
    });
  };

  const onMouseUp = () => {
    setDragging(false);
  };

  const filterCss = `brightness(${brightness}%) contrast(${contrast}%) ${
    invert ? 'invert(1)' : ''
  }`.trim();

  const renderViewport = (isModal = false) => (
    <div
      className={`pacs-viewport ${isModal ? 'pacs-viewport-modal' : ''} ${
        zoom > 1 ? 'is-zoomed' : ''
      } ${dragging ? 'is-dragging' : ''}`}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onDoubleClick={() => {
        if (zoom > 1) {
          setZoom(1);
          setPan({ x: 0, y: 0 });
        } else {
          setZoom(2);
        }
      }}
    >
      {badgeText && <span className="pacs-modality-badge">{badgeText}</span>}
      <img
        src={src}
        alt={alt}
        className="pacs-image"
        draggable={false}
        style={{
          transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
          filter: filterCss,
        }}
      />
      <div className="pacs-toolbar" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="pacs-tool-btn"
          onClick={handleZoomOut}
          disabled={zoom <= 1}
          title="Dézoomer"
        >
          −
        </button>
        <span className="pacs-zoom-label">{Math.round(zoom * 100)}%</span>
        <button
          type="button"
          className="pacs-tool-btn"
          onClick={handleZoomIn}
          disabled={zoom >= 4}
          title="Zoomer (ou double-clic sur l'image)"
        >
          +
        </button>
        <span className="pacs-divider" />
        <button
          type="button"
          className={`pacs-tool-btn ${invert ? 'is-active' : ''}`}
          onClick={() => setInvert((v) => !v)}
          title="Inverser Négatif / Positif"
        >
          ◐
        </button>
        <button
          type="button"
          className={`pacs-tool-btn ${showWindowing ? 'is-active' : ''}`}
          onClick={() => setShowWindowing((v) => !v)}
          title="Fenêtrage (Contraste / Luminosité)"
        >
          ☼
        </button>
        {(zoom !== 1 || invert || contrast !== 100 || brightness !== 100) && (
          <button
            type="button"
            className="pacs-tool-btn pacs-reset-btn"
            onClick={handleReset}
            title="Réinitialiser l'affichage (1:1)"
          >
            1:1
          </button>
        )}
        <span className="pacs-divider" />
        <button
          type="button"
          className="pacs-tool-btn"
          onClick={() => setFullscreen((v) => !v)}
          title={isModal ? 'Quitter le plein écran (Échap)' : 'Plein écran (Négatoscope)'}
        >
          {isModal ? '✕' : '⛶'}
        </button>
      </div>

      {showWindowing && (
        <div className="pacs-windowing-popover" onClick={(e) => e.stopPropagation()}>
          <label className="pacs-slider-row">
            <span>Contraste</span>
            <input
              type="range"
              min="60"
              max="180"
              value={contrast}
              onChange={(e) => setContrast(Number(e.target.value))}
            />
            <em>{contrast}%</em>
          </label>
          <label className="pacs-slider-row">
            <span>Luminosité</span>
            <input
              type="range"
              min="60"
              max="160"
              value={brightness}
              onChange={(e) => setBrightness(Number(e.target.value))}
            />
            <em>{brightness}%</em>
          </label>
        </div>
      )}
    </div>
  );

  return (
    <>
      {renderViewport(false)}

      {fullscreen && (
        <div
          className="pacs-lightbox-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Visionneuse plein écran"
          onClick={() => setFullscreen(false)}
        >
          <div className="pacs-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            {renderViewport(true)}
            <p className="pacs-lightbox-hint">
              Double-cliquez pour zoomer · Glissez pour déplacer l’image · Échap pour fermer
            </p>
          </div>
        </div>
      )}
    </>
  );
}
