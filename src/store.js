import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

// Temporary - dummy data
const farms = [{
  "id": 1,
  "geometry": {
    "coordinates": [
      32.3397543,
      34.89499339999998
    ],
    "type": "Point"
  },
  "properties": {
    "name": "משק בן יהודה"
  },
  "type": "Feature"
}]

export default new Vuex.Store({
  state: {
    farms
  },
});
