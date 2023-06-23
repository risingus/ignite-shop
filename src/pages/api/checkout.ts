import { stripe } from '@/libs/stripe';
import { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { productIdList } = req.body


  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if (!Array.isArray(productIdList)) {
    return res.status(400).json({ error: 'Price not found.' })
  }

  if (productIdList.length === 0) {
    return res.status(400).json({ error: 'Price not found.' })
  }

  const success_url = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancel_url = `${process.env.NEXT_URL}/`

  const checkoutSession = stripe.checkout.sessions.create({
    success_url,
    cancel_url,
    mode: 'payment',
    line_items: productIdList.map((productPriceId: string) => ({
      quantity: 1,
      price: productPriceId,
    }))
  })

  return res.status(201).json({
    checkoutUrl: (await checkoutSession).url
  })

}