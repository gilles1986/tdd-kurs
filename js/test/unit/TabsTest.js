/**
 * Created by Gilles on 12.06.2016.
 */
//loadFixtures("overlayexample.fixture.html");
describe("Tabs", function() {

  var tabs;

  beforeEach(function() {
    loadFixtures("contentbox.html");
    tabs = new Tabs($(".contentBox:first"));
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

  describe("showActiveTab", function() {
    it("should remove the ninja class from the first tab", function() {

      tabs.hideTabs();
      tabs.showActiveTab();

      var $container = tabs.getContainer();
      var hasClass = $container.find(".content:first").hasClass("ninja");

      expect(hasClass).toEqual(false);
    });

    it("should remove the ninja class from the second tab", function() {

      spyOn(tabs, "getActiveTab").and.returnValue(2);

      tabs.hideTabs();
      tabs.showActiveTab();

      var $container = tabs.getContainer();
      var hasClass = $container.find(".content:eq(1)").hasClass("ninja");

      expect(hasClass).toEqual(false);
    })
  });

  describe("showTab", function() {
    it("should call hideTabs and showActiveTab", function() {
      spyOn(tabs, "hideTabs");
      spyOn(tabs, "showActiveTab");

      tabs.showTab();

      expect(tabs.hideTabs).toHaveBeenCalled();
      expect(tabs.showActiveTab).toHaveBeenCalled();

    });
  });


  describe("getActiveTab", function() {
    it("should return the number of active tab", function() {
      spyOn(tabs, "getActiveTabsFromStorage").and.returnValue('{"box1" : 2}');

      var activeTab = tabs.getActiveTab();

      expect(activeTab).toEqual(2);
    });

    it("should return 1 when the active tab is null or undefined", function() {
      spyOn(tabs, "getActiveTabsFromStorage").and.returnValue('{"box2" : 2}');

      var activeTab = tabs.getActiveTab();

      expect(activeTab).toEqual(1);
    });

    it("should return 1 when no active tab has been set before", function() {
      spyOn(tabs, "getActiveTabsFromStorage").and.returnValue(null);

      var activeTab = tabs.getActiveTab();

      expect(activeTab).toEqual(1);
    });
  });

});
