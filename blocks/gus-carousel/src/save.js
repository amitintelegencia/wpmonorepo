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
	const { attributes, setAttributes } = props;
	const arrowstyles = {
		"--hide-navigation-arrow": attributes.HideNavigationControls ? "none" : "flex",
		"--hide-indicators": attributes.HideIndicators ? "none" : "flex",
		"--pagination_icon_color": attributes.IndicatorsIcontColor,
		"--pagination_active_icon_color": attributes.IndicatorsActiveIconColor,
		"--navigation_arrow_top_bottom_position": attributes.NavigationControlsPosition === "top" ? "static" : attributes.NavigationControlsPosition === "bottom" && "absolute",
		"--navigation_arrow_middle_position": attributes.NavigationControlsPosition === "middle" ? "absolute" : "static",


	};
	return (
		<div {...useBlockProps.save()}>
			<div class="splide pb-10"  id="image-carosuel-splide" style={{ ...arrowstyles }} data-interval={attributes.interval} data-autoplay={attributes.CarouselAutoplayOption} data-pauseOnHover={attributes.CarouselPauseOnHoverOption} data-direction={attributes.Direction} data-imagesPerSlideMob={attributes.ImagesPerSlideMob} data-imagesPerSlideTab={attributes.ImagesPerSlideTab} data-imagesPerSlideDesk={attributes.ImagesPerSlideDesk}>
				<div class="splide__track">
					<ul class="splide__list gap-3 gap-md-6 px-md-6">
						{attributes.Images.length > 0 && attributes.Images.map((image, imageIndex) => (
							<li class="splide__slide text-center">
								<img class="img-fluid" src={image.url} alt="" />
							</li>
						))
						}
					</ul>
				</div>
			</div>
		</div>
	);
}
