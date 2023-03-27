// sanity.config.js
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk';
import schemas from './schemas/schema';

export default defineConfig({
  title: "Phifer Web Solutions CMS",
  projectId: "84qa0kd3",
  dataset: "production",
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemas,
  },
});