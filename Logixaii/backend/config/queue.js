// const Queue = require("bull");
// const cloudinary = require("./cloudinary");

// const deleteQueue = new Queue("delete-image", {
//   redis: {
//     host: "redis-11943.crce206.ap-south-1-1.ec2.cloud.redislabs.com",
//     port: 11943,
//     username: "default",
//     password: "E9LW7rNV5bPnfB8qh1TlAwAr6lkEcKSC"
//   }
// });

// // Worker — runs automatically when task is triggered
// deleteQueue.process(async (job) => {
//   const publicId = job.data.publicId;
//   console.log("Deleting from Cloudinary:", publicId);
//   await cloudinary.uploader.destroy(publicId);
// });

// module.exports = deleteQueue;



const Queue = require("bull");
const cloudinary = require("./cloudinary");

const deleteQueue = new Queue("delete-image", {
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    username: process.env.REDIS_USERNAME,
    password: process.env.REDIS_PASSWORD,
  },
});

// Worker — runs automatically when task is triggered
deleteQueue.process(async (job) => {
  const publicId = job.data.publicId;

  console.log("Deleting from Cloudinary:", publicId);

  await cloudinary.uploader.destroy(publicId);
});

module.exports = deleteQueue;