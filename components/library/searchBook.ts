import fetch from 'node-fetch';

// const url = `https://www.googleapis.com/books/v1/volumes?q=`;
// const isbnCodes = [978-4-7741-7170-1];
export const searchBook = async () => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:`;
  const isbnCode = "978-4-7741-7170-1";

  const res = await fetch((url + isbnCode), { method: 'GET' });
  const json = res.json();

  console.dir(json, { depth: null });
  return json;
}

// const title = searchBook();
