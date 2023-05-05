import { serve } from "https://deno.land/std/http/server.ts";

const handler = async (_req: Request): Promise<Response> => {
  const res = await fetch("https://api.github.com/users/denoland", {
    headers: {
      accept: "application/josn",
    },
  });

  return new Response(res.body, {
    status: res.status,
    headers: {
      "content-type": "application/json",
    },
  });
};

serve(handler);
