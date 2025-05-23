
const modalConfig = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(0, 0, 0, 0.92)', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  content: {
    padding: '2rem',
    borderRadius: '8px',
    maxWidth: '600px',
    width: '90%',
    boxShadow: '0 0 10px rgba(0,0,0,0.25)',
    color:' #EFB062',
    fontFamily: 'MetalMania'
  },
};

export default function BandSelector({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div style={modalConfig.overlay} onClick={onClose}>
      <div style={modalConfig.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
