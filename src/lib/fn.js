export default {
  handleData (state, data) {console.log(data)
    if (typeof state[data.key] !== 'undefined') {
      switch (data.method) {
        case 'add':
          state[data.key] = state[data.key] + data.value
          break;
        case 'default': ;
        default: state[data.key] = data.value
      }
    }
  }
}
