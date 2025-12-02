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
