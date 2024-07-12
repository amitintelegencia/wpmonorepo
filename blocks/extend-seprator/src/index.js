import { addFilter } from "@wordpress/hooks";
import { createHigherOrderComponent } from "@wordpress/compose";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import metadata from './block.json';

import {
	SelectControl,
	TextControl,
	PanelBody,
	RangeControl,
	PanelRow,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";

/**
 * Add the attribute to the block.
 * This is the attribute that will be saved to the database.
 *
 * @param {object} settings block settings
 * @param {string} name block name
 * @returns {object} modified settings
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/#blocks-registerblocktype
 */
addFilter(
	"blocks.registerBlockType",
	"intele/extended-separator",
	function (settings, name) {
		if (name !== "core/separator") {
			return settings;
		}

		

		return {
			...settings,
			supports: {
				...settings.supports,
				spacing: {
					margin: [ "top", "bottom", "right", "left"]
				},
				style: {
					type: "object",
					default: {
						width: {
							type: "number",
							default: 100,
						},
						opacity: {
							type: 'number',
							default: 100, // Default opacity value
						}
					}
				}
			},
			attributes: {
				...settings.attributes,
				opacity: {
					type: 'number',
					default: 100, // Default opacity value
				},
				width: {
					type: "number",
					default: 100,
				},
				margin: {
					type: "string",
					default: "auto"
				},
				height: {
					type: "number",
					default: 1
				}
				
			},
		};
	}
);

/**
 * Edit component for the block.
 *
 * @param {object} props block props
 * @returns {JSX}
 */
function Edit(props) {
	var opacity = props.attributes.opacity || 1;

	var { opacity } = props.attributes;
 
	const alignment = [
		{
			"label": "Start",
			"value": "0 0 0 0"
		},
		{
			"label": "Center",
			"value": "auto"
		},
		{
			"label": "End",
			"value": "0 0 0 auto"
		},
	];
	return (
		<div>
			<InspectorControls>
				<PanelBody title={__("Separator Opacity Control")}>
					<RangeControl 
						value={ opacity } 
						min={0} max={1} 
						step={ 0.01 }
						label={ __("Opacity", metadata.textdomain) }
						onChange={(newValue) => {
							props.setAttributes({
								opacity: newValue
							})
						}}	
					/>
				<RangeControl 
						value={ props.attributes.width } 
						min={1} max={100} 
						step={ 1 }
						label={ __("Custom Width", metadata.textdomain) }
						onChange={(newValue) => {
							props.setAttributes({
								width: parseInt(newValue)
							})
						}}	
					/>

					<RangeControl 
						value={ props.attributes.height } 
						min={0} max={10} 
						step={ 1 }
						label={ __("Custom Height", metadata.textdomain) }
						onChange={(newValue) => {
							props.setAttributes({
								height: parseInt(newValue)
							})
						}}	
					/>

					<h2 className="mb-3">{__("Alignment")}</h2>
					<div className="btn-group mb-4">
						{alignment.map((item) => (
							<button
								key={item.label}
								onClick={() => props.setAttributes({ margin: item.value })}
								className={`btn btn-sm text-black btn-outline-primary ${props.attributes.margin === item.value ? "btn-primary" : ""
									}`}
							>
								{item.label}
							</button>
						))}
					</div>
				</PanelBody>
			</InspectorControls>
		</div>
	);
}

/**
 * Add the edit component to the block.
 * This is the component that will be rendered in the editor.
 * It will be rendered after the original block edit component.
 *
 * @param {function} BlockEdit Original component
 * @returns {function} Wrapped component
 *
 * @see https://developer.wordpress.org/block-editor/developers/filters/block-filters/#editor-blockedit
 */
addFilter(
	"editor.BlockEdit",
	"intele/extended-separator",
	createHigherOrderComponent((BlockEdit) => {
		return (props) => {
			if (props.name !== "core/separator") {
				return <BlockEdit {...props} />;
			}	


			const css = `
				.separator-extend .wp-block-separator  {
					width: 100% !important;
					opacity:1 !important;
				}
			`;

			const separatorStyle = {
				"opacity": props.attributes.opacity,
				"width" : props.attributes.width + "%",
				"margin": props.attributes.margin,
				"height": props.attributes.height + "rem"
			};

			
			return (
				<div className="separator-extend alignfull" style={separatorStyle}> 
					<BlockEdit {...props} />
					<style>{css}</style>
					<Edit {...props} />
				</div>
			);	
		};
	}),
);


addFilter(
	'blocks.getSaveContent.extraProps',
	"intele/extended-separator",
	function (extraProps, blockType, attributes) {
		const { opacity, width, margin } = attributes;
		if (blockType.name === 'core/separator') {
			
		}
		return extraProps;
	}
);