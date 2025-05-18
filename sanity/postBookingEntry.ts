import {createClient} from '@sanity/client'

// Sanity client configuration
const client = createClient({
  projectId: '28svm20v',
  dataset: 'production',
  useCdn: false, // `false` to ensure fresh data
  token: 'skgAr8FDJQCbywmgkmW5SVvqsll4VKug53na8Iu2LRSUQnB6vZMN15seGcpC4LDpefxh04D5OID11X05Za3D8BeNswggM6cHc08NRH2DYXAftyYEOgcxsDh7Az2fPtoIGODDrMIVfrIe9DsypXWBCDEmtNHBvE1UZlahOiN6IvoBgakmTauZ', // Write token
  apiVersion: '2023-05-03', // Current API version
})

// Define the booking document interface
interface BookingDocument {
  _type: string
  name: string
  email: string
  checkIn: string
  checkOut: string
  guests: number
  property: {
    _type: string
    _ref: string
  }
  contactNumber?: string
}

/**
 * Add a new booking to Sanity
 * @param name Customer name
 * @param email Customer email
 * @param checkIn Check-in date and time (ISO string or Date object)
 * @param checkOut Check-out date and time (ISO string or Date object)
 * @param guests Number of guests
 * @param propertyId Sanity document ID of the referenced property
 * @param contactNumber Optional contact number
 * @returns The created booking document
 */
async function addBooking(
  name: string,
  email: string,
  checkIn: string | Date,
  checkOut: string | Date,
  guests: number,
  propertyId: string,
  contactNumber?: string,
) {
  try {
    const doc: BookingDocument = {
      _type: 'booking', // Matches the 'name' in your booking.ts schema
      name,
      email,
      checkIn: typeof checkIn === 'string' ? new Date(checkIn).toISOString() : checkIn.toISOString(),
      checkOut: typeof checkOut === 'string' ? new Date(checkOut).toISOString() : checkOut.toISOString(),
      guests,
      property: {
        _type: 'reference',
        _ref: propertyId,
      },
    }

    // Add optional fields if provided
    if (contactNumber) {
      doc.contactNumber = contactNumber
    }

    const result = await client.create(doc)
    console.log('Booking added:', result)
    return result
  } catch (error) {
    console.error('Error adding booking:', error)
    throw error
  }
}



export { addBooking } 