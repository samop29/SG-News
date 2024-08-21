
import Filter from "./Filter/Filter";
import Header from "./Header/Header";
import Headline from "./Headline/Headline";
import News from "./News/page";
import './globals.css';
export default function Home() {
 
  
  return (
    <>
  <div className=" w-100% h-full ">

    {/* header */}
    <Header/>
    <Filter/>
    {/* <Headline/> */}
    <News/>
  </div>
 
    </>
  );
}
