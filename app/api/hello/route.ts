import { NextResponse } from "next/server"
import { limiter } from "../config/limiter"


export async function GET() {
    const remaining = await limiter.removeTokens(1)
    console.log("Remaining", remaining)

    if (remaining < 0) {
        return new NextResponse("Too many requests", { status: 429 })
    }

    return NextResponse.json({ "message": "Hello, NextJS!!!" })
}