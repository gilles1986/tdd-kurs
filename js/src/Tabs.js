/**
 * Created by Gilles on 12.06.2016.
 */
function Tabs($container) {

  var HIDDEN_CLASS = "ninja";
  var STORAGE_KEY = "activeTabs";

  var I = this;


  this.setup = function() {
    $(document).ready(function() {
      I.showTab();
    });
  };


  this.getContainer = function() {
    return $container;
  };


  this.showTab = function() {
    this.hideTabs();
    this.showActiveTab();
  };

  this.hideTabs = function() {
    var $container = this.getContainer();
    $container.find(".content").addClass(HIDDEN_CLASS);
  };

  this.showActiveTab = function() {
    var $container = this.getContainer();
    var tabNumber = this.getActiveTab();
    $container.find(".content").eq(tabNumber-1).removeClass(HIDDEN_CLASS);
  };

  this.getActiveTab = function() {
    var storageValue = this.getActiveTabsFromStorage();
    if(storageValue === null) return 1;

    var activeTabs = JSON.parse(storageValue);
    var id = this.getContainerId();
    var activeTab = activeTabs[id];
    return (activeTab) ? activeTab : 1;
  };

  this.getContainerId = function() {
    var $container = this.getContainer();
    return $container.attr("id");
  };

  this.getActiveTabsFromStorage = function() {
    return localStorage.getItem(STORAGE_KEY);
  };


}