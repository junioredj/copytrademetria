import React from 'react'

export function ResultBox({resultTitle, Icon, children}) {
  return (
    <div className="card-box">
        <div className="box-title">
            <Icon size={16} color='#fdfcfc' />
            <h6>{resultTitle}</h6>
        </div>
        <div className="box-content">
            {children}
        </div>
    </div>
  )
}
