import { Faders } from 'phosphor-react'
import React from 'react'

export function FilterBox({filterTitle, children}) {
  return (
    <div className="card-box">
        <div className="box-title">
          <Faders size={16} color="#fdfcfc" weight="fill" />
          <h6>{filterTitle}</h6>
        </div>
        <div className="box-content">
          {children}
        </div>
      </div>
  )
}
