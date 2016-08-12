import tcp from '../../../lib/tcp'
// import fn from '../../../lib/fn'

export default {
  connect ({dispatch}) {
    tcp.createConnection('localhost', 8080, (data) => {
      dispatch('HANDLE_DATA', data)
    })
  },
  send ({dispatch}, data) {
    tcp.send('localhost:8080', data)
  }
}
