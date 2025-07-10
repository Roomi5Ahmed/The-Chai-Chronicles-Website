// c:\WebDev\Claude-Code\tcc-void\app\api\register\route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();

    // Check if user with email already exists
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return NextResponse.json({ message: 'User with this email already exists' }, { status: 409 });
    }

    // Hash the password
    const hashedPassword = await hash(password, 10); // 10 is the salt rounds

    // Create the new user in the database
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    // Exclude password from the response for security
    const userWithoutPassword = { id: newUser.id, name: newUser.name, email: newUser.email };

    return NextResponse.json({ message: 'User registered successfully', user: userWithoutPassword }, { status: 201 });

  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ message: 'Something went wrong during registration' }, { status: 500 });
  }
}