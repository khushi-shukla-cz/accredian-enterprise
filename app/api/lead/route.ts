import { NextRequest, NextResponse } from 'next/server'

interface LeadData {
  name: string
  email: string
  company: string
  phone?: string
  message?: string
}

// Mock database (in production, this would connect to a real database)
const leads: LeadData[] = []

export async function POST(request: NextRequest) {
  try {
    const body: LeadData = await request.json()

    // Validation
    if (!body.name || !body.email || !body.company) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and company are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Name validation (at least 2 characters)
    if (body.name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Name must be at least 2 characters long' },
        { status: 400 }
      )
    }

    // Company validation (at least 2 characters)
    if (body.company.trim().length < 2) {
      return NextResponse.json(
        { error: 'Company name must be at least 2 characters long' },
        { status: 400 }
      )
    }

    // Store the lead (mock storage)
    const leadData: LeadData = {
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      company: body.company.trim(),
      phone: body.phone?.trim() || undefined,
      message: body.message?.trim() || undefined,
    }

    leads.push(leadData)

    // Log for debugging (in production, this would go to a logging service)
    console.log('New lead captured:', leadData)
    console.log('Total leads:', leads.length)

    // Success response
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Your information has been submitted successfully. Our team will contact you shortly.',
        data: {
          id: leads.length,
          timestamp: new Date().toISOString(),
        },
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error processing lead submission:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}

// Optional: GET endpoint to retrieve leads (for admin purposes)
export async function GET() {
  return NextResponse.json(
    {
      total: leads.length,
      message: 'Lead capture API is operational',
    },
    { status: 200 }
  )
}
