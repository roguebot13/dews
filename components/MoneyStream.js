import { initSf, sf, sfSigner, getAddress } from '../init-sf'
import { ethers } from 'ethers'
import { useEffect, useState } from 'react'

export default function MoneyStream({
  price = { amount: 0, token: { symbol: 'fDAIx' } },
}) {
  const [tokens, setTokens] = useState([])
  const [selectedToken, setSelectedToken] = useState({ id: '', name: '' })
  const getTokens = async () => {
    await initSf()
    const t = await sf.query.listAllSuperTokens(
      { isListed: true },
      { skip: 0, take: 10 },
      {
        orderBy: 'createdAtBlockNumber',
        orderDirection: 'desc',
      },
    )
    console.log(t)
    setTokens(t.data)
    return () => {}
  }

  const startStream = async () => {
    const address = await getAddress()
    console.log('starting stream with', selectedToken, address)
    const signer = await sfSigner()
    const token = await sf.loadSuperToken(selectedToken.symbol)
    const approveOperation = token.approve({
      receiver: '0xFc3D2dce4C5227B7EFaBaed7f3542107A3514f02',
      amount: ethers.utils.parseUnits('10').toString(),
    })
    const txn = await approveOperation.exec(signer)
    const receipt = await txn.wait()
    console.log('receipt', receipt)
    const createFlowOperation = sf.cfaV1.createFlow({
      sender: address,
      receiver: '0xFc3D2dce4C5227B7EFaBaed7f3542107A3514f02',
      superToken: selectedToken.id,
      flowRate: '1000000',
    })
    const txnResponse = await createFlowOperation.exec(signer)
    const txnReceipt = await txnResponse.wait()
    console.log('txnReceipt', txnReceipt)
    // Transaction Complete when code reaches here
  }

  useEffect(() => {
    getTokens()
  }, [])

  return (
    <>
      <select
        onChange={(e) => {
          let index = tokens.findIndex((t) => t.id == e.target.value)
          if (index > -1) {
            setSelectedToken(tokens[index])
          }
        }}
        value={selectedToken.id}
      >
        {tokens.map((t) => {
          return <option value={t.id}>{t.symbol} </option>
        })}
        <option></option>
      </select>
      <button className="btn btn-wide" onClick={startStream}>
        Stream @ {price.amount + ' ' + price.token.symbol}
      </button>
    </>
  )
}
