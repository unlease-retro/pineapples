const React = require('react')
const { PAGE_TITLE } = require('../../constants/')

const Layout = ({ title, children }) => (
  <html>
    <head>
      <meta charSet='utf-8' />
      <title>{`${PAGE_TITLE} :: ${title}`}</title>
    </head>
    <body>
      { children }
      <script src="/bundle.js"></script>
    </body>
  </html>
)

module.exports = Layout
