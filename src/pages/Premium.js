import React, { Component } from 'react';
import defaultBcg from '../images/service-10.jpg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { ServiceContext } from '../context';
import StyledHero from '../components/StyledHero';


export default class Premium extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props);
        this.state = {
          slug: this.props.match.params.slug, defaultBcg
        };
        
    }
    static contextType = ServiceContext;
    
  // componentDidMount(){}
    render() {
      const { getService } = this.context;
      const service = getService(this.state.slug);
      if(!service){
        return (
            <div className="error">
                <h3>no such service could be found...</h3>
                <Link to="/services" className="btn-primary">
                    back to services
                </Link>
            </div>
            );
      }
      const {name, 
            description, 
            capacity, 
            size,
            price,
            extras, 
            breakfast, 
            pets, 
            images} = service;
          const [mainImg,...defaultImg] = images
      return (
        <>
          <StyledHero img = {images[0] || this.state.defaultBcg}>
                <Banner title={`${name} services`}>
                    <Link to="/services" className="btn-primary">
                        back to services
                    </Link>
                </Banner>
          </StyledHero>
          <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index)=>{
              return (
                <img key={index} src={item} alt={name} />
              )
            })}
          </div>
          <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article> 
          <article className="info">
            <h3>info</h3>
            <h6>price: ${price}</h6>
            <h6>size: {size}</h6>
            <h6>
              max capacity: {""}
              {
                capacity > 1 ? `${capacity} people`: `${capacity} person`
              }
            </h6>
            <h6>
              {pets? "pets allowed" : "no pets allowed"}
            </h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>         
          </div>
          </section>
          <section className="room-extras">
            <h6>extras</h6>
            <ul className="extras">
            {extras.map((item, index) =>{
              return (
                <li key={index}>- {item}</li>
              )
            })}
            </ul>
          </section>
        </>
      )
    }
       
}