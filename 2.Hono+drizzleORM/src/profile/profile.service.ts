import db from '../drizzle/db';
import { TIProfile, TSProfile } from '../drizzle/schema';
import { ProfilesTable } from '../drizzle/schema';

export const profilesService = async (): Promise<TSProfile[] | null> => {
    return await db.select().from(ProfilesTable);
}

