const net = window.require('net')

let clients = {}

export default {
  createConnection (domain, port, cb) {
    let client = new net.Socket();

    client.connect(port, domain, () => {
    	console.log(`${domain}:${port} Connected`);
    });

    client.on('data', (data) => {
      cb(JSON.parse(data))
    });

    client.on('close', () => {
    	console.log(`${domain}:${port} Disconnected`);
      delete clients[`${domain}:${port}`]
    });
    clients[`${domain}:${port}`] = client
  },
  send (key, data) {
    if (clients[key]) {
      clients[key].write(JSON.stringify(data))
    }
  }
}
