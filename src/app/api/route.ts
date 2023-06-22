export async function POST(req: Request) {
  const { ip } = (await req.json()) as { ip: string };

  if (!ip) {
    return new Response(JSON.stringify({ error: "Missing IP" }), {
      headers: { "content-type": "application/json" },
      status: 400,
    });
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/${ip}?format=json`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "6c4d2bd3b6msh0c75b6cb911863ep11fa5ejsnb6effbf8c3a1",
          "X-RapidAPI-Host": "ip-geo-location.p.rapidapi.com",
        },
      }
    );
    const data = await response.json(); 
    const ipInfo = { 
        ip: data.ip,
        location: {
            latitud: data.location.latitude,
            longitud: data.location.longitude,
        },
        timezone: data.time.timezone,
        city: data.area.name,
        isp: data.asn.organisation,
    }
    


    return new Response(JSON.stringify(ipInfo), {
      headers: { "content-type": "application/json" },
      status: 200,
    });


  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      headers: { "content-type": "application/json" },
      status: 500,
    });
  }
}
