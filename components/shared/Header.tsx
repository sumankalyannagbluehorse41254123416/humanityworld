// "use client";

// import { useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import $ from "jquery";

// export default function Header() {
//   useEffect(() => {
//     // We load jQuery only in browser mode
//     if (typeof window !== "undefined") {
//       import("jquery").then(() => {
//         // Load Navigation script
//         (function ($: any) {
//           if ($.fn.navigation) {
//             $("#navigation1").navigation();
//             $("#always-hidden-nav").navigation({ hidden: true });
//           }
//         })($);
//       });
//     }
//   }, []);

//   return (
//     <header className="header_area" id="mynav">
//       <div className="main_header_area animated">
//         <div className="container">
//           <nav id="navigation1" className="navigation">
//             <div className="nav-header">
//               <Link className="nav-brand" href="/">
//                 <Image
//                   width={210}
//                   height={47.21}
//                   src="/images/HWF_logo2.png"
//                   alt="Logo"
//                 />
//               </Link>

//               <div>
//                 <Link href="/donate" className="donet_now_top">
//                   Donate Now
//                 </Link>
//               </div>

//               <div className="nav-toggle"></div>
//             </div>

//             {/* Menu */}
//             <div className="nav-menus-wrapper">
//               <ul className="nav-menu align-to-right">

//                 <li><Link href="/">Home</Link></li>

//                 <li>
//                   <a href="#">About Us</a>
//                   <ul className="nav-dropdown">
//                     <li><Link href="/who-we-are">Who We Are</Link></li>
//                     <li><Link href="/our-approach">Our Approach</Link></li>
//                     <li><Link href="/vision-and-mission">Vision & Mission</Link></li>
//                     <li><Link href="/our-team">Our Team</Link></li>
//                     <li><Link href="/our-volunteers">Our Volunteers</Link></li>
//                     <li><Link href="/our-mentors">Our Mentors</Link></li>
//                     <li><Link href="/careers">Careers</Link></li>
//                   </ul>
//                 </li>

//                 <li>
//                   <a href="#">Work</a>
//                   <ul className="nav-dropdown">
//                     <li><Link href="/education">Education</Link></li>
//                     <li><Link href="/health-care">Health Care</Link></li>
//                     <li><Link href="/women-hygiene">Women Hygiene</Link></li>
//                     <li><Link href="/homeless-support">Homeless Support</Link></li>
//                   </ul>
//                 </li>

//                 <li><Link href="/gallery">Gallery</Link></li>
//                 <li><Link href="/contact">Contact Us</Link></li>

//                 <li>
//                   <Link href="/donate" className="donet_button">
//                     Donate Now
//                   </Link>
//                 </li>

//               </ul>
//             </div>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// }



// "use client";

// import { useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import $ from "jquery";

// export default function Header() {
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       import("jquery").then(() => {
//         (function ($: any) {
//           if ($.fn.navigation) {
//             $("#navigation1").navigation();
//             $("#always-hidden-nav").navigation({ hidden: true });
//           }

//           // >>> Hover show/hide with smooth animation <
//           $(".nav-menu > li").each(function (this: HTMLElement) {
//             const li = $(this);
//             const drop = li.children(".nav-dropdown");

//             if (drop.length === 0) return;

//             // Initially hide the dropdown
//             drop.css({
//               overflow: "hidden",
//               height: "0px",
//               display: "none",
//             });

//             let animating = false;
//             let isHovering = false;

//             function animateHeight(
//               element: JQuery,
//               to: number,
//               duration = 250,
//               onComplete?: () => void
//             ) {
//               if (animating) return;
//               animating = true;

//               const start = element.height() || 0;
//               const startTime = performance.now();

//               function step(time: number) {
//                 const progress = Math.min((time - startTime) / duration, 1);
//                 const current = start + (to - start) * progress;
//                 element.height(current);

//                 if (progress < 1) {
//                   requestAnimationFrame(step);
//                 } else {
//                   animating = false;
//                   if (onComplete) onComplete();
//                 }
//               }

//               requestAnimationFrame(step);
//             }

//             li.hover(
//               function (this: HTMLElement) {
//                 // Mouse enters
//                 isHovering = true;
//                 drop.css({ display: "block" });
//                 const fullHeight = drop[0].scrollHeight;
//                 animateHeight(drop, fullHeight);
//               },
//               function (this: HTMLElement) {
//                 // Mouse leaves
//                 isHovering = false;
//                 animateHeight(drop, 0, 250, () => {
//                   // Only hide if still not hovering after animation completes
//                   if (!isHovering && drop.height() === 0) {
//                     drop.css({ display: "none" });
//                   }
//                 });
//               }
//             );
//           });
//           // <<< End smooth animation >>>

//         })($);
//       });
//     }
//   }, []);

//   return (
//     <header className="header_area" id="mynav">
//       <div className="main_header_area animated">
//         <div className="container">
//           <nav id="navigation1" className="navigation">
//             <div className="nav-header">
//               <Link className="nav-brand" href="/">
//                 <Image
//                   width={210}
//                   height={47.21}
//                   src="/images/HWF_logo2.png"
//                   alt="Logo"
//                 />
//               </Link>

//               <div>
//                 <Link href="/donate" className="donet_now_top">
//                   Donate Now
//                 </Link>
//               </div>

//               <div className="nav-toggle"></div>
//             </div>

//             <div className="nav-menus-wrapper">
//               <ul className="nav-menu align-to-right">

//                 <li><Link href="/">Home</Link></li>

//                 <li>
//                   <a href="#">About Us</a>
//                   <ul className="nav-dropdown">
//                     <li><Link href="/who-we-are">Who We Are</Link></li>
//                     <li><Link href="/our-approach">Our Approach</Link></li>
//                     <li><Link href="/vision-and-mission">Vision & Mission</Link></li>
//                     <li><Link href="/our-team">Our Team</Link></li>
//                     <li><Link href="/our-volunteers">Our Volunteers</Link></li>
//                     <li><Link href="/our-mentors">Our Mentors</Link></li>
//                     <li><Link href="/careers">Careers</Link></li>
//                   </ul>
//                 </li>

//                 <li>
//                   <a href="#">Work</a>
//                   <ul className="nav-dropdown">
//                     <li><Link href="/education">Education</Link></li>
//                     <li><Link href="/health-care">Health Care</Link></li>
//                     <li><Link href="/women-hygiene">Women Hygiene</Link></li>
//                     <li><Link href="/homeless-support">Homeless Support</Link></li>
//                   </ul>
//                 </li>

//                 <li><Link href="/gallery">Gallery</Link></li>
//                 <li><Link href="/contact">Contact Us</Link></li>

//                 <li>
//                   <Link href="/donate" className="donet_button">
//                     Donate Now
//                   </Link>
//                 </li>

//               </ul>
//             </div>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// }





// "use client";

// import { useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import $ from "jquery";

// export default function Header() {
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       import("jquery").then(() => {
//         (function ($: any) {

//           // >>> Auto add responsive classes based on width <<<
//           function applyNavMode() {
//             const nav = $("#navigation1");
//             if (!nav.length) return;

//             if (window.innerWidth < 992) {
//               nav.removeClass("navigation-landscape").addClass("navigation-portrait");
//             } else {
//               nav.removeClass("navigation-portrait").addClass("navigation-landscape");
//             }
//           }

//           applyNavMode();
//           $(window).on("resize", applyNavMode);
//           // <<< End responsive mode >>>


//           // >>> Initialize Navigation Plugin <<<
//           if ($.fn.navigation) {
//             $("#navigation1").navigation();
//             $("#always-hidden-nav").navigation({ hidden: true });
//           }


//           // >>> Hover dropdown smooth animation <<<
//           $(".nav-menu > li").each(function (this: HTMLElement) {
//             const li = $(this);
//             const drop = li.children(".nav-dropdown");

//             if (drop.length === 0) return;

//             drop.css({
//               overflow: "hidden",
//               height: "0px",
//               display: "none",
//             });

//             let animating = false;
//             let isHovering = false;

//             function animateHeight(
//               element: JQuery,
//               to: number,
//               duration = 250,
//               onComplete?: () => void
//             ) {
//               if (animating) return;
//               animating = true;

//               const start = element.height() || 0;
//               const startTime = performance.now();

//               function step(time: number) {
//                 const progress = Math.min((time - startTime) / duration, 1);
//                 const current = start + (to - start) * progress;
//                 element.height(current);

//                 if (progress < 1) {
//                   requestAnimationFrame(step);
//                 } else {
//                   animating = false;
//                   if (onComplete) onComplete();
//                 }
//               }

//               requestAnimationFrame(step);
//             }

//             li.hover(
//               function () {
//                 isHovering = true;
//                 drop.css({ display: "block" });
//                 const fullHeight = drop[0].scrollHeight;
//                 animateHeight(drop, fullHeight);
//               },
//               function () {
//                 isHovering = false;
//                 animateHeight(drop, 0, 250, () => {
//                   if (!isHovering && drop.height() === 0) {
//                     drop.css({ display: "none" });
//                   }
//                 });
//               }
//             );
//           });
//           // <<< End smooth animation >>>


//           // >>> Mobile nav-toggle + Overlay + Transition Control <<<
//           const overlay = $(".nav-overlay-panel");
//           const wrapper = $(".nav-menus-wrapper");

//           // Toggle open/close
//           $(".nav-toggle").on("click", function () {
//             wrapper.toggleClass("nav-menus-wrapper-open");

//             if (wrapper.hasClass("nav-menus-wrapper-open")) {
//               wrapper.css("transition-property", "left");
//               overlay.css("display", "block");
//             } else {
//               wrapper.css("transition-property", "none");
//               overlay.css("display", "none");
//             }
//           });

//           // Close button
//           $(".nav-menus-wrapper-close-button").on("click", function () {
//             wrapper.removeClass("nav-menus-wrapper-open");
//             wrapper.css("transition-property", "none");
//             overlay.css("display", "none");
//           });

//           // Click overlay to close
//           overlay.on("click", function () {
//             wrapper.removeClass("nav-menus-wrapper-open");
//             wrapper.css("transition-property", "none");
//             overlay.css("display", "none");
//           });
//           // <<< End Overlay & Transition Control >>>


//         })($);
//       });
//     }
//   }, []);

//   return (
//     <header className="header_area" id="mynav">
//       <div className="main_header_area animated">
//         <div className="container">
//           <nav id="navigation1" className="navigation">
//             <div className="nav-header">

//               <Link className="nav-brand" href="/">
//                 <Image
//                   width={210}
//                   height={47.21}
//                   src="/images/HWF_logo2.png"
//                   alt="Logo"
//                 />
//               </Link>

//               <div>
//                 <Link href="/donate" className="donet_now_top">
//                   Donate Now
//                 </Link>
//               </div>

//               <div className="nav-toggle"></div>
//             </div>

//             <div className="nav-menus-wrapper">
//               <span className="nav-menus-wrapper-close-button">✕</span>

//               <ul className="nav-menu align-to-right">

//                 <li><Link href="/">Home</Link></li>

//                 <li>
//                   <a href="#">About Us</a>
//                   <ul className="nav-dropdown">
//                     <li><Link href="/who-we-are">Who We Are</Link></li>
//                     <li><Link href="/our-approach">Our Approach</Link></li>
//                     <li><Link href="/vision-and-mission">Vision & Mission</Link></li>
//                     <li><Link href="/our-team">Our Team</Link></li>
//                     <li><Link href="/our-volunteers">Our Volunteers</Link></li>
//                     <li><Link href="/our-mentors">Our Mentors</Link></li>
//                     <li><Link href="/careers">Careers</Link></li>
//                   </ul>
//                 </li>

//                 <li>
//                   <a href="#">Work</a>
//                   <ul className="nav-dropdown">
//                     <li><Link href="/education">Education</Link></li>
//                     <li><Link href="/health-care">Health Care</Link></li>
//                     <li><Link href="/women-hygiene">Women Hygiene</Link></li>
//                     <li><Link href="/homeless-support">Homeless Support</Link></li>
//                     <li><Link href="/animal-care">Animal care</Link></li>
//                     <li><Link href="/sponsorship">Sponsorship</Link></li>
//                     <li><Link href="/achievements">Achievements</Link></li>
//                     <li><Link href="/testimonials">Testimonials</Link></li>
//                   </ul>
//                 </li>

//                 <li><Link href="/gallery">Gallery</Link></li>
//                 <li><Link href="/contact">Contact Us</Link></li>

//                 <li>
//                   <Link href="/donate" className="donet_button">
//                     Donate Now
//                   </Link>
//                 </li>

//               </ul>
//             </div>

//             <div
//               className="nav-overlay-panel"
//               style={{
//                 backgroundColor: "rgba(0, 0, 0, 0.5)",
//                 display: "none",
//               }}
//             ></div>

//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// }

"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("jquery").then((jquery) => {
        const $ = jquery.default;

        // >>> Auto add responsive classes based on width <<<
        function applyNavMode() {
          const nav = $("#navigation1");
          if (!nav.length) return;

          if (window.innerWidth < 992) {
            nav.removeClass("navigation-landscape").addClass("navigation-portrait");
          } else {
            nav.removeClass("navigation-portrait").addClass("navigation-landscape");
          }
        }

        applyNavMode();
        $(window).on("resize", applyNavMode);
        // <<< End responsive mode >>>

        // >>> Initialize Navigation Plugin <<<
        // Check if navigation plugin exists and is a function
        if (typeof $.fn.navigation === "function") {
          $("#navigation1").navigation();
          $("#always-hidden-nav").navigation({ hidden: true });
        }

        // >>> Global variable to track open dropdowns <<<
        let activeDropdown: JQuery | null = null;
        let isAnimating = false;

        // >>> Hover dropdown smooth animation with single open dropdown <<<
        $(".nav-menu > li").each(function () {
          const li = $(this);
          const drop = li.children(".nav-dropdown");

          if (drop.length === 0) return;

          drop.css({
            overflow: "hidden",
            height: "0px",
            display: "none",
          });

          li.hover(
            function () {
              // Mouse enters - close any other open dropdown first
              if (activeDropdown && activeDropdown[0] !== drop[0]) {
                closeDropdown(activeDropdown, () => {
                  openDropdown(drop);
                });
              } else {
                openDropdown(drop);
              }
            },
            function () {
              // Mouse leaves - close after delay to allow moving to dropdown
              const currentDropdown = drop;
              setTimeout(() => {
                // Check if mouse is still on the li or its dropdown
                if (!li.is(":hover") && !currentDropdown.is(":hover")) {
                  closeDropdown(currentDropdown);
                }
              }, 150);
            }
          );

          // Also handle hover on the dropdown itself
          drop.hover(
            function () {
              // Mouse enters dropdown - keep it open
              if (activeDropdown && activeDropdown[0] !== drop[0]) {
                closeDropdown(activeDropdown, () => {
                  openDropdown(drop);
                });
              }
            },
            function () {
              // Mouse leaves dropdown
              setTimeout(() => {
                if (!li.is(":hover") && !drop.is(":hover")) {
                  closeDropdown(drop);
                }
              }, 150);
            }
          );
        });

        // >>> Open dropdown function <<<
        function openDropdown(drop: JQuery) {
          if (isAnimating) return;
          
          // If this dropdown is already open, do nothing
          if (activeDropdown && activeDropdown[0] === drop[0]) return;
          
          isAnimating = true;
          activeDropdown = drop;
          
          drop.css({ 
            display: "block",
            opacity: 0 
          });
          const fullHeight = drop[0].scrollHeight;
          
          // Animate height and opacity simultaneously
          drop.animate(
            { 
              height: fullHeight,
              opacity: 1 
            },
            {
              duration: 250,
              easing: "swing",
              complete: function () {
                drop.css({ height: "auto", overflow: "visible" });
                isAnimating = false;
              }
            }
          );
        }

        // >>> Close dropdown function <<<
        function closeDropdown(drop: JQuery, onComplete?: () => void) {
          if (isAnimating) return;
          
          isAnimating = true;
          
          // Get current height
          const currentHeight = drop.height() || 0;
          drop.css({ height: currentHeight, overflow: "hidden" });
          
          // Animate height and opacity simultaneously
          drop.animate(
            { 
              height: 0,
              opacity: 0 
            },
            {
              duration: 200,
              easing: "swing",
              complete: function () {
                drop.css({ 
                  display: "none", 
                  height: "0px", 
                  opacity: 1 
                });
                if (activeDropdown && activeDropdown[0] === drop[0]) {
                  activeDropdown = null;
                }
                isAnimating = false;
                if (onComplete) onComplete();
              }
            }
          );
        }

        // >>> Close all dropdowns when clicking outside <<<
        $(document).on("click", function (event: JQuery.ClickEvent) {
          const target = $(event.target);
          if (!target.closest(".nav-menu > li").length) {
            $(".nav-dropdown").each(function () {
              const drop = $(this);
              if (drop.is(":visible")) {
                closeDropdown(drop);
              }
            });
          }
        });

        // >>> Mobile nav-toggle + Overlay + Transition Control <<<
        const overlay = $(".nav-overlay-panel");
        const wrapper = $(".nav-menus-wrapper");

        // Toggle open/close
        $(".nav-toggle").on("click", function () {
          wrapper.toggleClass("nav-menus-wrapper-open");

          if (wrapper.hasClass("nav-menus-wrapper-open")) {
            wrapper.css("transition-property", "left");
            overlay.css("display", "block");
          } else {
            wrapper.css("transition-property", "none");
            overlay.css("display", "none");
          }
        });

        // Close button
        $(".nav-menus-wrapper-close-button").on("click", function () {
          wrapper.removeClass("nav-menus-wrapper-open");
          wrapper.css("transition-property", "none");
          overlay.css("display", "none");
        });

        // Click overlay to close
        overlay.on("click", function () {
          wrapper.removeClass("nav-menus-wrapper-open");
          wrapper.css("transition-property", "none");
          overlay.css("display", "none");
        });
        // <<< End Overlay & Transition Control >>>

      });
    }
  }, []);

  return (
    <header className="header_area" id="mynav">
      <div className="main_header_area animated">
        <div className="container">
          <nav id="navigation1" className="navigation">
            <div className="nav-header">

              <Link className="nav-brand" href="/">
                <Image
                  width={210}
                  height={47.21}
                  src="/images/HWF_logo2.png"
                  alt="Logo"
                />
              </Link>

              <div>
                <Link href="/donate" className="donet_now_top">
                  Donate Now
                </Link>
              </div>

              <div className="nav-toggle"></div>
            </div>

            <div className="nav-menus-wrapper">
              <span className="nav-menus-wrapper-close-button">✕</span>

              <ul className="nav-menu align-to-right">

                <li><Link href="/">Home</Link></li>

                <li>
                  <a href="#">About Us</a>
                  <ul className="nav-dropdown">
                    <li><Link href="/who-we-are">Who We Are</Link></li>
                    <li><Link href="/our-approach">Our Approach</Link></li>
                    <li><Link href="/vision-and-mission">Vision & Mission</Link></li>
                    <li><Link href="/our-team">Our Team</Link></li>
                    <li><Link href="/our-volunteers">Our Volunteers</Link></li>
                    <li><Link href="/our-mentors">Our Mentors</Link></li>
                    <li><Link href="/careers">Careers</Link></li>
                  </ul>
                </li>

                <li>
                  <a href="#">Work</a>
                  <ul className="nav-dropdown">
                    <li><Link href="/education">Education</Link></li>
                    <li><Link href="/health-care">Health Care</Link></li>
                    <li><Link href="/women-hygiene">Women Hygiene</Link></li>
                    <li><Link href="/homeless-support">Homeless Support</Link></li>
                    <li><Link href="/animal-care">Animal care</Link></li>
                    <li><Link href="/sponsorship">Sponsorship</Link></li>
                    <li><Link href="/achievements">Achievements</Link></li>
                    <li><Link href="/testimonials">Testimonials</Link></li>
                  </ul>
                </li>

                <li><Link href="/gallery">Gallery</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>

                <li>
                  <Link href="/donate" className="donet_button">
                    Donate Now
                  </Link>
                </li>

              </ul>
            </div>

            <div
              className="nav-overlay-panel"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "none",
              }}
            ></div>

          </nav>
        </div>
      </div>
    </header>
  );
}