import React from 'react'
import Carousel from 'react-multi-carousel'
import './Reviews.css';
import 'react-multi-carousel/lib/styles.css';
import { MdOutlineStarPurple500 } from 'react-icons/md';

function Reviews() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div className='container'>
        <div className='reviewsRatings'>
        <h5>2278 Google Reviews</h5>
        <Carousel responsive={responsive}>
          <div className='ratingItem'>
            <div className='d-flex align-items-center justify-content-between gap-2'>
              <div className='d-flex align-items-center gap-2'>
              <span className='userImg'><img src="/images/user.png" alt='user' /></span>
              <h6>Md Nasir</h6>
              </div>
              <div className='ratingStars d-flex align-items-center'>
                    <span className='d-flex'><MdOutlineStarPurple500 /></span>
                    <span className='d-flex'><MdOutlineStarPurple500 /></span>
                    <span className='d-flex'><MdOutlineStarPurple500 /></span>
                    <span className='d-flex'><MdOutlineStarPurple500 /></span>
                    <span className='d-flex'><MdOutlineStarPurple500 /></span>
                </div>
            </div>
            <p className='userContent'>Excellent service from start to finish. 100% satisfaction with the job, professionalism and overall service.We were delighted with your...</p>
          </div>
          <div className='ratingItem'>
            <div className='d-flex align-items-center justify-content-between gap-2'>
                <div className='d-flex align-items-center gap-2'>
              <span className='userImg'><img src="/images/user1.png" alt='user' /></span>
                <h6>Rohit Bhati</h6>
                </div>
                <div className='ratingStars d-flex align-items-center'>
                    <span className='d-flex'><MdOutlineStarPurple500 /></span>
                    <span className='d-flex'><MdOutlineStarPurple500 /></span>
                    <span className='d-flex'><MdOutlineStarPurple500 /></span>
                    <span className='d-flex'><MdOutlineStarPurple500 /></span>
                    <span className='d-flex'><MdOutlineStarPurple500 /></span>
                </div>
            </div>
            <p className='userContent'>Went for Tyre change . Ultimate service by shoppe boys. Owner behavior very cool. Guide as per ur budget. Highly recommend...</p>
          </div>
          <div className='ratingItem'>
            <div className='d-flex align-items-center justify-content-between gap-2'>
                <div className='d-flex align-items-center gap-2'>
                <span className='userImg'><img src="/images/user2.png" alt='user' /></span>
                <h6>Pradeep Kumar</h6>
                </div>
                <div className='ratingStars d-flex align-items-center'>
                    <span className='d-flex'><MdOutlineStarPurple500 /></span>
                    <span className='d-flex'><MdOutlineStarPurple500 /></span>
                    <span className='d-flex'><MdOutlineStarPurple500 /></span>
                    <span className='d-flex'><MdOutlineStarPurple500 /></span>
                    <span className='d-flex'><MdOutlineStarPurple500 /></span>
                </div>
            </div>
            <p className='userContent'>Best tyre shop in Indirapuram. Good dealing with customer. All types tyre available here. Price also responsible. Overall good experience...</p>
          </div>
          <div className='ratingItem'>
            <div className='d-flex align-items-center justify-content-between gap-2'>
              <div className='d-flex align-items-center gap-2'>
              <span className='userImg'><img src="/images/user.png" alt='user' /></span>
              <h6>Md Nasir</h6>
              </div>
              <div className='ratingStars d-flex align-items-center'>
                    <span className='d-flex'><MdOutlineStarPurple500 /></span>
                    <span className='d-flex'><MdOutlineStarPurple500 /></span>
                    <span className='d-flex'><MdOutlineStarPurple500 /></span>
                    <span className='d-flex'><MdOutlineStarPurple500 /></span>
                    <span className='d-flex'><MdOutlineStarPurple500 /></span>
                </div>
            </div>
            <p className='userContent'>Excellent service from start to finish. 100% satisfaction with the job, professionalism and overall service.We were delighted with your...</p>
          </div>
          <div className='ratingItem'>
            <div className='d-flex align-items-center justify-content-between gap-2'>
                <div className='d-flex align-items-center gap-2'>
              <span className='userImg'><img src="/images/user1.png" alt='user' /></span>
                <h6>Rohit Bhati</h6>
                </div>
                <div className='ratingStars d-flex align-items-center'>
                    <span className='d-flex'><MdOutlineStarPurple500 /></span>
                    <span className='d-flex'><MdOutlineStarPurple500 /></span>
                    <span className='d-flex'><MdOutlineStarPurple500 /></span>
                    <span className='d-flex'><MdOutlineStarPurple500 /></span>
                    <span className='d-flex'><MdOutlineStarPurple500 /></span>
                </div>
            </div>
            <p className='userContent'>Went for Tyre change . Ultimate service by shoppe boys. Owner behavior very cool. Guide as per ur budget. Highly recommend...</p>
          </div>
          <div className='ratingItem'>
            <div className='d-flex align-items-center justify-content-between gap-2'>
                <div className='d-flex align-items-center gap-2'>
                <span className='userImg'><img src="/images/user2.png" alt='user' /></span>
                <h6>Pradeep Kumar</h6>
                </div>
                <div className='ratingStars d-flex align-items-center'>
                    <span className='d-flex'><MdOutlineStarPurple500 /></span>
                    <span className='d-flex'><MdOutlineStarPurple500 /></span>
                    <span className='d-flex'><MdOutlineStarPurple500 /></span>
                    <span className='d-flex'><MdOutlineStarPurple500 /></span>
                    <span className='d-flex'><MdOutlineStarPurple500 /></span>
                </div>
            </div>
            <p className='userContent'>Best tyre shop in Indirapuram. Good dealing with customer. All types tyre available here. Price also responsible. Overall good experience...</p>
          </div>
        </Carousel>
        </div>
      </div>
  )
}

export default Reviews
