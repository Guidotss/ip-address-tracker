export async function POST(req:Request) {
    const { ip } = await req.json() as { ip: string }

    if(!ip) {
        return new Response(JSON.stringify({error: 'Missing IP'}), {
            headers: { 'content-type': 'application/json' },
            status: 400
        });
    }

    try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}?apiKey=${process.env.API_KEY}&ipAddress=${ip}`);
        const data = await response.json();
        return new Response(JSON.stringify(data), {
            headers: { 'content-type': 'application/json' },
            status: 200
        });

    }catch(error){
        return new Response(JSON.stringify({error: 'Internal Server Error'}), {
            headers: { 'content-type': 'application/json' },
            status: 500
        });
    }
}