import { Context } from "hono";
import { profilesService } from "./profile.service"


export const getProfiles = async (c: Context) => {
    try {
        const profiles = await profilesService();
        if (profiles == null || profiles.length == 0) {
            return c.text("Profiles not found", 404)
        }        
        return c.json(profiles, 200)

    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }

}

