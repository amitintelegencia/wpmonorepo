/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, MediaPlaceholder, BlockIcon, InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { Icon, trash } from '@wordpress/icons';
import { PanelBody, RangeControl, ToggleControl, SelectControl } from '@wordpress/components'
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const hasImages = attributes.Images.length > 0;

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title="Slideshow Settings">
					<ToggleControl //this will give option for Autoplay setting of carousel.
						label={__("Carousel Autoplay", "text-domain")}
						checked={attributes.CarouselAutoplayOption}
						onChange={(val) => { setAttributes({ CarouselAutoplayOption: val }) }}
					></ToggleControl>
					{attributes.CarouselAutoplayOption ?
						<>
							<ToggleControl //this will give option for Autoplay setting of carousel.
								label={__("Carousel Pause on hover", "text-domain")}
								checked={attributes.CarouselPauseOnHoverOption}
								onChange={(val) => { setAttributes({ CarouselPauseOnHoverOption: val }) }}
							></ToggleControl>

							<SelectControl
								label={__("Carousel Scroll Direction", "gus-carousel")}
								value={attributes.Direction}
								options={[
									{ value: "rtl", label: "Right" },
									{ value: "ltr", label: "Left" },
								]}
								onChange={(val) => { setAttributes({ Direction: val }) }}
							/>
							<RangeControl
								label="Slide Interval (secs)"
								help="Select how long each slide of the carousel is shown in seconds"
								max={12}
								min={1}
								step={1}
								value={attributes.interval}
								onChange={(val) => { setAttributes({ interval: val }) }}
							/>
						</>
						:
						<>
							<ToggleControl
								label={__("Hide Navigation Controls Option", "gus-carousel")}
								checked={attributes.HideNavigationControls}
								onChange={(val) => { setAttributes({ HideNavigationControls: val }) }}

							/>

							<ToggleControl
								label={__("Hide Indicators Controls Option", "gus-carousel")}
								checked={attributes.HideIndicators}
								onChange={(val) => { setAttributes({ HideIndicators: val }) }}

							/>

							<PanelColorSettings
								title={__("Indicators Dots", "text-domain")}
								className="p-0 border-0"
								colorSettings={[
									{
										label: "Pagination Dots Color",
										value: attributes.IndicatorsIcontColor,
										onChange: (newColor) =>
											setAttributes({ IndicatorsIcontColor: newColor }),
									},
									{
										label: "Pagination Active Dots Color",
										value: attributes.IndicatorsActiveIconColor,
										onChange: (newColor) =>
											setAttributes({ IndicatorsActiveIconColor: newColor }),
									},
								]}
							/>

							<SelectControl
								label={__('Navigation Arrow Postition', 'gus-carousel')}
								value={attributes.NavigationControlsPosition}
								options={[
									{ label: __('Top'), value: 'top' },
									{ label: __('Middle'), value: 'middle' },
									{ label: __('Bottom'), value: 'bottom' },
								]}
								onChange={(val) => { setAttributes({ NavigationControlsPosition: val }) }}

							/>
						</>
					}
					<RangeControl
						label="Per Slide No of Images in Mobile"
						help="Number of Images display on Mobile Devices"
						value={attributes.ImagesPerSlideMob}
						onChange={(val) => {
							setAttributes({ ImagesPerSlideMob: val });
						}}
						min={1}
						max={3}
					/>
					<RangeControl
						label="Per Slide No of Images in  Tablet"
						help="Number of Images display on Tab Devices"
						value={attributes.ImagesPerSlideTab}
						onChange={(val) => {
							setAttributes({ ImagesPerSlideTab: val });
						}}
						min={2}
						max={3}
					/>
					<RangeControl
						label="Per Slide No of Images in Desktop"
						help="Number of Images display on  Desktop Devices"
						value={attributes.ImagesPerSlideDesk}
						onChange={(val) => {
							setAttributes({ ImagesPerSlideDesk: val });
						}}
						min={3}
						max={6}
					/>
				</PanelBody>
			</InspectorControls>
			{!!hasImages ? (
				<div className='row row-cols-4 gap-2'>
					{attributes.Images.map((image, imageIndex) => (
						<div className='slide-image-container card w-auto'>
							<img src={image.url} />
							<Icon
								className='trash-icon bg-white end-0 top-0 position-absolute rounded-2 z-1'
								icon={trash}
								onClick={() => {
									const updatedImages = attributes.Images.filter(
										(image, i) => i !== imageIndex
									);
									setAttributes({ Images: updatedImages });
								}}
							/>
						</div>
					))}
				</div>


			) : (
				<MediaPlaceholder
					multiple
					gallery
					icon={<BlockIcon icon="format-gallery" />}
					labels={{
						title: "Scrollable Gallery",
						instructions: "Create an awesome scrollable gallery.",
					}}
					onSelect={(newImages) => setAttributes({ Images: newImages })}
				/>

			)}
		</div>
	);
}
