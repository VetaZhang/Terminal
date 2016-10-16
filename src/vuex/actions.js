import tcp from '../lib/tcp';

export default {
  connect (store, name) {
    tcp.createConnection(store, name);
  }
};
