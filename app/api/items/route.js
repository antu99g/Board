export function GET(req) {
  const items = [
    {
      id: 1,
      label: "Basic Tees",
      qty: 110,
    },
    {
      id: 2,
      label: "Custom Short Pants",
      qty: 62,
    },
    {
      id: 3,
      label: "Super Hoodies",
      qty: 28,
    },
  ];

  return new Response(JSON.stringify(items));
}
