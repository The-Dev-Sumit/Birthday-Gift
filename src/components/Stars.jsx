import React from 'react'

const Stars = () => {
  return (
    <span className="flex justify-center items-center animate-blink">
      {/* Star Shape using clip-path */}
      <span
        className="w-[.3rem] h-[.3rem] bg-white"
        style={{
            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
             boxShadow: '0 0 30px 15px rgba(255, 255, 255, 1)',
        }}
      ></span>
    </span>
  )
}

export default Stars