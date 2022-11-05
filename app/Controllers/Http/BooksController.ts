//import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Book from 'App/Models/Book'

export default class BooksController {

  public async index({ response, request }) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)
    const books = await Book
      .query()
      .orderBy('id')
      .paginate(page, limit)

    books.baseUrl('/books')

    return response.ok(books)
  }

  public async show({params, response}) {
    const { id } =  params
    const book: any = await Book.find(id)

    await book.load('user', (query: any) => {
      query.select('id', 'name', 'email')
    })

    if (!book) {
        return response.notFound({ message: 'Book not found' })
    }

    return response.ok(book)
  }

}
