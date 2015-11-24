$(function(){
    var pickbox = $('#pickbox'),
        back = $('.back', pickbox);

    pickbox.filedrop({
        paramname:'pic',
        maxfilesize: 2,
        maxfiles: 6,
        url:'uploader/upload.php',

        uploadFinished: function(i,file, response){
            $.data(file).addClass('done');
        },
        error:function(err,file){
            switch (err){
                case 'BrowserNotSupported':
                    showMessage('Your browser does not support HTML5 file upload');
                    break;
                case 'TooManyFiles':
                    alert('You went over the max number of files');
                    break;
                case 'FileTooLarge':
                    alert(file.name + ' is too big, please upload a smaller image.');
                    break;
                default:
                    break;
            }
        },
        beforeEach: function(file){
            if(!file.type.match(/^image\//)){
                alert('Your file is not an image');
                return false;
            }
        },
        uploadStart: function(i,file,length){

        }
    })
});