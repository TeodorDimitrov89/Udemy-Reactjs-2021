  import {useRouter} from 'next/router';
  // our-domain.com/news

    // our-domain.com/news/something-important


    const DetailPage = () => {
      const router = useRouter();

      const newsId = router.query.newsId;

      //send request to backend API 
      // to fetch the news item with newsId


      return <h1>Detail Page</h1>
    }
  
    export default DetailPage;