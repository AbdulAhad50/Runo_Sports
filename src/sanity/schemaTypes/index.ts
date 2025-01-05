import { type SchemaTypeDefinition } from 'sanity'
import blog from './blog' // Make sure './blog' is correctly imported

// Correctly typing the schema object
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blog, // blog should be a valid schema definition
  ],
}
