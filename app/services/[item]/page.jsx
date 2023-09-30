'use client'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import Servicespage from '../servicepage';


const ServicePage = ({params}) => {
  const [miniservice, setMiniservice] = useState(null)
 
  useEffect(() => {
    const fetchData = async () => {
      try {
       const service = params.item;
        const serviceName = service.substring(0, 3).toLowerCase();


        const querySnapshot = await getDocs(collection(db, "myservices"));
        
        const dataList = querySnapshot.docs.map(doc => doc.data());
       
        const [data] = dataList;
        const navData = data.services;


        const matchingService = navData.find(item => {
     
          return Object.keys(item).some(key => key.toLowerCase().startsWith(serviceName));
        });

        if(!matchingService) {
          return;
        }

        
      const miniservice = { miniservice: matchingService[Object.keys(matchingService)[0]] };
      setMiniservice(miniservice);
          
       
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };

    fetchData()
    
  }, []);
    return (
        <>
            {!miniservice ? <div className='text-4xl p-6'>Loading....</div> : <Servicespage miniservice={miniservice} />}
        </>
    )
  };
  
  export default ServicePage;