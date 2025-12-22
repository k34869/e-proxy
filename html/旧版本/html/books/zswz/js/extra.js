
$(document).ready(function(){

	myPlaylist = new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_1",
		cssSelectorAncestor: "#jp_container_1"
	}, [
		{
			/*m4a:"http://72.52.106.106/mp4/" + bible.ot_nt + "/" + bible.bookMP4Prefix + "-01.mp4",*/
			m4a:"http://play.twgbr.org/9023-05A/9023-05A.mp3",
		},
	], {
		swfPath: "index.htm"/*tpa=http://www.jplayer.org/latest/js/Jplayer.swf*/,
		supplied: "m4a",
		wmode: "window",
		smoothPlayBar: true,
		keyEnabled: true,
	});
	
	for (var i=2; i<=bible.numChapters; i++)
	{
		media_file_index = i;
		if (i < 10) { media_file_index = '0' + i; }
		/*media_file = "http://72.52.106.106/mp4/" + bible.ot_nt + "/" + bible.bookMP4Prefix + "-" + media_file_index + ".mp4";*/
		media_file = "http://play.twgbr.org/9023-05A/9023-05A.mp3";
		myPlaylist.add({
		  m4a: media_file,
		});	
	}
	
	$(".tab_content").hide();
	$(".tab_content:first").show(); 

	$("ul.tabs li").click(function() {
		if ($(this).attr("rel") != undefined) {
			$("ul.tabs li").removeClass("active");
			$(this).addClass("active");
			$(".tab_content").hide();
			var activeTab = $(this).attr("rel"); 
			$("#"+activeTab).fadeIn(); 
		}
		else if ($(this).hasClass("fontplus")) {
			var currentSize = $('#verses').css('font-size');
			var currentSize = parseFloat(currentSize)*1.1;
			$('#verses').css('font-size', currentSize);
		}
		else if ($(this).hasClass("fontminus")) {
			var currentSize = $('#verses').css('font-size');
			var currentSize = parseFloat(currentSize)*0.9;
			$('#verses').css('font-size', currentSize);
		}
	});

	
	//setup tab2
	var bibleAllBooks = ["", "???", "???", "???", "???", "???", "???", "???", "???", "??????", "??????", "??????", "??????", "??????", "??????", "???", "???", "???", "???", "???", "???", "???", "???", "???", "???", "???", "???", "???", "???", "???", "???", "???", "???", "???", "???", "???", "???", "???", "???", "???", "???", "???", "???", "???", "???", "???", "??????", "??????", "???", "???", "???", "???", "??????", "??????", "??????", "??????", "???", "???", "???", "???", "??????", "??????", "??????", "??????", "??????", "???", "???"];
	var html = '<ul class="menu">';
	for (var i=1; i<=39; i++) {
		html += '<li';
		if (bible.currBook == i) { html += ' class="active"'; }
		html += '><a href="./'; 
		if (i<10) { html += '0'; }
		html += i + '.html">' + bibleAllBooks[i] + '</a></li>';
	}
	html += '</ul>';
	html += '<ul class="menu newt">';
	for (var i=40; i<bibleAllBooks.length; i++) {
		html += '<li';
		if (bible.currBook == i) { html += ' class="active"'; }
		html += '><a href="./' + i + '.html">' + bibleAllBooks[i] + '</a></li>';
	}
	html += '</ul><div style="clear: both;"></div>';
	$("#tab2").html(html);
	
	
	//setup tab3
	html = '<ul class="menu bchapter">';
	for (var i=1; i<=bible.numChapters; i++) {
		html += '<li><a href="#' + bible.chapterPrefix + i + bible.chapterSuffix + '">' + i + '</a></li>';
	}
	html += '</ul><div style="clear: both;"></div>';
	$("#tab3").html(html);

	
	//show tab1 verses
	$("#tab3 li a").click(function() {
		$("ul.tabs li#nbtab3").removeClass("active");
		$("ul.tabs li:first").addClass("active");
		$("#tab3").hide();
		$("#tab1").fadeIn(); 
	});
	
	//highlight buttons
	$('.menu > li').hover(
        function(){
			$(this).addClass('on');
        },
        function(){
			$(this).removeClass('on');
        }
    );
	
	$('#verses h3').each(function() {
		$(this).append('<span><img src="images/play-bttn.jpg" /></span>');
	});
		
	$('#verses h3').click(function() {
		var oh3txt = $(this).html();
		var nh3txt = oh3txt.replace(/play\-bttn\.jpg/, 'ajax-loader.gif'/*tpa=/js/ajax-loader.gif*/);
		$(this).html(nh3txt);
		var patt = new RegExp(bible.chapterSuffix);
		if ($(this).attr('id').match(patt)) { 
			var media_file_index = ($(this).attr('id')).substr(0, ($(this).attr('id')).length - (bible.chapterSuffix).length);
			media_file_index = media_file_index.match(/(\d+)/g);
			media_file_index -= 1;
			myPlaylist.play(media_file_index);
			//$(this).html(oh3txt);
			var $this = jQuery(this);
			setTimeout( function(){ $this.html(oh3txt); }, 3000);
		}
	});


  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-75854111-1', 'auto');
  ga('send', 'pageview');


});

