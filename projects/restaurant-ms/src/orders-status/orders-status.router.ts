import { Hono } from "hono";
import { getProfiles } from "./orders-status.controller";

export const profileRouter = new Hono();

profileRouter.get("/profiles", getProfiles);