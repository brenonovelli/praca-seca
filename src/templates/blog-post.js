import React from 'react';
import { graphql } from 'gatsby';

import {
  BrowserOutline,
  PinOutline,
  EmailOutline,
  PhoneOutline,
} from 'styled-icons/evaicons-outline';
import { Facebook, Instagram, Whatsapp } from 'styled-icons/boxicons-logos';
import { ReportProblem } from 'styled-icons/material-rounded';
import { ShippingFast, Home } from 'styled-icons/fa-solid/';

import categories from '../utils/categories';
import getThemeColor from '../utils/getThemeColor';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import RecommendedPosts from '../components/RecommendedPosts';
import Comments from '../components/Comments';

import PostTags from '../components/Post/components/PostTags';

import * as S from '../components/Post/styled';

const BlogPost = ({ data, pageContext: { nextPost, previousPost } }) => {
  const post = data.markdownRemark;

  const { color, slug } =
    categories.find(category => category.title === post.frontmatter.category) ||
    null;

  const { tags, delivery } = post.frontmatter;

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
      />

      <S.PostHeader color={color}>
        <S.PostCategories>
          <S.PostCategory
            to={slug}
            cover
            direction="left"
            bg={getThemeColor()}
            duration={0.6}
          >
            {post.frontmatter.category}
          </S.PostCategory>
          <S.PostSubcategory>{post.frontmatter.subcategory}</S.PostSubcategory>
        </S.PostCategories>

        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>

        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>

        {(delivery !== '3' || tags) && (
          <S.PostsTags>
            {/* Delivery */}
            {/* 1 - Entrega / 2 -  Atendimento / 3 - Não */}
            {delivery !== '3' && (
              <>
                <S.PostBadges>
                  {delivery === '1' && (
                    <S.PostBadge className="item delivery">
                      <ShippingFast />
                      Entregas em domicílio
                    </S.PostBadge>
                  )}

                  {delivery === '2' && (
                    <S.PostBadge className="item delivery">
                      <Home />
                      Antendimento em domicílio
                    </S.PostBadge>
                  )}
                </S.PostBadges>
              </>
            )}

            <PostTags tags={tags} color={color} />
          </S.PostsTags>
        )}
      </S.PostHeader>

      <S.PostContacts>
        {/* Address */}
        {post.frontmatter.address && (
          <S.PostContact className="item largeColumn">
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
          <S.PostContact className="item largeColumn">
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
            className="item largeColumn"
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
            className="item whatsapp"
            href={`https://api.whatsapp.com/send?phone=55${post.frontmatter.whatsapp}&text=Olá,%20vi%20seu%20negócio%20no%20Guia%20Praça%20Seca%20e%20gostaria%20de%20mais%20informações.`}
            title="Whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <S.IconWrapper>
              <Whatsapp />
            </S.IconWrapper>

            <S.TextWrapper>
              <strong>WhatsApp:</strong>
              <span>{post.frontmatter.whatsapp}</span>
            </S.TextWrapper>
          </S.PostContactLink>
        )}

        {/* Instagram */}
        {post.frontmatter.instagram && (
          <S.PostContactLink
            className="item instagram"
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
            className="item facebook"
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
        <S.ReportLink to="/report">
          <ReportProblem /> Reportar problema
        </S.ReportLink>
      </S.PostFooter>

      <RecommendedPosts next={nextPost} previous={previousPost} />
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
        subcategory
        delivery
        description
        tags
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
