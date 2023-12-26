import { getCoaches } from "../../../server/api";

export const prerender = false;

export async function GET({ params }: { params: { id: string } }) {
  const id = params.id;

  const coaches = await getCoaches({ tag: null });

  const coach = coaches.find((coach) => coach.id === id);

  if (!coach) {
    return new Response(
      JSON.stringify({ message: `Coach with ${id} not found` }),
      { status: 404 }
    );
  }

  return new Response(JSON.stringify(coach));
}
