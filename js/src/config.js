/**
 * Created by Gilles on 12.06.2016.
 */
$(".contentBox").each(function(index, elem) {
  var tabs = new Tabs($(elem));
  tabs.setup();
});

