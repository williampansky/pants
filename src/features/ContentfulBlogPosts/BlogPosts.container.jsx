import React from 'react';

import Section from '@/components/Section';

import { AllPostsContainer } from '@/features/ContentfulBlogPosts/BlogPosts.style';
import ContentfulCaseStudy from '@/features/ContentfulBlogPosts/ContentfulCaseStudy.container';
import ContentfulProject from '@/features/ContentfulBlogPosts/ContentfulProject.container';

export default function BlogPosts({ data }) {
    const { allPosts } = data;
    console.log('allPosts', allPosts);

    return (
        <Section
            backgroundColor="muted"
            container
            containerSize="expand"
            id="BlogPosts"
            sectionSize="small"
        >
            <AllPostsContainer>
                {allPosts.map((post, i) => {
                    const {
                        id,
                        internal: { type }
                    } = post;

                    switch (type) {
                        case 'ContentfulCaseStudy':
                            return (
                                <ContentfulCaseStudy
                                    data={post}
                                    index={i}
                                    key={id}
                                />
                            );

                        case 'ContentfulProject':
                            return (
                                <ContentfulProject
                                    data={post}
                                    index={i}
                                    key={id}
                                />
                            );

                        default:
                            return null;
                    }
                })}
            </AllPostsContainer>
        </Section>
    );
}
