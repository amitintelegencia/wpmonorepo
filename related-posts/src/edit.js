/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { Fragment, useState, useEffect } from "@wordpress/element";
import {
	InspectorControls,
	useBlockProps,
	MediaUpload,
	PanelColorSettings,
	RichText

} from "@wordpress/block-editor";
import { useSelect } from "@wordpress/data";
import {
	PanelBody,
	SelectControl,
	RangeControl,
	ToggleControl,
	TextControl,
	RadioControl
} from "@wordpress/components";


import moment from "moment";    
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */


// Function to fetch paginated posts

import BlogsAndNews from "./cards/blogs-news-card"
import ListingTemplate from "./components/linting-template";


export default function Edit(props) {
	const { attributes, setAttributes } = props;
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
	const { className, ...blockProps } = useBlockProps();
	const [paragraphCustom, setParagraphCustom] = useState(false);
	const alignment = ["start", "center", "end"];
	const target = ["_blank", "_self"];
	const tagLevel = [1, 2, 3, 4, 5, 6]; // this will help in selecting the tag level of heading
	const [currentPage, setCurrentPage] = useState(1);

	const appereance = [
		{ name: "Aa", value: "capitalize" },	
		{ name: "AA", value: "uppercase" },
		{ name: "aa", value: "lowercase" },
		{ name: "None", value: "" },
	];

	let fontLevel = [
		{ name: "S", value: 0.9, unit: "rem" },
		{ name: "M", value: 1.05, unit: "rem" },
		{ name: "L", value: 1.2, unit: "rem" },
		{ name: "XL", value: 2.5, unit: "rem" },
		{ name: "XXL", value: 3.27, unit: "rem" },
	];

	const { postTypes, taxonomies, allCategories, currentPostType, allTags} = useSelect((select) => {
		return {
			postTypes: select("core").getPostTypes({ per_page: -1 }),
			taxonomies: select("core").getTaxonomies(),
			allCategories: select('core').getEntityRecords('taxonomy', 'category'),
			allTags: select('core').getEntityRecords('taxonomy', 'post_tag'),
			currentPostType: select('core/editor').getCurrentPostType(),
		};
	}, []);


	const HandleCategorySelection = (value) => {
		props.setAttributes({ currentPostCategory: value });	
	}
	const HandleTagSelection = (value) => {
		props.setAttributes({ currentPostTags: value });	
	}


	const allCategoryPosts = useSelect((select) => {
        const { getEntityRecords } = select('core');
        const { getCurrentPostId } = select('core/editor');
        const currentPostId = getCurrentPostId();
        const currentPost = select('core').getEntityRecord('postType', 'post', currentPostId);
        const currentPostType = currentPost?.type;

        // Get the category ID based on slug
        const categoryId = select('core').getEntityRecords('taxonomy', 'category', { slug: currentPostCategory })?.[0]?.id;

        // Fetch posts of the current post type filtered by category
        return getEntityRecords('postType', currentPostType, {
            categories: categoryId,
			per_page: props.attributes.postNumber,
			order: props.attributes.postOrder,
			context: "view",

        },
		"_embed: true",
		
		);
    });


	let cptTaxonomyValue = '';
   
	switch (cptAllPostTypeValue) {
		case 'team_member':
			cptTaxonomyValue = 'member_type'
			break;
		case 'course':
			cptTaxonomyValue = 'course_category'
			break;
		case 'testimonial':
			cptTaxonomyValue = 'testimonial_category'
			break;
		default:
			cptTaxonomyValue = 'category'
			break;
	}

	const paginationStyle = {
		"--pagination-bg-color": paginationBgColor,
		"--pagination-color": paginationTextColor,
		"--pagination-fontsize": PaginationFontSize + "px",
	}
	
	const cptAllPosts =  useSelect((select) => {
		return select('core').getEntityRecords('postType', cptAllPostTypeValue, {
			order: props.attributes.postOrder,
			[cptTaxonomyValue]: listingFilter,
			context: "view",
		});
	});
	
	const cptAllPostsPaginate =  useSelect((select) => {
		return select('core').getEntityRecords('postType', cptAllPostTypeValue, {
			order: props.attributes.postOrder,
			per_page: props.attributes.postsPerPage,
			[cptTaxonomyValue]: listingFilter,
			page: currentPage,
			context: "view",
		}, "_embed: true", );
	});

	props.setAttributes({ cptAllPostPaginatedData: cptAllPostsPaginate });	
	const paginate = (pageNumber) => setCurrentPage(pageNumber);
	const totalPages = Math.ceil(cptAllPosts?.length / postsPerPage);


	const renderPaginationButtons = () => {
		const buttons = [];
		const maxButtons = 3;
		const halfMaxButtons = Math.floor(maxButtons / 2);
		const startPage = Math.max(currentPage - halfMaxButtons, 1);
		const endPage = Math.min(startPage + maxButtons - 1, totalPages);
	
		buttons.push(renderPreviousButton());
	
		for (let i = startPage; i <= endPage; i++) {
		  buttons.push(
			<li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
			  <button className="page-link pagination-fontsize" onClick={() => paginate(i)} style={paginationStyle}>{i}</button>
			</li>
		  );
		}
	
		if (endPage < totalPages) {
		  buttons.push(
			<li key="dots" className="page-item disabled ">
			  <span className="page-link pagination-fontsize" style={paginationStyle}>...</span>
			</li>
		  );
		  buttons.push(
			<li key={totalPages} className={`page-item ${currentPage === totalPages ? 'active' : ''}`}>
			  <button className="page-link pagination-fontsize" onClick={() => paginate(totalPages)} style={paginationStyle}>{totalPages}</button>
			</li>
		  );
		}
	
		buttons.push(renderNextButton());
	
		return (
		  <ul className="pagination">
			{buttons}
		  </ul>
		);
	};
	
	const renderPreviousButton = () => (
		<li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
		  <button className="page-link pagination-fontsize" style={paginationStyle} onClick={() => paginate(currentPage - 1)}>&laquo;</button>
		</li>
	);
	
	const renderNextButton = () => (
		<li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
		  <button className="page-link pagination-fontsize" style={paginationStyle} onClick={() => paginate(currentPage + 1)}>&raquo;</button>
		</li>
	);

	const allTagsPosts = useSelect((select) => {
		return select('core').getEntityRecords('postType', 'post', {
			tags: currentPostTags,
			per_page: props.attributes.postNumber,
			order: props.attributes.postOrder,
			context: "view",
		});
	});

	if(PostAttribute == "category") {
		props.setAttributes({ PostAllCategory: allCategoryPosts });
	} else {
		props.setAttributes({ PostAllCategory: allTagsPosts });
	}

	let postCategoryOptions = [];
	if (allCategories) {
		postCategoryOptions.push({ value: "", label: "Select a post category" });
		Object.keys(allCategories).forEach((key) => {
			postCategoryOptions.push({
				value: allCategories[key].slug,
				label: allCategories[key].name,
			});
		});
	} else {
		postCategoryOptions.push({ value: "loading", label: "Loading post category..." });
	}

	let postTagOptions = [];

	if (allTags) {
		postTagOptions.push({ value: "", label: "Select a post tag" });
		Object.keys(allTags).forEach((key) => {
			postTagOptions.push({
				value: allTags[key].id,
				label: allTags[key].name,
			});
		});
	} else {
		postTagOptions.push({ value: "loading", label: "Loading post tag..." });
	}

	let options = [];
	if (postTypes) {
		options.push({ value: "", label: "Select a post type" });
		Object.keys(postTypes).forEach((key) => {
			
			options.push({
				value: postTypes[key].slug,
				label: postTypes[key].labels.singular_name,
			});
		});
	} else {
		options.push({ value: "loading", label: "Loading post types..." });
	}

	let taxonomyOptions = [];

	if (taxonomies) {
		taxonomyOptions.push({ value: "", label: "Select a taxonomy" });

		Object.keys(taxonomies).forEach((key) => {
			if (taxonomies[key].types.includes(postTypeValue)) {
				taxonomyOptions.push({
					value: taxonomies[key].slug,
					label: taxonomies[key].labels.name,
				});
			}
		});
	} else {
		taxonomyOptions.push({ value: "loading", label: "Loading taxonomies..." });
	}

	const [postCollections, setPostCollections] = useState([]);
	
	// useEffect(() => {
	// 	props.setAttributes({ PostSetCollection: postCollections });
	// 	console.log(postCollections)
	// }, [postCollections])


	useSelect(
		(select) => {
			const fetchPosts = async () => {
				let queryOptions = {
					per_page: props.attributes.postNumber,
					order: props.attributes.postOrder,
					context: "view",
				};
			
				if (props.attributes.postOrderBy === "title") {
					queryOptions.orderby = "title";
				}


				const items = await select("core").getEntityRecords(
					"postType",
					props.attributes.postTypeValue,
					queryOptions,
					"_embed: true",
				);

				const itemes = [];
				for (const postTypeValue of props.attributes.postTypeValue) {
					const result = await select("core").getEntityRecords(
						"postType",
						postTypeValue,
						queryOptions,
						"_embed: true"
					);

					if(result != null) {
						itemes.push(result);
					}
				}

				const mergedItems = [].concat(...itemes);
			
				setPostCollections(mergedItems || []);
			
			};

			fetchPosts();
		},
		[
			props.attributes.postTypeValue,
			props.attributes.postNumber,
			props.attributes.postOrder,
			props.attributes.postOrderBy,
			props.attributes.featuredPost,
			props.attributes.showTaxonomies,
			props.attributes.postOrderBy,
		],
	);

	const onSelectImage = (media) => {
		props.setAttributes({
			postImageIcon: media.url,
		});
	};

	const onRemoveImage = () => {
		props.setAttributes({
			postImageIcon: "",
		});
	};
	
	const [ filterOption, setFilterOption ] = useState( 'auto' );

	const setRelatedOption = (value) => {
		setFilterOption( value )
		props.setAttributes({
			relatedPosts: value,
		});
	}

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={__("Content Types", "Setting")} initialOpen={true}>
					<RadioControl
						label="Filter type"
						help=""
						selected={ relatedPosts }
						options={ [
							{ label: 'Auto', value: 'auto' },
							{ label: 'Manual', value: 'manual' },
							{ label: 'All', value: 'all' },
						] }
						onChange={ ( value ) => setRelatedOption( value ) }
					/>
				</PanelBody>
				{ relatedPosts == "auto" && 
					<>
						<PanelBody title={__("Content Types", "Setting")} initialOpen={true}>
							<SelectControl
								label={__("Select Post Attribute", "text-domain")}
								value={PostAttribute}
								options={[
									{ value: "category", label: __("Category", "text-domain") },
									{ value: "tags", label: __("Tags", "text-domain") },
								]}
								onChange={(value) => props.setAttributes({ PostAttribute: value })}
							/>
							{PostAttribute == "category" && 
								<SelectControl
								label={__("Select post category", "text-domain")}
								value={currentPostCategory}
								options={postCategoryOptions}
								onChange={HandleCategorySelection}
							/>
							}
							{PostAttribute == "tags" && 
							<SelectControl
								label={__("Select post tag", "text-domain")}
								value={currentPostTags}
								options={postTagOptions}
								onChange={HandleTagSelection}
							/>
							}
								
						</PanelBody>
					</>
				}
				{ relatedPosts == "manual" && 
					<>
						<PanelBody title={__("Content Types", "Setting")} initialOpen={true}>
							<SelectControl
							 	multiple
								label={__("Select Post Types", "text-domain")}
								value={postTypeValue}
								options={options}
								onChange={(value) => {
									props.setAttributes({ postTypeValue: value });
									props.setAttributes({ postNumber: 3 });
									props.setAttributes({ PostSetCollection: postCollections });
								}}
							/>
							
						</PanelBody>
					</>
				}

				{ relatedPosts == "all" &&
					<>
						<PanelBody title={__("Content Types", "Setting")} initialOpen={true}>
							<SelectControl
								label={__("Select Post Type", "text-domain")}
								value={cptAllPostTypeValue}
								options={options}
								onChange={(value) => {
									props.setAttributes({ cptAllPostTypeValue: value });
								}}
							/>
						</PanelBody>
					</>
				}

		
				<PanelBody
					title={__("Content Settings", "Setting")}
					initialOpen={false}
				>
					<ToggleControl
						label="Media"
						checked={showMedia}
						onChange={(newValue) => {
							props.setAttributes({ showMedia: newValue });
						}}
					/>
					<ToggleControl
						className="mt-3"
						label="Show Button"
						checked={attributes.showButton}
						onChange={(newValue) => {
							setAttributes({ showButton: newValue });
						}}
					/>


					{/* {props.attributes.taxonomyValue && ( */}
					<ToggleControl
						label="Featured"
						checked={featuredPost}
						onChange={(newValue) => {
							props.setAttributes({ featuredPost: newValue });
						}}
					/>
					{/* )} */}

					<ToggleControl
						label="Title"
						checked={showTitle}
						onChange={(newValue) => {
							props.setAttributes({ showTitle: newValue });
						}}
					/>
					<ToggleControl
						label="Excerpt"
						checked={postDescription}
						onChange={(newValue) => {
							props.setAttributes({ postDescription: newValue });
						}}
					/>
					<ToggleControl
						label="Post Color"
						checked={postColor}
						onChange={(newValue) => {
							props.setAttributes({ postColor: newValue });
						}}
					/>

					<RangeControl
						label="Columns in Mobile"
						help="Number of posts in a column on Mobile Devices"
						value={columnMob}
						onChange={(newValue) => {
							props.setAttributes({ columnMob: newValue });
						}}
						min={1}
						max={12}
					/>
					<RangeControl
						label="Columns in Tablet"
						help="Number of posts in a column on Tab Devices"
						value={columnTab}
						onChange={(newValue) => {
							props.setAttributes({ columnTab: newValue });
						}}
						min={1}
						max={12}
					/>
					<RangeControl
						label="Columns in Desktop"
						help="Number of posts in a column on Desktop Devices"
						value={columnDesktop}
						onChange={(newValue) => {
							props.setAttributes({ columnDesktop: newValue });
						}}
						min={1}
						max={12}
					/>

					{ relatedPosts != "all" && 
						<>
							<RangeControl
								label="Number of Posts"
								help="Number of posts that neeeds to be displayed"
								value={postNumber}
								onChange={(newValue) => {
									props.setAttributes({ postNumber: newValue });
								}}
								min={1}
								max={12}
							/>

							{postImageIcon && (
								<div className="selected-image">
									<img src={postImageIcon} alt="Selected" />
									<button onClick={onRemoveImage}>Remove Image</button>
								</div>
							)}
							<MediaUpload
								onSelect={onSelectImage}
								allowedTypes={["image"]}
								value={postImageIcon}
								render={({ open }) => <button onClick={open}>Select Image</button>}
							/>

						</>
	
					}


					{/* <RangeControl
							label={__('Character Limit', 'text-domain')}
							value={characterLimit}
							onChange={(value) => props.setAttributes({ characterLimit: value })}
							min={0}
							max={1000}
						/> */}
					
					<PanelColorSettings
						title="Post Date Color"
						className="p-0 mb-4 border-0"
						colorSettings={[
							{
								label: "Post Date Text Color",
								value: attributes.postDateTextColor,
								onChange: (newColor) =>
									setAttributes({ postDateTextColor: newColor }),
							},
						]}
					/>
					<TextControl
						label="Read More Class"
						onChange={(value) => setAttributes({ readMoreClass: value })}
						value={attributes.readMoreClass}
					/>
				</PanelBody>
				<PanelBody title={__("Sorting", "Setting")} initialOpen={false}>
					<SelectControl
						label={__("Select Order", "text-domain")}
						value={postOrder}
						options={[
							{ value: "", label: __("Select Order", "text-domain") },
							{ value: "asc", label: __("Ascending", "text-domain") },
							{ value: "desc", label: __("Descending", "text-domain") },
						]}
						onChange={(value) => props.setAttributes({ postOrder: value })}
					/>
					<SelectControl
						label={__("Select Order By", "text-domain")}
						value={postOrderBy}
						options={[
							{ value: "", label: __("Select Order By", "text-domain") },
							{ value: "title", label: __("Title", "text-domain") },
							{ value: "menu_order", label: __("Menu Order", "text-domain") },
						]}
						onChange={(value) => props.setAttributes({ postOrderBy: value })}
					/>
				</PanelBody>
				<PanelBody
					title={__("Heading Setting", "Setting")}
					initialOpen={false}
				>
						<>
							<h2 className="mb-3">{__("Heading Tag Level")}</h2>
							<div className="btn-group mb-4">
								{tagLevel.map((obj) => (
									<button
										onClick={() => {
											setAttributes({ headingTagLevel: obj });
										}}
										className={`btn btn-sm text-black btn-outline-primary ${
											attributes.headingTagLevel === obj ? "btn-primary" : ""
										}`}
									>{`H${obj}`}</button>
								))}
							</div>
							<h2 className="mb-3">{__("Heading Alignment")}</h2>
							<div className="btn-group mb-4">
								{alignment.map((value) => (
									<button
										key={value}
										onClick={() => setAttributes({ headingAlign: value })}
										className={`btn btn-sm text-black btn-outline-primary ${
											attributes.headingAlign === value ? "btn-primary" : ""
										}`}
									>
										{value}
									</button>
								))}
							</div>
							<PanelColorSettings // this will set the heading text and background color
								title="Heading Color"
								className="p-0 mb-4 border-0"
								colorSettings={[
									{
										label: "Text Color",
										value: attributes.headingTextColor,
										onChange: (newColor) =>
											setAttributes({ headingTextColor: newColor }),
									},
									{
										label: "Background Color",
										value: attributes.headingBgColor,
										onChange: (newColor) =>
											setAttributes({ headingBgColor: newColor }),
									},
								]}
							/>

							<h2 className="mb-3">{__("Heading Appereance")}</h2>
							<div className="btn-group mb-4">
								{appereance.map((obj) => (
									<button
										onClick={() =>
											setAttributes({ headingApperance: obj.value })
										}
										className={`btn btn-sm text-black btn-outline-primary ${
											attributes.headingApperance === obj.value
												? "btn-primary"
												: ""
										}`}
									>
										{obj.name}
									</button>
								))}
							</div>
						</>
					
				</PanelBody>
				<PanelBody
					title={__("Paragraph Settings", "Setting")}
					initialOpen={false}
				>
						<>
							<h2 className="mb-3">{__("Paragrapgh Alignment")}</h2>
							<div className="btn-group mb-4">
								{alignment.map((value) => (
									<button
										key={value}
										onClick={() => setAttributes({ paragraphAlign: value })}
										className={`btn btn-sm text-black btn-outline-primary ${
											attributes.paragraphAlign === value ? "btn-primary" : ""
										}`}
									>
										{value}
									</button>
								))}
							</div>
							<PanelColorSettings // this will set the paragraph text and background color
								className="p-0 mb-4 border-0"
								title="Paragraph Color"
								colorSettings={[
									{
										label: "Text Color",
										value: attributes.paragraphTextColor,
										onChange: (newColor) =>
											setAttributes({ paragraphTextColor: newColor }),
									},
									{
										label: "Background Color",
										value: attributes.paragraphBgColor,
										onChange: (newColor) =>
											setAttributes({ paragraphBgColor: newColor }),
									},
								]}
							/>
							<div className="d-flex justify-content-between align-items-center mb-2">
								<h2 className="mb-0">{__("Paragrapgh Size")}</h2>
								<button
									onClick={() => setParagraphCustom(!paragraphCustom)}
									className={`py-0 px-1 btn btn-sm border ${
										paragraphCustom ? "btn-primary" : "btn-light"
									}`}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										width="18"
										height="18"
										aria-hidden="true"
										focusable="false"
									>
										<path d="m19 7.5h-7.628c-.3089-.87389-1.1423-1.5-2.122-1.5-.97966 0-1.81309.62611-2.12197 1.5h-2.12803v1.5h2.12803c.30888.87389 1.14231 1.5 2.12197 1.5.9797 0 1.8131-.62611 2.122-1.5h7.628z"></path>
										<path d="m19 15h-2.128c-.3089-.8739-1.1423-1.5-2.122-1.5s-1.8131.6261-2.122 1.5h-7.628v1.5h7.628c.3089.8739 1.1423 1.5 2.122 1.5s1.8131-.6261 2.122-1.5h2.128z"></path>
									</svg>
								</button>
							</div>
							{!paragraphCustom ? ( //if paragraphCustom is false, then show the predefined font sizes options otherwise show custom size option in InspectPanel
								<div className="btn-group mb-4 mt-2">
									{fontLevel.map((obj) => (
										<button
											key={obj.value}
											onClick={() =>
												setAttributes({
													paragraphFontSize: obj.value,
													paragraphUnits: obj.unit,
												})
											}
											className={`btn btn-sm text-black btn-outline-primary ${
												attributes.paragraphFontSize === obj.value
													? "btn-primary"
													: ""
											}`}
										>
											{obj.name}
										</button>
									))}
								</div>
							) : (
								<>
									<div className="d-flex gap-2">
										<input
											className="form-control form-control-sm"
											value={attributes.paragraphFontSize}
											onChange={(e) =>
												setAttributes({ paragraphFontSize: e.target.value })
											}
										/>
										<select
											className="form-select form-select-sm w-auto"
											name="units"
											value={attributes.paragraphUnits}
											onChange={(e) =>
												setAttributes({ paragraphUnits: e.target.value })
											}
										>
											<option value={"px"}>px</option>
											<option value={"rem"} selected>
												rem
											</option>
											<option value={"em"}>em</option>
										</select>
									</div>
									<input
										className="w-100 form-range my-2"
										type="range"
										min="0"
										max={attributes.paragraphUnits === "px" ? 100 : 10}
										value={attributes.paragraphFontSize}
										step="1"
										onChange={(e) =>
											setAttributes({ paragraphFontSize: e.target.value })
										}
									/>
								</>
							)}
							<h2 className="mb-3">{__("Paragrapgh Letter Case")}</h2>
							<div className="btn-group">
								{appereance.map((obj) => (
									<button
										onClick={() =>
											setAttributes({ paragraphApperance: obj.value })
										}
										className={`btn btn-sm text-black btn-outline-primary ${
											attributes.paragraphApperance === obj.value
												? "btn-primary"
												: ""
										}`}
									>
										{obj.name}
									</button>
								))}
							</div>
						</>
				</PanelBody>
				{ relatedPosts != "all" && 
					<PanelBody
						title={__("CPT Settings", "Setting")}
						initialOpen={false}
					>
						{attributes.showButton && (
							<>
								<TextControl
									label="Button text"
									onChange={(btntext) => setAttributes({ btntext })}
									value={attributes.btntext}
								/>
								<div>
									<PanelColorSettings
										title="Button Color"
										className="p-0 mb-4 border-0"
										colorSettings={[
											{
												label: "Button Text Color",
												value: attributes.btntextColor,
												onChange: (newColor) =>
													setAttributes({ btntextColor: newColor }),
											},
											{
												label: "Background Color",
												value: attributes.btnbackgroundColor,
												onChange: (newColor) =>
													setAttributes({ btnbackgroundColor: newColor }),
											},
										]}
									/>
								</div>
								<div>
									<PanelColorSettings // this will set the paragraph text and background color
										title=" Border"
										className="p-0 mb-4 border-0"
										colorSettings={[
											{
												label: "Border Color",
												value: attributes.btnoutlineColor,
												onChange: (newColor) =>
													setAttributes({ btnoutlineColor: newColor }),
											},
										]}
									/>
									<RangeControl
										label="Padding-X (rem)"
										value={attributes.bttnPaddingX}
										onChange={(newPadding) =>
											setAttributes({ bttnPaddingX: newPadding })
										}
										min={0}
										max={5}
										step={0.2}
									/>
									<RangeControl
										label="Padding-Y (rem)"
										value={attributes.bttnPaddingY}
										onChange={(newPadding) =>
											setAttributes({ bttnPaddingY: newPadding })
										}
										min={0}
										max={5}
										step={0.2}
									/>
									<RangeControl
										label="Border Radius(px)"
										value={attributes.borderRadius}
										onChange={(newborderRadius) =>
											setAttributes({ borderRadius: newborderRadius })
										}
										min={1}
										max={50}
										step={1}
									/>
									<RangeControl
										label="Border Width (px)"
										value={attributes.borderWidth}
										onChange={(newborderWidth) =>
											setAttributes({ borderWidth: newborderWidth })
										}
										min={1}
										max={5}
										step={1}
									/>
									<PanelColorSettings
										title="Button Hover"
										className="p-0 mb-4 border-0"
										colorSettings={[
											{
												label: "Background Color",
												value: attributes.btnHoverColor,
												onChange: (newColor) =>
													setAttributes({ btnHoverColor: newColor }),
											},
											{
												label: "Text Color",
												value: attributes.btnHoverTextColor,
												onChange: (newColor) =>
													setAttributes({ btnHoverTextColor: newColor }),
											},
										]}
									/>
									
									<h2 className="mb-3">
										{__("Button Alignment")}
									</h2>
									<div className="btn-group mb-4">
										{alignment.map((value) => (
											<button
												key={value}
												onClick={() => setAttributes({ btnAlign: value })}
												className={`btn btn-sm text-black btn-outline-primary ${
													attributes.btnAlign === value
														? "btn-primary"
														: ""
												}`}
											>
												{value}
											</button>
										))}
									</div>
									<div className="btn-group">
										{target.map((value) => (
											<button
												key={value}
												onClick={() => setAttributes({ btnlinkTarget: value })}
												className={`btn btn-sm text-black btn-outline-primary ${
													attributes.btnlinkTarget === value
														? "btn-primary"
														: ""
												}`}
											>
												{value}
											</button>
										))}
									</div>
								</div>
							</>
						)}
					</PanelBody>
				}
					

			</InspectorControls>
			<div className={`alignfull`} {...useBlockProps()}>

				{ relatedPosts != "all" && 
					<div
						className={`row row-cols-lg-${columnDesktop} row-cols-md-${columnTab} row-cols-${columnMob}`}
					>
						{relatedPosts == "manual" && 
							Array.isArray(postCollections) &&
							postCollections.map((postValues, index) => (
								<div key={index} className={"col " + postValues.type} >

							
								<BlogsAndNews postValues={postValues} index={index} props={props} />
								
								
								</div>
							))}



						{relatedPosts == "auto" &&
							Array.isArray(PostAllCategory) &&
							PostAllCategory?.map((postValues, index) => (
								<div key={index} className="col">
									<BlogsAndNews postValues={postValues} index={index} props={props} />
								</div>
							))} 


						{/* {relatedPosts == "all" &&
							Array.isArray(cptAllPostPaginatedData) &&

							cptAllPostPaginatedData?.map((postValues, index) => (
								<div key={index} className={"col " + postValues.type}>

									{ postValues.type == 'post' && 
										<BlogsAndNews postValues={postValues} index={index} props={props} />
									}	
									{ postValues.type == 'team_member' && 
										<TeamMemberCard postValues={postValues} index={index} props={props} />
									}	
									{ postValues.type == 'testimonial' && 
										<Testimonials postValues={postValues} index={index} props={props} />
									}	
									{ postValues.type == 'course' && 
										<Course postValues={postValues} index={index} props={props} />
									}	
								</div>
							)
						)} 	 */}

						
						
					</div>
				}

				{ relatedPosts == "all" && 
					<ListingTemplate cptTaxonomyValue={cptTaxonomyValue} cptAllPostTypeValue={cptAllPostTypeValue} cptAllPostPaginatedData={cptAllPostPaginatedData} props={props} />
				}


			</div>
			{ relatedPosts == "all" && 
				renderPaginationButtons()
			}
		</Fragment>
	);
}
