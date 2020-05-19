import { openLink, dismissLink, PlaidLink } from './PlaidLink'

const thrower = () => {
  throw new Error('not available on Android yet!')
}

const PlaidLink = () => null

export default PlaidLink

export {
  openLink: thrower,
  dismissLink: thrower
}
