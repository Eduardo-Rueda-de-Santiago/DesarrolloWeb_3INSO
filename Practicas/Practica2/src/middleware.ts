import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';
import UserService from "@/services/User";

/**
 * Urls a las que el usuario puede accedes sin token.
 */
const PUBLIC_URLS: Array<string> = ['/', '/login', '/register'];

export function middleware(request: NextRequest) {
//
//     console.log("Made a request");
//
//     if (!(request.nextUrl.pathname in PUBLIC_URLS)) {
//
//         console.log("To non public url")
//
//         const userToken = new UserService().getToken(request.cookies);
//
//         if (!userToken) {
//
//             console.log("Without token")
//
//             const newUrl = new URL('/login', request.url);
//             console.log(newUrl)
//             return NextResponse.redirect(newUrl);
//
//         }
//
//     }
//
}

export const config = {
    matcher: '/:path*',
}