import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const body = await request.json();
    const { userId, amount, source } = body;

    // Basic validation
    if (!userId || !amount || typeof amount !== 'number' || amount <= 0) {
        return NextResponse.json({ status: 'error', message: 'Invalid receive details' }, { status: 400 });
    }

    console.log(`Cash received for user ${userId}: ${amount} from ${source}`);

    // Simulate updating user's balance
    const currentBalance = 1250.75; // Mock balance
    const newBalance = currentBalance + amount;

    return NextResponse.json({
        status: 'success',
        message: 'Cash received successfully!',
        newBalance: newBalance,
    });
}
