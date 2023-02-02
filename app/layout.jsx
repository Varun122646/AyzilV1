import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/navbar/page'
import localFont from '@next/font/local'
const madetommy = localFont({src: '../public/font/madetommy.otf'})
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body><Navbar/>{children}</body>
    </html>
  )
}
