import portfolio from "../images/portfolio-desk.png"
import pmob from "../images/portfolio-mobile.png"
import firstCv from '../images/first-cv.png'
import coming from "../images/coming-soon.jpg"

const data = [
    {
      name: 'Portfolio-Project',
      css: `url(${portfolio})`,
      height: 200,
      image: portfolio,
      imageMob: pmob
    },
    {
      name: 'First-ProjectCv',
      css: `url(${firstCv})`,
      height: 400,
      image: firstCv
    },
    {
      name: 'Coming soon!',
      description: 'Weather App',
      css:`url(${coming})` ,
      height: 400
    }
   
   
  ]

  export default data