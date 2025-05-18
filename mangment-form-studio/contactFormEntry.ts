import {createClient} from '@sanity/client'

// Sanity client configuration
const client = createClient({
  projectId: '28svm20v',
  dataset: 'production',
  useCdn: false, // `false` to ensure fresh data
  token: 'skgAr8FDJQCbywmgkmW5SVvqsll4VKug53na8Iu2LRSUQnB6vZMN15seGcpC4LDpefxh04D5OID11X05Za3D8BeNswggM6cHc08NRH2DYXAftyYEOgcxsDh7Az2fPtoIGODDrMIVfrIe9DsypXWBCDEmtNHBvE1UZlahOiN6IvoBgakmTauZ', // Write token
  apiVersion: '2023-05-03', // Current API version
})

// Define the contact form document interface
interface ContactFormDocument {
  _type: string
  name: string
  email: string
  subject: string
  message: string
  submittedAt: string
}

/**
 * Add a new contact form submission to Sanity
 * @param name Full name of the person
 * @param email Email address
 * @param subject Subject line of the message
 * @param message Detailed message content
 * @returns The created contact form document
 */
async function addContactForm(
  name: string,
  email: string,
  subject: string,
  message: string,
) {
  try {
    const doc: ContactFormDocument = {
      _type: 'contactMForm', // Matches the 'name' in your contactMForm.ts schema
      name,
      email,
      subject,
      message,
      submittedAt: new Date().toISOString(),
    }

    const result = await client.create(doc)
    console.log('Contact form submitted:', result)
    return result
  } catch (error) {
    console.error('Error submitting contact form:', error)
    throw error
  }
}

export { addContactForm } 