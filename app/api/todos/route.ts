import { NextResponse } from "next/server"

const DATA_SOURCE_URL = 'https://jsonplaceholder.typicode.com/todos'

const API_Key: string = process.env.DATA_API_KEY as string


export async function GET(request: Request) {
    const origin = request.headers.get('origin')

    const res = await fetch(DATA_SOURCE_URL)

    const todos: Todo[] = await res.json()

    return new NextResponse(JSON.stringify(todos), {
        headers: {
            'Access-Control-Allow-Origin': origin || '*',
            'Content-Type': 'application/json'
        }
    })
}


export async function DELETE(request: Request) {
    const { id }: Partial<Todo> = await request.json()

    if (!id) return NextResponse.json({ "message": "Id is required" })

    await fetch(`${DATA_SOURCE_URL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': API_Key
        }
    })

    return NextResponse.json({ 'message': `Todo with ${id} deleted` })
}


export async function POST(request: Request) {
    const { userId, title }: Partial<Todo> = await request.json()

    if (!userId || !title) return NextResponse.json({ "message": "Missing required data" })

    const res = await fetch(DATA_SOURCE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': API_Key
        },
        body: JSON.stringify({ userId, title, completed: false })
    })

    const newTodo: Todo = await res.json()

    return NextResponse.json(newTodo)
}


export async function PUT(request: Request) {
    const { userId, id, title, completed }: Todo = await request.json()

    if (!userId || !title || !id || typeof (completed) !== 'boolean') {
        return NextResponse.json({ "message": "Missing required data" })
    }

    const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': API_Key
        },
        body: JSON.stringify({ userId, title, completed, id })
    })

    const updatedTodo: Todo = await res.json()

    return NextResponse.json(updatedTodo)
}