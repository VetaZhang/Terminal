const net = window.require('net');
import address from '../config/address';

let clients = {}

export default {
  createConnection (store, name) {
    const domain = address[name].domain;
    const port = address[name].port;
    let client = new net.Socket();

    client.connect(port, domain, () => {
    	console.log(`Connected to ${domain}:${port}`);
    });

    client.on('data', (data) => {
      data = data.toString().match(/(\{.+?\})(?={|$)/g)
      // console.log(data.length)
      data.forEach((item) => {
        const d = JSON.parse(item)
        d.name = name
        // console.log(d)
        store.commit('HANDLE_DATA', d)
      })
    });

    client.on('close', () => {
    	console.log(`${domain}:${port} Disconnected`);
      delete clients[name];
    });

    return {
      send (key, value = null, method) {
        if (key) {
          client.write(JSON.stringify({ key, value, method }));
        }
      },
      disconnect () {
        //
      }
    };
  }
};
