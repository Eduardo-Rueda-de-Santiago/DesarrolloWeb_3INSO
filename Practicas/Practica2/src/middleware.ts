import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';
import UserService from "@/services/User";

/**
 * Urls a las que el usuario puede accedes sin token.
 */
const PUBLIC_URLS: Array<string> = ['/', '/login', '/register'];

function isPublicUrl(targetUrl: string): boolean {

    for (const publicUrl of PUBLIC_URLS) {
        if (publicUrl === targetUrl) {
            return true;
        }
    }

    return false;
}

export function middleware(request: NextRequest) {

    if (!isPublicUrl(request.nextUrl.pathname)) {
        const userToken = new UserService()).getServerToken();
        if (!userToken) {
            return NextResponse.redirect(new URL('/login', request.nextUrl.origin));
        }
    }
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:css|js|png|jpg|jpeg|svg|gif|ico|woff|woff2|ttf|eot|json)).*)',
    ],
};

//
// export const config = {
//     matcher: '/:path*',
// }