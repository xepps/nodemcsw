# Node Minecraft Server Wrapper

This is a minecraft server wrapper written in nodejs that provides access to a server's inner workings whilst running,
via a http interface.

## Intended features:

- Fetch chat logs
- Execute server commands (find players, give items etc)
- Locate player's position in the world
- (If possible), fetch overworld map as image

## Security

Access to these endpoints should be behind an api key to ensure that requests are valid.
Commands (or endpoints) can be enabled on/off

## How to run

Ideally,

`git clone https://github.com/xepps/nodemcsw.git`
`npm install`
`npm run setup` (defines api key, configure enabled commands, amount of ram etc)
`npm run add-server` (adds the minecraft server to the server directory)
`npm run server`
