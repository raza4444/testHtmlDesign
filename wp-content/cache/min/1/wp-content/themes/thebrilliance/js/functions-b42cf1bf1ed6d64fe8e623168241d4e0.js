(function($){"use strict";var body=$('body'),_window=$(window);(function(){var nav=$('#primary-navigation'),button,menu;if(!nav){return}
button=nav.find('.menu-toggle');if(!button){return}
menu=nav.find('.nav-menu');if(!menu||!menu.children().length){button.hide();return}
$('.menu-toggle').on('click.fw_theme',function(){nav.toggleClass('toggled-on')})})();_window.on('hashchange.fw_theme',function(){var element=document.getElementById(location.hash.substring(1));if(element){if(!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)){element.tabIndex=-1}
element.focus();window.scrollBy(0,-80)}});$(function(){$('.search-toggle').on('click.fw_theme',function(event){var that=$(this),wrapper=$('.search-box-wrapper');that.toggleClass('active');wrapper.toggleClass('hide');if(that.is('.active')||$('.search-toggle .screen-reader-text')[0]===event.target){wrapper.find('.search-field').focus()}});if(_window.width()>781){var mastheadHeight=$('#masthead').height(),toolbarOffset,mastheadOffset;if(mastheadHeight>48){body.removeClass('masthead-fixed')}
if(body.is('.header-image')){toolbarOffset=body.is('.admin-bar')?$('#wpadminbar').height():0;mastheadOffset=$('#masthead').offset().top-toolbarOffset;_window.on('scroll.fw_theme',function(){if((window.scrollY>mastheadOffset)&&(mastheadHeight<49)){body.addClass('masthead-fixed')}else{body.removeClass('masthead-fixed')}})}}
$('.primary-navigation, .secondary-navigation').find('a').on('focus.fw_theme blur.fw_theme',function(){$(this).parents().toggleClass('focus')})});_window.load(function(){if($.isFunction($.fn.masonry)){$('#footer-sidebar').masonry({itemSelector:'.widget',columnWidth:function(containerWidth){return containerWidth/4},gutterWidth:0,isResizable:!0,isRTL:$('body').is('.rtl')})}
if(body.is('.slider')){$('.featured-content').featuredslider({selector:'.featured-content-inner > article',controlsContainer:'.featured-content'})}})})(jQuery);jQuery(function($){function hoverIn(){var a=$(this);var nav=a.closest('.nav-menu');var mega=a.find('.mega-menu');var offset=rightSide(nav)-leftSide(a);mega.width(Math.min(rightSide(nav),columns(mega)*325));mega.css('left',Math.min(0,offset-mega.width()))}
function hoverOut(){}
function columns(mega){var columns=0;mega.children('.mega-menu-row').each(function(){columns=Math.max(columns,$(this).children('.mega-menu-col').length)});return columns}
function leftSide(elem){return elem.offset().left}
function rightSide(elem){return elem.offset().left+elem.width()}
$('.primary-navigation .menu-item-has-mega-menu').hover(hoverIn,hoverOut)});jQuery(document).ready(function(){var $=jQuery;jQuery('.wrap-rating.in-post .fa.fa-star').hover(function(){jQuery(this).addClass('over').prevAll().addClass('over')},function(){jQuery(this).removeClass('over').prevAll().removeClass('over')});jQuery('.wrap-rating.in-post .fa.fa-star').on('click',function(){var $this=jQuery(this),value=$this.data('vote');$this.parent().children('.fa.fa-star').removeClass('voted');$this.addClass('voted').prevAll().addClass('voted');$this.parents('.wrap-rating.in-post').find('input[type="hidden"]').val(value)});jQuery('.wrap-rating.header.qtip-rating').each(function(){jQuery(this).qtip({content:{text:jQuery(this).next('div')},style:{classes:'rating-tip'},position:{my:'top center',at:'bottom center'}})});if(jQuery('.select-styled select').length>0){jQuery('.select-styled select').selectize({create:!0,sortField:'text'})}
if(jQuery(".input-styled").length){jQuery(".input-styled input").customInput()}
if(jQuery('.datepicker').length>0){jQuery('.datepicker').datetimepicker({timepicker:!1,format:'d.m.Y',closeOnDateSelect:!0,minDate:0})}
jQuery('.field-table table tr').each(function(){var height_tr=$(this).outerHeight();$(this).find('.custom-radio').css('margin-top',height_tr/2-17)})});function calculate_columns(){var counter=0;var widths={'1-1':1,'3-4':0.75,'2-3':0.6,'1-2':0.5,'1-3':0.3,'1-4':0.25,'1-5':0.2};var columns=jQuery('*>*[class*="column-"]');columns.first().addClass('first');columns.each(function(){var klass=jQuery(this).attr('class').match(/column-[1-9]-[1-9]/g);var width=0;if(klass!=null){klass=klass.shift().replace('column-','');if(widths.hasOwnProperty(klass)){width=widths[klass]}}
if((counter+width)>1){jQuery(this).addClass('first');counter=0}
counter+=width})}
calculate_columns()