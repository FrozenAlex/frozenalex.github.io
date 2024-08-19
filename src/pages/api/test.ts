import type { APIRoute } from "astro";

export const GET: APIRoute = ({params, request }) => {
    const current = new Date();
    return new Response(JSON.stringify({
        message: "Hello from the API! at " + current.toISOString(),
    }))
}