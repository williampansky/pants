export const parseContentfulContentType = string => {
    switch (string) {
        case 'ContentfulCaseStudy':
            return 'Case Study';

        case 'ContentfulProject':
            return 'Project';

        default:
            return;
    }
};
