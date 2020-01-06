import styled from 'styled-components';

export const Component = styled.article`
    background: ${props =>
        props.backgroundColor ? props.backgroundColor : '#f8f8f8'};
    border-color: rgb(204, 204, 204);
    font-size: 18px;
    line-height: 1;
    margin: 0;
    position: relative;
    transition: 300ms cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-property: box-shadow, border-color, transform;
    z-index: 0;

    &:hover,
    &:focus {
        background: white;
        border-color: rgb(137, 137, 137);
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.045),
            0 3px 6px rgba(0, 0, 0, 0.06);
        z-index: 1;
    }

    a {
        border: 1px solid;
        border-color: inherit;
        border-radius: inherit;
        color: inherit;
        display: block;
    }

    a:hover,
    a:focus {
        text-decoration: none;
    }
`;

export const Column = styled.div``;

export const Row = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const ImageContainer = styled.div`
    height: 75px;
    width: 100px;
    margin: 0 1em 0 0;
`;

export const Title = styled.h1`
    color: inherit;
    font-size: 1em;
    font-weight: normal;
    line-height: 1.165;
    margin: 0 0 0.25em;
    padding: 0;
`;

export const StyledPostContentType = styled.div`
    color: rgba(0, 0, 0, 0.625);
    font-size: inherit;
    font-weight: bold;
    line-height: inherit;
    margin: 0;
    padding: 0;
`;

export const StyledDatePublished = styled.p`
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    margin: 0;
    padding: 0;

    * {
        display: inline-block;
    }
`;

export const StyledPostMeta = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    color: rgba(0, 0, 0, 0.545);
    font-size: 0.65em;
    font-weight: normal;
    line-height: 1;

    ${StyledDatePublished} {
        margin: 2px 0 0;
    }

    @media (min-width: 960px) {
        flex-flow: row nowrap;

        ${StyledDatePublished} {
            margin: 0 0 0 8px;
        }
    }
`;
