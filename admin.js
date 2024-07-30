import {kafka} from "./clint.js"

const init=async()=>
{
    const admin=kafka.admin();
    console.log("Adimin connitiing")
    admin.connect();
    console.log("Admin conected success")

    console.log("Create topic..")
   await admin.createTopics({
        topics:[{
            topic:"result-update",
            numPartitions:2,
        },],
    });

    console.log(" topic created..")

    await admin.disconnect();
}

init();