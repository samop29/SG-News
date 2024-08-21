import { MyProvider } from "./Context/Context";
import News from "./News/page";


export default function RootLayout({ children }) {
 
    return (
      <html>
        <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        </head>
<body>
  
          <MyProvider>
            <div className="">
          {children}
  </div>
 </MyProvider>
</body>
          
      </html>
    )
  }