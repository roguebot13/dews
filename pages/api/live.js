// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      name: 'Live News 1',
      thumbnailUrl:
        'https://i.ytimg.com/vi/QMVctDmkG9g/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBwkQtJdmeNpVnfX6KLsQpfGfgjhQ',
      streamUrl: 'https://www.youtube.com/watch?v=QMVctDmkG9g',
      sponsorDetails: {
        totalValue: {
          amount: '4',
          token: {
            id: '0x42bb40bf79730451b11f6de1cba222f17b87afd7',
            symbol: 'fUSDCx',
          },
        },
        address: '',
        price: {
          amount: '1',
          token: {
            id: '0x42bb40bf79730451b11f6de1cba222f17b87afd7',
            symbol: 'fUSDCx',
          },
        },
      },
    },
  ])
}
