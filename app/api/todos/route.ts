const DATA_SOURCE_URL = 'https://jsonplaceholder.typicode.com/todos'


export async function GET()
{
    const res = await fetch(DATA_SOURCE_URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })

    const result = res.json()

    console.log(result)
}