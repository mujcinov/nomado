"use client"

import { useState } from "react"
import "./arrow-ico.css"

function ArrowIco({ isOpen }) {
  const [internalOpen, setInternalOpen] = useState(false)

  const controlled = isOpen !== undefined
  const open = controlled ? isOpen : internalOpen

  return (
    <span
      className={`arrow-ico${open ? " open" : ""}`}
      onClick={controlled ? undefined : () => setInternalOpen(prev => !prev)}
      role={controlled ? undefined : "button"}
      tabIndex={controlled ? undefined : 0}
      aria-label="Toggle arrow"
      onKeyDown={controlled ? undefined : (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          setInternalOpen(prev => !prev)
        }
      }}
    >
      <span className="left-bar" />
      <span className="right-bar" />
    </span>
  )
}

export default ArrowIco;