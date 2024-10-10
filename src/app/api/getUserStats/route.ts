// app/api/getUserStats/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // Extract query parameters from the URL
  const url = new URL(request.url);
  const user_id = url.searchParams.get('user_id') || '153';
  const temperature = url.searchParams.get('temperature') || '50';

  // Add the degree Celsius suffix
  const temperatureWithUnit = `${temperature} °C`;
  
  // Create the user statistics object
  const userStats = {
    user_id: user_id,
    temperature: temperatureWithUnit,
    blood_pressure: '220/100 mmHg',
    heart_rate: '90 bpm',
    sleep_duration: '2 hours',
    blood_sugar: '200 mg/dL'
    // Add other stats properties as needed
  };

  // Return the JSON response
  return NextResponse.json(userStats);
}
