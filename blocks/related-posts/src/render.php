<?php
$block_wrapper_attributes = get_block_wrapper_attributes();
$relatedPosts = ($attributes['relatedPosts'] === "auto") ? $attributes['PostAllCategory'] : $attributes['PostSetCollection'];
$paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : $attributes['pageNumber'];

$args = array(
    'post_type'      => esc_attr($attributes['cptAllPostTypeValue']) ? esc_attr($attributes['cptAllPostTypeValue']) : 'post', // Replace with your actual post type
    'posts_per_page' => esc_attr($attributes['postsPerPage']), // Number of posts per page
    'paged'          => $paged // Current page number
);
$query = new WP_Query( $args );


// echo '<pre>';
// print_r($relatedPosts);
// echo '</pre>';

?>
<div>

    <?php if($attributes['relatedPosts'] !== "all") { ?>
        <div class="row row-cols-lg-<?=esc_html($attributes['columnDesktop'])?> row-cols-md-<?=esc_html($attributes['columnTab'])?> row-cols-<?=esc_html($attributes['columnMob'])?>">
            <?php foreach ($relatedPosts as $key => $value) { ?> 
                <div class="col">
                    <img src="<?=esc_url($value['jetpack_featured_media_url'])?>" class="img-fluid">
                    <div class="post-date" style="color: <?=esc_html($attributes['postDateTextColor'])?>">
                    <?php 
                    
                        $date = new DateTime($value['date']);
                        echo esc_html(ucfirst($value['type']) . ' - ' . $date->format('F d, Y')); 
                    ?>
                    </div>
                    <h2 class="richtext-heading text-<?=esc_html($attributes['headingApperance']); ?> text-<?=esc_html($attributes['headingAlign']); ?> text-wrap" style="--heading-bg-color:<?=esc_html($attributes['headingApperance']); ?>; --heading-color: <?=esc_html($attributes['headingTextColor']); ?>;"><?=esc_html($value['title']['rendered'])?></h2>

                    <p class="richtext-paragraph text-<?=esc_html($attributes['paragraphApperance']); ?> text-<?=esc_html($attributes['paragraphAlign']); ?> text-wrap" style="--paragraph-bg-color: <?=esc_html($attributes['paragraphBgColor']); ?>; --paragraph-color: <?=esc_html($attributes['paragraphTextColor']); ?>; --paragraph-font-size: <?=esc_html($attributes['paragraphFontSize'] . '' . $attributes['paragraphUnits']); ?>;">
                        <?=wp_strip_all_tags($value['excerpt']['rendered'])    ?>
                    </p>git 
                    <div class="d-flex ">
                        <a href="<?=esc_url($value['link'])?>" target="<?=esc_attr($attributes['btnlinkTarget']); ?>" class="richtext-button <?=esc_html($attributes['readMoreClass']); ?> " style="--btn-text-color: <?=esc_html($attributes['btntextColor']); ?>; --btn-outline-color: <?=esc_html($attributes['btnoutlineColor']); ?>; --border-radius: <?=esc_html($attributes['borderRadius']); ?>px; --border-width: <?=esc_html($attributes['borderWidth']); ?>px; --btn-background-color: <?=esc_html($attributes['btnbackgroundColor']); ?>; --btn-hover-color: <?=esc_html($attributes['btnHoverColor']); ?>; --btn-hover-text-color: <?=esc_html($attributes['btnHoverTextColor']);?>; --btn-padding-left: <?=esc_html($attributes['bttnPaddingX']);?>rem; --btn-padding-right: <?=esc_html($attributes['bttnPaddingX']);?>rem; --btn-padding-top: <?=esc_html($attributes['bttnPaddingY']);?>rem; --btn-padding-bottom: <?=esc_html($attributes['bttnPaddingY']);?>rem;">Read more</a>
                    </div>
                </div>
            <?php } ?>
        </div>
    <?php } ?>

                
    <?php if($attributes['relatedPosts'] === "all") { ?>

        <div class="container post-filter">
            <div class="row g-2">
                <div class="col-md-3">
                    <div class="processor p-2">
                        <div class="heading d-flex justify-content-between align-items-center">
                            <h6 class="text-uppercase">Categories</h6> <span>--</span> 


                            <div id="categories-filter"></div>
                        </div>
                    </div>
                </div>
                <div class="col-md-9" id="listings">
                    
                </div>
            </div>
        </div>
    <?php } ?>
    <div class="pagination"></div>    
</div>

<script id="post-template-course" type="text/x-handlebars-template">
    {{#each posts}}
    <div class="row row-cols-lg-<?=esc_html($attributes['columnDesktop'])?> row-cols-md-<?=esc_html($attributes['columnTab'])?> row-cols-<?=esc_html($attributes['columnMob'])?>">

        <div class="col">
            <img src="{{featured_image_url}}" class="img-fluid">
            <span style="color:{{category_header_color}}" >{{category_ids.[0].name}}</span>
            <h2  style="color:{{category_header_color}}" class="richtext-heading text-<?= esc_attr($attributes['headingApperance']); ?> text-<?= esc_attr($attributes['headingAlign']); ?> text-wrap" style="--heading-bg-color: <?= esc_attr($attributes['headingApperance']); ?>; --heading-color: <?= esc_attr($attributes['headingTextColor']); ?>;">
                {{post_title}}
            </h2>
            <div class="post-date" style="color: <?=esc_html($attributes['postDateTextColor'])?>">
                <p>Intake: {{meta_data._course_intake.[0]}} </p>
                <p>Duration: {{meta_data._course_duration.[0]}} </p>
                <p>Study Mode: {{meta_data._course_studymode.[0]}} </p>
                <p>Price: List Price €{{meta_data._course_price_list.[0]}} / IBAT Price €{{meta_data._course_price_ibat.[0]}} </p>
            </div>
            <p class="richtext-paragraph text-<?= esc_attr($attributes['paragraphApperance']); ?> text-<?= esc_attr($attributes['paragraphAlign']); ?> text-wrap" style="--paragraph-bg-color: <?= esc_attr($attributes['paragraphBgColor']); ?>; --paragraph-color: <?= esc_attr($attributes['paragraphTextColor']); ?>; --paragraph-font-size: <?= esc_attr($attributes['paragraphFontSize'] . '' . $attributes['paragraphUnits']); ?>;">
                {{post_excerpt}}
            </p>
            <div class="d-flex">
                <a href="{{post_permalink}}" target="<?= esc_attr($attributes['btnlinkTarget']); ?>"    style="color:{{category_header_color}}" class="<?= esc_attr($attributes['readMoreClass']); ?>" >
                    Read more
                </a>
            </div>
        </div>
        <!-- Add more fields as needed -->
    </div>
    {{/each}}
</script>


<script id="post-template-testimonnials" type="text/x-handlebars-template">
    {{#each posts}}
    <div class="row row-cols-lg-<?=esc_html($attributes['columnDesktop'])?> row-cols-md-<?=esc_html($attributes['columnTab'])?> row-cols-<?=esc_html($attributes['columnMob'])?>">
        <div class="col">
            <img src="{{featured_image_url}}" class="img-fluid">
            <h2  style="color:{{category_header_color}}" class="richtext-heading text-<?= esc_attr($attributes['headingApperance']); ?> text-<?= esc_attr($attributes['headingAlign']); ?> text-wrap" style="--heading-bg-color: <?= esc_attr($attributes['headingApperance']); ?>; --heading-color: <?= esc_attr($attributes['headingTextColor']); ?>;">
                {{post_title}}
            </h2>
            <span>Ibat Student</span>
            <p class="richtext-paragraph text-<?= esc_attr($attributes['paragraphApperance']); ?> text-<?= esc_attr($attributes['paragraphAlign']); ?> text-wrap" style="--paragraph-bg-color: <?= esc_attr($attributes['paragraphBgColor']); ?>; --paragraph-color: <?= esc_attr($attributes['paragraphTextColor']); ?>; --paragraph-font-size: <?= esc_attr($attributes['paragraphFontSize'] . '' . $attributes['paragraphUnits']); ?>;">
                {{post_excerpt}}
            </p>
            <div class="d-flex">
                <a href="{{post_permalink}}" target="<?= esc_attr($attributes['btnlinkTarget']); ?>"  class="<?= esc_attr($attributes['readMoreClass']); ?>" >
                    Read more
                </a>
            </div>
        </div>
        <!-- Add more fields as needed -->
    </div>
    {{/each}}
</script>

<script id="post-template-blog" type="text/x-handlebars-template">
    {{#each posts}}
    <div class="row row-cols-lg-<?=esc_html($attributes['columnDesktop'])?> row-cols-md-<?=esc_html($attributes['columnTab'])?> row-cols-<?=esc_html($attributes['columnMob'])?>">

        <div class="col">
            <img src="{{featured_image_url}}" class="img-fluid">

            <div className="post-date" style="color: <?=esc_attr($attributes['headingApperance'])?>">
                        {{capitalizeFirstLetter type}} - {{formatDate date}}

            </div>

        
            <h2 class="richtext-heading text-<?= esc_attr($attributes['headingApperance']); ?> text-<?= esc_attr($attributes['headingAlign']); ?> text-wrap" style="--heading-bg-color: <?= esc_attr($attributes['headingApperance']); ?>; --heading-color: <?= esc_attr($attributes['headingTextColor']); ?>;">
                {{post_title}}
            </h2>

            <p class="richtext-paragraph text-<?= esc_attr($attributes['paragraphApperance']); ?> text-<?= esc_attr($attributes['paragraphAlign']); ?> text-wrap" style="--paragraph-bg-color: <?= esc_attr($attributes['paragraphBgColor']); ?>; --paragraph-color: <?= esc_attr($attributes['paragraphTextColor']); ?>; --paragraph-font-size: <?= esc_attr($attributes['paragraphFontSize'] . '' . $attributes['paragraphUnits']); ?>;">
                {{post_excerpt}}
            </p>

            <div class="d-flex">
                <a href="{{post_permalink}}" target="<?= esc_attr($attributes['btnlinkTarget']); ?>" class="richtext-button <?= esc_attr($attributes['readMoreClass']); ?>" style="--btn-text-color: <?= esc_attr($attributes['btntextColor']); ?>; --btn-outline-color: <?= esc_attr($attributes['btnoutlineColor']); ?>; --border-radius: <?= esc_attr($attributes['borderRadius']); ?>px; --border-width: <?= esc_attr($attributes['borderWidth']); ?>px; --btn-background-color: <?= esc_attr($attributes['btnbackgroundColor']); ?>; --btn-hover-color: <?= esc_attr($attributes['btnHoverColor']); ?>; --btn-hover-text-color: <?= esc_attr($attributes['btnHoverTextColor']); ?>; --btn-padding-left: <?= esc_attr($attributes['bttnPaddingX']); ?>rem; --btn-padding-right: <?= esc_attr($attributes['bttnPaddingX']); ?>rem; --btn-padding-top: <?= esc_attr($attributes['bttnPaddingY']); ?>rem; --btn-padding-bottom: <?= esc_attr($attributes['bttnPaddingY']); ?>rem;">
                    Read more
                </a>
            </div>
        </div>
        <!-- Add more fields as needed -->
    </div>
    {{/each}}
</script>

<script id="post-template-team" type="text/x-handlebars-template">
    {{#each posts}}
    <div class="row row-cols-lg-<?=esc_html($attributes['columnDesktop'])?> row-cols-md-<?=esc_html($attributes['columnTab'])?> row-cols-<?=esc_html($attributes['columnMob'])?>">

        <div class="col">
            <img src="{{featured_image_url}}" class="img-fluid">

            <div className="post-date" style="color: <?=esc_attr($attributes['headingApperance'])?>">
                {{meta_data._team_member_role}} {{meta_data._team_member_title}}
            </div>

        
            <h2 class="richtext-heading text-<?= esc_attr($attributes['headingApperance']); ?> text-<?= esc_attr($attributes['headingAlign']); ?> text-wrap" style="--heading-bg-color: <?= esc_attr($attributes['headingApperance']); ?>; --heading-color: <?= esc_attr($attributes['headingTextColor']); ?>;">
                {{post_title}}
            </h2>

            <p class="richtext-paragraph text-<?= esc_attr($attributes['paragraphApperance']); ?> text-<?= esc_attr($attributes['paragraphAlign']); ?> text-wrap" style="--paragraph-bg-color: <?= esc_attr($attributes['paragraphBgColor']); ?>; --paragraph-color: <?= esc_attr($attributes['paragraphTextColor']); ?>; --paragraph-font-size: <?= esc_attr($attributes['paragraphFontSize'] . '' . $attributes['paragraphUnits']); ?>;">
                {{post_excerpt}}
            </p>

            <div class="d-flex">
                <a href="{{post_permalink}}" target="<?= esc_attr($attributes['btnlinkTarget']); ?>" class="richtext-button <?= esc_attr($attributes['readMoreClass']); ?>" style="--btn-text-color: <?= esc_attr($attributes['btntextColor']); ?>; --btn-outline-color: <?= esc_attr($attributes['btnoutlineColor']); ?>; --border-radius: <?= esc_attr($attributes['borderRadius']); ?>px; --border-width: <?= esc_attr($attributes['borderWidth']); ?>px; --btn-background-color: <?= esc_attr($attributes['btnbackgroundColor']); ?>; --btn-hover-color: <?= esc_attr($attributes['btnHoverColor']); ?>; --btn-hover-text-color: <?= esc_attr($attributes['btnHoverTextColor']); ?>; --btn-padding-left: <?= esc_attr($attributes['bttnPaddingX']); ?>rem; --btn-padding-right: <?= esc_attr($attributes['bttnPaddingX']); ?>rem; --btn-padding-top: <?= esc_attr($attributes['bttnPaddingY']); ?>rem; --btn-padding-bottom: <?= esc_attr($attributes['bttnPaddingY']); ?>rem;">
                    Read more
                </a>
            </div>
        </div>
        <!-- Add more fields as needed -->
    </div>
    {{/each}}
</script>

<script id="post-categories-template" type="text/x-handlebars-template">
    {{#each categories}}
        <div class="d-flex justify-content-between mt-2">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" name="filter" value="{{ term_id }}"  />
                <label class="form-check-label" for="checkbox-{{ term_id }}">
                    {{name}}
                </label>
            </div> 
        </div>
    {{/each}}
</script>




<script>

    paged = <?=esc_attr($paged)?>;
    post_per_page = <?=esc_attr($attributes['postsPerPage'])?>;
    var ajaxurl = "<?php echo esc_url(admin_url('admin-ajax.php')); ?>";
    var relatedPosts = "<?=esc_attr($attributes['relatedPosts'])?>"
    const urlParams = new URLSearchParams(window.location.search);
    checkedItems = [];
    cptType = '<?=esc_attr($attributes['cptAllPostTypeValue'])?>';   



    const getCategoriesFromUrl = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const categoriesParam = urlParams.get('categories');
        if (categoriesParam) {
          
            checkedItems = categoriesParam.split(','); // Split string to array of categories
          
        } else {
            checkedItems = []; // Default to empty array if no categories parameter found
            urlParams.delete('categories');
            const newUrl = window.location.pathname + '?' + urlParams.toString();
            history.pushState({ path: newUrl }, '', newUrl);
        }

    
    };
    const updateUrlWithCategories = (categories) => {
        // Update URL with selected categories
        var urlParams = new URLSearchParams(window.location.search);
        urlParams.set('categories', categories.join(','));

        if(!categories.length) {
            urlParams.delete('categories'); 
        }
        var newUrl = window.location.pathname + '?' + urlParams.toString();
        history.pushState({ path: newUrl }, '', newUrl);
    };
    
    function getFilteredPosts(categories) {

        const urlParams = new URLSearchParams(window.location.search);
        let page = urlParams.has('paged') ? parseInt(urlParams.get('paged')) : paged;


        var ajaxGetPostsParams = {
            url: ajaxurl,  // Defined in WordPress using wp_localize_script
            type: 'POST',
            data: {
                action: 'get_filterd_posts',   
                cpt: '<?=esc_attr($attributes['cptAllPostTypeValue']) ? esc_attr($attributes['cptAllPostTypeValue']) : 'post';?>',  // Replace with your custom post type
                posts_per_page: <?=esc_attr($attributes['postsPerPage'])?>, 
                paged: page,
                cptTaxonomyValue: cptTaxonomyValue,
                categories: categories
            },
            success: function(response) {
                var posts = JSON.parse(response);
                totalPages = posts.totalPosts / post_per_page;
                if(totalPages < 1) { totalPages = 1 }
                if(cptType === 'course') {
                    var source = $('#post-template-course').html();
                } else if(cptType === 'team_member') {
                    var source = $('#post-template-team').html();
                } else if(cptType === 'testimonial') {
                  var source = $('#post-template-testimonnials').html();
                } else {
                    var source = $('#post-template-blog').html();
                }
                var template = Handlebars.compile(source);
                var html = template({ posts: posts.data });
                $('#listings').html(html);

                const paginateHtml = `<nav aria-label="Page navigation">
                <ul class="pagination justify-content-center">
                <li class="page-item ${paged === 1 ? 'disabled' : ''}">
                <button class="page-link pagination-fontsize" data-page="${paged - 1}">&laquo;</button>
                </li>
                ${Array.from({ length: totalPages }, (_, index) => {
                    
                if (
                    index === 0 ||
                    index === totalPages - 1 ||
                    index === paged - 1 ||
                    index === paged - 10 ||
                    index === paged ||
                    index === paged + 1
                    ) {
                        return `
                        <li class="page-item ${index + 1 === paged ? 'active' : ''}">
                            <button class="page-link pagination-fontsize" data-page="${index + 1}">${index + 1}</button>
                        </li>`;
                    } else if (
                        index === 1 && paged - index > 10
                    ) {
                        return `
                        <li class="page-item disabled">
                            <button class="page-link pagination-fontsize">...</button>
                        </li>`;
                    } else if (
                        index === totalPages - 10 && index - paged > 10
                    ) {
                        return `
                        <li class="page-item disabled">
                            <button class="page-link pagination-fontsize">...</button>
                        </li>`;
                    }
                    }).join('')}
                    <li class="page-item ${paged === totalPages ? 'disabled' : ''}">
                    <button class="page-link pagination-fontsize" data-page="${paged + 1}">&raquo;</button>
                    </li>
                </ul>
                </nav>`;
                console.log(posts.totalPosts)
                if(post_per_page < posts.totalPosts) {
                    console.log(relatedPosts)
                    if(relatedPosts == "all") {
                        $('.pagination').html(paginateHtml); 
                    }
                } else {
                    $('.pagination').html('')
                    var urlParams = new  (window.location.search);
                    urlParams.set('paged', 1);
                }
                
            },
            error: function(errorThrown){
                console.log(errorThrown);
            }
        };
        $.ajax(ajaxGetPostsParams);
    }   

    const handleFilterCheckbox = (event) => {
        if(event.target.checked) {
            checkedItems.push(event.target.value);
        } else {
            let indexToRemove = checkedItems.indexOf(event.target.value);
            if (indexToRemove !== -1) {
                checkedItems.splice(indexToRemove, 1);
            }
        }
        updateUrlWithCategories(checkedItems);

        getFilteredPosts(checkedItems);
    };
    jQuery(document).ready(function($) {
    // Parameters for the AJAX request
        getCategoriesFromUrl();
        cptTaxonomyValue = '';
        switch ('<?=esc_attr($attributes['cptAllPostTypeValue'])?>') {
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

        var ajaxGetPostsCategoriesParams = {
            url: ajaxurl,  // Defined in WordPress using wp_localize_script
            type: 'POST',
            data: {
                action: 'get_filterd_posts_categories',  
                cpt: '<?=esc_attr($attributes['cptAllPostTypeValue']) ? esc_attr($attributes['cptAllPostTypeValue']) : 'post';?>', 
                cptTaxonomyValue: cptTaxonomyValue // Replace with your
            },
            success: function(response) {
                var categories = JSON.parse(response);
                console.log(categories)
                var source = $('#post-categories-template').html();
                var template = Handlebars.compile(source);
                var html = template({ categories: categories });
                $('#categories-filter').html(html);
              
                if(checkedItems.length) {
                    checkedItems.forEach(value => {
                        console.log(value)
                        $(`#categories-filter input[type="checkbox"][value="${value}"]`).prop('checked', true)
                    });
                }
            
                
            },
            error: function(errorThrown){
                console.log(errorThrown);
            }
        };

        // Make the AJAX request
        $.ajax(ajaxGetPostsCategoriesParams);
        getFilteredPosts(checkedItems);

    
        // console.log(ajaxGetPostsCategoriesParams)
        // console.log('asdas')


        $(document).on('change', '.post-filter input[type="checkbox"]', function(event) {
            handleFilterCheckbox(event);
        })

        $(document).on('click', '.page-item button', function(e) {
            var page = $(e.target).data('page');
            paged = page;

            // Update URL query parameter
            var urlParams = new URLSearchParams(window.location.search);
            urlParams.set('paged', paged);
            var newUrl = window.location.pathname + '?' + urlParams.toString();
            history.pushState({ path: newUrl }, '', newUrl);

            getFilteredPosts(checkedItems);
        });

    });
</script>