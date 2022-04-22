import axios from 'axios';
import Link from 'next/link';
import Layout from '../../components/layout';
export async function getServerSideProps(context) {
  const options = {
    page: 1,
    limit: 10,
  };
  if (context.query.page) {
    options.page = Number(context.query.page);
  }
  const res = await axios({ url: 'http://yapi.smart-xwork.cn/mock/147839/list' });
  const data = res?.data?.data;
  return {
    props: {
      listsData:data,
    },
  };
}


const List=({listsData})=> {
  return <Layout>
    <h2>列表页</h2>
          {
            listsData.list.map((item)=>(
            <p 
            key={item.id}
            >
                <Link 
                  href={{
                    pathname: '/list/[id]',
                    query: { id: item.id },
                  }}
                >
                  {item.name}
                </Link>
            </p>
            ))
          }
  </Layout>
}
export default List