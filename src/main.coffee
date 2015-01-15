class ProgressBar
  constructor: (options) ->
    @name = options.name
    defaults =
      displayNode: undefined
      initialVelocity: 5000
      cssObject:
        width: 234
        top: 0
        left: 0

    @options = $.extend({} , defaults, options)

  display: ->
    alert('Please specify a displayNode.')  if @options.displayNode is `undefined`

    if $("#ProgressBar").length is 0
      markup = '
        <div id="ProgressBar">
          <div id="InnerProgressGutter">
            <div id="InnerProgressBar"></div>
          </div>
          <div id="Percentage">
            0%
          </div>
          <div style="clear: both;"></div>
        </div>
      '
      @options.displayNode.append(markup)
      $("#ProgressBar").css(@options.cssObject)
    else
      $("#ProgressBar").css("visibility", "visible")

    @setPercent()

    $("#InnerProgressBar").velocity
      width: 200
    , @options.initialVelocity

    return

  stop: ->
    $("#InnerProgressBar").velocity("stop", true)
    $("#InnerProgressBar").velocity
      width: 200
    ,

      # Log all the animated divs.
      complete: (elements) ->
        $("#InnerProgressBar").velocity("stop", true)
        $("#InnerProgressBar").css("width", 24)
        clearInterval(@percentageInterval)
        $("#ProgressBar").css("visibility", "hidden")

        return

  setPercent: ->
    @percentageInterval = setInterval(=>
      p = parseInt($("#InnerProgressBar").outerWidth(true) / 2)
      $("#Percentage").html(p + "%")
    , 100)
