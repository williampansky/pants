import React, { useCallback, useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import Name from '@/components/Name';
import GridItem from '@/components/GridItem';
import TextLead from '@/components/TextLead';
import Employment from '@/components/Employment';
import ExternalLink from '@/components/ExternalLink';
import FONTS from '@/fonts.json';

const IndexPage = ({ data }) => {
  const [fontObject, setFontObject] = useState({
    headlineFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    headlineWeight: 400,
    textFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    textWeight: 400
  });

  const getRandomFontFamily = useCallback((array = FONTS) => {
    const selection = Math.floor(Math.random() * array.length);
    setFontObject(array[selection]);
  }, []);

  useEffect(() => {
    getRandomFontFamily();
  }, [getRandomFontFamily]);

  return (
    <Grid font={fontObject}>
      <SEO title="Home" />

      <GridItem>
        <Name font={fontObject} />
      </GridItem>

      <GridItem>
        <TextLead
          text="Front-end web developer and graphic designer with ability to solve complex
      website interface problems through creative and UX-minded solutions."
        />
      </GridItem>

      <GridItem>
        <Employment />
      </GridItem>

      <GridItem padding={false}>
        <ExternalLink
          href="https://www.linkedin.com/in/williampansky/"
          text="linkedin.com/in/williampansky"
        />
      </GridItem>

      <GridItem padding={false}>
        <ExternalLink
          href="mailto:williampansky@gmail.com"
          text="williampansky@gmail.com"
        />
      </GridItem>
    </Grid>
  );
};

// prettier-ignore
const Grid = styled.main`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0;
  display: grid;
  min-height: 100vh;
  font-family: ${props => props.font.textFamily};
  font-weight: ${props => props.font.textWeight};
  grid-auto-flow: dense;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    'hero   hero'
    'big1   big1'
    'med1   med1'
    'med2   med2'
    'small1 small1';

  @media (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, auto);
    grid-template-areas:
      'hero   hero   hero   big1   big1'
      'hero   hero   hero   med1   med2'
      'hero   hero   hero   small1 med2';
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      'hero   hero   hero   hero    big1   big1'
      'hero   hero   hero   hero    med1   med2'
      'hero   hero   hero   hero    med1   small1';
  }

  & > section:nth-child(1)  { grid-area: hero; animation-delay: 200ms; }
  & > section:nth-child(2)  { grid-area: big1; animation-delay: 400ms; }
  & > section:nth-child(3)  { grid-area: med1; animation-delay: 600ms; }
  & > section:nth-child(4)  { grid-area: med2; animation-delay: 800ms; }
  & > section:nth-child(5)  { grid-area: small1; animation-delay: 1000ms; }
  & > section:nth-child(6)  { grid-area: small2; animation-delay: 1200ms; }
  & > section:nth-child(7)  { grid-area: small3; animation-delay: 1400ms; }
  & > section:nth-child(8)  { grid-area: small4; animation-delay: 1600ms; }
  & > section:nth-child(9)  { grid-area: small5; animation-delay: 1800ms; }
  & > section:nth-child(10) { grid-area: small6; animation-delay: 2000ms; }
  & > section:nth-child(11) { grid-area: small7; animation-delay: 2200ms; }
  & > section:nth-child(12) { grid-area: small8; animation-delay: 2400ms; }
  & > section:nth-child(13) { grid-area: small9; animation-delay: 2600ms; }
  & > section:nth-child(14) { grid-area: small10; animation-delay: 2800ms; }
`;

export const pageQuery = graphql`
  query a {
    allContentfulBlogPosts {
      nodes {
        featuredPost {
          id
          title
          slug
          client {
            name
            website
            description {
              description
            }
            logo {
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                  original {
                    height
                    width
                  }
                }
              }
            }
            avatar {
              localFile {
                childImageSharp {
                  fluid(jpegProgressive: true, quality: 65) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          project {
            title
            website
            repository
            description {
              description
            }
          }
        }
        allPosts {
          id
          title
          slug
          client {
            name
            website
            description {
              description
            }
            logo {
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                  original {
                    height
                    width
                  }
                }
              }
            }
            avatar {
              localFile {
                childImageSharp {
                  fluid(jpegProgressive: true, quality: 65) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          project {
            title
            website
            repository
            description {
              description
            }
          }
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default IndexPage;
