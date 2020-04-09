/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import useSiteMetadata from "../hooks/use-site-metadata"

const Footer = () => {
  const { siteTitle } = useSiteMetadata()

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} by {siteTitle} | Theme By <a href="https://www.gatsbyjs.org/starters/LekoArts/gatsby-starter-minimal-blog/">LekoArts</a>
      </div>
    </footer>
  )
}

export default Footer
