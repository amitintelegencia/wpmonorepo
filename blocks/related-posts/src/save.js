/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save(props) {
	const { attributes } = props;
	const {
		postTypeValue, taxonomyValue, postImageIcon, relatedPosts, postNumber, postDescription, postOrder, PostSetCollection,
		characterLimit, postOrderBy, featuredPost, showTaxonomies, showMedia, showTitle, btntext, btntextAlign, btnurl,
		btnlinkTarget, btnbackgroundColor, btnoutlineColor,columnMob,columnTab,columnDesktop, borderWidth, borderRadius, btntextColor, btnHoverColor,
		btnHoverTextColor, btnAlign, headingTitle, headingBackgroundColor, headingColor,
		headingLetterCase, paragraphColor, paragraphBackgroundColor, ParagraphLetterCase, paragraphFontSize, paragraphUnits,postColor } = props.attributes;
		const headingStyle = {
			"--heading-bg-color": attributes.headingBgColor,
			"--heading-color": attributes.headingTextColor,
		};
		const paragraphStyle = {
			"--paragraph-bg-color": attributes.paragraphBgColor,
			"--paragraph-color": attributes.paragraphTextColor,
			"--paragraph-font-size":
				attributes.paragraphFontSize + attributes.paragraphUnits,
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
			"--btn-padding-bottom": attributes.bttnPaddingY + "rem",
		};
	
		const HeadingComponent = `h${attributes.headingTagLevel}`;
	return (
		<div {...useBlockProps.save() }>
			<div className={`row row-cols-lg-${columnDesktop} row-cols-${columnMob} row-cols-md-${columnTab}`}>
				{props.attributes.taxonomyValue && (
					Array.isArray(PostSetCollection) && PostSetCollection.map((postValues, index) => (
						<div key={index} className="col">
								{showMedia && postValues.meta.thumbnail_image && (
									<img src={postValues.meta.thumbnail_image} alt={postValues.name} className='img-fluid'/>
								)}
								{showTitle && (
									<HeadingComponent
									className={`richtext-heading text-${attributes.headingApperance} text-${attributes.headingAlign} text-wrap`} style={headingStyle}
									>
										{postValues.name}
									</HeadingComponent>
								)}
								{props.attributes.postDescription && postValues.meta && postValues.meta.term_taxonomy_excerpt && (
									<p
									className={`richtext-paragraph text-${attributes.paragraphApperance} text-${attributes.paragraphAlign} text-wrap`} style={paragraphStyle}
								>
									{postValues.meta.term_taxonomy_excerpt &&
									postValues.meta.term_taxonomy_excerpt.split(" ").length >
										20
										? postValues.meta.term_taxonomy_excerpt
												.split(" ")
												.slice(0, 10)
												.join(" ") + "..."
										: postValues.meta.term_taxonomy_excerpt}
								</p>
								)}
								{postColor && (<span className='box' style={{ backgroundColor: postValues.meta?.header_color }}></span>)}
								{attributes.showButton && (
									<div className={`d-flex justify-content-${btnAlign} `}>
									<a href={postValues.link} target={`${btnlinkTarget}`} className={`richtext-button`} style={btnStyle}>
											{`${btntext ? `${btntext}` : "CTA"}`}
									</a>
								</div>
								)}
							</div>
					))
				)}
				
			</div>

		</div>
	);
}
