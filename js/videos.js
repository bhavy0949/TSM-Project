var Youtube = (function () {
    'use strict';
    var getThumb = function (video) {
        if (video === null) {
            return '';
        }
        // video   = (results === null) ? url : results[1];


        return 'https://img.youtube.com/vi/' + video + '/0.jpg';
    };

    return {
        thumb: getThumb
    };
}());

function crop(url, aspectRatio) {

    // we return a Promise that gets resolved with our canvas element
    return new Promise(resolve => {

        // this image will hold our source image data
        const inputImage = new Image();

        // we want to wait for our image to load
        inputImage.onload = () => {

            // let's store the width and height of our image
            const inputWidth = inputImage.naturalWidth;
            const inputHeight = inputImage.naturalHeight;

            // get the aspect ratio of the input image
            const inputImageAspectRatio = inputWidth / inputHeight;

            // if it's bigger than our target aspect ratio
            let outputWidth = inputWidth;
            let outputHeight = inputHeight;
            if (inputImageAspectRatio > aspectRatio) {
                outputWidth = inputHeight * aspectRatio;
            } else if (inputImageAspectRatio < aspectRatio) {
                outputHeight = inputWidth / aspectRatio;
            }

            // calculate the position to draw the image at
            const outputX = (outputWidth - inputWidth) * .5;
            const outputY = (outputHeight - inputHeight) * .5;

            // create a canvas that will present the output image
            const outputImage = document.createElement('canvas');

            // set it to the same size as the image
            outputImage.width = outputWidth;
            outputImage.height = outputHeight;

            // draw our image at position 0, 0 on the canvas
            const ctx = outputImage.getContext('2d');
            ctx.drawImage(inputImage, outputX, outputY);
            resolve(outputImage);
        };

        // start loading our image
        inputImage.src = url;
    })
}

$(".ytb-thumb").each(function (index) {

    $(this).attr("src", Youtube.thumb($(this).attr("data-src")));

});
$(document).ready(function () {
    let width = $(".ytb-thumb").width();

    if (width > 0) {

        $(".ytb-thumb").height(width * 9 / 16);
    }
});