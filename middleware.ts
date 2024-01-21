import { NextResponse } from "next/server"


const allowedOrigins = process.env.NODE_ENV === 'production' ? ['https://www.site-name.com', 'https://site-name.com'] : ['http://localhost:3000', 'https://google.com']


export function middleware(request: Request) {
    console.log("Middleware!!!")
    console.log(request.method)
    console.log(request.url)

    const origin = request.headers.get("origin")
    console.log(origin)

    return NextResponse.next()
}


export const config = {
    matcher: "/api/:path*"
}