import React, { Children } from 'react'

export function Section({sectionName, pageTitle, children}) {
  return (
    <div className={`s-${sectionName}`}>
      <div className="container">
        <div className="page-title">
          <h4>{pageTitle}</h4>
        </div>
        <div className="page-content">
            {children}
        </div>
      </div>
    </div>
  )
}
