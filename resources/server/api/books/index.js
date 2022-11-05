export default defineEventHandler(async (event) => {

  const config = useRuntimeConfig()

  if (event.req.method === 'GET') {
    const list = await fetch(`${config.public.apiBase}books`);
    const bookList = await list.json()
    return { bookList };
  }

  if (event.req.method === 'POST') {
    // create a blog
    // return the blog;
  }

})
