import { Kafka } from "kafkajs";

export const kafka=new Kafka({
    clientId:"my-application",
    brokers:["192.168.187.44:9092"]
});
