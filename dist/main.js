var ProgressBar;

ProgressBar = (function() {
  function ProgressBar(options) {
    var defaults;
    this.name = options.name;
    defaults = {
      displayNode: void 0
    };
    this.options = $.extend({}, defaults, options);
  }

  ProgressBar.prototype.display = function() {
    var markup;
    if (this.options.displayNode === undefined) {
      alert('Please specify a displayNode.');
    }
    if ($("ProgressBar").length === 0) {
      markup = '<div id="ProgressBar">Hello</div>';
      return this.options.displayNode.append(markup);
    } else {
      return $("ProgressBar").show();
    }
  };

  return ProgressBar;

})();
