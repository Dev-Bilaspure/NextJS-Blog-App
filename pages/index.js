import Layout from "../components/Layout";

export default function Home() {
  // console.log();
  // console.log('hell')
  return (
    <Layout >
      <div style={{marginTop: 120}}>
        
      <h1>Helllo bhai log: </h1>
      
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      
    }, // will be passed to the page component as props
  }
}

