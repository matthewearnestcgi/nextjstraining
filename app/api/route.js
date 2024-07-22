import { NextResponse } from 'next/server';

export async function POST(request) {
    console.log('API Route Hit');
    try {
        const data = await request.json();
        console.log('Data received:', data);
        // Simulate processing the request and returning a response
        return NextResponse.json({ message: 'Sent' });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ message: 'Failed' }, { status: 500 });
    }
}
