import { Hono } from "hono";
import { getProfiles } from "./profile.controller";

export const profileRouter = new Hono();

profileRouter.get("/profiles", getProfiles);