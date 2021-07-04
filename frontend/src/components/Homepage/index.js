import React from 'react'
import WalletContext from 'contetxs/wallet'
import { getAccountBalance } from 'lib/algod'

import AlgoSignerConnect from 'components/AlgoSignerConnect'
import CreateAsaForm from 'components/CreateAsaForm'

const Homepage = () => {
  const { wallets } = React.useContext(WalletContext)
  const [accountInfo, setAccountInfo] = React.useState(null)
  const defaultWallet = wallets ? wallets[0] : null

  const asyncGetAccountInfo = async () => {
    const accountInfo = await getAccountBalance(defaultWallet)
    setAccountInfo(accountInfo)
  }

  React.useEffect(() => {
    asyncGetAccountInfo()
  }, [])

  if (!accountInfo) return <p>Loading...</p>

  const createdAssets = accountInfo['created-assets']
  const { assets: assetsHeld } = accountInfo

  return (
    <div>
      <h1>Homepage</h1>
      <AlgoSignerConnect />
      <CreateAsaForm />
      <div>
        <div>
          <h3>Created Tickets</h3>
          <div>
            {createdAssets.map(asset => {
              const {
                index,
                params: { total, name },
              } = asset
              return (
                <div key={index}>
                  <p>name: {name}</p>
                  <p>total: {total}</p>
                  <p>asset id: {index}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div>
          <h3>Assets Held</h3>
          <div>
            {assetsHeld.map(asset => {
              const { amount: amountAvailable } = asset
              const assetId = asset['asset-id']
              const matchingAsset = createdAssets.find(
                createdAsset => createdAsset.index === assetId
              )
              const {
                params: { name },
              } = matchingAsset
              return (
                <div key={assetId}>
                  <p>name: {name}</p>
                  <p>available: {amountAvailable}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
