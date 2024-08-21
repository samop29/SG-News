"use client";
import { useEffect, useState, useContext } from "react";
import Card from "./Card";
import MyContext from "../Context/Context";

export default function News() {
  const { topic } = useContext(MyContext);
  const [date, setDate] = useState(" ");
  const [newes, setNews] = useState([]);
  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0];
    setDate(formattedDate);
  }, []);

  // useEffect(() => {
  //   if (topic && date) {
  //     const news = async () => {
  //       const get = await fetch(
  //         `https://newsapi.org/v2/everything?q=${topic}&language=en&sortBy=publishedAt&from=${date}&apiKey=f119d030624b45ef958ecf675b4c92cf`
  //       );
  //       const result = await get.json();
  //       setNews(result.articles);
  //     };

  //     news();
  //   } else {
  //     console.log("there is error");
  //   }
  // }, [topic, date]);
  // console.log(newes);
  useEffect(() => {
    if (topic && date) {
      // console.log("Fetching news for topic:", topic);
      const fetchNews = async () => {
        try {
          const response = await fetch(
            `https://newsapi.org/v2/everything?q=${encodeURIComponent(
              topic
            )}&language=en&sortBy=publishedAt&apiKey=f119d030624b45ef958ecf675b4c92cf`
          );
          const result = await response.json();
          // console.log(result);

          if (result.articles) {
            const validArticles = result.articles.filter(
              (article) => article.title !== "Removed" && article.url
            );
            setNews(validArticles);
          } else {
            console.log("No articles found for the given topic.");
            setNews([]);
          }
        } catch (error) {
          console.error("Error fetching news:", error);
        }
      };

      fetchNews();
    } else {
      console.log("Topic or date is missing.");
    }
  }, [topic, date]);
  const topicChange = (e) => {
    setTopic(e.target.value);
  };
  return (
    <>
      <div className="">
        {/* <input type="text" onChange={topicChange} /> */}

        {/* {newes.length > 0 ?(newes.map((data) => 
          <Card data={data} key={data.url} />
        )) : (<p></p>))} */}
        {newes.length > 0 ? (
          newes.map((data) => <Card data={data} key={data.url} />)
        ) : (
          <p>No news articles found for the selected topic.</p>
        )}
      </div>
    </>
  );
}
