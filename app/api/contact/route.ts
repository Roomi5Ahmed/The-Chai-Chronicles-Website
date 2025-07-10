import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, message } = data;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ message: 'Missing required fields' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    const newMessage = await prisma.contactMessage.create({
      data: {
        name,
        email,
        message,
      },
    });

    console.log('Contact form submission saved to database:', newMessage);

    return new Response(JSON.stringify({ message: 'Message received and saved!' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error: unknown) {
    console.error('Error saving contact message:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ message: 'Failed to send message', error: errorMessage }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}