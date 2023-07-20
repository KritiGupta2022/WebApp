import React from 'react';
import TestimonialSlider from '../Components/ts';

const TestimonialSlider1 = () => {
  const testimonials = [
    {
      content: 'Very helpful. Far easier than doing same things on computer. Allows quick and easy search with speedy booking. Even maintains history of doctors visited.',
      author: 'Amit Sharma'
    },
    {
      content: "Very good app. Well thought out about booking/rescheduling/canceling an appointment. Also, Doctor's feedback mechanism is good and describes all the basics in a good way",
       author: 'Jyoti Bhatia'
    },

    {
        content: 'Very easy to book,maintain history. Hassle free from older versions of booking appointment via telephone.. Thanks Practo for making it simple.',
       author: 'Avinash Kumar'
    },
    // Add more testimonial objects as needed
  ];

  return (
    <div>
      <TestimonialSlider testimonials={testimonials} />
    </div>
  );
};

export default TestimonialSlider1;
