const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

module.exports = {
  "SESSION_ID": process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0hPTEpFdDhIRytJNVBJcTNPTy9wVGN5OEsxb1RzYzFFQTNZaXVEemFYbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNUdxYzdqL0RHdlU5dE82UW1Wc21nRmQyNW12QXF0YVZyNi9RZUkvaUxFUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLS3B2MGJxWlpRdXVQd1I3RXhVZmJpMU44L3NnVWs4dm5rU1FJR29ZVDMwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2UlQycTIwek11dHVXVDBCM1NXZkdSY1ZZc3FMWVNZN1RFSmV5aVVxQ2x3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9CTUVXU1JHU1BFWlFHbU4zQ3MzdWR4U1puMC84YVBiZnFmdURLUWhrVjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNXTy9NL0VGUG1RSFJ4Mld2c0hvcGdxNGVIRHJFbk9zdGZha0pTSmJ4V0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0pURlFqR3psZWZqamEvMllGaktmb2ovTnRlSzFIRVBWTVlDeTdpY2EzQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUWFYR3FxckNTTE9nUUNSd3BtekZCMGpkYk1EMU03QmxPN0l0T3E5SWNDOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBDTllpYURLTUhZenJsaUw0ZHd0ejRCajZTdDEwRUhuZHVpb2JKSGJrODB6b2oyN2JNUkVmNDVXRXRqSjR5Rkd5QkwzaHBOczQrdEZENFVhRkZTdmdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg5LCJhZHZTZWNyZXRLZXkiOiJyd1cvdGhRdzgrVEsyMUJaNytRcVBRNmJvVUM3MWtzN3dSa2xPc3RtdTlVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJaLWQzWlYtaFIzQ3lMSVJnTFQ5emlnIiwicGhvbmVJZCI6IjNmNjUyN2UwLWU5MzYtNGY0Zi1hMjU4LTI2MjhhNjAzNzI0MSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTZmRaSTRxZlBYbFdaMlVUMittZlZJamlnQ1k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM1lFcmR2WEJzMGNUSWRrNGIxL2N1WUtRbWxRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlJRTFdWOVJGIiwibWUiOnsiaWQiOiIyMzQ4MDY0MjY1MjkxOjYwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkViaWFwb2sgRWx2aXMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1B1YzVhZ0NFUEhvcTcwR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IklwWmZHWjdrZUhGd0xMa0l5bGRQRlFBUGppNER5SGRMMHh0ZXMvVENPaVU9IiwiYWNjb3VudFNpZ25hdHVyZSI6InhISmpTOW1JTjY2aUU3VDBvaEFtblFvZWJKSVJPTkgxZjlBK1BmMFhjSTFvd0xZaEgxT1dEUFJBTlpxTUxyT0Jtb2NrOXE0YnhQSS9qYWVaVVZoNEJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJQejFiNG1qTVJoT1JtZks3SjF3ZVYxRFdMVlJMUnpBc0tTWjhJTHVBbXR5NHJJalVmWUdLT1U5aWMwcjBuNUJ2cmltU3JkK1ZRZ1pIMTB2aklCekVqQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwNjQyNjUyOTE6NjBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU0tXWHhtZTVIaHhjQ3k1Q01wWFR4VUFENDR1QThoM1M5TWJYclAwd2pvbCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczOTI1Njk1OX0=",
  "ALIVE_IMG": process.env.ALIVE_IMG || "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg",
  "PREFIX": process.env.PREFIX || ".",
  "AUTO_READ_STATUS": process.env.AUTO_READ_STATUS === 'true',
  "MODE": process.env.MODE || "public",
  "OWNER_NUMBER": process.env.OWNER_NUMBER || "2348064265291",
  "OWNER_NAME": process.env.OWNER_NAME || "Hamza",
  "ALWAYS_ONLINE": process.env.ALWAYS_ONLINE === 'true',
  "PRESENCE": process.env.PRESENCE || "online",
  "OMDB_API_KEY": process.env.OMDB_API_KEY || "76cb7f39",
  "READ_CMD": process.env.READ_CMD === 'true',
  "AUTO_VOICE": process.env.AUTO_VOICE === 'true',
  "AUTO_STICKER": process.env.AUTO_STICKER === 'true',
  "AUTO_REPLY": process.env.AUTO_REPLY === 'true',
  "AUTO_REACT": process.env.AUTO_REACT === 'true',
  "WELCOME": process.env.WELCOME === 'true',
  "ANTI_BAD": process.env.ANTI_BAD === 'true',
  "ANTI_LINK": process.env.ANTI_LINK === 'true',
  "ANTI_GROUP_LINK": process.env.ANTI_GROUP_LINK === 'true',
  "ANTI_DELETE": process.env.ANTI_DELETE === 'true',
  "ANTI_VIEW_ONCE": process.env.ANTI_VIEW_ONCE === 'true',
  "ANTI_BOT": process.env.ANTI_BOT === 'true',
  "PREMIUM_USERS": process.env.PREMIUM_USERS || "",
  "COUNTRY_BLOCK": process.env.COUNTRY_BLOCK === 'true',
  "COUNTRY_BLOCK_CODE": process.env.COUNTRY_BLOCK_CODE || "972",
  "EMOJI": process.env.EMOJI || "🙄",
  "AUTO_TYPING": process.env.AUTO_TYPING === 'true'
};
