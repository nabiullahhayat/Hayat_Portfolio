import { Toaster } from 'sonner'

function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        className: 'glass text-white border-white/10',
        style: {
          background: 'rgba(15, 15, 24, 0.95)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          color: '#f1f5f9',
        },
      }}
      richColors
      closeButton
    />
  )
}

export default ToastProvider
