import React from 'react';
import ServiceFilter from './ServiceFilter';
import ServiceList from './ServiceList';
import {withServiceConsumer} from '../context';
import Loading from './Loading';

function ServiceContainer({context}){
const { loading, sortedServices, services} = context;
 if(loading) {
   return (
     <Loading />
   )
 }
         return (
           <>          
           <ServiceFilter services={services} />
           <ServiceList services={sortedServices} />
 		      </>
        );
}

export default withServiceConsumer(ServiceContainer)




// import React from 'react';
// import ServiceFilter from './ServiceFilter';
// import ServiceList from './ServiceList';
// import {ServiceConsumer} from '../context';
// import Loading from './Loading';

// export default function ServiceContainer() {
// 	return (
//     <ServiceConsumer>
//     {
//       (value) => {
//         const {loading, sortedServices, services} = value
// if(loading) {
//   return (
//     <Loading />
//   )
// }
//         return (
//           <div>
//           helo from services container
//           <ServiceFilter services={services} />
//           <ServiceList services={sortedServices} />
// 		      </div>
//         );
//       }
//     }
//     </ServiceConsumer> 		
// 	);
// }