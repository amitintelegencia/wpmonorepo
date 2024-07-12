/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/cards/blogs-news-card.js":
/*!**************************************!*\
  !*** ./src/cards/blogs-news-card.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const BlogsAndNews = ({
  postValues,
  index,
  props
}) => {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    showMedia,
    showTitle,
    btntext,
    btnlinkTarget
  } = props.attributes;
  const HeadingComponent = `h${attributes.headingTagLevel}`;
  const headingStyle = {
    "--heading-bg-color": attributes.headingBgColor,
    "--heading-color": attributes.headingTextColor
  };
  const paragraphStyle = {
    "--paragraph-bg-color": attributes.paragraphBgColor,
    "--paragraph-color": attributes.paragraphTextColor,
    "--paragraph-font-size": attributes.paragraphFontSize + attributes.paragraphUnits
  };
  const btnStyle = {
    "--btn-text-color": attributes.btntextColor,
    "--btn-outline-color": attributes.btnoutlineColor,
    "--border-radius": attributes.borderRadius + "px",
    "--border-width": attributes.borderWidth + "px",
    "--btn-background-color": attributes.btnbackgroundColor,
    "--btn-hover-color": attributes.btnHoverColor,
    "--btn-hover-text-color": attributes.btnHoverTextColor,
    "--btn-padding-left": attributes.bttnPaddingX + "rem",
    "--btn-padding-right": attributes.bttnPaddingX + "rem",
    "--btn-padding-top": attributes.bttnPaddingY + "rem",
    "--btn-padding-bottom": attributes.bttnPaddingY + "rem"
  };
  const regex = /(<([^>]+)>)/gi;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, showMedia && postValues.jetpack_featured_media_url && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: postValues.jetpack_featured_media_url,
    alt: postValues.name,
    className: "img-fluid"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "post-date",
    style: {
      color: attributes.postDateTextColor
    }
  }, postValues.type.charAt(0).toUpperCase() + postValues.type.slice(1), " - ", moment(postValues.date, 'YYYY-MM-DD hh:mm:ss').format('MMMM DD, YYYY')), showTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(HeadingComponent, {
    className: `richtext-heading text-${attributes.headingApperance} text-${attributes.headingAlign} text-wrap`,
    style: headingStyle
  }, postValues.title.rendered), props.attributes.postDescription && postValues.excerpt && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: `richtext-paragraph text-${attributes.paragraphApperance} text-${attributes.paragraphAlign} text-wrap`,
    style: paragraphStyle
  }, postValues.excerpt.rendered && postValues.excerpt.rendered.replace(regex, "").split(" ").length > 50 ? postValues.excerpt.rendered.replace(regex, "").split(" ").slice(0, 30).join(" ") + "..." : postValues.excerpt.rendered.replace(regex, "")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `d-flex `
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: postValues.link,
    target: `${btnlinkTarget}`,
    className: `richtext-button ${attributes.readMoreClass} `,
    style: btnStyle
  }, `${btntext ? `${btntext}` : "Read more"}`)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogsAndNews);

/***/ }),

/***/ "./src/cards/course.js":
/*!*****************************!*\
  !*** ./src/cards/course.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style.scss */ "./src/style.scss");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);



const Course = ({
  postValues,
  index,
  props
}) => {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    showMedia,
    showTitle,
    btntext,
    btnlinkTarget
  } = props.attributes;
  const category = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => select('core').getEntityRecord('taxonomy', 'course_category', postValues.course_category[0]));
  const HeadingComponent = `h${attributes.headingTagLevel}`;
  const headingStyle = {
    "--heading-bg-color": attributes.headingBgColor,
    "--heading-color": attributes.headingTextColor,
    "--heading-hover-color": category?.meta?.header_color
  };
  const paragraphStyle = {
    "--paragraph-bg-color": attributes.paragraphBgColor,
    "--paragraph-color": attributes.paragraphTextColor,
    "--paragraph-font-size": attributes.paragraphFontSize + attributes.paragraphUnits
  };
  const btnStyle = {
    "--btn-text-color": attributes.btntextColor,
    "--btn-outline-color": attributes.btnoutlineColor,
    "--border-radius": attributes.borderRadius + "px",
    "--border-width": attributes.borderWidth + "px",
    "--btn-background-color": attributes.btnbackgroundColor,
    "--btn-hover-color": attributes.btnHoverColor,
    "--btn-hover-text-color": "red",
    "--btn-padding-left": attributes.bttnPaddingX + "rem",
    "--btn-padding-right": attributes.bttnPaddingX + "rem",
    "--btn-padding-top": attributes.bttnPaddingY + "rem",
    "--btn-padding-bottom": attributes.bttnPaddingY + "rem"
  };
  const regex = /(<([^>]+)>)/gi;

  // const terms =  useSelect((select) => {
  // 	return select('core').getEntityRecord('taxonomy', 'course', postValues.course_category[0]);
  // });

  // const datacat = useSelect((select) => {
  //     return select('core').getEntityRecords('taxonomy', 'course', {
  //         id: 17
  //     });
  // });

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, showMedia && postValues.featured_image_src && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: postValues.featured_image_src,
    alt: postValues.name,
    className: "img-fluid"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: {
      color: category?.meta?.header_color
    }
  }, category?.name), showTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(HeadingComponent, {
    className: `richtext-heading text-${attributes.headingApperance} text-${attributes.headingAlign} text-wrap`,
    style: headingStyle
  }, postValues.title.rendered), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "post-date",
    style: {
      color: attributes.postDateTextColor
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Intake: ", postValues.course_intake), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Duration: ", postValues.course_duration), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Study Mode: ", postValues.course_studymode), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Price: List Price \u20AC", postValues.course_price_list, " / IBAT Price \u20AC", postValues.course_price_ibat)), props.attributes.postDescription && postValues.excerpt && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: `richtext-paragraph text-${attributes.paragraphApperance} text-${attributes.paragraphAlign} text-wrap`,
    style: paragraphStyle
  }, postValues.excerpt.rendered && postValues?.excerpt.rendered.replace(regex, "").split(" ").length > 50 ? postValues.excerpt.rendered.replace(regex, "").split(" ").slice(0, 30).join(" ") + "..." : postValues.excerpt.rendered.replace(regex, "")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `d-flex `
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: postValues.link,
    target: `${btnlinkTarget}`,
    className: `richtext-button ${attributes.readMoreClass} `,
    style: btnStyle
  }, `${btntext ? `${btntext}` : "Read more"}`)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Course);

/***/ }),

/***/ "./src/cards/team-member.js":
/*!**********************************!*\
  !*** ./src/cards/team-member.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const TeamMemberCard = ({
  postValues,
  index,
  props
}) => {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    showMedia,
    showTitle,
    btntext,
    btnlinkTarget
  } = props.attributes;
  const HeadingComponent = `h${attributes.headingTagLevel}`;
  const headingStyle = {
    "--heading-bg-color": attributes.headingBgColor,
    "--heading-color": attributes.headingTextColor
  };
  const paragraphStyle = {
    "--paragraph-bg-color": attributes.paragraphBgColor,
    "--paragraph-color": attributes.paragraphTextColor,
    "--paragraph-font-size": attributes.paragraphFontSize + attributes.paragraphUnits
  };
  const btnStyle = {
    "--btn-text-color": attributes.btntextColor,
    "--btn-outline-color": attributes.btnoutlineColor,
    "--border-radius": attributes.borderRadius + "px",
    "--border-width": attributes.borderWidth + "px",
    "--btn-background-color": attributes.btnbackgroundColor,
    "--btn-hover-color": attributes.btnHoverColor,
    "--btn-hover-text-color": attributes.btnHoverTextColor,
    "--btn-padding-left": attributes.bttnPaddingX + "rem",
    "--btn-padding-right": attributes.bttnPaddingX + "rem",
    "--btn-padding-top": attributes.bttnPaddingY + "rem",
    "--btn-padding-bottom": attributes.bttnPaddingY + "rem"
  };
  const regex = /(<([^>]+)>)/gi;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, showMedia && postValues.featured_image_src && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: postValues.featured_image_src,
    alt: postValues.name,
    className: "img-fluid"
  }), showTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(HeadingComponent, {
    className: `richtext-heading text-${attributes.headingApperance} text-${attributes.headingAlign} text-wrap`,
    style: headingStyle
  }, postValues.title.rendered), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "post-date",
    style: {
      color: attributes.postDateTextColor
    }
  }, postValues.team_title + ' ' + postValues.team_role), props.attributes.postDescription && postValues.excerpt && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: `richtext-paragraph text-${attributes.paragraphApperance} text-${attributes.paragraphAlign} text-wrap`,
    style: paragraphStyle
  }, postValues.excerpt.rendered && postValues.excerpt.rendered.replace(regex, "").split(" ").length > 50 ? postValues.excerpt.rendered.replace(regex, "").split(" ").slice(0, 30).join(" ") + "..." : postValues.excerpt.rendered.replace(regex, "")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `d-flex `
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: postValues.link,
    target: `${btnlinkTarget}`,
    className: `richtext-button ${attributes.readMoreClass} `,
    style: btnStyle
  }, `${btntext ? `${btntext}` : "Read more"}`)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TeamMemberCard);

/***/ }),

/***/ "./src/cards/testimonials.js":
/*!***********************************!*\
  !*** ./src/cards/testimonials.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Testimonials = ({
  postValues,
  index,
  props
}) => {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    showMedia,
    showTitle,
    btntext,
    btnlinkTarget
  } = props.attributes;
  const HeadingComponent = `h${attributes.headingTagLevel}`;
  const headingStyle = {
    "--heading-bg-color": attributes.headingBgColor,
    "--heading-color": attributes.headingTextColor
  };
  const paragraphStyle = {
    "--paragraph-bg-color": attributes.paragraphBgColor,
    "--paragraph-color": attributes.paragraphTextColor,
    "--paragraph-font-size": attributes.paragraphFontSize + attributes.paragraphUnits
  };
  const btnStyle = {
    "--btn-text-color": attributes.btntextColor,
    "--btn-outline-color": attributes.btnoutlineColor,
    "--border-radius": attributes.borderRadius + "px",
    "--border-width": attributes.borderWidth + "px",
    "--btn-background-color": attributes.btnbackgroundColor,
    "--btn-hover-color": attributes.btnHoverColor,
    "--btn-hover-text-color": attributes.btnHoverTextColor,
    "--btn-padding-left": attributes.bttnPaddingX + "rem",
    "--btn-padding-right": attributes.bttnPaddingX + "rem",
    "--btn-padding-top": attributes.bttnPaddingY + "rem",
    "--btn-padding-bottom": attributes.bttnPaddingY + "rem"
  };
  const regex = /(<([^>]+)>)/gi;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, showMedia && postValues.featured_image_src && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: postValues.featured_image_src,
    alt: postValues.name,
    className: "img-fluid"
  }), showTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(HeadingComponent, {
    className: `richtext-heading text-${attributes.headingApperance} text-${attributes.headingAlign} text-wrap`,
    style: headingStyle
  }, postValues.title.rendered), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "post-date",
    style: {
      color: attributes.postDateTextColor
    }
  }, postValues.designation), props.attributes.postDescription && postValues.excerpt && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: `richtext-paragraph text-${attributes.paragraphApperance} text-${attributes.paragraphAlign} text-wrap`,
    style: paragraphStyle
  }, postValues.excerpt.rendered && postValues.excerpt.rendered.replace(regex, "").split(" ").length > 50 ? postValues.excerpt.rendered.replace(regex, "").split(" ").slice(0, 30).join(" ") + "..." : postValues.excerpt.rendered.replace(regex, "")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `d-flex `
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: postValues.link,
    target: `${btnlinkTarget}`,
    className: `richtext-button ${attributes.readMoreClass} `,
    style: btnStyle
  }, `${btntext ? `${btntext}` : "Read more"}`)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonials);

/***/ }),

/***/ "./src/components/linting-template.js":
/*!********************************************!*\
  !*** ./src/components/linting-template.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cards_blogs_news_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../cards/blogs-news-card */ "./src/cards/blogs-news-card.js");
/* harmony import */ var _cards_team_member__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../cards/team-member */ "./src/cards/team-member.js");
/* harmony import */ var _cards_testimonials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../cards/testimonials */ "./src/cards/testimonials.js");
/* harmony import */ var _cards_course__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../cards/course */ "./src/cards/course.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);







const ListingTemplate = ({
  cptTaxonomyValue,
  cptAllPostTypeValue,
  cptAllPostPaginatedData,
  props
}) => {
  const categories = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.useSelect)(select => {
    return select('core').getEntityRecords('taxonomy', cptTaxonomyValue, {
      per_page: -1,
      type: cptAllPostTypeValue // Filter categories by custom post type
    });
  });
  let checkedItems = [];
  const handleFilterCheckbox = event => {
    var checkboxes = document.querySelectorAll('.post-filter input[type="checkbox"][name="filter"]:checked');
    console.log(checkboxes);
    // Loop through each checked checkbox and push its value to yourArray
    checkboxes.forEach(function (checkbox) {
      checkedItems.push(checkbox.value);
    });
    console.log(checkboxes);
    props.setAttributes({
      listingFilter: checkedItems
    });
  };
  console.log(cptAllPostPaginatedData);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container post-filter"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row g-2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-md-3"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "processor p-2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "heading d-flex justify-content-between align-items-center"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h6", {
    className: "text-uppercase"
  }, "Categories"), " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "--")), Array.isArray(categories) && categories?.map((catValues, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "d-flex justify-content-between mt-2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "form-check"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "form-check-input",
    onChange: handleFilterCheckbox,
    type: "checkbox",
    name: "filter",
    value: parseInt(catValues.id)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "form-check-label",
    htmlFor: `checkbox-${parseInt(catValues.id)}`
  }, catValues.name)))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-md-9"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `row row-cols-lg-${props.attributes.columnDesktop} row-cols-md-${props.attributes.columnTab} row-cols-${props.attributes.columnMob}`
  }, !Array.isArray(cptAllPostPaginatedData) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, " Loading...."), Array.isArray(cptAllPostPaginatedData) && cptAllPostPaginatedData?.map((postValues, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: index,
    className: "col " + postValues.type
  }, postValues.type == 'post' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_cards_blogs_news_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    postValues: postValues,
    index: index,
    props: props
  }), postValues.type == 'team_member' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_cards_team_member__WEBPACK_IMPORTED_MODULE_2__["default"], {
    postValues: postValues,
    index: index,
    props: props
  }), postValues.type == 'testimonial' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_cards_testimonials__WEBPACK_IMPORTED_MODULE_3__["default"], {
    postValues: postValues,
    index: index,
    props: props
  }), postValues.type == 'course' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_cards_course__WEBPACK_IMPORTED_MODULE_4__["default"], {
    postValues: postValues,
    index: index,
    props: props
  })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListingTemplate);

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _cards_blogs_news_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cards/blogs-news-card */ "./src/cards/blogs-news-card.js");
/* harmony import */ var _components_linting_template__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/linting-template */ "./src/components/linting-template.js");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */





/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

// Function to fetch paginated posts



function Edit(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    postTypeValue,
    postImageIcon,
    postNumber,
    columnMob,
    columnTab,
    columnDesktop,
    postDescription,
    postOrder,
    postOrderBy,
    featuredPost,
    showMedia,
    showTitle,
    currentPostCategory,
    postColor,
    PostAllCategory,
    relatedPosts,
    PostAttribute,
    currentPostTags,
    cptAllPostTypeValue,
    postsPerPage,
    PaginationFontSize,
    paginationTextColor,
    paginationBgColor,
    cptAllPostPaginatedData,
    listingFilter
  } = props.attributes;
  const {
    className,
    ...blockProps
  } = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)();
  const [paragraphCustom, setParagraphCustom] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const alignment = ["start", "center", "end"];
  const target = ["_blank", "_self"];
  const tagLevel = [1, 2, 3, 4, 5, 6]; // this will help in selecting the tag level of heading
  const [currentPage, setCurrentPage] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
  const appereance = [{
    name: "Aa",
    value: "capitalize"
  }, {
    name: "AA",
    value: "uppercase"
  }, {
    name: "aa",
    value: "lowercase"
  }, {
    name: "None",
    value: ""
  }];
  let fontLevel = [{
    name: "S",
    value: 0.9,
    unit: "rem"
  }, {
    name: "M",
    value: 1.05,
    unit: "rem"
  }, {
    name: "L",
    value: 1.2,
    unit: "rem"
  }, {
    name: "XL",
    value: 2.5,
    unit: "rem"
  }, {
    name: "XXL",
    value: 3.27,
    unit: "rem"
  }];
  const {
    postTypes,
    taxonomies,
    allCategories,
    currentPostType,
    allTags
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    return {
      postTypes: select("core").getPostTypes({
        per_page: -1
      }),
      taxonomies: select("core").getTaxonomies(),
      allCategories: select('core').getEntityRecords('taxonomy', 'category'),
      allTags: select('core').getEntityRecords('taxonomy', 'post_tag'),
      currentPostType: select('core/editor').getCurrentPostType()
    };
  }, []);
  const HandleCategorySelection = value => {
    props.setAttributes({
      currentPostCategory: value
    });
  };
  const HandleTagSelection = value => {
    props.setAttributes({
      currentPostTags: value
    });
  };
  const allCategoryPosts = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const {
      getEntityRecords
    } = select('core');
    const {
      getCurrentPostId
    } = select('core/editor');
    const currentPostId = getCurrentPostId();
    const currentPost = select('core').getEntityRecord('postType', 'post', currentPostId);
    const currentPostType = currentPost?.type;

    // Get the category ID based on slug
    const categoryId = select('core').getEntityRecords('taxonomy', 'category', {
      slug: currentPostCategory
    })?.[0]?.id;

    // Fetch posts of the current post type filtered by category
    return getEntityRecords('postType', currentPostType, {
      categories: categoryId,
      per_page: props.attributes.postNumber,
      order: props.attributes.postOrder,
      context: "view"
    }, "_embed: true");
  });
  let cptTaxonomyValue = '';
  switch (cptAllPostTypeValue) {
    case 'team_member':
      cptTaxonomyValue = 'member_type';
      break;
    case 'course':
      cptTaxonomyValue = 'course_category';
      break;
    case 'testimonial':
      cptTaxonomyValue = 'testimonial_category';
      break;
    default:
      cptTaxonomyValue = 'category';
      break;
  }
  const paginationStyle = {
    "--pagination-bg-color": paginationBgColor,
    "--pagination-color": paginationTextColor,
    "--pagination-fontsize": PaginationFontSize + "px"
  };
  const cptAllPosts = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    return select('core').getEntityRecords('postType', cptAllPostTypeValue, {
      order: props.attributes.postOrder,
      [cptTaxonomyValue]: listingFilter,
      context: "view"
    });
  });
  const cptAllPostsPaginate = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    return select('core').getEntityRecords('postType', cptAllPostTypeValue, {
      order: props.attributes.postOrder,
      per_page: props.attributes.postsPerPage,
      [cptTaxonomyValue]: listingFilter,
      page: currentPage,
      context: "view"
    }, "_embed: true");
  });
  props.setAttributes({
    cptAllPostPaginatedData: cptAllPostsPaginate
  });
  const paginate = pageNumber => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(cptAllPosts?.length / postsPerPage);
  const renderPaginationButtons = () => {
    const buttons = [];
    const maxButtons = 3;
    const halfMaxButtons = Math.floor(maxButtons / 2);
    const startPage = Math.max(currentPage - halfMaxButtons, 1);
    const endPage = Math.min(startPage + maxButtons - 1, totalPages);
    buttons.push(renderPreviousButton());
    for (let i = startPage; i <= endPage; i++) {
      buttons.push((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
        key: i,
        className: `page-item ${currentPage === i ? 'active' : ''}`
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        className: "page-link pagination-fontsize",
        onClick: () => paginate(i),
        style: paginationStyle
      }, i)));
    }
    if (endPage < totalPages) {
      buttons.push((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
        key: "dots",
        className: "page-item disabled "
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: "page-link pagination-fontsize",
        style: paginationStyle
      }, "...")));
      buttons.push((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
        key: totalPages,
        className: `page-item ${currentPage === totalPages ? 'active' : ''}`
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        className: "page-link pagination-fontsize",
        onClick: () => paginate(totalPages),
        style: paginationStyle
      }, totalPages)));
    }
    buttons.push(renderNextButton());
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: "pagination"
    }, buttons);
  };
  const renderPreviousButton = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: `page-item ${currentPage === 1 ? 'disabled' : ''}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "page-link pagination-fontsize",
    style: paginationStyle,
    onClick: () => paginate(currentPage - 1)
  }, "\xAB"));
  const renderNextButton = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: `page-item ${currentPage === totalPages ? 'disabled' : ''}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "page-link pagination-fontsize",
    style: paginationStyle,
    onClick: () => paginate(currentPage + 1)
  }, "\xBB"));
  const allTagsPosts = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    return select('core').getEntityRecords('postType', 'post', {
      tags: currentPostTags,
      per_page: props.attributes.postNumber,
      order: props.attributes.postOrder,
      context: "view"
    });
  });
  if (PostAttribute == "category") {
    props.setAttributes({
      PostAllCategory: allCategoryPosts
    });
  } else {
    props.setAttributes({
      PostAllCategory: allTagsPosts
    });
  }
  let postCategoryOptions = [];
  if (allCategories) {
    postCategoryOptions.push({
      value: "",
      label: "Select a post category"
    });
    Object.keys(allCategories).forEach(key => {
      postCategoryOptions.push({
        value: allCategories[key].slug,
        label: allCategories[key].name
      });
    });
  } else {
    postCategoryOptions.push({
      value: "loading",
      label: "Loading post category..."
    });
  }
  let postTagOptions = [];
  if (allTags) {
    postTagOptions.push({
      value: "",
      label: "Select a post tag"
    });
    Object.keys(allTags).forEach(key => {
      postTagOptions.push({
        value: allTags[key].id,
        label: allTags[key].name
      });
    });
  } else {
    postTagOptions.push({
      value: "loading",
      label: "Loading post tag..."
    });
  }
  let options = [];
  if (postTypes) {
    options.push({
      value: "",
      label: "Select a post type"
    });
    Object.keys(postTypes).forEach(key => {
      options.push({
        value: postTypes[key].slug,
        label: postTypes[key].labels.singular_name
      });
    });
  } else {
    options.push({
      value: "loading",
      label: "Loading post types..."
    });
  }
  let taxonomyOptions = [];
  if (taxonomies) {
    taxonomyOptions.push({
      value: "",
      label: "Select a taxonomy"
    });
    Object.keys(taxonomies).forEach(key => {
      if (taxonomies[key].types.includes(postTypeValue)) {
        taxonomyOptions.push({
          value: taxonomies[key].slug,
          label: taxonomies[key].labels.name
        });
      }
    });
  } else {
    taxonomyOptions.push({
      value: "loading",
      label: "Loading taxonomies..."
    });
  }
  const [postCollections, setPostCollections] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)([]);

  // useEffect(() => {
  // 	props.setAttributes({ PostSetCollection: postCollections });
  // 	console.log(postCollections)
  // }, [postCollections])

  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const fetchPosts = async () => {
      let queryOptions = {
        per_page: props.attributes.postNumber,
        order: props.attributes.postOrder,
        context: "view"
      };
      if (props.attributes.postOrderBy === "title") {
        queryOptions.orderby = "title";
      }
      const items = await select("core").getEntityRecords("postType", props.attributes.postTypeValue, queryOptions, "_embed: true");
      const itemes = [];
      for (const postTypeValue of props.attributes.postTypeValue) {
        const result = await select("core").getEntityRecords("postType", postTypeValue, queryOptions, "_embed: true");
        if (result != null) {
          itemes.push(result);
        }
      }
      const mergedItems = [].concat(...itemes);
      setPostCollections(mergedItems || []);
    };
    fetchPosts();
  }, [props.attributes.postTypeValue, props.attributes.postNumber, props.attributes.postOrder, props.attributes.postOrderBy, props.attributes.featuredPost, props.attributes.showTaxonomies, props.attributes.postOrderBy]);
  const onSelectImage = media => {
    props.setAttributes({
      postImageIcon: media.url
    });
  };
  const onRemoveImage = () => {
    props.setAttributes({
      postImageIcon: ""
    });
  };
  const [filterOption, setFilterOption] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)('auto');
  const setRelatedOption = value => {
    setFilterOption(value);
    props.setAttributes({
      relatedPosts: value
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Content Types", "Setting"),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RadioControl, {
    label: "Filter type",
    help: "",
    selected: relatedPosts,
    options: [{
      label: 'Auto',
      value: 'auto'
    }, {
      label: 'Manual',
      value: 'manual'
    }, {
      label: 'All',
      value: 'all'
    }],
    onChange: value => setRelatedOption(value)
  })), relatedPosts == "auto" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Content Types", "Setting"),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select Post Attribute", "text-domain"),
    value: PostAttribute,
    options: [{
      value: "category",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Category", "text-domain")
    }, {
      value: "tags",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Tags", "text-domain")
    }],
    onChange: value => props.setAttributes({
      PostAttribute: value
    })
  }), PostAttribute == "category" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select post category", "text-domain"),
    value: currentPostCategory,
    options: postCategoryOptions,
    onChange: HandleCategorySelection
  }), PostAttribute == "tags" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select post tag", "text-domain"),
    value: currentPostTags,
    options: postTagOptions,
    onChange: HandleTagSelection
  }))), relatedPosts == "manual" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Content Types", "Setting"),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    multiple: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select Post Types", "text-domain"),
    value: postTypeValue,
    options: options,
    onChange: value => {
      props.setAttributes({
        postTypeValue: value
      });
      props.setAttributes({
        postNumber: 3
      });
      props.setAttributes({
        PostSetCollection: postCollections
      });
    }
  }))), relatedPosts == "all" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Content Types", "Setting"),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select Post Type", "text-domain"),
    value: cptAllPostTypeValue,
    options: options,
    onChange: value => {
      props.setAttributes({
        cptAllPostTypeValue: value
      });
    }
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Content Settings", "Setting"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: "Media",
    checked: showMedia,
    onChange: newValue => {
      props.setAttributes({
        showMedia: newValue
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    className: "mt-3",
    label: "Show Button",
    checked: attributes.showButton,
    onChange: newValue => {
      setAttributes({
        showButton: newValue
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: "Featured",
    checked: featuredPost,
    onChange: newValue => {
      props.setAttributes({
        featuredPost: newValue
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: "Title",
    checked: showTitle,
    onChange: newValue => {
      props.setAttributes({
        showTitle: newValue
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: "Excerpt",
    checked: postDescription,
    onChange: newValue => {
      props.setAttributes({
        postDescription: newValue
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: "Post Color",
    checked: postColor,
    onChange: newValue => {
      props.setAttributes({
        postColor: newValue
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    label: "Columns in Mobile",
    help: "Number of posts in a column on Mobile Devices",
    value: columnMob,
    onChange: newValue => {
      props.setAttributes({
        columnMob: newValue
      });
    },
    min: 1,
    max: 12
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    label: "Columns in Tablet",
    help: "Number of posts in a column on Tab Devices",
    value: columnTab,
    onChange: newValue => {
      props.setAttributes({
        columnTab: newValue
      });
    },
    min: 1,
    max: 12
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    label: "Columns in Desktop",
    help: "Number of posts in a column on Desktop Devices",
    value: columnDesktop,
    onChange: newValue => {
      props.setAttributes({
        columnDesktop: newValue
      });
    },
    min: 1,
    max: 12
  }), relatedPosts != "all" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    label: "Number of Posts",
    help: "Number of posts that neeeds to be displayed",
    value: postNumber,
    onChange: newValue => {
      props.setAttributes({
        postNumber: newValue
      });
    },
    min: 1,
    max: 12
  }), postImageIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "selected-image"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: postImageIcon,
    alt: "Selected"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: onRemoveImage
  }, "Remove Image")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
    onSelect: onSelectImage,
    allowedTypes: ["image"],
    value: postImageIcon,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      onClick: open
    }, "Select Image")
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
    title: "Post Date Color",
    className: "p-0 mb-4 border-0",
    colorSettings: [{
      label: "Post Date Text Color",
      value: attributes.postDateTextColor,
      onChange: newColor => setAttributes({
        postDateTextColor: newColor
      })
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: "Read More Class",
    onChange: value => setAttributes({
      readMoreClass: value
    }),
    value: attributes.readMoreClass
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sorting", "Setting"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select Order", "text-domain"),
    value: postOrder,
    options: [{
      value: "",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select Order", "text-domain")
    }, {
      value: "asc",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Ascending", "text-domain")
    }, {
      value: "desc",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Descending", "text-domain")
    }],
    onChange: value => props.setAttributes({
      postOrder: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select Order By", "text-domain"),
    value: postOrderBy,
    options: [{
      value: "",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select Order By", "text-domain")
    }, {
      value: "title",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Title", "text-domain")
    }, {
      value: "menu_order",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Menu Order", "text-domain")
    }],
    onChange: value => props.setAttributes({
      postOrderBy: value
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Heading Setting", "Setting"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "mb-3"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Heading Tag Level")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "btn-group mb-4"
  }, tagLevel.map(obj => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: () => {
      setAttributes({
        headingTagLevel: obj
      });
    },
    className: `btn btn-sm text-black btn-outline-primary ${attributes.headingTagLevel === obj ? "btn-primary" : ""}`
  }, `H${obj}`))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "mb-3"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Heading Alignment")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "btn-group mb-4"
  }, alignment.map(value => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    key: value,
    onClick: () => setAttributes({
      headingAlign: value
    }),
    className: `btn btn-sm text-black btn-outline-primary ${attributes.headingAlign === value ? "btn-primary" : ""}`
  }, value))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings // this will set the heading text and background color
  , {
    title: "Heading Color",
    className: "p-0 mb-4 border-0",
    colorSettings: [{
      label: "Text Color",
      value: attributes.headingTextColor,
      onChange: newColor => setAttributes({
        headingTextColor: newColor
      })
    }, {
      label: "Background Color",
      value: attributes.headingBgColor,
      onChange: newColor => setAttributes({
        headingBgColor: newColor
      })
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "mb-3"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Heading Appereance")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "btn-group mb-4"
  }, appereance.map(obj => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: () => setAttributes({
      headingApperance: obj.value
    }),
    className: `btn btn-sm text-black btn-outline-primary ${attributes.headingApperance === obj.value ? "btn-primary" : ""}`
  }, obj.name))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Paragraph Settings", "Setting"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "mb-3"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Paragrapgh Alignment")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "btn-group mb-4"
  }, alignment.map(value => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    key: value,
    onClick: () => setAttributes({
      paragraphAlign: value
    }),
    className: `btn btn-sm text-black btn-outline-primary ${attributes.paragraphAlign === value ? "btn-primary" : ""}`
  }, value))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings // this will set the paragraph text and background color
  , {
    className: "p-0 mb-4 border-0",
    title: "Paragraph Color",
    colorSettings: [{
      label: "Text Color",
      value: attributes.paragraphTextColor,
      onChange: newColor => setAttributes({
        paragraphTextColor: newColor
      })
    }, {
      label: "Background Color",
      value: attributes.paragraphBgColor,
      onChange: newColor => setAttributes({
        paragraphBgColor: newColor
      })
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "d-flex justify-content-between align-items-center mb-2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "mb-0"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Paragrapgh Size")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: () => setParagraphCustom(!paragraphCustom),
    className: `py-0 px-1 btn btn-sm border ${paragraphCustom ? "btn-primary" : "btn-light"}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    "aria-hidden": "true",
    focusable: "false"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m19 7.5h-7.628c-.3089-.87389-1.1423-1.5-2.122-1.5-.97966 0-1.81309.62611-2.12197 1.5h-2.12803v1.5h2.12803c.30888.87389 1.14231 1.5 2.12197 1.5.9797 0 1.8131-.62611 2.122-1.5h7.628z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m19 15h-2.128c-.3089-.8739-1.1423-1.5-2.122-1.5s-1.8131.6261-2.122 1.5h-7.628v1.5h7.628c.3089.8739 1.1423 1.5 2.122 1.5s1.8131-.6261 2.122-1.5h2.128z"
  })))), !paragraphCustom ?
  //if paragraphCustom is false, then show the predefined font sizes options otherwise show custom size option in InspectPanel
  (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "btn-group mb-4 mt-2"
  }, fontLevel.map(obj => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    key: obj.value,
    onClick: () => setAttributes({
      paragraphFontSize: obj.value,
      paragraphUnits: obj.unit
    }),
    className: `btn btn-sm text-black btn-outline-primary ${attributes.paragraphFontSize === obj.value ? "btn-primary" : ""}`
  }, obj.name))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "d-flex gap-2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "form-control form-control-sm",
    value: attributes.paragraphFontSize,
    onChange: e => setAttributes({
      paragraphFontSize: e.target.value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    className: "form-select form-select-sm w-auto",
    name: "units",
    value: attributes.paragraphUnits,
    onChange: e => setAttributes({
      paragraphUnits: e.target.value
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "px"
  }, "px"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "rem",
    selected: true
  }, "rem"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "em"
  }, "em"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "w-100 form-range my-2",
    type: "range",
    min: "0",
    max: attributes.paragraphUnits === "px" ? 100 : 10,
    value: attributes.paragraphFontSize,
    step: "1",
    onChange: e => setAttributes({
      paragraphFontSize: e.target.value
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "mb-3"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Paragrapgh Letter Case")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "btn-group"
  }, appereance.map(obj => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: () => setAttributes({
      paragraphApperance: obj.value
    }),
    className: `btn btn-sm text-black btn-outline-primary ${attributes.paragraphApperance === obj.value ? "btn-primary" : ""}`
  }, obj.name))))), relatedPosts != "all" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("CPT Settings", "Setting"),
    initialOpen: false
  }, attributes.showButton && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: "Button text",
    onChange: btntext => setAttributes({
      btntext
    }),
    value: attributes.btntext
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
    title: "Button Color",
    className: "p-0 mb-4 border-0",
    colorSettings: [{
      label: "Button Text Color",
      value: attributes.btntextColor,
      onChange: newColor => setAttributes({
        btntextColor: newColor
      })
    }, {
      label: "Background Color",
      value: attributes.btnbackgroundColor,
      onChange: newColor => setAttributes({
        btnbackgroundColor: newColor
      })
    }]
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings // this will set the paragraph text and background color
  , {
    title: " Border",
    className: "p-0 mb-4 border-0",
    colorSettings: [{
      label: "Border Color",
      value: attributes.btnoutlineColor,
      onChange: newColor => setAttributes({
        btnoutlineColor: newColor
      })
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    label: "Padding-X (rem)",
    value: attributes.bttnPaddingX,
    onChange: newPadding => setAttributes({
      bttnPaddingX: newPadding
    }),
    min: 0,
    max: 5,
    step: 0.2
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    label: "Padding-Y (rem)",
    value: attributes.bttnPaddingY,
    onChange: newPadding => setAttributes({
      bttnPaddingY: newPadding
    }),
    min: 0,
    max: 5,
    step: 0.2
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    label: "Border Radius(px)",
    value: attributes.borderRadius,
    onChange: newborderRadius => setAttributes({
      borderRadius: newborderRadius
    }),
    min: 1,
    max: 50,
    step: 1
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    label: "Border Width (px)",
    value: attributes.borderWidth,
    onChange: newborderWidth => setAttributes({
      borderWidth: newborderWidth
    }),
    min: 1,
    max: 5,
    step: 1
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
    title: "Button Hover",
    className: "p-0 mb-4 border-0",
    colorSettings: [{
      label: "Background Color",
      value: attributes.btnHoverColor,
      onChange: newColor => setAttributes({
        btnHoverColor: newColor
      })
    }, {
      label: "Text Color",
      value: attributes.btnHoverTextColor,
      onChange: newColor => setAttributes({
        btnHoverTextColor: newColor
      })
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "mb-3"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Button Alignment")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "btn-group mb-4"
  }, alignment.map(value => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    key: value,
    onClick: () => setAttributes({
      btnAlign: value
    }),
    className: `btn btn-sm text-black btn-outline-primary ${attributes.btnAlign === value ? "btn-primary" : ""}`
  }, value))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "btn-group"
  }, target.map(value => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    key: value,
    onClick: () => setAttributes({
      btnlinkTarget: value
    }),
    className: `btn btn-sm text-black btn-outline-primary ${attributes.btnlinkTarget === value ? "btn-primary" : ""}`
  }, value))))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `alignfull`,
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)()
  }, relatedPosts != "all" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `row row-cols-lg-${columnDesktop} row-cols-md-${columnTab} row-cols-${columnMob}`
  }, relatedPosts == "manual" && Array.isArray(postCollections) && postCollections.map((postValues, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: index,
    className: "col " + postValues.type
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_cards_blogs_news_card__WEBPACK_IMPORTED_MODULE_8__["default"], {
    postValues: postValues,
    index: index,
    props: props
  }))), relatedPosts == "auto" && Array.isArray(PostAllCategory) && PostAllCategory?.map((postValues, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: index,
    className: "col"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_cards_blogs_news_card__WEBPACK_IMPORTED_MODULE_8__["default"], {
    postValues: postValues,
    index: index,
    props: props
  })))), relatedPosts == "all" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_linting_template__WEBPACK_IMPORTED_MODULE_9__["default"], {
    cptTaxonomyValue: cptTaxonomyValue,
    cptAllPostTypeValue: cptAllPostTypeValue,
    cptAllPostPaginatedData: cptAllPostPaginatedData,
    props: props
  })), relatedPosts == "all" && renderPaginationButtons());
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
function save(props) {
  const {
    attributes
  } = props;
  const {
    postTypeValue,
    taxonomyValue,
    postImageIcon,
    relatedPosts,
    postNumber,
    postDescription,
    postOrder,
    PostSetCollection,
    characterLimit,
    postOrderBy,
    featuredPost,
    showTaxonomies,
    showMedia,
    showTitle,
    btntext,
    btntextAlign,
    btnurl,
    btnlinkTarget,
    btnbackgroundColor,
    btnoutlineColor,
    columnMob,
    columnTab,
    columnDesktop,
    borderWidth,
    borderRadius,
    btntextColor,
    btnHoverColor,
    btnHoverTextColor,
    btnAlign,
    headingTitle,
    headingBackgroundColor,
    headingColor,
    headingLetterCase,
    paragraphColor,
    paragraphBackgroundColor,
    ParagraphLetterCase,
    paragraphFontSize,
    paragraphUnits,
    postColor
  } = props.attributes;
  const headingStyle = {
    "--heading-bg-color": attributes.headingBgColor,
    "--heading-color": attributes.headingTextColor
  };
  const paragraphStyle = {
    "--paragraph-bg-color": attributes.paragraphBgColor,
    "--paragraph-color": attributes.paragraphTextColor,
    "--paragraph-font-size": attributes.paragraphFontSize + attributes.paragraphUnits
  };
  const btnStyle = {
    "--btn-text-color": attributes.btntextColor,
    "--btn-outline-color": attributes.btnoutlineColor,
    "--border-radius": attributes.borderRadius + "px",
    "--border-width": attributes.borderWidth + "px",
    "--btn-background-color": attributes.btnbackgroundColor,
    "--btn-hover-color": attributes.btnHoverColor,
    "--btn-hover-text-color": attributes.btnHoverTextColor,
    "--btn-padding-left": attributes.bttnPaddingX + "rem",
    "--btn-padding-right": attributes.bttnPaddingX + "rem",
    "--btn-padding-top": attributes.bttnPaddingY + "rem",
    "--btn-padding-bottom": attributes.bttnPaddingY + "rem"
  };
  const HeadingComponent = `h${attributes.headingTagLevel}`;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `row row-cols-lg-${columnDesktop} row-cols-${columnMob} row-cols-md-${columnTab}`
  }, props.attributes.taxonomyValue && Array.isArray(PostSetCollection) && PostSetCollection.map((postValues, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: index,
    className: "col"
  }, showMedia && postValues.meta.thumbnail_image && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: postValues.meta.thumbnail_image,
    alt: postValues.name,
    className: "img-fluid"
  }), showTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(HeadingComponent, {
    className: `richtext-heading text-${attributes.headingApperance} text-${attributes.headingAlign} text-wrap`,
    style: headingStyle
  }, postValues.name), props.attributes.postDescription && postValues.meta && postValues.meta.term_taxonomy_excerpt && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: `richtext-paragraph text-${attributes.paragraphApperance} text-${attributes.paragraphAlign} text-wrap`,
    style: paragraphStyle
  }, postValues.meta.term_taxonomy_excerpt && postValues.meta.term_taxonomy_excerpt.split(" ").length > 20 ? postValues.meta.term_taxonomy_excerpt.split(" ").slice(0, 10).join(" ") + "..." : postValues.meta.term_taxonomy_excerpt), postColor && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "box",
    style: {
      backgroundColor: postValues.meta?.header_color
    }
  }), attributes.showButton && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `d-flex justify-content-${btnAlign} `
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: postValues.link,
    target: `${btnlinkTarget}`,
    className: `richtext-button`,
    style: btnStyle
  }, `${btntext ? `${btntext}` : "CTA"}`))))));
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

module.exports = window["moment"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/related-posts","version":"0.1.0","title":"Related Posts","category":"widgets","icon":"smiley","description":"Example block scaffolded with Create Block tool.","example":{},"supports":{"html":false,"color":{"background":false,"text":false,"link":false,"gradients":false},"align":["wide","full"]},"attributes":{"postTypeValue":{"type":"array","default":["post"]},"cptAllPostTypeValue":{"type":"string","default":"post"},"taxonomyValue":{"type":"string"},"items":{"type":"array"},"postImageIcon":{"type":"string"},"postNumber":{"type":"number","default":6},"columnMob":{"type":"number","default":2},"columnTab":{"type":"number","default":2},"columnDesktop":{"type":"number","default":2},"postDescription":{"type":"boolean","default":true},"postOrder":{"type":"string"},"postOrderBy":{"type":"string"},"PostSetCollection":{"type":"array","default":[]},"PostAllCategory":{"type":"array","default":[]},"characterLimit":{"type":"number","default":20},"featuredPost":{"type":"boolean","default":false},"showTaxonomies":{"type":"boolean","default":false},"showMedia":{"type":"boolean","default":true},"showTitle":{"type":"boolean","default":true},"headingContent":{"type":"string","default":""},"paragraphContent":{"type":"string","default":""},"headingTagLevel":{"type":"number","default":2},"headingTextColor":{"type":"string","default":"#000000"},"headingBgColor":{"type":"string","default":"#ffffff"},"paragraphTextColor":{"type":"string","default":"#000000"},"paragraphBgColor":{"type":"string","default":"#ffffff"},"headingTagNameLevel":{"type":"number","default":4},"paragraphFontSize":{"type":"number","default":1.05},"paragraphUnits":{"type":"string","default":"rem"},"headingAlign":{"type":"string","default":"start"},"paragraphAlign":{"type":"string","default":"start"},"headingApperance":{"type":"string","default":"none"},"paragraphApperance":{"type":"string","default":"none"},"btntext":{"type":"string"},"btntextAlign":{"type":"string"},"btnurl":{"type":"string","default":"https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/"},"btnlinkTarget":{"type":"string","default":"_self"},"btnbackgroundColor":{"type":"string","default":"#000000"},"btnoutlineColor":{"type":"string","default":"#000000"},"bttnPaddingX":{"type":"number","default":0.2},"bttnPaddingY":{"type":"number","default":0.2},"borderWidth":{"type":"number","default":1},"borderRadius":{"type":"number","default":1},"btntextColor":{"type":"string","default":"#ffffff"},"btnHoverColor":{"type":"string","default":"#ffffff"},"btnHoverTextColor":{"type":"string","default":"#000000"},"btnAlign":{"type":"string","default":"start"},"showButton":{"type":"boolean","default":true},"showParagraph":{"type":"boolean","default":true},"showHeading":{"type":"boolean","default":true},"postColor":{"type":"boolean","default":true},"relatedPosts":{"type":"string","default":"all"},"currentPostCategory":{"type":"string","default":""},"currentPostTags":{"type":"number","default":0},"postDateTextColor":{"type":"string","default":"#000000"},"readMoreClass":{"type":"string"},"PostAttribute":{"type":"string","default":"category"},"postsPerPage":{"type":"number","default":4},"pageNumber":{"type":"number","default":1},"cptAllPostPaginatedData":{"type":"array","default":[]},"PaginationFontSize":{"type":"integer","default":20},"paginationTextColor":{"type":"string","default":"#000000"},"paginationBgColor":{"type":"string","default":"#ffffff"},"listingFilter":{"type":"array","default":[]},"listingCategories":{"type":"array","default":[]}},"textdomain":"cpt-content-group","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js","render":"file:./render.php"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkcpt_content_group"] = globalThis["webpackChunkcpt_content_group"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map