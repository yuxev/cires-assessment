# Photo Gallery App

A modern photo gallery application built with Next.js that allows users to browse and like photos from Unsplash.

## Features

- 🔐 **User Authentication** - Login system with mock users
- 🖼️ **Photo Gallery** - Browse photos from Unsplash API
- ♾️ **Infinite Scroll** - Automatically load more photos as you scroll
- ❤️ **Like System** - Like/unlike photos with persistent storage
- 📱 **Responsive Design** - Works on desktop and mobile
- 🔒 **Protected Routes** - Only authenticated users can access the gallery

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** LevelDB (for likes storage)
- **API:** Unsplash API
- **Authentication:** Session-based with cookies

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Unsplash API Access Key

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd cires-assessment
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory:

```env
UNSPLASH_ACCESS_KEY=your_unsplash_access_key_here
```

To get an Unsplash API key:
1. Go to [Unsplash Developers](https://unsplash.com/developers)
2. Create a new application
3. Copy your Access Key

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Test Accounts

Use these credentials to login:

| Username | Password | Status |
|----------|----------|--------|
| muser1 | mpassword1 | ✅ Active |
| muser2 | mpassword2 | ✅ Active |
| muser3 | mpassword3 | 🚫 Blocked |

## Project Structure

```
├── app/
│   ├── actions/          # Server actions
│   │   ├── auth.ts       # Login/logout actions
│   │   ├── gallery.ts    # Photo fetching
│   │   └── likes.ts      # Like toggle action
│   ├── gallery/          # Gallery page
│   ├── login/            # Login page
│   └── layout.tsx        # Root layout
├── components/
│   ├── LikeButton.tsx    # Like button component
│   ├── LoginForm.tsx     # Login form
│   ├── LogoutButton.tsx  # Logout button
│   └── PhotoGrid.tsx     # Photo grid with infinite scroll
├── lib/
│   ├── db.ts             # LevelDB operations
│   └── session.ts        # Session management
├── middleware.ts         # Route protection
└── likes_db/             # LevelDB storage (auto-created)
```

## How It Works

### Authentication
- Mock user database with username/password validation
- Session stored in HTTP-only cookies
- Middleware protects `/gallery` routes

### Photo Likes System
1. Photos are fetched from Unsplash API
2. Like data is stored in LevelDB:
   - Key: `photoId`
   - Value: Array of usernames who liked
3. Each photo shows:
   - Total like count from database
   - Red heart if current user liked it
   - Gray heart if not liked

### Infinite Scroll
- Initial 12 photos loaded on page load (server-side)
- Intersection Observer detects when user scrolls to bottom
- Automatically fetches next page from Unsplash
- New photos appended to existing grid

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Run production build
```

## Notes

- LevelDB stores data locally in the `likes_db` folder
- Delete `likes_db` to reset all likes
- Not suitable for Vercel deployment (LevelDB needs persistent filesystem)
- For production, migrate to Vercel KV, PostgreSQL, or MongoDB

## License

MIT
