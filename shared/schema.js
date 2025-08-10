import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, boolean, integer, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  role: text("role").notNull().default("user"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const categories = pgTable("categories", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull().unique(),
  description: text("description"),
  slug: text("slug").notNull().unique(),
});

export const products = pgTable("products", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  shortDescription: text("short_description").notNull(),
  longDescription: text("long_description").notNull(),
  categoryId: varchar("category_id").references(() => categories.id).notNull(),
  tags: text("tags").array().default([]),
  techStack: text("tech_stack").array().default([]),
  images: text("images").array().default([]),
  demoUrl: text("demo_url"),
  repoUrl: text("repo_url"),
  downloadUrl: text("download_url"),
  status: text("status").notNull().default("draft"),
  featured: boolean("featured").default(false),
  rating: integer("rating").default(0),
  downloads: integer("downloads").default(0),
  users: integer("users").default(0),
  publishDate: timestamp("publish_date"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  email: true,
  password: true,
  role: true,
});

export const insertCategorySchema = createInsertSchema(categories).pick({
  name: true,
  description: true,
  slug: true,
});

export const insertProductSchema = createInsertSchema(products).pick({
  title: true,
  slug: true,
  shortDescription: true,
  longDescription: true,
  categoryId: true,
  tags: true,
  techStack: true,
  images: true,
  demoUrl: true,
  repoUrl: true,
  downloadUrl: true,
  status: true,
  featured: true,
  rating: true,
  downloads: true,
  users: true,
  publishDate: true,
});

