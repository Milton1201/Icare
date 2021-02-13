import React from 'react';
import Room from './Room';
export default function ServiceList({services}) {
  if(services.length === 0){
    return (
      <div className="empty-search">
      <h3>unfortunately no service matched your search parameters</h3>
      </div>
    )
  }

	return (
		<section className="roomslist">
      <div className="roomslist-center">
      {services.map(item => {
        return (
          <Room key={item.id} service={item} />
        )
      })}
      </div>
		</section>
	)
}