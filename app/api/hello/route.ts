import { NextResponse } from "next/server"
import { limiter } from "../config/limiter"
import { headers } from "next/headers"


export async function GET() {
    const remaining = await limiter.removeTokens(1)
    console.log("Remaining", remaining)

    if (remaining < 0) {
        return new NextResponse(
            "Too many requests",
            {
                status: 429,
                statusText: 'Too many requests', 
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            }
        )
    }

    return NextResponse.json({ "message": "Hello, NextJS!!!" })
}