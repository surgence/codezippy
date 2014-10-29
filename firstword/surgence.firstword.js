(function ($) {
    $.fn.firstword = function (options) {
        var settings = $.extend({}, $.fn.firstword.defaults, options);
        return this.each(function () {
            var obj = $(this);
            var array = obj.text().split(settings.split);
            var first = array[0];
            if (array.length > 1) {
                first += settings.split;
            }
            var newtext = obj.text(obj.text().replace(first, ""));
            var firstword = settings.wrapper.text(first).addClass(settings.classname);
            obj.prepend(firstword);
        });
    };
    $.fn.firstword.defaults = {
        classname: "firstword",
        split: " ",
        wrapper:$('<span />')
    };
}(jQuery));