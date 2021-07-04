import { SET_WALLETS } from './actions'

const WalletReducer = (state, action) => {
  const { type } = action
  switch (type) {
    case SET_WALLETS:
      const { wallets } = action
      return {
        ...state,
        wallets,
      }
  }
}

export default WalletReducer
