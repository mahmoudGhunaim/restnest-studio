# Contact Form Schema

This document outlines the contact form schema structure implemented in this Sanity Studio project.

## Schema Fields

The contact form schema includes the following fields:

- **name**: Full name of the person submitting the form (required)
- **email**: Email address for contact (required, must be valid email format)
- **subject**: Subject line of the inquiry (required)
- **message**: Detailed message content (required)
- **submittedAt**: Timestamp when the form was submitted (auto-generated, read-only)

## Using the Contact Form

This schema is designed to store contact form submissions in your Sanity Content Lake. To implement this in your application:

1. Create a form in your frontend that collects the required fields (name, email, subject, message)
2. Submit the form data to your backend
3. Use the Sanity client to create a new document with the contact form schema
4. Set the `submittedAt` field to the current timestamp

### Example Implementation

```javascript
// Example code for creating a new contact form submission
import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '28svm20v',
  dataset: 'production',
  apiVersion: '2023-05-03',
  token: 'YOUR_WRITE_TOKEN', // Use environment variables
  useCdn: false,
})

async function submitContactForm(formData) {
  try {
    const result = await client.create({
      _type: 'contactForm',
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      submittedAt: new Date().toISOString(),
    })
    
    return result
  } catch (error) {
    console.error('Error submitting form:', error)
    throw error
  }
}
```

## Viewing Submissions

All form submissions can be viewed and managed in your Sanity Studio under the "Contact Form" document type. 