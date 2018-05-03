import React from 'react'

const Image = ({ onClick, src, className, img }) => {
  return (
    <img
      key={`${img.url}-${img.title}`}
      src={img.src}
      onClick={onClick}
      alt={img.title}
      className={`${className}`}
    />
  )
}

export default Image
