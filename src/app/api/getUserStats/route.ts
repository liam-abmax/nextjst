// app/api/getUserStats/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // Extract query parameters from the URL
  const url = new URL(request.url);
  const user_id = url.searchParams.get('user_id') || '153';
  const temperature = url.searchParams.get('temperature') || '50';

  // Create the user statistics object
  const userStats = {
    user_id: user_id,
    temperature: temperature,
    blood_pressure: '120/80 mmHg',
    heart_rate: '70 bpm',
    sleep_duration: '7 hours',
    blood_sugar: '100 mg/dL'
    // Add other stats properties as needed
  };

  // Return the JSON response
  return NextResponse.json(userStats);
}
