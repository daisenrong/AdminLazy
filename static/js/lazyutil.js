/**
 *
 */
// Make sure jQuery has been loaded
// if (typeof jQuery === 'undefined') {
//     throw new Error('LazyUtil.js requires jQuery')
// }
(function ($) {
    $.lazyutil = {
        getObjectHeight: function (obj) {
            return $(obj).height();
        }
    }
});