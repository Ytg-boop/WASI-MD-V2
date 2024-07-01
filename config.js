//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0dxWE5GMkxsdXpKdFYzelk2TUtuWWxzcDRRQSs4b1R0N3ZEemVCM3MzYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicTBmRTFPcDM0WlowZm9OTTlJOEJKTTM0M1hJRHBsT1hLZ1dvY1BvbExnRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlT0tta2tRQStlYmlUQ3VJMHlRNGNPMW9uYmlEd2hSNE5FdDNlK3pWYjBZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHK1Z4aFhZQkwrTXdaT2ZPeGJMYmJTSUMxNDliOW1YSVNrMWQ2ZFFISGxRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVDd25La2ZvLytENTRLWmwzZGpDRW1meTdPTmFuNk9vLzZaWW0zRis5a2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhQS0s3SjVEclgvd2x5YkhCR1NCVE5ZcFZZbWo5TWh1U3FNNmpoZ296SDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0tLT29SY1hsdjRDaGg1MU1MMTJMclA4YzJEc1NyOGo5a0RlRFJ6aEcwND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidkhsTk5wNnVxbmhBellBOC9CMXBHRE9ZeEhESHdWRVUzbE40eXNHNnIzZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNXdTFMa1RRZkFWRFg3dll4QjNaa0JwNTlvSFdMYnpBaXIrYndIZW9SMnRxRG5vMDlhV3VBVG9tUDNXRVVVdWVLcEgxVXFmSTNrZWRaTmpRUDRIYkN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcyLCJhZHZTZWNyZXRLZXkiOiIvK25BeFRHdk05NmxIQlZITEI2Rmk2emlScEFUZnR2TjEwRS9kYWFBNEw4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI4WkFkZjZRVlNMV2hNUEVqTXFUT0pnIiwicGhvbmVJZCI6IjViYjViODY4LWFiNzAtNGJmZS1hNTFhLTRhOTZjYmI5MTE2ZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJucjlJZEd5dUlZMndLS2hzNHVkV1QzYksvSnM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiekp4bTlJajF3dUxZYXg4QURvOWRobXhPTVE0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkRBUDlGTlhTIiwibWUiOnsiaWQiOiIyNTQ3NDExMDY1Njk6NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJtb2RhZndhayJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSnpuc3g4USt1YU10QVlZQlNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTmpjYU1GWGU4aGNERkRMSDI4aTc2c0xUSGFmejlzbEFJWktOY2QwVTJCUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWHhDR0xZYnRReTBFSzRmcjJjdFdYOSt2MGVSeDRpRlNkSjJTNmpoRXd1UnJmOUY5QkFHOUZHRnRHTmwxZlczTGEvOWtPOXN6REgvTjdXL0EyNmVSQWc9PSIsImRldmljZVNpZ25hdHVyZSI6IlF0YjdPajdnd3RIdDJYUk8rN2YydU1sQlNpaHJ3OTB4b1FtK0RPVHFBRG8wOWFGa2V6WnNXRTh1L1p4NW53Vy9xalNQZkNvSjRQd2s4TTJRMHBITEJ3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzQxMTA2NTY5OjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVFkzR2pCVjN2SVhBeFF5eDl2SXUrckMweDJuOC9iSlFDR1NqWEhkRk5nVSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTg3NDQ0MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCTWIifQ=="eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUZjVlo4b2dPT3NYWitNb09GWTZxRkVHa0ZnVzdCay9SZ2NCOVFjWGgwUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic3JBcVN4d1pVNzlxNHd4N1hLMVpVTGZMVWhLR01QSFp0bUdpTFEyZnJrVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlRmVkUUd5SEtmK0d2bzR0NGtVRXN5ZzJjdEh6S2tTbUFtLzJFWitDaUZnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnMlcxMW83K2YrWnR1R3IxU1lUbmJvK3lGTmVsOStKV3FSSXkyZUtoY0d3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNDQjhaeUc3ZWZRaWF4OEdtcGxyY2lXUVBZQ3l3MFRpWVdEWDNzeFRRVlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkV1WFRRaVBRUjNvNG5RYmxZQ21XZUVIUUlzT3RTdnIzYzZWSE5TS0cwZzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib09CdlBWTDc0VUg3c3BZOExla0lkUXJZc2l6YmlPZTdFbEdxaFg3NzBVTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieXpHcXUyL1RzNXBFR3Y5dE5xSFBKNHZ0Z1RCNkhhN0xKNUdzSE5pTkFoVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVGS3lJSk13ZmhlZGdhYkNNS0xFYTRINjF2S2R0T0xuN1BwRUp2Q0pNUkFETVUvNE13YXQ5Z2FDRy9CV2ZKRW5qWFpJdE5URE9ya3Ezb25IenRWWGpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUyLCJhZHZTZWNyZXRLZXkiOiIva1lKSllGTURwRVRXc0U4OWhNWmwxeTBycU5wV2pya2xUY05BL1lib0tnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc0MTEwNjU2OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1MDY2Njk1MEQ2QzUzMjFGOTk0NjA3OEMyNzhFMTI2MiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE5ODMyNDg1fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJFY3VoazhjblNkMjZuUkt2Yks2VU13IiwicGhvbmVJZCI6ImY1NGEzY2FlLTQ2MzQtNGU1Yi1hMWM2LWQ4YzJhN2U5MTRmOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNM1IrUFg4eERaazdNUHBReXJncFBJVlRRZE09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaDdLaWZxMkZxck9sZFhNenFiR01pOHhQY1NJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkpYQkZCQlg5IiwibWUiOnsiaWQiOiIyNTQ3NDExMDY1Njk6NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJtb2RhZndhayJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSnpuc3g4UWxKK0t0QVlZQWlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTmpjYU1GWGU4aGNERkRMSDI4aTc2c0xUSGFmejlzbEFJWktOY2QwVTJCUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYVVqSDlNNnNWdnhoMUxsS0hXb1lnNHJ5MHhha3hqSmRZTzd4WDJJYnFTdXJPNTFlUkd6RHdUM0FxWWJ0MHN0Wk5vK0psZnR5NWI3VUVjTG03aTNPQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6IjBUMmNWZ1FCbU5INkRXRmhhWEEvaXlVdnc4QkJqWlFmT3FTYkk4MmFZZ3BkbnNNaGlUSlBSNnM1TlBDZ0ZqYWlQYWppVEI1R1ZESjZHMTFHSWFUWGdBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzQxMTA2NTY5OjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVFkzR2pCVjN2SVhBeFF5eDl2SXUrckMweDJuOC9iSlFDR1NqWEhkRk5nVSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTgzMjQ4MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCTWIifQ==
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEZ1dU1La1plLzRnejRyaXZpaER0RjhxQkdOZktDS29aQU5CcmN1YWgwZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMnJMeGJ0MmxxaXJlQ0hYa0tRWlFlcERsMlYrK1pTUEJDV1cyczlvcWZFND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1QkV3RjRzZUdPa2dhVmRlWHJIK3prZDVrM3NtR1M0OElTTUo5Uk9QMUhRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0WXEwcDRKRUZuOHQrMnVpOHI2Y1F5VVNVcmJaTm9PRUIvWkIyc1ZrakhnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFOVURNZmZrVjViN040blFYUTJlU2xPQmkvRE1md25MMjR1TmdmOFFMRjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxtN3ZLTHN6Q3hoSkhHOWN4S1ZoTmhSUjVaUmlWUEQra1RsQkhSbVVRR2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU91MlFkWFQ1cm52Zld2V2pMd2hpUnl3SGtRUTBLYjJxM1FVdHpXaXFVOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieElLYmhlMkMzc04yWW1jNWo4ajZaL2pYbHRuSkJ3S0orVEcxS3RLejZTOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkQyUlVGbElqaWI2cWEyS0l5NjVqWTNZNXNIZWRwWFgyUFNvazErbmovdzRsTlJVWTZxQVVBZXQ3YU5rdHhrKyt4RXBpK1dMaFAwN2M2Vkt0NXViRGh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEyLCJhZHZTZWNyZXRLZXkiOiJKdnNLdStCa1dYRVBMZ3hDdUtuWlNjMXB2TjlFQWdMdXZTd05SUHl0MjhBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJHZkFtTkdBZlJNNmNTY003a1VCY0VBIiwicGhvbmVJZCI6IjRhZWEyNjVhLTkzYmItNGQ2NS1iZjRjLWZkYTljNjNiMTdkZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQaWMxRFdxeUNIcnFsOTk4Njl1Vk4yNGFLeGs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMnNRSVNXS0pEd1Z4RGJLeld5ckFtWS9IOVNFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlRXNzlHMUxKIiwibWUiOnsiaWQiOiIyNTQ3NDExMDY1Njk6NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJtb2RhZndhayJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSnpuc3g4UTllS0t0QVlZQkNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTmpjYU1GWGU4aGNERkRMSDI4aTc2c0xUSGFmejlzbEFJWktOY2QwVTJCUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUzdQb2xEK09WTUE4RWZLdTVvOHVkNXVpQitBVGFkSnU0UTFUeE5iVU5sZnlnbkRkVVBGdkxzOWwvWTNYNms5d0I1dzNaTTZPZkJJTDlaL1NYTlUxQVE9PSIsImRldmljZVNpZ25hdHVyZSI6IlpHK201azIxTmlESFZqVGNLQ3d5ZWVMZzFoS1BwSy9xRlZVd1QrNVErUUU3c2FjUjZpQ2I1SFZYcUtDbUdKdHl1aGlrZnVXSlVJRHhOWjBmZzBTd2pBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzQxMTA2NTY5OjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVFkzR2pCVjN2SVhBeFF5eDl2SXUrckMweDJuOC9iSlFDR1NqWEhkRk5nVSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTg0MTE1NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCTWIifQ==-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
