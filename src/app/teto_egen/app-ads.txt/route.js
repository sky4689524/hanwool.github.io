import { NextResponse } from 'next/server'

// Add this line to mark the route as static
export const dynamic = 'force-static'

export async function GET() {
  const adsContent = `google.com, pub-8626590774496139, DIRECT, f08c47fec0942fa0`

  return new NextResponse(adsContent, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}