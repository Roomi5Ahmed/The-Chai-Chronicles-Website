# The Chai Chronicles

A responsive, storytelling-focused frontend website for a nostalgic Indian tea brand, built with Next.js.

## Features

*   **Homepage:** Engaging hero section, Chai Moments carousel, and Indian Railway Chai timeline.
*   **Our Story:** Learn about the brand's origin and the cultural significance of chai.
*   **Shop:** Browse and purchase a variety of tea products.
*   **Blog:** Read articles about chai, Indian railways, and related topics.
*   **Contact:** Get in touch through a contact form.
*   **Authentication:** User sign-up and sign-in using NextAuth.js with Credentials provider and Prisma Adapter.
*   **Cart Functionality:** Add and manage items in a shopping cart.
*   **Wishlist Functionality:** Save favorite products to a wishlist.
*   **Database:** Uses MySQL with Prisma ORM.

## Technologies Used

*   Next.js
*   React
*   TypeScript
*   Tailwind CSS (based on the `globals.css` file structure)
*   NextAuth.js
*   Prisma (with MySQL)
*   bcryptjs (for password hashing)
*   react-slick (for carousel)
*   Leaflet (for maps, though map implementation might be a placeholder currently)

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

*   Node.js installed
*   npm or yarn or pnpm installed
*   MySQL database server running

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository_url>
    cd tcc-void
    ```

2.  Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  Set up your environment variables:

    Create a `.env` file in the `tcc-void` directory with the following variables:

    ```dotenv
    DATABASE_URL="mysql://YOUR_DB_USER:YOUR_DB_PASSWORD@YOUR_DB_HOST:YOUR_DB_PORT/YOUR_DB_NAME"
    NEXTAUTH_SECRET="YOUR_NEXTAUTH_SECRET"
    ```

    *   Replace `YOUR_DB_USER`, `YOUR_DB_PASSWORD`, `YOUR_DB_HOST`, `YOUR_DB_PORT`, and `YOUR_DB_NAME` with your MySQL database credentials.
    *   Replace `YOUR_NEXTAUTH_SECRET` with a strong, random string (you can generate one using `node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"`).

4.  Apply Prisma database migrations:

    ```bash
    npx prisma migrate dev
    ```

5.  Generate Prisma client:
    ```bash
    npx prisma generate
    ```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Deployment on Vercel

The easiest way to deploy this Next.js application is to use the [Vercel Platform](https://vercel.com/new). Ensure your project is pushed to a Git repository and import it into your Vercel dashboard. Remember to configure your `DATABASE_URL` and `NEXTAUTH_SECRET` environment variables in Vercel's project settings.
