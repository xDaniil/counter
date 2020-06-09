import CounterActions from "../components/counterActions";
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <title>Counter app</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <CounterActions></CounterActions>
    </>
  )
}

export default Home;
