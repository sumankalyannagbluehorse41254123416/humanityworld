// "use client";

// const testimonials = [
//   {
//     img: "/images/1692614329541.jpg",
//     name: "Yeasin Arafat",
//     title: "Designer, LLCG Team",
//     text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//   },
//   {
//     img: "/images/1692614408003.jpg",
//     name: "Yeasin Arafat",
//     title: "Designer, LLCG Team",
//     text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
//   },
//   {
//     img: "/images/1692614451181.jpg",
//     name: "Yeasin Arafat",
//     title: "Designer, LLCG Team",
//     text: "An unknown printer took a galley of type and scrambled it.",
//   },
// ];

// export default function Testimonials() {
//   return (
//     <section className="testimonial-area">
//       <div className="container">
//         <div className="sec-title white-title">
//           <h2>Testimonials</h2>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {testimonials.map((item, index) => (
//             <div className="single-testimonial shadow-lg p-5 rounded-xl bg-white" key={index}>
//               <p className="text-gray-600">{item.text}</p>

//               <div className="client-info flex items-center gap-4 mt-4">
//                 <img
//                   className="w-14 h-14 rounded-full object-cover border"
//                   src={item.img}
//                   alt={item.name}
//                 />

//                 <div className="client-details">
//                   <h6 className="font-bold text-lg">{item.name}</h6>
//                   <span className="text-sm text-gray-500">{item.title}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }









"use client";

import { useEffect, useRef } from 'react';

const testimonials = [
    {
        img: "/images/1692614329541.jpg",
        name: "Yeasin Arafat",
        title: "Designer, LLCG Team",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been &amp;nbsp;the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley &amp;nbsp;of type and scrambled it to make a type specimen book.",
    },
    {
        img: "/images/1692614408003.jpg",
        name: "Yeasin Arafat",
        title: "Designer, LLCG Team",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been &amp;nbsp;the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley &amp;nbsp;of type and scrambled it to make a type specimen book.",
    },
    {
        img: "/images/1692614451181.jpg",
        name: "Yeasin Arafat",
        title: "Designer, LLCG Team",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been &amp;nbsp;the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley &amp;nbsp;of type and scrambled it to make a type specimen book.",
    },
];

export default function Testimonials() {
    const carouselRef = useRef(null);

    useEffect(() => {
        // Load jQuery
        const jqueryScript = document.createElement('script');
        jqueryScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js';
        jqueryScript.async = true;
        document.body.appendChild(jqueryScript);

        jqueryScript.onload = () => {
            // Load Owl Carousel JS
            const owlScript = document.createElement('script');
            owlScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js';
            owlScript.async = true;
            document.body.appendChild(owlScript);

            owlScript.onload = () => {
                // Initialize Owl Carousel
                const $ = (window as any).$;
                if ($ && carouselRef.current) {
                    $(carouselRef.current).owlCarousel({
                        loop: true,
                        margin: 24,
                        nav: true,
                        dots: true,
                        autoplay: true,
                        autoplayTimeout: 5000,
                        autoplayHoverPause: true,
                        responsive: {
                            0: {
                                items: 1
                            },
                            768: {
                                items: 2
                            },
                            1024: {
                                items: 2
                            }
                        }
                    });
                }
            };
        };

        // Load Owl Carousel CSS
        const owlCSS = document.createElement('link');
        owlCSS.rel = 'stylesheet';
        owlCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css';
        document.head.appendChild(owlCSS);

        const owlThemeCSS = document.createElement('link');
        owlThemeCSS.rel = 'stylesheet';
        owlThemeCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css';
        document.head.appendChild(owlThemeCSS);

        return () => {
            // Cleanup
            const $ = (window as any).$;
            if ($ && carouselRef.current) {
                $(carouselRef.current).trigger('destroy.owl.carousel');
            }
        };
    }, []);

    return (
        <section className="testimonial-area">
            <div className="container">
                <div className="sec-title white-title">
                    <h2>Testimonials</h2>
                </div>

                <div className="testimonial-content owl-carousel owl-theme" ref={carouselRef}>
                    {testimonials.map((item, index) => (
                        <div className="item" key={index}>
                            <div className="single-testimonial">
                                <p className="text-gray-600">{item.text}</p>

                                <div className="client-info">
                                    <div className="client-video">
                                        <a href="#">
                                            <img
                                                className=""
                                                src={item.img}
                                                alt={item.name}
                                            />
                                        </a>
                                    </div>

                                    <div className="client-details">
                                        <h6 className="font-bold text-lg">{item.name}</h6>
                                        <span className="text-sm text-gray-500">{item.title}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}