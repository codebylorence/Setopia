import { useEffect } from 'react'
import { X, ExternalLink } from 'lucide-react'

/**
 * Reusable full-screen iframe modal.
 *
 * Props:
 *  - isOpen   : boolean
 *  - onClose  : () => void
 *  - url      : string  — the external URL to embed
 *  - title    : string  — accessibility label + header text
 */
export default function IframeModal({ isOpen, onClose, url, title }) {
  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-50 flex flex-col bg-black/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      {/* Modal header bar */}
      <div className="flex shrink-0 items-center justify-between bg-slate-900 px-4 py-3">
        <span className="truncate text-sm font-semibold text-white">{title}</span>
        <div className="flex items-center gap-2">
          {/* Open in new tab fallback */}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-white/20"
          >
            <ExternalLink size={13} />
            Open in tab
          </a>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-lg bg-white/10 p-1.5 text-white transition hover:bg-white/20"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* iframe */}
      <iframe
        src={url}
        title={title}
        className="h-full w-full flex-1 border-0 bg-white"
        allow="camera; microphone; fullscreen"
      />
    </div>
  )
}
