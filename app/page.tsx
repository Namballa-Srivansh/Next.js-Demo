import Hello from "./components/Hello"

const Home = () => {

  console.log("What type of component am I ?")

  return (
    <>
      <div>Welcome to Next.js</div>
      <Hello/>
    </>
    
  )
}

export default Home