import { algodClient } from './algod'
import algosdk from 'algosdk'

const LEDGER = 'TestNet'

const getAlgoSigner = () => {
  if (typeof AlgoSigner !== 'undefined') {
    return window.AlgoSigner
  } else {
    console.log('AlgoSigner is NOT installed!')
    return
  }
}

export const connectAlgoSigner = () => window.AlgoSigner.connect()

export const getAccounts = () => {
  const AlgoSigner = getAlgoSigner()
  if (!AlgoSigner) return
  return AlgoSigner.accounts({ ledger: LEDGER })
}

export const createAsa = async address => {
  try {
    let txn = await algodClient.getTransactionParams().do()
    txn = {
      ...txn,
      fee: 0,
      flatFee: false,
      type: 'acfg',
      from: address,
      assetName: 'My New Coin',
      assetUnitName: 'MNC',
      assetDecimals: 2,
      assetTotal: 50000000,
      assetURL: 'developer.algorand.org',
      //   assetFreeze: '...',
      //   assetManager: '...',
      //   assetReserve: '...',
      assetDefaultFrozen: false,
    }
    const standardTxn = new algosdk.Transaction(txn)
    // Get the binary of txn
    const binaryTx = standardTxn.toByte()
    // base64 encode txn for AlgoSigner
    const base64Tx = window.AlgoSigner.encoding.msgpackToBase64(binaryTx)
    // can add more than one txn if desired
    const txnForAlgoSignerToSign = [{ txn: base64Tx }]
    // sign txn
    const signedTxns = await window.AlgoSigner.signTxn(txnForAlgoSignerToSign)
    const { blob: signedTxnBlob } = signedTxns[0]
    // broadcast transaction to network
    const { txId } = await window.AlgoSigner.send({
      ledger: LEDGER,
      tx: signedTxnBlob,
    })
  } catch (err) {
    console.error(err)
  }
}
