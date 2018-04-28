import React from 'react'
import './ImageBackground.css'

const ImageBackground = ({ onClick, url, className }) => {
  return (
    <div
      onClick={onClick}
      className={`${className} img-scale-hover`}
      style={{
        background: `url(${url})`
      }}
    />
  )
}

export default ImageBackground
