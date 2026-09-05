export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/") url.pathname = "/uk-trip-handbook.html";
    return env.ASSETS.fetch(new Request(url, request));
  }
};
