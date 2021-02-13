import React, { Component } from 'react';
import { FaHouzz, FaAdjust, FaPiedPiper, FaAddressBook, } from 'react-icons/fa';

import Title from './Title';

export default class Categories extends Component {
  state={
    categories:[
      {
        icon:<FaHouzz />,
        title:"Domestic Care",
        info:'Trained and professiional Domestic Workers offering quality care services at home. For our caregivers, the home is their professional work environment'
      },
      {
        icon:<FaAdjust />,
        title:"Medical Care",
        info:'We provide in- and out-patient medical care services. Professionals are conditioned to respond the the invaluable needs of human dignity for every population.'
      },
      {
        icon:<FaPiedPiper />,
        title:"Tutoring",
        info:'You do not always have  to get into a classroom to learn new skills, build ideas and have fun while you learn. We offer tutoring services for every population, from toddlers at home  to professionals in the office.'
      },
      {
        icon:<FaAddressBook />,
        title:"Counselling",
        info:'Breaking the stigma of loneliness and depression is a team of counsellors with gift and skill to bring you out of the shadows.'
      }
    ]
  }
  render() {
    return(
      <section className="services">
        <Title title="what we offer" />
        <div className="services-center">
        {this.state.categories.map((item, index) => {
          return <article key={index} className="service">
            <span>{item.icon}</span>
            <h6>{item.title}</h6>
            <p>{item.info}</p>
          </article>
        })}
        </div>
      </section>
    )
  }
}