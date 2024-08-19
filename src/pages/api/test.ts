import type { APIRoute } from "astro";

// Force to be dynamic
export const prerender = false;

export const GET: APIRoute = ({ params, request }) => {
    const current = new Date();
    return new Response(JSON.stringify({
        message: "Hello from the API! at " + current.toISOString(),
    }), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    })
}