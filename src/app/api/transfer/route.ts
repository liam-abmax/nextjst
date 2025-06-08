import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const body = await request.json();
    const { senderId, recipientId, amount } = body;

    // Basic validation
    if (!senderId || !recipientId || !amount || typeof amount !== 'number' || amount <= 0) {
        return NextResponse.json({ status: 'error', message: 'Invalid transfer details' }, { status: 400 });
    }

    // Simulated balance check
    if (amount > 5000) {
        return NextResponse.json({ status: 'error', message: 'Insufficient funds', code: 'INSUFFICIENT_FUNDS' });
    }

    console.log(`Transfer initiated: ${senderId} -> ${recipientId} for ${amount}`);

    return NextResponse.json({
        status: 'success',
        message: 'Transfer successful!',
        transactionId: `txn_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
        newSenderBalance: 1250.75 - amount,
        newRecipientBalance: 1000.00 + amount,
    });
}
