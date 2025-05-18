// Example: postNewsletterEntry.ts

import {createClient} from '@sanity/client'

// You can find these in your sanity.json or manage.sanity.io
const client = createClient({
  projectId: '28svm20v', // Your project ID (from sanity.cli.ts)
  dataset: 'production',   // Your dataset (from sanity.cli.ts)
  useCdn: false, // `false` if you want to ensure fresh data
  token: 'skgAr8FDJQCbywmgkmW5SVvqsll4VKug53na8Iu2LRSUQnB6vZMN15seGcpC4LDpefxh04D5OID11X05Za3D8BeNswggM6cHc08NRH2DYXAftyYEOgcxsDh7Az2fPtoIGODDrMIVfrIe9DsypXWBCDEmtNHBvE1UZlahOiN6IvoBgakmTauZ', // A write token for your project. REPLACE THIS!
  apiVersion: '2023-05-03', // Use a current API version
})

async function addNewsletterSubscriber(email: string, source?: string) {
  try {
    const doc = {
      _type: 'newsletter', // Matches the 'name' in your newsletter.ts schema
      email: email,
      source: source,
      // 'createdAt' will be set automatically by the schema's initialValue
    };

    const result = await client.create(doc);
    console.log('Subscriber added:', result);
    return result;
  } catch (error) {
    console.error('Error adding subscriber:', error);
    throw error;
  }
}

// Example usage (you can call this from elsewhere or modify for your needs):
// addNewsletterSubscriber('test@example.com', 'website-signup')
//   .then(() => console.log('Done'))
//   .catch(() => console.error('Failed'));

// To make this script runnable, you might want to parse command line arguments
// or use it as a module in another part of your application.
// For a simple test, you can uncomment the example usage above and run:
// ts-node postNewsletterEntry.ts (if you have ts-node installed)
// or compile it to JavaScript first:
// tsc postNewsletterEntry.ts
// node postNewsletterEntry.js

export { addNewsletterSubscriber }; // Exporting the function if you want to use it as a module 