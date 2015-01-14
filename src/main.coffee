class ProgressBar
  constructor: (options) ->
    @name = options.name
    defaults =
      displayNode: undefined

    @options = $.extend({} , defaults, options)

  display: ->
    alert('Please specify a displayNode.')  if @options.displayNode is `undefined`

    if $("ProgressBar").length is 0
      markup = '
        <div id="ProgressBar">Hello</div>
      '
      @options.displayNode.append(markup)
    else
      $("ProgressBar").show()
