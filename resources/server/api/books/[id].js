export default defineEventHandler(async (event) => {

  const config = useRuntimeConfig()

  if (event.req.method === 'GET') {
  const getBook = await fetch(`${config.public.apiBase}books/${event.context.params.id}`)
  const book = await getBook.json()
  }

  if (event.req.method === 'PUT') {
    //update a blog by id
    // return the blog;
  }
  if (event.req.method === 'DELETE') {
    // delete a blog by id
    // return success;
  }

  return {book}
});
