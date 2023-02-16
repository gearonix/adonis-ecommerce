import {CorsConfig} from '@app/config/types';

export const corsConfig: CorsConfig = {
  origin: process.env.CLIENT_URL || "http://localhost:3000",
  methods: ["POST", "PUT", "DELETE", "GET"],
  credentials: true,
};
