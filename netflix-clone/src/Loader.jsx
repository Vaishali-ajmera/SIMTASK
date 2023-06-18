import React from 'react'
import { BeatLoader } from 'react-spinners';
import "./Loader.css"

function Loader() {
    return (
        <div className="loading">
          <div className="loading-overlay" />
          <BeatLoader color="blue" loading={true} size={50} />
        </div>
    )
}

export default Loader


