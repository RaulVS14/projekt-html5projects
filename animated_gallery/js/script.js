$(document).ready(function(){
    var items=$('#gallery li'),
        itemsByTags=[];

    // Loop Through Tags

    items.each(function(i){
        var elem = $(this),
            tags = elem.data('tags').split(',');
        // Add data attribute for quicksand
        elem.attr('data-id', i);

        $.each(tags, function(key, value){
            // Remove whitespace
            value = $.trim(value);
            if(!(value in itemsByTags)){
                // Add empty value
                itemsByTags[value]=[];
            }
            // Add image to array
            itemsByTags[value].push(elem);
        });
    });
    // Create "All Items Function"
    createList("All Items", items);
    $.each(itemsByTags,function(k, v){
        createList(k,v);
    })
});