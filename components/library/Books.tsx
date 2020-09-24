// import { searchBook } from './searchBook';
import React, { useEffect, useState } from 'react';
import fetch from 'node-fetch';

// 使うパラメータ
type Book = {
  author: string;
  title: string;
  description: string;
  thumbnail: string;
  infoLink: string;
}

// 受け取るパラメータ
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

// const booksData: Book[] = [
//   {
//     author: "mozart",
//     title: "第九"
//   },
//   {
//     author: "sagan",
//     title: "悲しみよこんにちは"
//   },
//   {
//     author: "hemingway",
//     title: "老人と海"
//   }
// ];
type BooksInfo = {
  author: string;
  title: string;
  isbnCode: string;
}
const booksInfo: BooksInfo[] = [
  {
    author: 'Nastume Souseki',
    title: "bochan",
    isbnCode: "9784003101032",
  },
  {
    author: 'j.d.salinger',
    title: "theCatcherInTheRye",
    isbnCode: "9784102057049"
  }
];

// const getBooksData = booksInfo.map(async (bookInfo: BooksInfo): Promise<Book[]> => {
const getBooksData = async (bookInfo: BooksInfo): Promise<Book[]> => {

  // JSON形式の本の情報一つを受け取る
  const response = await fetchBookInfo(bookInfo.isbnCode)

  const books = response.items.map((book: ResponseItem, key: number) => {
    const author = book.volumeInfo.authors[0];
    const title = book.volumeInfo.title;
    const description = book.volumeInfo.description;
    const thumbnail = book.volumeInfo.imageLinks.thumbnail;
    const infoLink = book.volumeInfo.infoLink;

    return {
      author: author,
      title: title,
      description: description,
      thumbnail: thumbnail,
      infoLink: infoLink
    };
  });

  return books;
};

// GetBooksDataから呼び出され、JSON形式の本の情報を一つ返す
// 引数ISBNコード
// GoogleBooksAPIからISBNコードに対応する情報を取得する
const fetchBookInfo = async (isbnCode: string): Promise<Response> => {

  const url = 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbnCode;

  const res = await fetch((url), { method: 'GET' });
  const json = res.json();

  console.dir(json, { depth: null });

  return json;
}

const Books = () => {

  const [books, setBooks] = useState<Book[]>([]);
  useEffect(() => {
    const data = getBooksData(booksInfo[0])
      .then((booksData) => {
        setBooks(booksData);
      })
  }, []);

  return (
    <ul>
      {books.map((book: Book, key: number) => {
        return (
          <li className="book">
            <div className="book-img">
              <img src={book.thumbnail} />
            </div>
            <p>著者: {book.author}</p>
            <p>タイトル: {book.title}</p>
            <p className="book-description">{book.description}</p>
            <a href={book.infoLink}>本の詳細はこちら</a>
          </li>
        )
      })}
    </ul>
  );
}

export default Books;