import Link from 'next/link';

const UnderEdit = () => {
  return (
    <article className="under-edit">
      <h1>
        Sorry, This Page Is Under Edit.
      </h1>
      <h1>See You agein Cominng Soon!</h1>
      <Link href="/">
        <a>
          Back
        </a>
      </Link>
    </article>
  );
}
export default UnderEdit;