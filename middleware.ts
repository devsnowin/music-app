import {NextResponse} from 'next/server'

// middleware to product the routes
export function middleware(req) {
    const token = req.cookies.has('MUSIC_ACCESS_TOKEN')

    if (!token) return NextResponse.redirect(new URL('/signin', req.url))
}

// paths to protect
export const config = {
    matcher: ['/', '/playlist', '/likedSongs'],
}
