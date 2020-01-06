import { graphql } from 'gatsby';

export const SiteInformation = graphql`
    fragment SiteInformation on Site {
        siteMetadata {
            author
            description
        }
    }
`;
