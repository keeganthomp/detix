import { connectAlgoSigner, getAccounts } from 'lib/AlgoSigner'
import React from 'react'
import WalletContext from 'contetxs/wallet'

const AlgoSignerLogin = () => {
  const { setWallets } = React.useContext(WalletContext)

  const asyncConnectWallet = async () => {
    console.log('WOO')
    try {
      await connectAlgoSigner()
      const accounts = await getAccounts()
      const walletAddresses = accounts.map(account => account.address)
      setWallets(walletAddresses)
    } catch (err) {
      console.log('err', err)
    }
  }

  return (
    <div>
      <button onClick={asyncConnectWallet}>Connect</button>
    </div>
  )
}

export default AlgoSignerLogin
