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
    if ($("#ProgressBar").length === 0) {
      markup = '<div id="ProgressBar"> <div id="InnerProgressGutter"> <div id="InnerProgressBar"></div> </div> <div id="Percentage"> 0% </div> <div style="clear: both;"></div> </div>';
      this.options.displayNode.append(markup);
    } else {
      $("#ProgressBar").show();
    }
    this.setPercent();
    $("#InnerProgressBar").velocity({
      width: 200
    }, 5000);
  };

  ProgressBar.prototype.stop = function() {
    $("#InnerProgressBar").velocity("stop", true);
    return $("#InnerProgressBar").velocity({
      width: 200
    }, {
      complete: function(elements) {
        $("#InnerProgressBar").velocity("stop", true);
        $("#InnerProgressBar").css("width", 24);
        clearInterval(this.percentageInterval);
        $("#ProgressBar").hide();
      }
    });
  };

  ProgressBar.prototype.setPercent = function() {
    return this.percentageInterval = setInterval((function(_this) {
      return function() {
        var p;
        p = parseInt($("#InnerProgressBar").outerWidth(true) / 2);
        return $("#Percentage").html(p + "%");
      };
    })(this), 100);
  };

  return ProgressBar;

})();
