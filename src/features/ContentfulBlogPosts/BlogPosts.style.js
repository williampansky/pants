import styled from 'styled-components';

export const AllPostsContainer = styled.div`
    & > div + div {
        position: relative;
        top: -1px;
    }

    & > div:first-of-type article {
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
    }

    & > div:last-of-type article {
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;
    }
`;
