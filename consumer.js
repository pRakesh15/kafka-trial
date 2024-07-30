import { kafka } from "./clint.js";

const init = async () => {
  const consumer = kafka.consumer({ groupId: 'user-1' }); // Specify the groupId
  await consumer.connect(); // Await the connection
  await consumer.subscribe({ topics: ["result-update"], fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
      console.log({
        topic,
        key: message.key ? message.key.toString() : null,
        value: message.value.toString(),
        headers: message.headers,
      });
    },
  });
};

init().catch(console.error);
