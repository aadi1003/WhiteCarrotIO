
import { google } from 'googleapis';
import dotenv from "dotenv";

dotenv.config();






const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = 'http://localhost:5000/auth/callback';

const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

export const getGoogleAuthURL = () => {
  return oauth2Client.generateAuthUrl({
    access_type: 'online',
    scope: ['https://www.googleapis.com/auth/calendar.readonly', 'https://www.googleapis.com/auth/userinfo.profile'],
  });
};

export const getGoogleUser = async (code) => {
  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);
  const oauth2 = google.oauth2({ version: 'v2', auth: oauth2Client });
  const { data: user } = await oauth2.userinfo.get();
  return { tokens, user };
};

export const getUserEvents = async (tokens) => {
  oauth2Client.setCredentials(tokens);
  const calendar = google.calendar({ version: 'v3', auth: oauth2Client });
  const { data } = await calendar.events.list({
    calendarId: 'primary',
    orderBy: 'startTime',
    singleEvents: true,
  });
  return data.items;
};