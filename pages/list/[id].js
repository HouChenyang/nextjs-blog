import Link from 'next/link';
import { useRouter } from 'next/router';

const Detail=()=>{
  const router = useRouter()
  return (
    <>
      <h1>列表详情---{router?.query?.id}</h1>
        <h2>
        <Link href="/list">
          <a>返回列表</a>
        </Link>
      </h2>
  </>
  )
  }
  export default Detail