import { createRouter } from 'next-connect'

import { getCryptoApi } from '@/backend/controllers/crypto-controller'

const router = createRouter();


router.get(getCryptoApi)

export default router.handler()
