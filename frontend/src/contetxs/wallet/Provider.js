import Context from './index'
import React from 'react'
import reducer from './reducer'

import { SET_WALLETS } from './actions'

const WalletProvider = ({ children }) => {
  const initialState = JSON.parse(localStorage.getItem('wallets'))
  const [walletState, dispatch] = React.useReducer(reducer, initialState)

  React.useEffect(() => {
    localStorage.setItem('wallets', JSON.stringify(walletState))
  }, [walletState])

  const setWallets = wallets => {
    dispatch({ type: SET_WALLETS, wallets })
  }

  return (
    <Context.Provider
      value={{
        ...walletState,
        setWallets,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default WalletProvider
