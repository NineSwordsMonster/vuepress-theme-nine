const path = require('path')
const moment = require('moment')
moment.locale('zh-cn')

module.exports = ({
  postsDir = '_posts',
  postsLayout = 'Post',
  permalink = '/posts/:year/:month/:day/:slug',
  lang,
}) => {
  const ensureBothSlash = str => str.replace(/^\/?(.*)\/?$/, '/$1/')

  return {
    name: '@theme-nine/vuepress-plugin-blog',

    plugins: [
      [require('../blog-vuepress'), {
        categoryIndexPageUrl: '/posts/categories/',
        tagIndexPageUrl: '/posts/tags/',
        postsDir,
        lang,
      }],
    ],

    extendPageData ($page) {
      // Test the page if is a post according to the postsDir
      if ($page.path.startsWith(ensureBothSlash(postsDir))) {
        // Set the meta data of the page
        $page.frontmatter.layout = $page.frontmatter.layout || postsLayout
        $page.frontmatter.permalink = $page.frontmatter.permalink || permalink
        $page.type = 'post'
        $page.top = $page.frontmatter.top || false
        $page.tags = $page.frontmatter.tags || []
        $page.category = $page.frontmatter.category
        $page.createdAt = $page.frontmatter.date ? moment($page.frontmatter.date, moment.ISO_8601).format('YYYY-MM-DD HH:mm:ss') : null
        $page.updatedAt = $page.lastUpdated ? moment($page.lastUpdated, moment.ISO_8601).format('YYYY-MM-DD HH:mm:ss') : null
      }
    },

    enhanceAppFiles: [
      path.resolve(__dirname, 'enhanceApp.js'),
    ],
  }
}
