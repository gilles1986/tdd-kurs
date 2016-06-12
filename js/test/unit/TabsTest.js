/**
 * Created by Gilles on 12.06.2016.
 */
//loadFixtures("overlayexample.fixture.html");
describe("Tabs", function() {

  var tabs;

  beforeEach(function() {
    tabs = new Tabs($(".contentBox:first"));
    loadFixtures("contentbox.html");
  });

  describe("hideTabs", function() {

    it("should add the ninja class to every content", function() {

      tabs.hideTabs();

      var $container = tabs.getContainer();
      var hasClass = true;
      $container.find(".content").each(function(index, elem) {
        if(!$(elem).hasClass("ninja")) {
          hasClass = false;
        }
      });
      expect(hasClass).toEqual(true);
    });

  });

});
