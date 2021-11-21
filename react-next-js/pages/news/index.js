  import Link from 'next/link'


  const NewsPage = () => {
    return <>
      <h1>News Page</h1>
      <ul>
        <li><Link href="/news/1">Next JS is a great Framework</Link></li>
        <li>Some other article</li>
      </ul>
    </>
  }

  export default NewsPage;