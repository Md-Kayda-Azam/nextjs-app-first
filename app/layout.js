import Link from "next/link";
import "./global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {" "}
        <div className="menu">
          <div className="container">
            <div className="nav">
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/team">Team</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {children}
        <hr />
        <p>Copyright@</p>
      </body>
    </html>
  );
}
