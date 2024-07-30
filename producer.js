import { kafka } from "./clint.js";

const init = async () => {
  const producer = kafka.producer();

  console.log("Conneting producer");

  await producer.connect();
  console.log("prooducer connected");

  await producer.send({
    topic: "result-update",
    messages: [
      {
        partition:0,
        key: "mark-updated",
        value: JSON.stringify({ name: "Rakesh", mark: "58" }),
      },
      {
        partition:1,
        key: "final-mark",
        value: JSON.stringify({ name: "Rakesh", mark: "Pass" }),
      },
    ],
  });
  await producer.disconnect();
};

init();
