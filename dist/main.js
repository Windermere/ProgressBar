var ProgressBar;

ProgressBar = (function() {
  function ProgressBar(options) {
    var defaults;
    this.name = options.name;
    defaults = {
      displayNode: void 0,
      initialVelocity: 5000,
      cssObject: {
        width: 234,
        top: 0,
        left: 0
      }
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
      $("#ProgressBar").css(this.options.cssObject);
    } else {
      $("#ProgressBar").css("visibility", "visible");
    }
    this.setPercent();
    $("#InnerProgressBar").velocity({
      width: 200
    }, this.options.initialVelocity);
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
        $("#ProgressBar").css("visibility", "hidden");
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
