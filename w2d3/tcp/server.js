const net = require("net");

// const { superCreateServer:createServer } = require("net");
// const secretServer = superCreateServer()

const chatServer = net.createServer();

let clientCount = 0;
const clientList = [];

chatServer.on("connection", client => {
  client.clientId = clientCount++;
  clientList.push(client);
  console.log("someone connected", client.clientId);
  client.setEncoding("utf-8");

  client.write("HEY WELCOME TO THIS WONDERFUL CHAT ROOM OF DESTINY.");

  for (const currentClient of clientList) {
    if (currentClient.clientId !== client.clientId) {
      currentClient.write(`NEW PERSON INCOMING, THERE IS ${clientCount} users`);
    }
  }
  const broadcast = data => {
    for (const currentClient of clientList) {
      if (currentClient.clientId !== client.clientId) {
        currentClient.write(`Client #${client.clientId} said : ${data}`);
      }
    }
  };
  client.on("data", console.log);
  client.on("data", data => console.log(data));
  client.on("data", data => {
    for (const currentClient of clientList) {
      if (currentClient.clientId !== client.clientId) {
        currentClient.write(`Client #${client.clientId} said : ${data}`);
      }
    }
  });
  client.on("data", broadcast);
});

chatServer.listen({ port: 3000, host: "0.0.0.0" }, () => {
  console.log("Server is listening !");
});

// chatServer.on("listening", () => {
//   console.log("HEHE we are listening 🤦‍♀️");
// });
