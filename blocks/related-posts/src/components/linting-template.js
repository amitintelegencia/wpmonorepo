
import BlogsAndNews from "./../cards/blogs-news-card"
import TeamMemberCard from "./../cards/team-member"
import Testimonials from "./../cards/testimonials"
import Course from "./../cards/course"
import { Fragment, useState } from "@wordpress/element";

import { useSelect } from "@wordpress/data";


const ListingTemplate = ({ cptTaxonomyValue, cptAllPostTypeValue, cptAllPostPaginatedData, props }) => {

    

    const categories = useSelect((select) => {
        return select('core').getEntityRecords('taxonomy', cptTaxonomyValue, {
            per_page: -1,
            type: cptAllPostTypeValue, // Filter categories by custom post type
        });
    });


    let checkedItems = [];

    const handleFilterCheckbox = (event) => {
       

        var checkboxes = document.querySelectorAll('.post-filter input[type="checkbox"][name="filter"]:checked');
        console.log(checkboxes)
        // Loop through each checked checkbox and push its value to yourArray
        checkboxes.forEach(function(checkbox) {
            checkedItems.push(checkbox.value);
        });

        console.log(checkboxes)
        props.setAttributes({ listingFilter: checkedItems });	
    };
    console.log(cptAllPostPaginatedData)

    return (
        <div className="container post-filter">
            <div className="row g-2">
                <div className="col-md-3">
                    <div className="processor p-2">
                        <div className="heading d-flex justify-content-between align-items-center">
                            <h6 className="text-uppercase">Categories</h6> <span>--</span> 
                        </div>

                        {Array.isArray(categories) &&
                            categories?.map((catValues, index) => (
                                <div className="d-flex justify-content-between mt-2">
                                    <div className="form-check">
                                        <input className="form-check-input" onChange={handleFilterCheckbox} type="checkbox" name="filter" value={ parseInt(catValues.id) }  />
                                        <label className="form-check-label" htmlFor={`checkbox-${parseInt(catValues.id)}`}>
                                            {catValues.name}
                                        </label>
                                    </div> 
                                </div>
                            )
					    )} 	
                       
                    </div>
                </div>
                <div className="col-md-9">
                    <div className={`row row-cols-lg-${props.attributes.columnDesktop} row-cols-md-${props.attributes.columnTab} row-cols-${props.attributes.columnMob}`}>

                        {!Array.isArray(cptAllPostPaginatedData) &&
                           <h1> Loading....</h1>
                        }
                        {Array.isArray(cptAllPostPaginatedData) &&
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
					    )} 	
                    </div>
                </div>
            </div>
        </div>

    )
}


export default ListingTemplate;