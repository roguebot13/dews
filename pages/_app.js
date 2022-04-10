import '../styles/globals.css'
import { InitSwAuth } from '@skill-wallet/auth'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

if (typeof window !== 'undefined') {
  window.addEventListener('onSkillwalletLogin', () => {
    const sw = JSON.parse(sessionStorage.getItem('skillWallet') || '{}')
    console.log('Skillwallet login complete', sw)
  })
  InitSwAuth()
}

export default MyApp
