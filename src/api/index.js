import ajax from './helpers'
const BASE_URL = '/api'


// const getSeller = get('api/seller')
// const getGoods = get('api/goods')
// const getRatings = get('api/ratings')
//获取首页所有城市
const groupcity = () => ajax('/v1/cities', {
  type: 'group'
})
//获取首页热门城市
const hotcity = () => ajax('/v1/cities', {
  type: 'hot'
})
//获取首页默认地址
const cityGuess = () => ajax('http://cangdu.org:8001/v1/cities', {
  type: 'guess'
})
//获取搜索地址
const searchplace = (cityid, value) => ajax('/v1/pois', {
  type: 'search',
  city_id: cityid,
  keyword: value
})
//获取当前城市
const currentcity = number => ajax('/v1/cities/' + number)


export {
  // getSeller,
  // getGoods,
  // getRatings,
  groupcity,
  hotcity,
  cityGuess,
  searchplace,
  currentcity
}