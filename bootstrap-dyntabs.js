(function( $ ) {
    $.fn.dynatabs = function() {
	var elt = this;
	this.pageNum = 1;
	this.currentTab=null;
	this.previewTab=null;
	var master = this;
	
	/**
	* Manage history
	*
	*/
	this.manageHistory =function() {
	  // add a hash to the URL when the user clicks on a tab
	  $('a[data-toggle="tab"]').on('click', function(e) {
		history.pushState(null, null, $(this).attr('href'));
	  });
	  // navigate to a tab when the history changes
	  window.addEventListener("popstate", function(e) {
		var activeTab = $('[href=' + location.hash + ']');
		if (activeTab.length) {
		  activeTab.tab('show');
		} else {
		  $('.nav-tabs a:first').tab('show');
		}
	  });
	}

	this.openTab = function (tab){
			$('.nav-tabs a[href="#' + tab + '"]').tab('show');
	 };

	/**
	* Add a Tab
	*/
	elt.find('[data-toggle="tabs"]').unbind('click');
	elt.find('[data-toggle="tabs"]').click(function(e) {
	var pageTab = $(this).closest('.tabs-container').find('.nav-tabs');
	var pageTabContent = $(this).closest('.tabs-container').find('.tab-content');
	e.preventDefault();
	var $this = $(this);
	var tabTitle = $this.attr('tab-title') + '('+master.pageNum+')';
	var href = $this.attr('tab-href');
	console.log(href);
	pageTab.append( $('<li class="dynamic"><a data-toggle="tab" href="#page' + master.pageNum + '">' +   tabTitle 
	+'<button class="close" title="Remove this page" type="button">×</button>'
	+  '</a></li>'));
 
	pageTabContent.append($('<div class="tab-pane" id="page' + master.pageNum+ '">'
	+ '<div class="panel-body">	Content page' + master.pageNum + '</div></div>'));
 
	$('#page' + master.pageNum).load(href);
	master.openTab('page' + master.pageNum);
	master.pageNum++;
	});

	/**
	* Remove a Tab
	*/
	elt.on('click', ' li a .close', function(e) {
		var pageTab = $(this).closest('.tabs-container').find('.nav-tabs');
		var tabId = $(this).parents('li').children('a').attr('href');
		$(this).parents('li').remove('li');
		$(tabId).remove();
		pageTab.find('a:first').tab('show');
	});
	 
	/**
	 * Click Tab to show its contents
	 */
	elt.on("click", ".nav-tabs a", function(e) {
		e.preventDefault();
		if(master.currentTab)
		$(this).tab('show');
	});

	}
 
}( jQuery ));

