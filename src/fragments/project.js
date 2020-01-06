import { graphql } from 'gatsby';

export const Project = graphql`
    fragment project on ContentfulProject {
        createdAt
        description {
            description
        }
        id
        repository
        title
        updatedAt
        website
    }
`;
