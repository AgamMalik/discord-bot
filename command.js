const { REST, Routes } = require("discord.js");


const commands = [
  {
    name: "create",
    description: "Creates a new short url",
  },
];

const rest = new REST({ version: "10" }).setToken(
  "MTEzNjc1NTYxMDc2ODExMzczNA.GBObbK.M5H6HJiqe7WoZXnQWadQEiY16uv3Vh89g77yh8"
);

(async () =>{
    try {
      console.log("Started refreshing application (/) commands.");

      await rest.put(Routes.applicationCommands("1136755610768113734"), {
        body: commands,
      });

      console.log("Successfully reloaded application (/) commands.");
    } catch (error) {
      console.error(error);
    }
})()