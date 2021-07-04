const shouldFail = async fp => {
  let worked = undefined
  try {
    await fp()
    worked = true
  } catch (e) {
    worked = false
  }
  console.log(`\tshouldFail = ${worked}`)
  if (worked !== false) {
    throw Error(`shouldFail`)
  }
}

const optinToToken = ({ stdlib, account, token }) => {
  return new Promise(async (resolve, reject) => {
    if (stdlib.connector == 'ETH') {
      const myGasLimit = 5000000
      account.setGasLimit(myGasLimit)
    } else if (stdlib.connector == 'ALGO') {
      console.log(`Opt-ing in on ALGO`)
      await stdlib.transfer(account, account, 0, token.id)
    }
    resolve()
  })
}

export default optinToToken
