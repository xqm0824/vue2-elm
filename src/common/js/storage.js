import storage from 'good-storage'

const SELLER_KEY = '__seller__'

export function saveToLocal (name, address, latitude, longitude) {
  const seller = storage.get(SELLER_KEY, {})
  if (!name) {
    seller = {}
  }
  seller.name = name
  seller.address = address
  seller.latitude = latitude
  seller.longitude = longitude
  storage.set(SELLER_KEY, seller)
}

export function loadFromLocal (id, key, def) {
  const seller = storage.get(SELLER_KEY, {})
  if (!seller[id]) {
    return def
  }
  return seller[id][key] || def

}