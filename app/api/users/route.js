export function GET(req) {
  // user data of a month
  const users = {
    month: "Jan",
    guest: [200, 350, 200, 300, 220, 425],
    user: [100, 410, 160, 440, 190, 260],
  };

  return new Response(JSON.stringify(users));
}
