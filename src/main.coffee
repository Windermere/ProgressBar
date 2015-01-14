class ProgressBar
  constructor: (options) ->
    @name = options.name
    defaults =
      displayNode: undefined

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
    else
      $("#ProgressBar").show()

    $("#InnerProgressBar").velocity
      width: 196
    , 5000

    return

  stop: ->
    $("#InnerProgressBar").velocity("stop", true)
    $("#InnerProgressBar").velocity
      width: 196
    ,

      # Log all the animated divs.
      complete: (elements) ->
        $("#InnerProgressBar").velocity("stop", true)
        $("#InnerProgressBar").css("width", 24)
        $("#ProgressBar").hide()

        return
