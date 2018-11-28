/**
 * @author Ugonna Okoli
 *
 * **/
(function ($) {

    var divs = {
        'ball-pulse': 3,
        'ball-grid-pulse': 9,
        'ball-clip-rotate': 1,
        'ball-clip-rotate-pulse': 2,
        'square-spin': 1,
        'ball-clip-rotate-multiple': 2,
        'ball-pulse-rise': 5,
        'ball-rotate': 1,
        'cube-transition': 2,
        'ball-zig-zag': 2,
        'ball-zig-zag-deflect': 2,
        'ball-triangle-path': 3,
        'ball-scale': 1,
        'line-scale': 5,
        'line-scale-party': 4,
        'ball-scale-multiple': 3,
        'ball-pulse-sync': 3,
        'ball-beat': 3,
        'line-scale-pulse-out': 5,
        'line-scale-pulse-out-rapid': 5,
        'ball-scale-ripple': 1,
        'ball-scale-ripple-multiple': 3,
        'ball-spin-fade-loader': 8,
        'line-spin-fade-loader': 8,
        'triangle-skew-spin': 1,
        'pacman': 5,
        'ball-grid-beat': 9,
        'semi-circle-spin': 1,
        'ball-scale-random': 3
    };

    var addDivs = function (n) {
        var arr = [];
        for (i = 1; i <= n; i++) {
            arr.push('<div></div>');
        }
        return arr;
    };

    var options = {
        type: "ball-grid-pulse",
        color: "gray",
        text: "",
        textColor: "#456",
        textSize: "12px",
        background: "transparent",
        placement: "inline"
    };

    $.fn['waitSplash'] = function (state, opt) {
        if (typeof opt === 'object') {
            options.type = (typeof opt.type === 'undefined') ? options.type : opt.type;
            options.color = (typeof opt.color === 'undefined') ? options.color : opt.color;
            options.text = (typeof opt.text === 'undefined') ? options.text : opt.text;
            options.textColor = (typeof opt.textColor === 'undefined') ? options.textColor : opt.textColor;
            options.textSize = (typeof opt.textSize === 'undefined') ? options.textSize : opt.textSize;
            options.background = (typeof opt.background === 'undefined') ? options.background : opt.background;
            options.placement = (typeof opt.placement === 'undefined') ? options.placement : opt.placement;
        }

        if (typeof state === 'string') {
            var elem = $(this);
            switch (state) {
                case 'show':
                    var divCount = divs[options.type];
                    var splash = $(document.createElement("DIV"));
                    splash.addClass(options.type);
                    splash.html(addDivs(divCount));

                    var wrapper = $(document.createElement("DIV"));
                    wrapper.addClass("wrap-loader");//wrap-loader is defined in style.css
                    wrapper.html(splash);
                    wrapper.find("." + options.type).after('<div class="splash-text">' + options.text + '</div>');
                    elem.append(wrapper);

                    //Translate placement from (window or inline) to (fixed or absolute)
                    options.placement = (options.placement == 'window') ? "fixed" : "absolute";

                    document.querySelector("html").style.setProperty("--loaderitemcolor", options.color);
                    document.querySelector("html").style.setProperty("--loadertextcolor", options.textColor);
                    document.querySelector("html").style.setProperty("--loadertextsize", options.textSize);
                    document.querySelector("html").style.setProperty("--loaderbackground", options.background);
                    document.querySelector("html").style.setProperty("--loaderbackgroundposition", options.placement);
                    break;
                case 'hide':
                    elem.find(".wrap-loader").remove();
                    break;
            }
        }
    }

}).call(window, window.$ || window.jQuery || window.Zepto);
