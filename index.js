const { execSync } = require("child_process");
const degit = require("degit");

const repositoryUrl =
  "https://github.com/Shardeum/shardeum-dapp-boilerplate.git";

const projectName = process.argv[2] || "my-shardeum-dapp";
const destination = `${process.cwd()}/${projectName}`;

const emitter = degit(repositoryUrl, {
  cache: false,
  force: true,
});

emitter.on("info", (info) => {
  console.log(info.message);
});

emitter.clone(destination).then(() => {
  console.log("Cloning complete!");

  // Navigate to the newly created directory
  process.chdir(destination);

  // Install dependencies
  console.log("Installing dependencies...");
  execSync("npm install", { stdio: "inherit" });

  console.log("Installation complete!");
  console.log(`cd ${projectName}`);
  console.log("npm start");
});
