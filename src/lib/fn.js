export default {
  handleData (state, data) {
    if (state[data.name] && (typeof state[data.name][data.key] !== 'undefined')) {
      const appState = state[data.name];
      switch (data.method) {
        case 'add':
          appState[data.key] = appState[data.key] + data.value
          break;
        case 'default': ;
        default: appState[data.key] = data.value
      }
    }
  }
}
