import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE_ID= {
    'founder_growth' : 'price_1TkSiB22hTS3EBA2hEr7jdxJ',
    'founder_enterprise' : 'price_1TkZ7422hTS3EBA2OeLTZesw'
}