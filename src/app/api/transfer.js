// pages/api/transfer.js

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { senderId, recipientId, amount } = req.body;

    // Basic validation
    if (!senderId || !recipientId || !amount || typeof amount !== 'number' || amount <= 0) {
      return res.status(400).json({ status: 'error', message: 'Invalid transfer details' });
    }

    // Simulate database interaction (replace with real database logic)
    // For demonstration, let's assume sender has enough balance
    if (amount > 5000) { // Simulate insufficient funds for amounts over 5000
        return res.status(200).json({ status: 'error', message: 'Insufficient funds (mock)', code: 'INSUFFICIENT_FUNDS' });
    }


    console.log(`Transfer initiated: ${senderId} -> ${recipientId} for ${amount}`);

    // Simulate a successful transfer after a short delay
    setTimeout(() => {
      res.status(200).json({
        status: 'success',
        message: 'Transfer successful!',
        transactionId: `txn_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
        newSenderBalance: 1250.75 - amount, // Mock update
        newRecipientBalance: 1000.00 + amount, // Mock update
      });
    }, 1500); // Simulate network latency
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
