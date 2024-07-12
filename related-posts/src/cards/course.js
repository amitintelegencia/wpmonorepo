import '../style.scss';

import { useSelect } from "@wordpress/data";


const Course = ({postValues, index, props}) => {

    const { attributes, setAttributes } = props;
	const {
		showMedia,
		showTitle,
		btntext,
		btnlinkTarget,
	} = props.attributes;





    const category = useSelect((select) =>
        select('core').getEntityRecord('taxonomy', 'course_category', postValues.course_category[0])
    );



    const HeadingComponent = `h${attributes.headingTagLevel}`;
    const headingStyle = {
		"--heading-bg-color": attributes.headingBgColor,
		"--heading-color": attributes.headingTextColor,
        "--heading-hover-color": category?.meta?.header_color,
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
		"--btn-hover-text-color": "red",
		"--btn-padding-left": attributes.bttnPaddingX + "rem",
		"--btn-padding-right": attributes.bttnPaddingX + "rem",
		"--btn-padding-top": attributes.bttnPaddingY + "rem",
		"--btn-padding-bottom": attributes.bttnPaddingY + "rem",
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

    return (
        <div>
        {showMedia && postValues.featured_image_src && (
            <img
                src={postValues.featured_image_src}
                alt={postValues.name}
                className="img-fluid"
            />
        )}

        
        <span style={{ color: category?.meta?.header_color }}>{category?.name}</span>
        {showTitle && (
            <HeadingComponent
            className={`richtext-heading text-${attributes.headingApperance} text-${attributes.headingAlign} text-wrap`} style={headingStyle}
            >
                {postValues.title.rendered}
            </HeadingComponent>
        )}

        <div className="post-date" style={{color: attributes.postDateTextColor}}>
            <p>Intake: {postValues.course_intake}</p>
            <p>Duration: {postValues.course_duration}</p>
            <p>Study Mode: {postValues.course_studymode}</p>
            <p>Price: List Price €{postValues.course_price_list} / IBAT Price €{postValues.course_price_ibat}</p>
        </div>

       


        {props.attributes.postDescription &&
            postValues.excerpt && (
                <p
                    className={`richtext-paragraph text-${attributes.paragraphApperance} text-${attributes.paragraphAlign} text-wrap`} style={paragraphStyle}
                >
                    {postValues.excerpt.rendered &&
                    postValues?.excerpt.rendered.replace(regex, "").split(" ").length >
                        50
                        ? postValues.excerpt.rendered.replace(regex, "")
                                .split(" ")
                                .slice(0, 30)
                                .join(" ") + "..."
                        : postValues.excerpt.rendered.replace(regex, "")}
                </p>
            )}


        <div className={`d-flex `}>
            <a href={postValues.link} target={`${btnlinkTarget}`}  className={`richtext-button ${attributes.readMoreClass} `} style={btnStyle}>
                    {`${btntext ? `${btntext}` : "Read more"}`}
            </a>
        </div>
        
        </div>
    )
}


export default Course ; 