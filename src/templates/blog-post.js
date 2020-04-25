import React from 'react';
import { graphql } from 'gatsby';

import {
  BrowserOutline,
  PinOutline,
  EmailOutline,
  PhoneOutline,
} from 'styled-icons/evaicons-outline';
import { Facebook, Instagram, Whatsapp } from 'styled-icons/boxicons-logos';

import { ShippingFast, Home } from 'styled-icons/fa-solid/';

import Layout from '../components/Layout';
import SEO from '../components/seo';

import * as S from '../components/Post/styled';
import RecommendedPosts from '../components/RecommendedPosts';
import Comments from '../components/Comments';

const BlogPost = ({ data, pageContext: { nextPost, previousPost } }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
      />

      <S.PostHeader>
        <S.PostCategory>{post.frontmatter.category}</S.PostCategory>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
      </S.PostHeader>

      <S.PostBadges>
        {/* Delivery */}
        {post.frontmatter.delivery !== 1 && (
          <>
            {post.frontmatter.delivery === 2 && (
              <S.PostBadge className="item delivery">
                <ShippingFast />
                Entregas em domicílio
              </S.PostBadge>
            )}

            {post.frontmatter.delivery === 3 && (
              <S.PostBadge className="item delivery">
                <Home />
                Antendimento em domicílio
              </S.PostBadge>
            )}
          </>
        )}
      </S.PostBadges>

      <S.PostContacts>
        {/* Address */}
        {post.frontmatter.address && (
          <S.PostContact className="item">
            <S.IconWrapper>
              <PinOutline />
            </S.IconWrapper>
            <S.TextWrapper>
              <strong>Endereço:</strong>
              <span>{post.frontmatter.address}</span>
            </S.TextWrapper>
          </S.PostContact>
        )}

        {/* Phone */}
        {post.frontmatter.phone && (
          <S.PostContactLink
            className="item"
            href={`tel:${post.frontmatter.phone}`}
            title="Phone"
            target="_blank"
            rel="noopener noreferrer"
          >
            <S.IconWrapper>
              <PhoneOutline />
            </S.IconWrapper>
            <S.TextWrapper>
              <strong>Phone:</strong>
              <span>{post.frontmatter.telefone}</span>
            </S.TextWrapper>
          </S.PostContactLink>
        )}

        {/* Email */}
        {post.frontmatter.email && (
          <S.PostContact className="item">
            <S.IconWrapper>
              <EmailOutline />
            </S.IconWrapper>
            <S.TextWrapper>
              <strong>E-mail:</strong>
              <span>{post.frontmatter.email}</span>
            </S.TextWrapper>
          </S.PostContact>
        )}

        {/* Site */}
        {post.frontmatter.site && (
          <S.PostContactLink
            className="item"
            href={`https://${post.frontmatter.site}`}
            title="Site"
            target="_blank"
            rel="noopener noreferrer"
          >
            <S.IconWrapper>
              <BrowserOutline />
            </S.IconWrapper>
            <S.TextWrapper>
              <strong>Site:</strong>
              <span>{post.frontmatter.site}</span>
            </S.TextWrapper>
          </S.PostContactLink>
        )}

        {/* Whatsapp */}
        {post.frontmatter.whatsapp && (
          <S.PostContactLink
            className="item"
            href={`https://api.whatsapp.com/send?phone=55${post.frontmatter.whatsapp}`}
            title="Whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <S.IconWrapper>
              <Whatsapp />
            </S.IconWrapper>

            <S.TextWrapper>
              <strong>Whatsapp:</strong>
              <span>{post.frontmatter.whatsapp}</span>
            </S.TextWrapper>
          </S.PostContactLink>
        )}

        {/* Instagram */}
        {post.frontmatter.instagram && (
          <S.PostContactLink
            className="item"
            href={`https://www.instagram.com/${post.frontmatter.instagram}`}
            title="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <S.IconWrapper>
              <Instagram />
            </S.IconWrapper>
            <S.TextWrapper>
              <strong>Instagram:</strong>
              <span>@{post.frontmatter.instagram}</span>
            </S.TextWrapper>
          </S.PostContactLink>
        )}

        {/* Facebook */}
        {post.frontmatter.facebook && (
          <S.PostContactLink
            className="item"
            href={`https://www.fb.com/${post.frontmatter.facebook}`}
            title="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <S.IconWrapper>
              <Facebook />
            </S.IconWrapper>
            <S.TextWrapper>
              <strong>Facebook:</strong>
              <span>/{post.frontmatter.facebook}</span>
            </S.TextWrapper>
          </S.PostContactLink>
        )}
      </S.PostContacts>

      {post.html && (
        <S.MainContent>
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </S.MainContent>
      )}

      <S.PostFooter>
        <S.PostDate>Cadastrado em: {post.frontmatter.date}</S.PostDate>
        <a href="/report" title="">
          Reportar problema
        </a>
      </S.PostFooter>

      <RecommendedPosts next={nextPost} previous={previousPost} />

      <Comments url={post.fields.slug} title={post.frontmatter.title} />
    </Layout>
  );
};

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        title
        category
        delivery
        description
        address
        background
        email
        site
        telefone
        whatsapp
        instagram
        facebook
        image
      }
      html
      timeToRead
    }
  }
`;

export default BlogPost;
