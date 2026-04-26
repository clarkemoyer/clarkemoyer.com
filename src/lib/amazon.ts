export const AMZN_TAG = 'clarkemoyer-20'

export function amznUrl(asin: string): string {
  return `https://www.amazon.com/dp/${asin}?tag=${AMZN_TAG}`
}

export function amznSearch(query: string): string {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${AMZN_TAG}`
}
