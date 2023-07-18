import React from 'react'
import './homestyle.css'
import Doctor from '../images/doctor.png';


const Home = () => {
  return (
    <>
     <div className='banner'>
      <img src="https://s3.ap-southeast-1.amazonaws.com/www.practostatic.com/consumer-home/desktop/images/1597423628/chronic_consumer_banner_dweb.png" alt='banner'/>
     </div>
     <div className='cards'>
     <div className='card'>
      <div className='card-image-1'>
        <img src={Doctor} alt='doctor'></img>
      </div>
      <div className='card-info'>
      <div className='card-heading'>
        Surgeries
      </div>
      <div className='card-subheading'>
        xyz
      </div>
      </div>
     </div>

     <div className='card'>
      <div className='card-image-2'>
        <img src={Doctor} alt='doctor'></img>
      </div>
      <div className='card-info'>
      <div className='card-heading'>
        Surgeries
      </div>
      <div className='card-subheading'>
        xyz
      </div>
      </div>
     </div>

     <div className='card'>
      <div className='card-image-3'>
        <img src={Doctor} alt='doctor'></img>
      </div>
      <div className='card-info'>
      <div className='card-heading'>
        Surgeries
      </div>
      <div className='card-subheading'>
        xyz
      </div>
      </div>
     </div>

     <div className='card'>
      <div className='card-image-4'>
        <img src={Doctor} alt='doctor'></img>
      </div>
      <div className='card-info'>
      <div className='card-heading'>
        Surgeries
      </div>
      <div className='card-subheading'>
        xyz
      </div>
      </div>
     </div>

     <div className='card'>
      <div className='card-image-5'>
        <img src={Doctor} alt='doctor'></img>
      </div>
      <div className='card-info'>
      <div className='card-heading'>
        Surgeries
      </div>
      <div className='card-subheading'>
        xyz
      </div>
      </div>
     </div>
     </div>




     <div className='Consult'>
      <div className='content'>
        <div className='u-margin-15'>
          <h2 className='head'>
            Consult Top Doctors Online For Any Health Concern
          </h2>
          <div className='body'>
            Private online consultations with verified doctors in all specialists
          </div>
          <button type='button' className='btn'>View All Specialities</button>
        </div>
      </div>
     </div>


    <div className='consult-cards'>

      <div className='card-c'>
      <div className='cardi'>
        <img src="https://www.practostatic.com/consult/consult-home/symptoms_icon/irregular-painful+period.png" alt='period doubts or pregnancy'></img>
      </div>
      <div className='card-in'>
      <div className='card-head'>
        Period doubts or Pregnancy
      </div>
      <div className='card-sub'>
        CONSULT NOW
      </div>
      </div>
     </div>




     <div className='card-c'>
      <div className='cardi'>
        <img src="https://www.practostatic.com/consult/consult-home/symptoms_icon/Acne.png" alt='skin issues'></img>
      </div>
      <div className='card-in'>
      <div className='card-head'>
        Acne, pimple or skin issue
      </div>
      <div className='card-sub'>
        CONSULT NOW
      </div>
      </div>
     </div>




     <div className='card-c'>
      <div className='cardi'>
        <img src="https://www.practo.com/consult/static/images/top-speciality-sexology.svg" alt='performance issues in bed'></img>
      </div>
      <div className='card-in'>
      <div className='card-head'>
        Performance issues in bed
      </div>
      <div className='card-sub'>
        CONSULT NOW
      </div>
      </div>
     </div>




     <div className='card-c'>
      <div className='cardi'>
        <img src="https://www.practo.com/consult/static/images/top-speciality-pediatric.svg " alt='child not feeling well'></img>
      </div>
      <div className='card-in'>
      <div className='card-head'>
        Child not feeling well
      </div>
      <div className='card-sub'>
        CONSULT NOW
      </div>
      </div>
     </div>



     <div className='card-c'>
      <div className='cardi'>
        <img src="https://www.practostatic.com/consult/consult-home/symptoms_icon/coughing.png" alt='cough, cold or fever'></img>
      </div>
      <div className='card-in'>
      <div className='card-head'>
        Cold, cough or <br/>fever
      </div>
      <div className='card-sub'>
        CONSULT NOW
      </div>
      </div>
     </div>



     <div className='card-c'>
      <div className='cardi'>
        <img src="https://www.practostatic.com/acred/search-assets/2/12-mental-wellness.png" alt="depression or anxiety"></img>
      </div>
      <div className='card-in'>
      <div className='card-head'>
        Depression or anxiety
      </div>
      <div className='card-sub'>
        CONSULT NOW
      </div>
      </div>
     </div>

    </div>
    
    </>
  )
}

export default Home