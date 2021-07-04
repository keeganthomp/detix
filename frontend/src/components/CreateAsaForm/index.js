import { createAsa } from 'lib/AlgoSigner'
import React from 'react'
import WalletContext from 'contetxs/wallet'

const CreateAsaForm = () => {
  const [isCreating, setCreationStatus] = React.useState(false)
  const { wallets } = React.useContext(WalletContext)

  const defaultWallet = wallets[0]

  const asyncCreateAsa = async () => {
    setCreationStatus(true)
    try {
      await createAsa(defaultWallet)
    } catch (err) {
      console.log('Error creating asa:', err)
    } finally {
      setCreationStatus(false)
    }
  }

  return (
    <div>
      <button onClick={asyncCreateAsa}>Create ASA</button>
    </div>
  )
}

export default CreateAsaForm
