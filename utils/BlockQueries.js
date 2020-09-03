function getBlockDefinitions() {
  return `
  blocks {
    ... on AcfHeroBlock {
      homeHero {
        fieldGroupName
        formbuttoncopy
        formbuttonplaceholder
        notified
        subheading
        titleBold
        titleLight
      }
      attributes {
        id
      }
    }
    ... on AcfAuthorBlock {
        attributes {
          id
        }
        author {
          fieldGroupName
          aboutAuthor
          authorCompany
          authorImage {
            sourceUrl(size: MEDIUM)
            altText
          }
          authorName
        }
      }
      ... on AcfCustomerQuoteBlock {
        attributes {
          id
        }
        customerQuotes {
          fieldGroupName
          quotes {
            author
            company
            quote
          }
          quotesSectionTitle
        }
      } 
      ... on AcfContactUsBlock {
        attributes {
          id
        }
        contactUs {
          contactButtonCopy
          contactButtonLink
          contactMainIntro
          contactSubHeading
          fieldGroupName
        } 
      }
      ... on AcfPricingBlock {
        attributes {
          id
        }
        pricing {
          priceOption {
            features {
              feature
              fieldGroupName
            }
            billingFrequency
            fieldGroupName
            info
            price
            recommended
            title
          }
          pricingTitle
        }
      }
      ... on AcfLargeQuoteBlock {
        attributes {
          id
        }
        largeQuote {
          largeQuote
          largeQuoteAuthor
        }
      }
      ... on AcfLogosBlock {
        attributes {
          id
        }
        logos {
          desktopImage {
            altText
            sourceUrl(size: LARGE)
          }
          mobileImage {
            altText
            sourceUrl(size: LARGE)
          }
          titleLogos
          requireAMobileImage
        }
      }
      ... on AcfWhatsInsideBlock {
        attributes {
          id
        }
        whatsInside {
          days {
            dayInfo
            dayNumber
            dayTitle
            icon {
              altText
              sourceUrl(size: MEDIUM)
            }
          }
          extraImage {
            altText
            sourceUrl(size: MEDIUM)
          }
          sectionTitle
        }
      }
      ... on AcfVideoBlock {
        dynamicContent
        originalContent
        videoPlayer {
          videoSource
        }
      }
      ... on AcfPostHeroBlock {
        attributes{
          id
        }
        postHero {
          postHeroImage {
            altText
            sourceUrl(size: LARGE)
          }
        }
      }
      ... on AcfSlideHeroBlock {
        attributes {
          id
        }
        slideHero {
          selectedArticles {
            articles {
              ... on Post {
                id
                featuredImage {
                  node {
                    altText
                    sourceUrl(size: LARGE)
                  }
                }
                title
                slug
                categories {
                  edges {
                    node {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
      ... on AcfRelatedArticlesBlock {
        relatedArticles {
          relatedArticles {
            ... on Post {
              id
              title(format: RENDERED)
              slug
              featuredImage {
                node {
                  sourceUrl(size: LARGE)
                }
              }
              categories {
                edges {
                  node {
                    name
                  }
                }
              }
            }
          }
        }
        attributes {
          id
        }
      }


      ... on CoreImageBlock {
        attributes {
          ... on CoreImageBlockAttributes {
            alt
            align
            width
            url
          }
        }
      }
      ... on CoreParagraphBlock {
        originalContent
        attributes {
          ... on CoreParagraphBlockAttributes {
            align
          }
        }
      }
      ... on CoreHeadingBlock {
        originalContent
        attributes {
          ... on CoreHeadingBlockAttributes {
            align
          }
        }
      }
  }
    `;
}
export default getBlockDefinitions;
