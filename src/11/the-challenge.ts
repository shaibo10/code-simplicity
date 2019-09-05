// Import stylesheets
// import './style.css'

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app')
const title = 'TypeScript Starter'

// if it it works too bad replace this line with - const booksPromise = results;
const booksPromise = fetch(
    'https://www.googleapis.com/books/v1/volumes?q=computers+terms'
).then<any[]>((res) => res.json())

async function getBook(
    booksPromise,
    isComputersBook,
    title,
    searchWord,
    country
) {
  try {
    const books = await booksPromise
    const rankedBooks = []
    for (let index = 0; index < books.items.length; index++) {
      let rank = 0
      let countryRank = 0
      const book = books.items[index]
      if (book.categories && book.categories.length > 0) {
        for (let i = 0; i < book.categories.length; i++) {
          if (
            typeof isComputersBook === 'boolean' &&
                        book.categories[i] === 'Computers'
          ) {
            rank = (rank || 0) + 1
          }
        }
      }

      if (title && book && book.volumeInfo && book.volumeInfo.title) {
        rank += book.volumeInfo.title.includes(title) ? 3 : 0
      }

      if (
        book.saleInfo &&
                book.saleInfo.country &&
                book.saleInfo.country !== country
      ) {
        rank += 1
      }

      const occurs = book.searchInfo.textSnippet.split(searchWord).length - 1

      rank += Math.ceil(occurs / 2)

      const saleCountry =
                (book.saleInfo && book.saleInfo.country && book.saleInfo.country) ||
                'N/A'
      if (country === saleCountry) {
        if (country === 'IL') {
          countryRank += 9
        } else if (country === 'JP') {
          const accessCountry = book.accessInfo.county
          countryRank +=
                        accessCountry === 'JP' || accessCountry === 'US' ? 3 : 1
        } else if (country === 'US') {
          const accessCountry = book.accessInfo.county
          countryRank +=
                        accessCountry === 'JP' || accessCountry === 'US' ? 3 : 1
        } else if (country === 'KZ') {
          countryRank += 3
        } else if (country === 'GL') {
          countryRank += 2
        } else if (country === 'GE') {
          countryRank += 9
        }
      }
      rankedBooks.push({book, rank, countryRank})
    }

    const maxRank = Math.max(...rankedBooks.map((b) => b.rank))
    const maxRankedBook = rankedBooks.find((book) => book.rank === maxRank)

    return maxRankedBook
  } catch (e) {
    return null
  }
}

function isValidBook(book) {
  const isAvailable =
        (book.saleInfo && book.saleInfo.isEbook) ||
        (book.saleInfo && !book.saleInfo.isEbook && book.countryRank != 0)
  return book.rank > 1 ? book.rank > 1 : isAvailable
}

function testGetBook() {
  const book = getBook(
      booksPromise,
      true,
      'Discovering Computers',
      'Teach',
      'IL'
  ).then((book) => {
    if (isValidBook(book)) {
      console.assert(book.book.volumeInfo.title === 'Discovering Computers: Essentials')
      console.assert(book.rank === 3)
      console.assert(book.countryRank === 9)
    } else {
      throw new Error('Ho no!!')
    }
  })
}

testGetBook()
