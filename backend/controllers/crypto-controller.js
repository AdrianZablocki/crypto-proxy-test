import axios from 'axios'

export const getCryptoApi = async(req, res, next) => {
  console.log('kurwa macs', req)
  try {
    const data = await axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      headers: {
        'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c',
        'Accept': 'application/json'
      },
    })

    console.log(data)
    res.status(200).json(data)

  } catch (error) {
    res.status(500).json({message: 'something went wrong'})
  }

}