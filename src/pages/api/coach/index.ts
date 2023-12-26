import { getCoaches } from "../../../server/api";

export const prerender = false;

export async function GET() {
  const coaches = await getCoaches({ tag: null });

  return new Response(JSON.stringify(coaches));
}
