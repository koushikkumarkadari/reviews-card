import './index.css'
import {Component} from 'react'

const reviewsList = [
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/wade-warren-img.png',
    username: 'Wade Warren',
    companyName: 'Rang',
    description:
      'The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png',
    username: 'Adrian Williams',
    companyName: 'WheelO',
    description:
      'Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png',
    username: 'Sherry Johnson',
    companyName: 'MedX',
    description:
      'I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png',
    username: 'Ronald Jones',
    companyName: 'Infinos Tech',
    description:
      'I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.',
  },
]
const lengthOfList = reviewsList.length
class ReviewsCarousel extends Component {
  state = {reviewIndex: 0}

  onLeftClick = () => {
    const {reviewIndex} = this.state
    if (reviewIndex > 0) {
      this.setState(prevState => ({reviewIndex: prevState.reviewIndex - 1}))
    }
  }

  onRightClick = () => {
    const {reviewIndex} = this.state
    if (reviewIndex < lengthOfList - 1) {
      this.setState(prevState => ({reviewIndex: prevState.reviewIndex + 1}))
    }
  }

  render() {
    const {reviewIndex} = this.state
    const {imgUrl, username, companyName, description} =
      reviewsList[reviewIndex]
    return (
      <div className="background-container">
        <h1 className="heading">Reviews</h1>
        <div className="reviews-contianer">
          <button
            className="click-button"
            onClick={this.onLeftClick}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="each-review-container">
            <img src={imgUrl} alt={username} />
            <p className="name">{username}</p>
            <p className="company">{companyName}</p>
            <p className="review">{description}</p>
          </div>
          <button
            className="click-button"
            onClick={this.onRightClick}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
