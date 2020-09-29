import React, { useEffect, useState } from 'react';
import fetch from 'node-fetch';
import BookCards from './BookCard';
import ErrorMessage from '../common/ErrorMessage';
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

  const url = 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + bookInfo.isbnCode;
  const res = await fetch(url, { method: 'GET' })
  const json: Response = await res.json();

  return json;
}

// APIから受け取った書籍データを1つを表示用データに形成する
const getBookData = (fetchedBookData: Response): Book => {

  const bookData = fetchedBookData.items.map((item: ResponseItem) => {

    // 取得したデータが画像なしの場合not found時の画像のリンクを追加
    if (!item.volumeInfo.imageLinks) {
      item.volumeInfo.imageLinks = {
        thumbnail: "/images/no_image_tate.jpg"
      }
    }
    return item.volumeInfo;
  });
  return {
    author: bookData[0].authors[0],
    title: bookData[0].title,
    description: bookData[0].description,
    thumbnail: bookData[0].imageLinks.thumbnail,
    infoLink: bookData[0].infoLink
  }
}

const Books = () => {

  const [books, setBooks] = useState<Book[]>([]);

  // ErrorMessageコンポーネントの表示を制限
  const [isError, setIsError] = useState(false);

  // ページ遷移時のレンダーとは別に[さらに読み込み]ボタンを作って押下ごとに+5でbooks配列に追加したい・・・
  useEffect(() => {
    Promise.all(booksInfo.map(async (bookInfo: BookInfo) => {
      const json: Response = await fetchBookData(bookInfo);
      return getBookData(json);
    }))
      .then((books) => {

        // fetchに成功したらbooks配列に一気に詰める
        setBooks(books);
      }).catch((e) => {

        // fetchに失敗したらエラー時のコンポーネントを表示する
        console.error(`エラー: ${e}`);
        setIsError(true);
      });
  }, [setBooks, setIsError]);

  return (
    <ul>
      {!isError ? (
        <>
          {books.length ? (
            <>
              {books.map((book: Book, key: number) => {
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
            // books配列に格納されるまでLoadingの文字を表示する
          ) : (<h1>Loading...</h1>)
          }
        </>
        // fetch時にエラーが起きた時に表示する
      ) : (<ErrorMessage />)}
    </ul>
  );
}
export default Books;