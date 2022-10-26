# **Warning, this is a unreleased Repository, You can see many things here already, but this is still far from done. Expect errors or problems when using this at the current stage!**

# BeatRPC (BETA)
BeatRPC is a (yet) Node.js Application that hooks into [Streamer Tools](https://github.com/EnderdracheLP/streamer-tools) and your Local Discord Client to show an amazing Rich Present to show of your BeatSaber Scores while you're playing!

**BeatRPC is only made for Quest 2 or other devices that Support the usage of [BMBF]()**

# Features
* Connects to your Local running Discord
* Shows a nice RPC with informations about your current BeatSaber map
* Shows Awesome buttons to directly download the map to try then out
* Most Features are automated, so no need to worry that you need to change anything!

# Requirements
1. You have a BeatSaber version that supports BMBF
2. You have Modded your game with BMBF
3. You have installed and enabled the [Streamer Tools Mod](https://github.com/EnderdracheLP/streamer-tools) inside BMBF
4. You have a valid Node.js Version installed (BeatRPC is made with Node.js 17.9.1)
5. You have any Version of Discord (Stable, PTB, Canary) Running on your device

# Installation
1. Download the Repository
2. Install all required Packages with `npm install`
3. Go to BMBF -> Tools and write the listed IP in the upper right corner down
4. Edit the `.env` File and Replace "127.0.0.1" With the IP that you have written down
5. Start Beat Saber and Load in the main menu
6. Run `npm start`
7. Play a game and let the application take over your Discord RPC! :D

# Issues & Support
Feel free to open up any Issues here on Github if you having Problems with BeatRPC or have suggestions that you thing i should add to BeatRPC (~~or found a god dam Spelling mistake, as i am not perfect at english~~)

# Future Plans
* Making this Project a Standalone Execution
* Make the Application more Stable
* More User Friendly setup
* Automatic IP Finder for the Quest 2

# Future Future Plans
* Looking into other Quest games to make working RPC's
  * Only Modded Games might work here, i'm not an expert on developing standalone quest apps
* Converting this into a AllAround Application (Supporting Multiple games in one Application)