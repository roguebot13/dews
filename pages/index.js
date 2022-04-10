import { useEffect, useState } from 'react'
import MoneyStream from '../components/MoneyStream'

export default function Home() {
  const [broadcasts, setBroadcasts] = useState([])

  const getBroadcasts = async () => {
    const res = await fetch('/api/live').then(async (res) => await res.json())
    setBroadcasts(res)
    console.log(res)
  }

  useEffect(() => {
    getBroadcasts()
  }, [])
  return (
    <div className="grid rows-2 cols-2 gap-4">
      {broadcasts.map((b) => {
        return (
          <div className="card" key={b.id}>
            <figure>
              <img className="object-fit" src={b.thumbnailUrl} />
            </figure>
            <MoneyStream price={b.sponsorDetails.price} />
          </div>
        )
      })}
    </div>
  )
}
