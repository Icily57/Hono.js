import { pgTable, serial, text, varchar, integer, primaryKey, pgEnum } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

//user table
export const UsersTable = pgTable("users", {
    id: serial("id").primaryKey(),
    fullname: text("full_name"),
    phone: varchar("phone", { length: 100 }),
    address: varchar("address", { length: 100 }),
    score: integer("score"),
})

//profile table

export const ProfilesTable = pgTable("profiles", {
    id: serial("id").primaryKey(),
    bio: varchar("bio", { length: 256 }),
    userId: integer("user_id").notNull().references(() => UsersTable.id, { onDelete: "cascade" }), //fk ref id in users table
});

//user profile relation
export const usersRelations = relations(UsersTable, ({ one }) => ({  //1st table : where the relation is defined  
    profile: one(ProfilesTable, {   // 2nd table
        fields: [UsersTable.id],  //pk id in users table
        references: [ProfilesTable.userId]  //fk ref id in profiles table
    })
}));

export const roleEnum = pgEnum("role", ["admin", "user"])

export const AuthOnUsersTable = pgTable("auth_on_users", {
    id: serial("id").primaryKey(),
    userId: integer("user_id").notNull().references(() => UsersTable.id, { onDelete: "cascade" }),
    password: varchar("password", { length: 100 }),
    username: varchar("username", { length: 100 }),
    role: roleEnum("role").default("user")
});

export const AuthOnUsersRelations = relations(AuthOnUsersTable, ({ one }) => ({
    user: one(UsersTable, {
        fields: [AuthOnUsersTable.userId],
        references: [UsersTable.id]
    })
}));


// types

export type TIUser = typeof UsersTable.$inferInsert;
export type TSUser = typeof UsersTable.$inferSelect;
export type TIProfile = typeof ProfilesTable.$inferInsert;
export type TSProfile = typeof ProfilesTable.$inferSelect;
export type TIAuthOnUser = typeof AuthOnUsersTable.$inferInsert;
export type TSAuthOnUser = typeof AuthOnUsersTable.$inferSelect;