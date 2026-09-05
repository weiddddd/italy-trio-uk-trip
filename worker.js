const SOURCE = "https://raw.githubusercontent.com/weiddddd/italy-trio-uk-trip/main/uk-trip-handbook.html";

export default {
  async fetch() {
    const upstream = await fetch(SOURCE);
    return new Response(upstream.body, {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "public, max-age=300"
      }
    });
  }
};
