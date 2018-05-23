import React from 'react'

const Image = ({ onClick, className, img, preview }) => {
  return (
    <img
      src={preview ? img.previewUrl : img.url}
      onClick={onClick}
      alt={img.title}
      className={`${className}`}
    />
  )
}

export default Image
