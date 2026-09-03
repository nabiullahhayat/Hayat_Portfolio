import { useEffect } from 'react'
import { toast } from 'sonner'
import { SECURITY_POLICY } from '../../constants/security'

function isEditableTarget(target) {
  if (!(target instanceof HTMLElement)) return false
  const tag = target.tagName
  return (
    tag === 'INPUT' ||
    tag === 'TEXTAREA' ||
    tag === 'SELECT' ||
    target.isContentEditable
  )
}

function warnUser() {
  if (SECURITY_POLICY.showWarningToast) {
    toast.warning(SECURITY_POLICY.warningMessage, { duration: 3000 })
  }
}

function ContentProtection() {
  useEffect(() => {
    if (!SECURITY_POLICY.enabled) return

    const handleContextMenu = (event) => {
      if (!SECURITY_POLICY.blockRightClick) return
      if (isEditableTarget(event.target)) return
      event.preventDefault()
      warnUser()
    }

    const handleKeyDown = (event) => {
      if (!SECURITY_POLICY.blockKeyboardShortcuts) return
      if (isEditableTarget(event.target)) return

      const key = event.key.toLowerCase()
      const ctrl = event.ctrlKey || event.metaKey
      const shift = event.shiftKey

      const isBlocked =
        key === 'printscreen' ||
        key === 'f12' ||
        (ctrl && ['s', 'p', 'u', 'c', 'a'].includes(key)) ||
        (ctrl && shift && ['i', 'j', 'c', 's'].includes(key)) ||
        (event.altKey && key === 'printscreen')

      if (isBlocked) {
        event.preventDefault()
        event.stopPropagation()
        warnUser()
      }
    }

    const handleDragStart = (event) => {
      if (!SECURITY_POLICY.blockImageDrag) return
      if (event.target instanceof HTMLImageElement) {
        event.preventDefault()
      }
    }

    const handleCopy = (event) => {
      if (isEditableTarget(event.target)) return
      event.preventDefault()
      warnUser()
    }

    const handleCut = (event) => {
      if (isEditableTarget(event.target)) return
      event.preventDefault()
    }

    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('keydown', handleKeyDown, true)
    document.addEventListener('dragstart', handleDragStart)
    document.addEventListener('copy', handleCopy)
    document.addEventListener('cut', handleCut)

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('keydown', handleKeyDown, true)
      document.removeEventListener('dragstart', handleDragStart)
      document.removeEventListener('copy', handleCopy)
      document.removeEventListener('cut', handleCut)
    }
  }, [])

  if (!SECURITY_POLICY.enabled) return null

  return (
    <div
      aria-hidden="true"
      className="content-shield pointer-events-none fixed inset-0 z-[9999]"
    />
  )
}

export default ContentProtection
