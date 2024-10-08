import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          id="jank"
          // strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          // console.log('hello from script');
          // var docraptorJavaScriptFinished = function () {
              
          //     if (window.finished) {
          //       return window.finished();
          //       }
          //       else {
          //         return false;
          //     }
          //     };

          var didWait = false;
// DocRaptor polls docraptorJavaScriptFinished until it is true
docraptorJavaScriptFinished = function() {
  if (! didWait) {
    setTimeout(function(){
      didWait = true;
    }, 5000);
    return false;
  }
  // It's been 5 seconds, let's return true and make the PDF!
  return true;
}
              `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
