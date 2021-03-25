import {Data} from './data'

const getData = () => {
  return new Promise (resolve => {
    setTimeout(() => resolve(Data), 1000)
  })
}

export default getData