import React from 'react'

const Image = ({ onClick, className, img }) => {
  return (
    <img
      src={img.url}
      onClick={onClick}
      alt={img.title}
      className={`${className}`}
    />
  )
}

export default Image
