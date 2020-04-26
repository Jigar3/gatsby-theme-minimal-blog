/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import useSiteMetadata from "../hooks/use-site-metadata"
import { FaLinkedin, FaTwitter, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";


const Footer = () => {
  const { siteTitle } = useSiteMetadata()

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        // display: `flex`,
        // justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
        
      <div
        sx={{
          display: `flex`,
          justifyContent: `center`,
          margin: '1rem 0 1rem 0',
        }}
      >
        <a href="https://www.linkedin.com/in/jsc39/"><FaLinkedin size="32px" sx={{ mr: [4], ml: [3] }}/></a> 
        <a href="https://twitter.com/JigarChavada1"><FaTwitter size="32px" sx={{ mr: [4] }}/></a> 
        <a href="https://github.com/jigar3"><FaGithub size="32px" sx={{ mr: [4] }}/></a> 
        <a href="https://www.instagram.com/jigar_03/"><FaInstagram size="32px" sx={{ mr: [4] }}/></a> 
        <a href="https://www.facebook.com/jsc3998/"><FaFacebook size="32px" sx={{ mr: [4] }}/></a> 
      </div>
      
      <div
        sx={{
          textAlign: `center`,
          width: `100%`,
        }}
      > Theme By <a href="https://www.gatsbyjs.org/starters/LekoArts/gatsby-starter-minimal-blog/">LekoArts</a>
      </div>
    </footer>
  )
}

export default Footer
