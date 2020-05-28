import React from 'react'
import Text from 'ui/atoms/Text'
import * as S from './BlogPost.style'

const BlogPost = ({ frontmatter, html }) => {
  return (
    <S.Article key={frontmatter.slug}>
      <Text size="XL" text={frontmatter.title} style={{}} bold unique />
      <Text size="S" text={frontmatter.author} unique />
      <Text size="S" text={frontmatter.date} bold unique />
      <S.Body dangerouslySetInnerHTML={{ __html: html }} />
    </S.Article>
  )
}

export default BlogPost