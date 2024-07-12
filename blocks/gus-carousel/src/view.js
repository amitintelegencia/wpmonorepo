/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
console.log( 'Hello World! (from create-block-gus-carousel block)' );
/* eslint-enable no-console */


import Splide from '@splidejs/splide';

// Import our default css theme for splide


// This should only be output on the frontend of the site - NOT the editor
console.log("hello from the frontend.")

document.addEventListener( 'DOMContentLoaded', () => {

  // Splide
  const splide = document.getElementById('image-carosuel-splide')
        const interval = parseInt(splide.dataset.interval) * 1000 || 3000;
        const isAutoplay = splide.dataset.autoplay==="true";
        const isPauseOnHover = splide.dataset.pauseonhover==="true";
        const direction = splide.dataset.direction;
        const imagesPerSlideMob=parseInt(splide.dataset.imagesperslidemob);
        const imagesPerSlideTab=parseInt(splide.dataset.imagesperslidetab);
        const imagesPerSlideDesk=parseInt(splide.dataset.imagesperslidedesk);
        const breakpoints = {
          // Mobile View (up to 640px)
          640: {
            perPage: imagesPerSlideMob,  // Show only one slide on screens below 640px
          },
          // Tablet View (between 640px and 1024px)
          1024: {
            perPage: imagesPerSlideTab,  // Show two slides on screens between 640px and 1024px
          },
          // Desktop View (above 1024px)
          2560: {  // "inf" represents infinity, targeting screens larger than 1024px
            perPage: imagesPerSlideDesk,  // Show three slides on desktops
          }
        };;
        
      new Splide(splide, {type: 'loop', autoplay: isAutoplay, perPage: 3, direction:direction,pauseOnHover: isPauseOnHover, interval:interval,breakpoints: breakpoints
}).mount()
  
  
})
