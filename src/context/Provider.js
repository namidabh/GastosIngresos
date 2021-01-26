import React from 'react'

import Context from './Context.js'

export default function Provider({ children }) {
  const defaultLightColor = '#000000'
  const [lightColor, setLightColor] = React.useState(defaultLightColor)
  const [clickTimes, setClickTimes] = React.useState(0)

  return (
    <Context.Provider value={{ lightColor, setLightColor, clickTimes, setClickTimes, defaultLightColor }}>
      { children }
      <span>{ Math.random() }</span>
    </Context.Provider>
  )
}