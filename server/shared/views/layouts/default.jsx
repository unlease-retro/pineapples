const React = require('react')
const { PAGE_TITLE } = require('../../constants/')

const Layout = ({ title, children }) => (
  <html>
    <head>
      <meta charSet='utf-8' />
      <title>{`${PAGE_TITLE} :: ${title}`}</title>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
      <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="apple-mobile-web-app-title" content="Unlease" />
      <meta name="application-name" content="Unlease" />
      <meta name="theme-color" content="#ffffff" />
    </head>
    <body>
      { children }
      <script src="/bundle.js"></script>
    </body>
  </html>
)

module.exports = Layout
