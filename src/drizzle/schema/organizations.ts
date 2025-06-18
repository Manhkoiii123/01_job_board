import {
  JobListingTable,
  OrganizationUserSettingsTable,
} from "@/drizzle/schema";
import { createdAt, updatedAt } from "@/drizzle/schemaHelper";
import { relations } from "drizzle-orm";
import { pgTable, varchar } from "drizzle-orm/pg-core";

export const OrganizationTable = pgTable("organizations", {
  id: varchar().primaryKey(),
  name: varchar().notNull(),
  imageUrl: varchar(),
  createdAt,
  updatedAt,
});
export const organizationRelations = relations(
  OrganizationTable,
  ({ many }) => ({
    jobListings: many(JobListingTable),
    organizationUserSettings: many(OrganizationUserSettingsTable),
  })
);
