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

  useEffect(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setInvert(false);
    setContrast(100);
    setBrightness(100);
    setShowWindowing(false);
  }, [src]);

  useEffect(() => {
    if (!fullscreen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setFullscreen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [fullscreen]);

  const handleZoomIn = () => setZoom((z) => Math.min(4, +(z + 0.5).toFixed(1)));
  const handleZoomOut = () =>
    setZoom((z) => {
      const next = Math.max(1, +(z - 0.5).toFixed(1));
      if (next === 1) setPan({ x: 0, y: 0 });
      return next;
    });

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
    setPan({
      x: dragStartRef.current.panX + (e.clientX - dragStartRef.current.x),
      y: dragStartRef.current.panY + (e.clientY - dragStartRef.current.y),
    });
  };

  const onMouseUp = () => setDragging(false);

  const filterCss = `brightness(${brightness}%) contrast(${contrast}%) ${
    invert ? 'invert(1)' : ''
  }`.trim();

  return (
    <>
      <div className="pacs-card">
        <div
          className={`pacs-viewport ${zoom > 1 ? 'is-zoomed' : ''} ${
            dragging ? 'is-dragging' : ''
          }`}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onClick={() => {
            if (zoom === 1) setFullscreen(true);
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
        </div>

        {/* Clean Bar Below Image (Never obscures the radiology image on mobile) */}
        <div className="pacs-controls-bar">
          <div className="pacs-controls-left">
            <button
              type="button"
              className="pacs-ctrl-btn"
              onClick={handleZoomOut}
              disabled={zoom <= 1}
              aria-label="Dézoomer"
            >
              −
            </button>
            <span className="pacs-zoom-label">{Math.round(zoom * 100)}%</span>
            <button
              type="button"
              className="pacs-ctrl-btn"
              onClick={handleZoomIn}
              disabled={zoom >= 4}
              aria-label="Zoomer"
            >
              +
            </button>
            <button
              type="button"
              className={`pacs-ctrl-btn ${invert ? 'is-active' : ''}`}
              onClick={() => setInvert((v) => !v)}
              title="Inverser Négatif / Positif"
            >
              ◐ Négatif
            </button>
            <button
              type="button"
              className={`pacs-ctrl-btn ${showWindowing ? 'is-active' : ''}`}
              onClick={() => setShowWindowing((v) => !v)}
              title="Contraste / Luminosité"
            >
              ☼
            </button>
            {(zoom !== 1 || invert || contrast !== 100 || brightness !== 100) && (
              <button
                type="button"
                className="pacs-ctrl-btn pacs-reset-btn"
                onClick={handleReset}
              >
                1:1
              </button>
            )}
          </div>

          <button
            type="button"
            className="pacs-ctrl-btn pacs-fullscreen-btn"
            onClick={() => setFullscreen(true)}
          >
            ⛶ Plein écran
          </button>
        </div>

        {showWindowing && (
          <div className="pacs-windowing-drawer">
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

      {/* Fullscreen Lightbox */}
      {fullscreen && (
        <div
          className="pacs-lightbox-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Image plein écran"
          onClick={() => setFullscreen(false)}
        >
          <div className="pacs-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <div className="pacs-lightbox-top">
              <span>{badgeText || 'Imagerie'}</span>
              <button
                type="button"
                className="btn btn-ghost btn-small"
                onClick={() => setFullscreen(false)}
              >
                ✕ Fermer
              </button>
            </div>
            <div className="pacs-lightbox-stage">
              <img
                src={src}
                alt={alt}
                className="pacs-lightbox-img"
                style={{ filter: filterCss }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
