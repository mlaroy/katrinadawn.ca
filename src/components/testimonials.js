import React from 'react';
import { StaticQuery, graphql } from 'gatsby'
import Slider from 'react-slick'

const Testimonials = () => (
  <StaticQuery
    query={TESTIMONIAL_QUERY}
    render={({allMarkdownRemark}) => {
      const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 10000,
        infinite: true,
        fade: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <>
          <section className="text-white bg-dark-teal">
            <div className="container">
              <h2 className="text-center">Client testimonials</h2>
              <Slider {...settings} className="md:w-4/5 mx-auto testimonials">
                {allMarkdownRemark.edges.map(edge => {
                  const { name, location, quote } = edge.node.frontmatter;
                  return (
                    <div className="text-center" key={name}>
                      <div className="px-8">
                        <blockquote className="mb-4 leading-normal text-lg md:text-xl">
                          {quote}
                        </blockquote>
                        <p>&mdash; {name}<br />
                          <span className="text-sm">{location}</span>
                        </p>
                      </div>
                    </div>
                  )
                })}
              </Slider>
            </div>
          </section>
        </>
     )}
    }
  />
)

const TESTIMONIAL_QUERY = graphql`
  query Testimonials {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            name
            location
            quote
          }
        }
      }
    }
  }
`

export default Testimonials
