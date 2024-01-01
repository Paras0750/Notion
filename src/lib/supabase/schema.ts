import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";


export const workspaces = pgTable("workspaces", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  createAt: timestamp("create_at", {
    withTimezone: true,
    mode: "string",
  }),
  workspaceOwnerId: uuid("workspace_owner").notNull(),
  title: text("title").notNull(),
  iconId: text("icon_id").notNull(),
  data: text("data"),
  inTrash: text("in_trash"),
  logo: text("logo"),
  bannerURL: text("banner_url"),
});