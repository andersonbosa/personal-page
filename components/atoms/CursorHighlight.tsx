'use client'


import React, { useEffect, useState } from 'react'

interface CursorHighlightProps {
  size?: number;
  color?: string;
}

const CursorHighlight: React.FC<CursorHighlightProps> = ({
  size = 64,
  color = '#fff',
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY })
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        top: position.y - size / 2,
        left: position.x - size / 2,
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: color,
        mixBlendMode: 'difference',
        pointerEvents: 'none', // Allow click events to pass through
        zIndex: 9999,
      }}
    />
  )
}

export default CursorHighlight
