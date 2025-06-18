import {
  OrganizationUserSettingsTable,
  UserNotificationSettingsTable,
  UserResumeTable,
} from "@/drizzle/schema";
import { createdAt, updatedAt } from "@/drizzle/schemaHelper";
import { relations } from "drizzle-orm";
import { pgTable, varchar } from "drizzle-orm/pg-core";

export const UserTable = pgTable("users", {
  id: varchar().primaryKey(),
  name: varchar().notNull(),
  imageUrl: varchar().notNull(),
  email: varchar().notNull().unique(),
  createdAt,
  updatedAt,
});
export const userRelations = relations(UserTable, ({ one, many }) => ({
  notificationSettings: one(UserNotificationSettingsTable),
  resume: one(UserResumeTable),
  organizationUserSettings: many(OrganizationUserSettingsTable),
}));
