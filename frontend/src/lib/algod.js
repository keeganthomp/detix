const algosdk = require('algosdk')
const CONNECTION_URL = 'https://api.testnet.algoexplorer.io'

export const algodClient = new algosdk.Algodv2('', CONNECTION_URL, '')

export const getAccountBalance = wallet =>
  algodClient.accountInformation(wallet).do()
