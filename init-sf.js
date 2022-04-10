import { Framework } from '@superfluid-finance/sdk-core'
import { ethers } from 'ethers'
import { ConstantFlowAgreementV1 } from '@superfluid-finance/sdk-core'

export let sf

export const initSf = async () => {
  const mmProvider = new ethers.providers.Web3Provider(window.ethereum)
  sf = await Framework.create({
    networkName: 'mumbai',
    provider: mmProvider,
  })
  // const cfaV1 = new ConstantFlowAgreementV1({
  //   options: {
  //     hostAddress: '0x3E14dC1b13c488a8d5D310918780c983bD5982E7',
  //     cfaV1Address: '0x6EeE6060f715257b970700bc2656De21dEdF074C',
  //     idaV1Address: '0xB0aABBA4B2783A72C52956CDEF62d438ecA2d7a1',
  //   },
  // })
  return sf
}

export const sfSigner = async () => {
  if (!sf) return
  const ethersProvider = new ethers.providers.Web3Provider(window.ethereum)
  return sf.createSigner({ web3Provider: ethersProvider })
}

export const getSigner = () => {
  if (typeof window === 'undefined') return null
  const ethersProvider = new ethers.providers.Web3Provider(window.ethereum)
  return ethersProvider.getSigner()
}

export const getAddress = async () => {
  if (typeof window === 'undefined') return null
  if (!window.ethereum) return null
  const accounts = await window.ethereum.request({
    method: 'eth_requestAccounts',
  })
  return accounts[0]
}
