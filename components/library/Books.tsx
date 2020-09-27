import React, { useEffect, useState } from 'react';
import fetch from 'node-fetch';
import BookCards from './BookCard';
import { booksInfo, BookInfo } from './data';

// 使用するパラメータ
type Book = {
  author: string;
  title: string;
  description: string;
  thumbnail: string;
  infoLink: string;
}

// APIからGETするパラメータ
type ResponseItem = {
  volumeInfo: {
    title: string;
    authors: string[];
    description: string;
    imageLinks: {
      thumbnail: string;
    };
    infoLink: string;
  }
}
type Response = {
  items: ResponseItem[]
}

// GetBooksDataから呼び出され、Response型で本の情報を一つ返す
// 引数ISBNコード
// GoogleBooksAPIからISBNコードに対応する情報を取得する
const fetchBookData = async (bookInfo: BookInfo): Promise<Response> => {

  console.log(`fetching ${bookInfo.title}`);

  const url = 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + bookInfo.isbnCode;
  const res = await fetch(url, { method: 'GET' })
  const json: Response = await res.json();
  return json;
}

// APIから受け取った書籍データを1つを表示用データに形成する
const getBookData = (fetchedBookData: Response): Book => {
  let image = ""

  const bookData = fetchedBookData.items.map((item) => {

    if (!item.volumeInfo.imageLinks) {
      // 画像なし
      image = "#"
    }
    return item.volumeInfo;
  })
  // 画像なし時の処理（応急処置）
  if (image) {
    return {
      author: bookData[0].authors[0],
      title: bookData[0].title,
      description: bookData[0].description,
      thumbnail: image,
      infoLink: bookData[0].infoLink
    }
  } else {
    return {
      author: bookData[0].authors[0],
      title: bookData[0].title,
      description: bookData[0].description,
      thumbnail: bookData[0].imageLinks.thumbnail,
      infoLink: bookData[0].infoLink
    }
  }
}

const Books = () => {

  const [books, setBooks] = useState<Book[]>([]);

  const result = Promise.all(booksInfo.map(async (bookInfo) => {
    const json = await fetchBookData(bookInfo);
    const shapedData = getBookData(json);
    return shapedData;
  }));

  useEffect(() => {
    result
      .then((books) => {
        setBooks(books);
      })
      .catch((e) => {
        console.error("Eroor" + e)
      });
  }, [setBooks]);

  return (
    <ul>
      {books.length ? (
        <>
          {books.map((book, key) => {
            return (
              <BookCards
                key={key}
                author={book.author}
                description={book.description}
                infoLink={book.infoLink}
                thumbnail={book.thumbnail}
                title={book.title}
              />
            );
          })}
        </>
      ) : (
          <h1>Loading...</h1>
        )
      }
    </ul>
  );
}
export default Books;