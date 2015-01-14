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
      markup = '<div id="ProgressBar"> <div id="InnerProgressGutter"> <div id="InnerProgressBar"></div> </div> <div id="Percentage"> 0% </div> <div style="clear: both;"></div> </div>';
      this.options.displayNode.append(markup);
    } else {
      $("ProgressBar").show();
    }
    $("#InnerProgressBar").velocity({
      width: 196
    }, 5000);
  };

  ProgressBar.prototype.stop = function() {
    $("#InnerProgressBar").velocity("stop", true);
    return $("#InnerProgressBar").velocity({
      width: 196
    }, {
      complete: function(elements) {
        $("#InnerProgressBar").velocity("stop", true);
        $("#ProgressBar").hide();
      }
    });
  };

  return ProgressBar;

})();
