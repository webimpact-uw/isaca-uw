'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.jsx` route
 */

import {visionTool} from '@sanity/vision';
import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './src/sanity/env';
import {schema} from './src/sanity/schema.js';
import {schemaTypes} from './src/sanity/schemaTypes.js';
import {structure} from './src/sanity/structure';

console.log(dataset);
console.log(projectId);

// console.log(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
// console.log(process.env.NEXT_PUBLIC_SANITY_DATASET);

export default defineConfig({
  basePath: '/studio',
  projectId: "kwr3521t",
  dataset: "production",
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
