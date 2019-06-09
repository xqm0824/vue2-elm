import { get } from './helpers'

const getSeller = get('api/seller')
const getGoods = get('api/goods')
const getRatings = get('api/ratings')
const getAllCitys = get('http://cangdu.org:8001/v1/cities?type=group')
const getHotCitys = get('http://cangdu.org:8001/v1/cities?type=hot')
const guessCity = get('http://cangdu.org:8001/v1/cities?type=guess')
// const searchCity = get('http://cangdu.org:8001/v1/pois?city_id='+ id +'&keyword='+ inputval +'&type=search')


export {
  getSeller,
  getGoods,
  getRatings,
  getAllCitys,
  getHotCitys,
  guessCity
  // searchCity
}