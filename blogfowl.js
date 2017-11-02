<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html lang='en' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
  <head>
    <meta content='width=device-width, initial-scale=1.0' name='viewport'/>
    <b:if cond='data:blog.pageType == &quot;index&quot;'>
    </b:if>
    <b:if cond='data:blog.pageType == &quot;index&quot;'>
      <title>
        <data:blog.pageTitle/>
      </title>
      <b:else/>
      <title>
        <data:blog.pageName/>
      </title>
    </b:if>
    <b:include data='blog' name='all-head-content'/>
    <!-- BEGIN Open Graph tags --> 
    <meta expr:content='data:blog.metaDescription' name='description' property='og:description'/>
    <b:if cond='data:blog.pageType == &quot;item&quot;'>
      <meta expr:content='data:blog.pageName' property='og:title'/>
      <meta expr:content='data:blog.canonicalUrl' property='og:url'/>
      <meta content='Site Name' property='og:site_name'/>
      <meta content='article' property='og:type'/>
      <b:if cond='data:blog.postImageThumbnailUrl'>
        <meta expr:content='data:blog.postImageThumbnailUrl' property='og:image'/>
        <b:else/>
        <meta content='http://2.bp.blogspot.com/-DknlKJONMdY/UhBRqSykyiI/AAAAAAAABws/Id-lSMf1bMY/s1600/apple-touch-icon-144-precomposed.png' property='og:image'/>
      </b:if>
      <b:else/>
      <meta expr:content='data:blog.title' property='og:title'/>
      <meta expr:content='data:blog.canonicalHomepageUrl' property='og:url'/>
      <meta content='Site Name' property='og:site_name'/>
      <meta content='blog' property='og:type'/>
      <meta content='http://2.bp.blogspot.com/-DknlKJONMdY/UhBRqSykyiI/AAAAAAAABws/Id-lSMf1bMY/s1600/apple-touch-icon-144-precomposed.png' property='og:image'/>
    </b:if>
    <meta expr:content='&quot;en_US&quot;' property='og:locale'/>
    <!-- END Open Graph tags -->
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,400,600,700' id='displaywp-font-opensans-css' media='all' rel='stylesheet' type='text/css'/>
    <b:skin><![CDATA[
      
/*
-----------------------------------------------
Blogger Template Style
-----------------------------------------------
Name           : EvidBT Blogger Template
Download       : http://www.weblogtemplates.net/2014/01/evidbt-professional-blogger-template.html
Author         : Weblogtemplates
Author  URL    : http://www.weblogtemplates.net/
Date           : January, 2014
-----------------------------------------------
License:
This free Blogger template is licensed under the Creative Commons Attribution 3.0 License, which permits both personal and commercial use.
However, to satisfy the 'attribution' clause of the license, you are required to keep the footer links intact which provides due credit to its authors. For more specific details about the license, you may visit the URL below:
http://creativecommons.org/licenses/by/3.0/
----------------------------------------------- */
#navbar-iframe{display:none;}*{padding:0;margin:0}
body#layout #feature  {display:none;}
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, caption {margin: 0; padding: 0; border: 0; outline: 0; font-size: 100%; vertical-align: baseline; background: transparent;}
body, .body-fauxcolumn-outer {line-height: 1;}
ol, ul {list-style: none;}
blockquote, q {quotes: none;}
blockquote:before, blockquote:after, q:before, q:after {content: ''; content: none;}
:focus {outline: 0;}
ins  {text-decoration: none;}
del {text-decoration: line-through;}
table {border-collapse: collapse; border-spacing: 1; }
td, th {
padding:5px;
}
body, .body-fauxcolumn-outer {background: #F3F3F3; font: normal 12px 'Open Sans', Trebuchet MS, Sans-serif; color: #666666;}
body p {padding-bottom: 20px; line-height: 2em;}
#main-container-ele{
border:1px solid #ddd;
}
#container {
margin-left: auto;
margin-right: auto;
background-color: #fff;
margin: 0 auto;
color: #444;
font-family: 'Open Sans',sans-serif;
font-size: 14px;
font-weight: normal;
border-radius: 5px;
-moz-border-radius: 5px;
-webkit-border-radius: 5px;;}
#content{width:712px;padding:20px 0px 10px 0px;float:left;display:inline; margin-top:-10px;}
#content-wide {clear: both; width: 1060px; padding: 10px 0px;}
#aside {display: inline; float: right; width: 336px; color: #ccc; padding: 10px 0px;}
#footer {clear: both; overflow: hidden; background: #dfdfdf; font-size: 12px;}
.shadow {}
.radius {-webkit-border-radius: 5px; -o-border-radius: 5px; -moz-border-radius:5px; border-radius: 5px;}
a {color:#464646; text-decoration: none;}
a:hover {color: #3B0F5C;}
#header-wrapper {padding-bottom: 20px;margin-left: 20px;}
#header {margin-top:-15px; float:left; }
#header h1 {
color:#666666;
text-shadow:2px 2px 2px #FFFFFF;
letter-spacing:-2px;
}
#header a {
text-decoration:none;
color:#666666;
}
#header a:hover {
text-decoration:none;
color:#666666;
}
#header .description {
margin:-3px 5px 5px;
line-height: 1.4em;
color: #888888;
font-size: 14px;
font-family: 'Open Sans', sans-serif;
}
.date-header{display:none;}
.post {padding: 10px;
color: #666666;
overflow: hidden;
font-family:  'Open Sans', sans-serif;
line-height: 2em;
}
.post-outer{
background: #fff;
font-family:  'Open Sans', sans-serif;
line-height: 2em;
margin-bottom: 10px;
}
.post .post-text {padding-bottom: 5px; clear: both; overflow: hidden;}
.post h2.post-title {font-family: 'Open Sans', sans-serif;letter-spacing:-1px;}
.post h2 a {font-family: 'Open Sans', sans-serif;color: #3B0F5C; letter-spacing:-1px;font-size: 29px;
text-transform: uppercase;margin-bottom: 20px;}
.post h2 a:hover {color: #662d91;text-decoration: none;}
.post ul.post-meta {color: #6b6969; clear: both; border-top: 1px solid #222020; border-bottom: 1px solid #222020; overflow: hidden; font-size: 12px; font-style: italic; padding: 5px 0px; list-style: none;}
.post ul.post-meta li {padding-right: 20px; float: left;}
.post ul.post-meta a {color: #0b6e69;}
.post .post-comment {display: inline; background: url('http://1.bp.blogspot.com/_MkGBVwDEF84/TGedevmtX_I/AAAAAAAAEZY/I5fmryAKyP8/s1600/post_comment.jpg') no-repeat center; width: 33px; text-align: center; padding: 5px 0px 10px 0px; margin-top: 10px; float: right;}
.post h2, .post h3 {padding: 10px 0px; font-weight: normal; color: #666;}
.post h4, .post h5, .post h6 {padding: 10px 0px; font-size: 14px; font-weight: normal; color: #666;}
.post blockquote {display: block;
background: #ddd;
font-style: italic;
color: #999;
margin: 10px 0px 10px 30px;
padding: 10px;}
.left{padding:20px 25px 0px 0px;width:300px;float:right;}
.sidebar h2{font-family: 'Open Sans',sans-serif;
line-height: 1.2em;
color: #000;
font-weight: 400;
font-size: 16px;
padding: 10px;
}
.sidebar .widget{font-size: 12px;
color: #808080;
margin: 0px 0px 10px 0px;
padding-bottom: 10px;
overflow: hidden;
font-family: 'Open Sans', sans-serif;}
.sidebar .widget-content {padding:10px;margin:0;font-size:12px;color:#808080;}
.sidebar ul {list-style-type: none;margin: 0 ;padding: 0;font-family: Verdana, 'Open Sans', sans-serif;}
.sidebar ul a {color:#333;}
.sidebar ul a:hover {color:#666666;}
.sidebar li{list-style-type: none;margin: 0 ;padding: 0;}
.sidebar ul li {height:100%;line-height:22px;clear: left;
list-style-type: none;overflow:hidden;color:#808080;}
.sidebar ul li  {text-decoration: none;padding: 0px 0px 0px 10px;display:block;
border-bottom:1px solid #f9f9f9;}
.sidebar a:hover {color: #662d91;}
/* COMMENT */
#comments{margin:10px;border-top: 1px solid #ddd;}
#comments h4 {font-size:16px;font-family:'Open Sans' sans-serif;color:#333;font-weight:bold;
padding:10px 10px ; padding-left:20px; margin-top:10px;}
#comments-block {line-height:1.6em;margin:1em 0 1.5em;color:#7F7D77;}
#comments-block .comment-author {background:#dfdfdf none repeat scroll 0 0;border:1px solid #eaeaea;margin:0.5em 0;padding-bottom:4px;padding-left:8px;padding-top:4px;font-weight:bold;}
#comments-block .comment-body {background:#fff; border-left:1px solid #e3e3e3;border-right:1px solid #e3e3e3;margin-top:-8px;padding-left:10px;padding-top:10px;}
#comments-block .comment-footer {background:#fff;border-bottom:1px solid #e3e3e3;border-left:1px solid #e3e3e3;border-right:1px solid #e3e3e3;font-size:11px;line-height:1.4em;margin:-0.25em 0 2em;padding-bottom:5px;padding-left:10px;text-transform:none;}
#comments-block .comment-body p {margin:0;padding-bottom:15px;}
#comment-holder{padding: 10px 15px;}
.comments .comment-block, .comments .comment-thread.inline-thread .comment {
background: #fff;
}
#comments h4, .comments .comment-header, .comments .comment-thread.inline-thread .comment {
position: relative;
}
.comments .comments-content .icon.blog-author {
position: absolute;
top: -12px;
right: -12px;
margin: 0;
background-image: url(http://lh6.ggpht.com/-GDMurKK2tec/T5JCD6hoKoI/AAAAAAAABAc/COHOItBlFWk/author.png);
width: 36px;
height: 36px;
}
.comments .comment-replybox-thread{margin-top: 5px;}
.comment-form{max-width:100%;}
.comments .comments-content .comment-header, .comments .comments-content .comment-content{margin: 0 0 8px;
margin: 0 0 8px;
border: 1px solid #ddd;
padding: 10px;
background: whitesmoke;
border-top: 10px solid #ddd;
}
.comments .comments-content .comment-thread ol{margin:0 0 10px 0px !important;}
.comments .comments-content .icon.blog-author {top: -2px;right: -2px;}
.comments .comments-content .comment-thread{margin: 0 !important;}
.comments .comments-content .inline-thread {padding: 0 !important;padding-left: 12px !important;}
/* Feeds*/
.blog-feeds{display:none;}
/* IMAGES */
img.centered {display: block; margin: auto;}
img.alignright {display: inline; margin: 0px 0px 10px 20px;}
img.alignleft {display: inline; margin: 0px 20px 10px 0px;}
.alignleft {float: left;}
.alignright {float: right;}
.post-footer-line-1{display:none;}
#comments-block .avatar-image-container img {
background: #fff url(http://3.bp.blogspot.com/-UMSMHaOBzQg/To2XKFseUSI/AAAAAAAACVU/vlvJki_9vqA/s1600/gravatar.png) no-repeat left top;
width:32px;
height:32px
}
p.footer-link{
clear: both;
text-align: center;
font-size: 11px;
padding: 12px;
overflow: hidden;
color: #F9F9F9;
background: #232627;
line-height: 18px;
}
.post-header{
margin-bottom: 20px;
margin-top: 10px;
text-transform:uppercase;
}
#related-posts a { text-align: center;
height: 130px;
width: 180px;}
#related-posts {margin: 20px 0;
font-size: 14px;
line-height: 20px;}
#related-posts h3{margin: 10px 0px!important;
padding: 15px 0!important;
font-size: 23px;
font-weight: 700;
line-height: 14px;
text-transform: capitalize;
z-index: 2;
color: #111;
position: relative;}
#related-posts img {overflow: hidden;
-webkit-transition: all .1s ease-in-out;
-moz-transition: all .1s ease-in-out;
-ms-transition: all .1s ease-in-out;
-o-transition: all .1s ease-in-out;
transition: all .1s ease-in-out;
opacity: 1;
}
.status-msg-body {position:relative !important}
.CSS_LIGHTBOX { z-index: 9999 !important; }
.boxframe {
position: relative;
padding: 20px 0;
margin-bottom:35px;
}
.boxframe:before,.boxframe:after {
content: &quot;&quot;;
position: absolute;
height: 1px;
background: #fff;
border: 1px solid #bbb;
border-top: 0;
box-shadow: 0 0 3px rgba(0,0,0,0.1);
}
.boxframe:before {
bottom: -3px;
left: 3px;
right: 3px;
}
.boxframe:after {
left: 6px;
right: 6px;
bottom: -5px;
box-shadow: 0 0 3px rgba(0,0,0,0.2);
}
.pthumb {float:left;margin:3px 10px 0 0;border: 4px solid #eee;width:90px;height:90px;overflow:hidden;position:related}
#footer a {color:#fff;}
.rmlink{float:right !important;}
.rmlink a {color:#662d91 !important;}
.rmlink a:hover {color:#fff !important;}
.jump-link{display:none;}
.label-size{margin:6px 0;}
#postsocial{border: 1px solid #ddd;
min-width: 55px;
width: auto;
-moz-background-clip: padding;
-webkit-background-clip: padding-box;
-webkit-box-shadow: 1px 0 5px rgba(0,0,0,.1);
-moz-box-shadow: 1px 0 5px rgba(0,0,0,.1);
box-shadow: 1px 0 5px rgba(0,0,0,.1);
padding: 5px;
font: 10px/16px Arial;
background: padding-box #fff;
position: absolute;
margin-left: -94px;
top: 150px;
}
#postsocial.fixed {
position: fixed;
top: 150px;
}
.postsocialbtn{width: auto;
height: auto;
line-height: 0;
padding: 4px 1px;text-align: center;}
.main-top-nav{}
.post-feeds{display:none;}
.titlewrapper h1 {
color: #662d91;
margin-bottom: -5px;
margin-left: 20px;
margin-top: 24px;
}
#top-ad-element{
text-align:center;
}
.main-bottom-nav{
margin-bottom:0px !important;
border-top: 1px solid #222 !important;
}
.footer-top{
background: #eee;
padding: 30px 0px;
border-top: 2px solid #ddd;
}
.nav-form-s{
margin:22px !important;
}
    ]]></b:skin>
    <style>
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      main,
      nav,
      section,
      summary {
        display: block;
      }
      audio,
      canvas,
      video {
        display: inline-block;
      }
      audio:not([controls]) {
        display: none;
        height: 0;
      }
      [hidden],
      template {
        display: none;
      }
      html {
        font-family: sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }
      body {
        margin: 0;
      }
      a {
        background: transparent;
      }
      a:focus {
        outline: thin dotted;
      }
      a:active,
      a:hover {
        outline: 0;
      }
      h1 {
        font-size: 2em;
        margin: 0.67em 0;
      }
      abbr[title] {
        border-bottom: 1px dotted;
      }
      b,
      strong {
        font-weight: bold;
      }
      dfn {
        font-style: italic;
      }
      hr {
        -moz-box-sizing: content-box;
        box-sizing: content-box;
        height: 0;
      }
      mark {
        background: #ff0;
        color: #000;
      }
      code,
      kbd,
      pre,
      samp {
        font-family: monospace, serif;
        font-size: 1em;
      }
      pre {
        white-space: pre-wrap;
      }
      q {
        quotes: &quot;\201C&quot; &quot;\201D&quot; &quot;\2018&quot; &quot;\2019&quot;;
      }
      small {
        font-size: 80%;
      }
      sub,
      sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }
      sup {
        top: -0.5em;
      }
      sub {
        bottom: -0.25em;
      }
      img {
        border: 0;
      }
      svg:not(:root) {
        overflow: hidden;
      }
      figure {
        margin: 0;
      }
      fieldset {
        border: 1px solid #c0c0c0;
        margin: 0 2px;
        padding: 0.35em 0.625em 0.75em;
      }
      legend {
        border: 0;
        padding: 0;
      }
      button,
      input,
      select,
      textarea {
        font-family: inherit;
        font-size: 100%;
        margin: 0;
      }
      button,
      input {
        line-height: normal;
      }
      button,
      select {
        text-transform: none;
      }
      button,
      html input[type=&quot;button&quot;],
      input[type=&quot;reset&quot;],
      input[type=&quot;submit&quot;] {
        -webkit-appearance: button;
        cursor: pointer;
      }
      button[disabled],
      html input[disabled] {
        cursor: default;
      }
      input[type=&quot;checkbox&quot;],
      input[type=&quot;radio&quot;] {
        box-sizing: border-box;
        padding: 0;
      }
      input[type=&quot;search&quot;] {
        -webkit-appearance: textfield;
        -moz-box-sizing: content-box;
        -webkit-box-sizing: content-box;
        box-sizing: content-box;
      }
      input[type=&quot;search&quot;]::-webkit-search-cancel-button,
      input[type=&quot;search&quot;]::-webkit-search-decoration {
        -webkit-appearance: none;
      }
      button::-moz-focus-inner,
      input::-moz-focus-inner {
        border: 0;
        padding: 0;
      }
      textarea {
        overflow: auto;
        vertical-align: top;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0;
      }
      *,
      *:before,
      *:after {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
      }
      html {
        font-size: 62.5%;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }
      body {
        font-family: &#39;Open Sans&#39;,sans-serif;
        font-size: 14px;
        line-height: 1.428571429;
        color: #333333;
        background-color: #ddd;
      }
      input,
      button,
      select,
      textarea {
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
      }
      a {
        color: #3B0F5C;
        text-decoration: none;
      }
      a:hover,
      a:focus {
        color: #662d91;
        text-decoration: underline;
      }
      a:focus {
        outline: thin dotted;
        outline: 5px auto -webkit-focus-ring-color;
        outline-offset: -2px;
      }
      img {
        vertical-align: middle;
      }
      .img-responsive {
        display: block;
        max-width: 100%;
        height: auto;
      }
      .img-rounded {
        border-radius: 6px;
      }
      .img-thumbnail {
        padding: 4px;
        line-height: 1.428571429;
        background-color: #ffffff;
        border: 1px solid #dddddd;
        border-radius: 4px;
        -webkit-transition: all 0.2s ease-in-out;
        transition: all 0.2s ease-in-out;
        display: inline-block;
        max-width: 100%;
        height: auto;
      }
      .img-circle {
        border-radius: 50%;
      }
      hr {
        margin-top: 20px;
        margin-bottom: 20px;
        border: 0;
        border-top: 1px solid #eeeeee;
      }
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        padding: 0;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
      }
      .container {
        margin-right: auto;
        margin-left: auto;
        padding-left: 15px;
        padding-right: 15px;
      }
      .container:before,
      .container:after {
        content: &quot; &quot;;
        display: table;
      }
      .container:after {
        clear: both;
      }
      .container:before,
      .container:after {
        content: &quot; &quot;;
        display: table;
      }
      .container:after {
        clear: both;
      }
      @media (min-width: 768px) {
        .container {
          width: 750px;
        }
      }
      @media (min-width: 992px) {
        .container {
          width: 970px;
        }
      }
      @media (min-width: 1200px) {
        .container {
          width: 1170px;
        }
      }
      .row {
        margin-left: -15px;
        margin-right: -15px;
      }
      .row:before,
      .row:after {
        content: &quot; &quot;;
        display: table;
      }
      .row:after {
        clear: both;
      }
      .row:before,
      .row:after {
        content: &quot; &quot;;
        display: table;
      }
      .row:after {
        clear: both;
      }
      .col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {
        position: relative;
        min-height: 1px;
        padding-left: 15px;
        padding-right: 15px;
      }
      .col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {
        float: left;
      }
      .col-xs-12 {
        width: 100%;
      }
      .col-xs-11 {
        width: 91.66666666666666%;
      }
      .col-xs-10 {
        width: 83.33333333333334%;
      }
      .col-xs-9 {
        width: 75%;
      }
      .col-xs-8 {
        width: 66.66666666666666%;
      }
      .col-xs-7 {
        width: 58.333333333333336%;
      }
      .col-xs-6 {
        width: 50%;
      }
      .col-xs-5 {
        width: 41.66666666666667%;
      }
      .col-xs-4 {
        width: 33.33333333333333%;
      }
      .col-xs-3 {
        width: 25%;
      }
      .col-xs-2 {
        width: 16.666666666666664%;
      }
      .col-xs-1 {
        width: 8.333333333333332%;
      }
      .col-xs-pull-12 {
        right: 100%;
      }
      .col-xs-pull-11 {
        right: 91.66666666666666%;
      }
      .col-xs-pull-10 {
        right: 83.33333333333334%;
      }
      .col-xs-pull-9 {
        right: 75%;
      }
      .col-xs-pull-8 {
        right: 66.66666666666666%;
      }
      .col-xs-pull-7 {
        right: 58.333333333333336%;
      }
      .col-xs-pull-6 {
        right: 50%;
      }
      .col-xs-pull-5 {
        right: 41.66666666666667%;
      }
      .col-xs-pull-4 {
        right: 33.33333333333333%;
      }
      .col-xs-pull-3 {
        right: 25%;
      }
      .col-xs-pull-2 {
        right: 16.666666666666664%;
      }
      .col-xs-pull-1 {
        right: 8.333333333333332%;
      }
      .col-xs-pull-0 {
        right: 0%;
      }
      .col-xs-push-12 {
        left: 100%;
      }
      .col-xs-push-11 {
        left: 91.66666666666666%;
      }
      .col-xs-push-10 {
        left: 83.33333333333334%;
      }
      .col-xs-push-9 {
        left: 75%;
      }
      .col-xs-push-8 {
        left: 66.66666666666666%;
      }
      .col-xs-push-7 {
        left: 58.333333333333336%;
      }
      .col-xs-push-6 {
        left: 50%;
      }
      .col-xs-push-5 {
        left: 41.66666666666667%;
      }
      .col-xs-push-4 {
        left: 33.33333333333333%;
      }
      .col-xs-push-3 {
        left: 25%;
      }
      .col-xs-push-2 {
        left: 16.666666666666664%;
      }
      .col-xs-push-1 {
        left: 8.333333333333332%;
      }
      .col-xs-push-0 {
        left: 0%;
      }
      .col-xs-offset-12 {
        margin-left: 100%;
      }
      .col-xs-offset-11 {
        margin-left: 91.66666666666666%;
      }
      .col-xs-offset-10 {
        margin-left: 83.33333333333334%;
      }
      .col-xs-offset-9 {
        margin-left: 75%;
      }
      .col-xs-offset-8 {
        margin-left: 66.66666666666666%;
      }
      .col-xs-offset-7 {
        margin-left: 58.333333333333336%;
      }
      .col-xs-offset-6 {
        margin-left: 50%;
      }
      .col-xs-offset-5 {
        margin-left: 41.66666666666667%;
      }
      .col-xs-offset-4 {
        margin-left: 33.33333333333333%;
      }
      .col-xs-offset-3 {
        margin-left: 25%;
      }
      .col-xs-offset-2 {
        margin-left: 16.666666666666664%;
      }
      .col-xs-offset-1 {
        margin-left: 8.333333333333332%;
      }
      .col-xs-offset-0 {
        margin-left: 0%;
      }
      @media (min-width: 768px) {
        .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {
          float: left;
        }
        .col-sm-12 {
          width: 100%;
        }
        .col-sm-11 {
          width: 91.66666666666666%;
        }
        .col-sm-10 {
          width: 83.33333333333334%;
        }
        .col-sm-9 {
          width: 75%;
        }
        .col-sm-8 {
          width: 66.66666666666666%;
        }
        .col-sm-7 {
          width: 58.333333333333336%;
        }
        .col-sm-6 {
          width: 50%;
        }
        .col-sm-5 {
          width: 41.66666666666667%;
        }
        .col-sm-4 {
          width: 33.33333333333333%;
        }
        .col-sm-3 {
          width: 25%;
        }
        .col-sm-2 {
          width: 16.666666666666664%;
        }
        .col-sm-1 {
          width: 8.333333333333332%;
        }
        .col-sm-pull-12 {
          right: 100%;
        }
        .col-sm-pull-11 {
          right: 91.66666666666666%;
        }
        .col-sm-pull-10 {
          right: 83.33333333333334%;
        }
        .col-sm-pull-9 {
          right: 75%;
        }
        .col-sm-pull-8 {
          right: 66.66666666666666%;
        }
        .col-sm-pull-7 {
          right: 58.333333333333336%;
        }
        .col-sm-pull-6 {
          right: 50%;
        }
        .col-sm-pull-5 {
          right: 41.66666666666667%;
        }
        .col-sm-pull-4 {
          right: 33.33333333333333%;
        }
        .col-sm-pull-3 {
          right: 25%;
        }
        .col-sm-pull-2 {
          right: 16.666666666666664%;
        }
        .col-sm-pull-1 {
          right: 8.333333333333332%;
        }
        .col-sm-pull-0 {
          right: 0%;
        }
        .col-sm-push-12 {
          left: 100%;
        }
        .col-sm-push-11 {
          left: 91.66666666666666%;
        }
        .col-sm-push-10 {
          left: 83.33333333333334%;
        }
        .col-sm-push-9 {
          left: 75%;
        }
        .col-sm-push-8 {
          left: 66.66666666666666%;
        }
        .col-sm-push-7 {
          left: 58.333333333333336%;
        }
        .col-sm-push-6 {
          left: 50%;
        }
        .col-sm-push-5 {
          left: 41.66666666666667%;
        }
        .col-sm-push-4 {
          left: 33.33333333333333%;
        }
        .col-sm-push-3 {
          left: 25%;
        }
        .col-sm-push-2 {
          left: 16.666666666666664%;
        }
        .col-sm-push-1 {
          left: 8.333333333333332%;
        }
        .col-sm-push-0 {
          left: 0%;
        }
        .col-sm-offset-12 {
          margin-left: 100%;
        }
        .col-sm-offset-11 {
          margin-left: 91.66666666666666%;
        }
        .col-sm-offset-10 {
          margin-left: 83.33333333333334%;
        }
        .col-sm-offset-9 {
          margin-left: 75%;
        }
        .col-sm-offset-8 {
          margin-left: 66.66666666666666%;
        }
        .col-sm-offset-7 {
          margin-left: 58.333333333333336%;
        }
        .col-sm-offset-6 {
          margin-left: 50%;
        }
        .col-sm-offset-5 {
          margin-left: 41.66666666666667%;
        }
        .col-sm-offset-4 {
          margin-left: 33.33333333333333%;
        }
        .col-sm-offset-3 {
          margin-left: 25%;
        }
        .col-sm-offset-2 {
          margin-left: 16.666666666666664%;
        }
        .col-sm-offset-1 {
          margin-left: 8.333333333333332%;
        }
        .col-sm-offset-0 {
          margin-left: 0%;
        }
      }
      @media (min-width: 992px) {
        .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {
          float: left;
        }
        .col-md-12 {
          width: 100%;
        }
        .col-md-11 {
          width: 91.66666666666666%;
        }
        .col-md-10 {
          width: 83.33333333333334%;
        }
        .col-md-9 {
          width: 75%;
        }
        .col-md-8 {
          width: 66.66666666666666%;
        }
        .col-md-7 {
          width: 58.333333333333336%;
        }
        .col-md-6 {
          width: 50%;
        }
        .col-md-5 {
          width: 41.66666666666667%;
        }
        .col-md-4 {
          width: 33.33333333333333%;
        }
        .col-md-3 {
          width: 25%;
        }
        .col-md-2 {
          width: 16.666666666666664%;
        }
        .col-md-1 {
          width: 8.333333333333332%;
        }
        .col-md-pull-12 {
          right: 100%;
        }
        .col-md-pull-11 {
          right: 91.66666666666666%;
        }
        .col-md-pull-10 {
          right: 83.33333333333334%;
        }
        .col-md-pull-9 {
          right: 75%;
        }
        .col-md-pull-8 {
          right: 66.66666666666666%;
        }
        .col-md-pull-7 {
          right: 58.333333333333336%;
        }
        .col-md-pull-6 {
          right: 50%;
        }
        .col-md-pull-5 {
          right: 41.66666666666667%;
        }
        .col-md-pull-4 {
          right: 33.33333333333333%;
        }
        .col-md-pull-3 {
          right: 25%;
        }
        .col-md-pull-2 {
          right: 16.666666666666664%;
        }
        .col-md-pull-1 {
          right: 8.333333333333332%;
        }
        .col-md-pull-0 {
          right: 0%;
        }
        .col-md-push-12 {
          left: 100%;
        }
        .col-md-push-11 {
          left: 91.66666666666666%;
        }
        .col-md-push-10 {
          left: 83.33333333333334%;
        }
        .col-md-push-9 {
          left: 75%;
        }
        .col-md-push-8 {
          left: 66.66666666666666%;
        }
        .col-md-push-7 {
          left: 58.333333333333336%;
        }
        .col-md-push-6 {
          left: 50%;
        }
        .col-md-push-5 {
          left: 41.66666666666667%;
        }
        .col-md-push-4 {
          left: 33.33333333333333%;
        }
        .col-md-push-3 {
          left: 25%;
        }
        .col-md-push-2 {
          left: 16.666666666666664%;
        }
        .col-md-push-1 {
          left: 8.333333333333332%;
        }
        .col-md-push-0 {
          left: 0%;
        }
        .col-md-offset-12 {
          margin-left: 100%;
        }
        .col-md-offset-11 {
          margin-left: 91.66666666666666%;
        }
        .col-md-offset-10 {
          margin-left: 83.33333333333334%;
        }
        .col-md-offset-9 {
          margin-left: 75%;
        }
        .col-md-offset-8 {
          margin-left: 66.66666666666666%;
        }
        .col-md-offset-7 {
          margin-left: 58.333333333333336%;
        }
        .col-md-offset-6 {
          margin-left: 50%;
        }
        .col-md-offset-5 {
          margin-left: 41.66666666666667%;
        }
        .col-md-offset-4 {
          margin-left: 33.33333333333333%;
        }
        .col-md-offset-3 {
          margin-left: 25%;
        }
        .col-md-offset-2 {
          margin-left: 16.666666666666664%;
        }
        .col-md-offset-1 {
          margin-left: 8.333333333333332%;
        }
        .col-md-offset-0 {
          margin-left: 0%;
        }
      }
      @media (min-width: 1200px) {
        .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {
          float: left;
        }
        .col-lg-12 {
          width: 100%;
        }
        .col-lg-11 {
          width: 91.66666666666666%;
        }
        .col-lg-10 {
          width: 83.33333333333334%;
        }
        .col-lg-9 {
          width: 75%;
        }
        .col-lg-8 {
          width: 66.66666666666666%;
        }
        .col-lg-7 {
          width: 58.333333333333336%;
        }
        .col-lg-6 {
          width: 50%;
        }
        .col-lg-5 {
          width: 41.66666666666667%;
        }
        .col-lg-4 {
          width: 33.33333333333333%;
        }
        .col-lg-3 {
          width: 25%;
        }
        .col-lg-2 {
          width: 16.666666666666664%;
        }
        .col-lg-1 {
          width: 8.333333333333332%;
        }
        .col-lg-pull-12 {
          right: 100%;
        }
        .col-lg-pull-11 {
          right: 91.66666666666666%;
        }
        .col-lg-pull-10 {
          right: 83.33333333333334%;
        }
        .col-lg-pull-9 {
          right: 75%;
        }
        .col-lg-pull-8 {
          right: 66.66666666666666%;
        }
        .col-lg-pull-7 {
          right: 58.333333333333336%;
        }
        .col-lg-pull-6 {
          right: 50%;
        }
        .col-lg-pull-5 {
          right: 41.66666666666667%;
        }
        .col-lg-pull-4 {
          right: 33.33333333333333%;
        }
        .col-lg-pull-3 {
          right: 25%;
        }
        .col-lg-pull-2 {
          right: 16.666666666666664%;
        }
        .col-lg-pull-1 {
          right: 8.333333333333332%;
        }
        .col-lg-pull-0 {
          right: 0%;
        }
        .col-lg-push-12 {
          left: 100%;
        }
        .col-lg-push-11 {
          left: 91.66666666666666%;
        }
        .col-lg-push-10 {
          left: 83.33333333333334%;
        }
        .col-lg-push-9 {
          left: 75%;
        }
        .col-lg-push-8 {
          left: 66.66666666666666%;
        }
        .col-lg-push-7 {
          left: 58.333333333333336%;
        }
        .col-lg-push-6 {
          left: 50%;
        }
        .col-lg-push-5 {
          left: 41.66666666666667%;
        }
        .col-lg-push-4 {
          left: 33.33333333333333%;
        }
        .col-lg-push-3 {
          left: 25%;
        }
        .col-lg-push-2 {
          left: 16.666666666666664%;
        }
        .col-lg-push-1 {
          left: 8.333333333333332%;
        }
        .col-lg-push-0 {
          left: 0%;
        }
        .col-lg-offset-12 {
          margin-left: 100%;
        }
        .col-lg-offset-11 {
          margin-left: 91.66666666666666%;
        }
        .col-lg-offset-10 {
          margin-left: 83.33333333333334%;
        }
        .col-lg-offset-9 {
          margin-left: 75%;
        }
        .col-lg-offset-8 {
          margin-left: 66.66666666666666%;
        }
        .col-lg-offset-7 {
          margin-left: 58.333333333333336%;
        }
        .col-lg-offset-6 {
          margin-left: 50%;
        }
        .col-lg-offset-5 {
          margin-left: 41.66666666666667%;
        }
        .col-lg-offset-4 {
          margin-left: 33.33333333333333%;
        }
        .col-lg-offset-3 {
          margin-left: 25%;
        }
        .col-lg-offset-2 {
          margin-left: 16.666666666666664%;
        }
        .col-lg-offset-1 {
          margin-left: 8.333333333333332%;
        }
        .col-lg-offset-0 {
          margin-left: 0%;
        }
      }
      fieldset {
        padding: 0;
        margin: 0;
        border: 0;
      }
      legend {
        display: block;
        width: 100%;
        padding: 0;
        margin-bottom: 20px;
        font-size: 21px;
        line-height: inherit;
        color: #333333;
        border: 0;
        border-bottom: 1px solid #e5e5e5;
      }
      label {
        display: inline-block;
        margin-bottom: 5px;
        font-weight: bold;
      }
      input[type=&quot;search&quot;] {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
      }
      input[type=&quot;radio&quot;],
      input[type=&quot;checkbox&quot;] {
        margin: 4px 0 0;
        margin-top: 1px \9;
        /* IE8-9 */
        line-height: normal;
      }
      input[type=&quot;file&quot;] {
        display: block;
      }
      select[multiple],
      select[size] {
        height: auto;
      }
      select optgroup {
        font-size: inherit;
        font-style: inherit;
        font-family: inherit;
      }
      input[type=&quot;file&quot;]:focus,
      input[type=&quot;radio&quot;]:focus,
      input[type=&quot;checkbox&quot;]:focus {
        outline: thin dotted;
        outline: 5px auto -webkit-focus-ring-color;
        outline-offset: -2px;
      }
      input[type=&quot;number&quot;]::-webkit-outer-spin-button,
      input[type=&quot;number&quot;]::-webkit-inner-spin-button {
        height: auto;
      }
      output {
        display: block;
        padding-top: 7px;
        font-size: 14px;
        line-height: 1.428571429;
        color: #555555;
        vertical-align: middle;
      }
      .form-control {
        display: block;
        width: 100%;
        height: 45px;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.428571429;
        color: #555555;
        vertical-align: middle;
        background-color: #ffffff;
        background-image: none;
        border: 1px solid #cccccc;
        border-radius: 4px;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
        transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
      }
      .form-control:focus {
        border-color: #66afe9;
        outline: 0;
        -webkit-box-shadow: inset 0 1px 1px #fff, 0 0 8px #662d91;
        box-shadow: inset 0 1px 1px #fff, 0 0 8px #662d91;
      }
      .form-control:-moz-placeholder {
        color: #999999;
      }
      .form-control::-moz-placeholder {
        color: #999999;
        opacity: 1;
      }
      .form-control:-ms-input-placeholder {
        color: #999999;
      }
      .form-control::-webkit-input-placeholder {
        color: #999999;
      }
      .form-control[disabled],
      .form-control[readonly],
      fieldset[disabled] .form-control {
        cursor: not-allowed;
        background-color: #eeeeee;
      }
      textarea.form-control {
        height: auto;
      }
      .form-group {
        margin-bottom: 15px;
      }
      .radio,
      .checkbox {
        display: block;
        min-height: 20px;
        margin-top: 10px;
        margin-bottom: 10px;
        padding-left: 20px;
        vertical-align: middle;
      }
      .radio label,
      .checkbox label {
        display: inline;
        margin-bottom: 0;
        font-weight: normal;
        cursor: pointer;
      }
      .radio input[type=&quot;radio&quot;],
      .radio-inline input[type=&quot;radio&quot;],
      .checkbox input[type=&quot;checkbox&quot;],
      .checkbox-inline input[type=&quot;checkbox&quot;] {
        float: left;
        margin-left: -20px;
      }
      .radio + .radio,
      .checkbox + .checkbox {
        margin-top: -5px;
      }
      .radio-inline,
      .checkbox-inline {
        display: inline-block;
        padding-left: 20px;
        margin-bottom: 0;
        vertical-align: middle;
        font-weight: normal;
        cursor: pointer;
      }
      .radio-inline + .radio-inline,
      .checkbox-inline + .checkbox-inline {
        margin-top: 0;
        margin-left: 10px;
      }
      input[type=&quot;radio&quot;][disabled],
      input[type=&quot;checkbox&quot;][disabled],
      .radio[disabled],
      .radio-inline[disabled],
      .checkbox[disabled],
      .checkbox-inline[disabled],
      fieldset[disabled] input[type=&quot;radio&quot;],
      fieldset[disabled] input[type=&quot;checkbox&quot;],
      fieldset[disabled] .radio,
      fieldset[disabled] .radio-inline,
      fieldset[disabled] .checkbox,
      fieldset[disabled] .checkbox-inline {
        cursor: not-allowed;
      }
      .input-sm {
        height: 30px;
        padding: 5px 10px;
        font-size: 12px;
        line-height: 1.5;
        border-radius: 3px;
      }
      select.input-sm {
        height: 30px;
        line-height: 30px;
      }
      textarea.input-sm {
        height: auto;
      }
      .input-lg {
        height: 46px;
        padding: 10px 16px;
        font-size: 18px;
        line-height: 1.33;
        border-radius: 6px;
      }
      select.input-lg {
        height: 46px;
        line-height: 46px;
      }
      textarea.input-lg {
        height: auto;
      }
      .has-warning .help-block,
      .has-warning .control-label,
      .has-warning .radio,
      .has-warning .checkbox,
      .has-warning .radio-inline,
      .has-warning .checkbox-inline {
        color: #8a6d3b;
      }
      .has-warning .form-control {
        border-color: #8a6d3b;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
      }
      .has-warning .form-control:focus {
        border-color: #66512c;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;
      }
      .has-warning .input-group-addon {
        color: #8a6d3b;
        border-color: #8a6d3b;
        background-color: #fcf8e3;
      }
      .has-error .help-block,
      .has-error .control-label,
      .has-error .radio,
      .has-error .checkbox,
      .has-error .radio-inline,
      .has-error .checkbox-inline {
        color: #a94442;
      }
      .has-error .form-control {
        border-color: #a94442;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
      }
      .has-error .form-control:focus {
        border-color: #843534;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;
      }
      .has-error .input-group-addon {
        color: #a94442;
        border-color: #a94442;
        background-color: #f2dede;
      }
      .has-success .help-block,
      .has-success .control-label,
      .has-success .radio,
      .has-success .checkbox,
      .has-success .radio-inline,
      .has-success .checkbox-inline {
        color: #3c763d;
      }
      .has-success .form-control {
        border-color: #3c763d;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
      }
      .has-success .form-control:focus {
        border-color: #2b542c;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;
      }
      .has-success .input-group-addon {
        color: #3c763d;
        border-color: #3c763d;
        background-color: #dff0d8;
      }
      .form-control-static {
        margin-bottom: 0;
      }
      .help-block {
        display: block;
        margin-top: 5px;
        margin-bottom: 10px;
        color: #737373;
      }
      @media (min-width: 768px) {
        .form-inline .form-group {
          display: inline-block;
          margin-bottom: 0;
          vertical-align: middle;
        }
        .form-inline .form-control {
          display: inline-block;
        }
        .form-inline select.form-control {
          width: auto;
        }
        .form-inline .radio,
        .form-inline .checkbox {
          display: inline-block;
          margin-top: 0;
          margin-bottom: 0;
          padding-left: 0;
        }
        .form-inline .radio input[type=&quot;radio&quot;],
        .form-inline .checkbox input[type=&quot;checkbox&quot;] {
          float: none;
          margin-left: 0;
        }
      }
      .form-horizontal .control-label,
      .form-horizontal .radio,
      .form-horizontal .checkbox,
      .form-horizontal .radio-inline,
      .form-horizontal .checkbox-inline {
        margin-top: 0;
        margin-bottom: 0;
        padding-top: 7px;
      }
      .form-horizontal .radio,
      .form-horizontal .checkbox {
        min-height: 27px;
      }
      .form-horizontal .form-group {
        margin-left: -15px;
        margin-right: -15px;
      }
      .form-horizontal .form-group:before,
      .form-horizontal .form-group:after {
        content: &quot; &quot;;
        display: table;
      }
      .form-horizontal .form-group:after {
        clear: both;
      }
      .form-horizontal .form-group:before,
      .form-horizontal .form-group:after {
        content: &quot; &quot;;
        display: table;
      }
      .form-horizontal .form-group:after {
        clear: both;
      }
      .form-horizontal .form-control-static {
        padding-top: 7px;
      }
      @media (min-width: 768px) {
        .form-horizontal .control-label {
          text-align: right;
        }
      }
      .btn {
        display: inline-block;
        margin-bottom: 0;
        font-weight: normal;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        background-image: none;
        white-space: nowrap;
        padding: 15px 30px 13px;
        font-size: 14px;
        line-height: 1.428571429;
        border-radius: 4px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -o-user-select: none;
        user-select: none;
        border: 1px solid #ddd;
      }
      .btn:focus {
        outline: thin dotted;
        outline: 5px auto -webkit-focus-ring-color;
        outline-offset: -2px;
      }
      .btn:hover,
      .btn:focus {
        color: #333333;
        text-decoration: none;
      }
      .btn:active,
      .btn.active {
        outline: 0;
        background-image: none;
        -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
        box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
      }
      .btn.disabled,
      .btn[disabled],
      fieldset[disabled] .btn {
        cursor: not-allowed;
        pointer-events: none;
        opacity: 0.65;
        filter: alpha(opacity=65);
        -webkit-box-shadow: none;
        box-shadow: none;
      }
      .btn-default {
        color: #333333;
        background-color: #ffffff;
        border-color: #cccccc;
      }
      .btn-default:hover,
      .btn-default:focus,
      .btn-default:active,
      .btn-default.active,
      .open .dropdown-toggle.btn-default {
        color: #333333;
        background-color: #ebebeb;
        border-color: #adadad;
      }
      .btn-default:active,
      .btn-default.active,
      .open .dropdown-toggle.btn-default {
        background-image: none;
      }
      .btn-default.disabled,
      .btn-default[disabled],
      fieldset[disabled] .btn-default,
      .btn-default.disabled:hover,
      .btn-default[disabled]:hover,
      fieldset[disabled] .btn-default:hover,
      .btn-default.disabled:focus,
      .btn-default[disabled]:focus,
      fieldset[disabled] .btn-default:focus,
      .btn-default.disabled:active,
      .btn-default[disabled]:active,
      fieldset[disabled] .btn-default:active,
      .btn-default.disabled.active,
      .btn-default[disabled].active,
      fieldset[disabled] .btn-default.active {
        background-color: #ffffff;
        border-color: #cccccc;
      }
      .btn-default .badge {
        color: #ffffff;
        background-color: #fff;
      }
      .btn-primary {
        color: #ffffff;
        background-color: #428bca;
        border-color: #357ebd;
      }
      .btn-primary:hover,
      .btn-primary:focus,
      .btn-primary:active,
      .btn-primary.active,
      .open .dropdown-toggle.btn-primary {
        color: #ffffff;
        background-color: #3276b1;
        border-color: #285e8e;
      }
      .btn-primary:active,
      .btn-primary.active,
      .open .dropdown-toggle.btn-primary {
        background-image: none;
      }
      .btn-primary.disabled,
      .btn-primary[disabled],
      fieldset[disabled] .btn-primary,
      .btn-primary.disabled:hover,
      .btn-primary[disabled]:hover,
      fieldset[disabled] .btn-primary:hover,
      .btn-primary.disabled:focus,
      .btn-primary[disabled]:focus,
      fieldset[disabled] .btn-primary:focus,
      .btn-primary.disabled:active,
      .btn-primary[disabled]:active,
      fieldset[disabled] .btn-primary:active,
      .btn-primary.disabled.active,
      .btn-primary[disabled].active,
      fieldset[disabled] .btn-primary.active {
        background-color: #428bca;
        border-color: #357ebd;
      }
      .btn-primary .badge {
        color: #428bca;
        background-color: #fff;
      }
      .btn-warning {
        color: #ffffff;
        background-color: #f0ad4e;
        border-color: #eea236;
      }
      .btn-warning:hover,
      .btn-warning:focus,
      .btn-warning:active,
      .btn-warning.active,
      .open .dropdown-toggle.btn-warning {
        color: #ffffff;
        background-color: #ed9c28;
        border-color: #d58512;
      }
      .btn-warning:active,
      .btn-warning.active,
      .open .dropdown-toggle.btn-warning {
        background-image: none;
      }
      .btn-warning.disabled,
      .btn-warning[disabled],
      fieldset[disabled] .btn-warning,
      .btn-warning.disabled:hover,
      .btn-warning[disabled]:hover,
      fieldset[disabled] .btn-warning:hover,
      .btn-warning.disabled:focus,
      .btn-warning[disabled]:focus,
      fieldset[disabled] .btn-warning:focus,
      .btn-warning.disabled:active,
      .btn-warning[disabled]:active,
      fieldset[disabled] .btn-warning:active,
      .btn-warning.disabled.active,
      .btn-warning[disabled].active,
      fieldset[disabled] .btn-warning.active {
        background-color: #f0ad4e;
        border-color: #eea236;
      }
      .btn-warning .badge {
        color: #f0ad4e;
        background-color: #fff;
      }
      .btn-danger {
        color: #ffffff;
        background-color: #d9534f;
        border-color: #d43f3a;
      }
      .btn-danger:hover,
      .btn-danger:focus,
      .btn-danger:active,
      .btn-danger.active,
      .open .dropdown-toggle.btn-danger {
        color: #ffffff;
        background-color: #d2322d;
        border-color: #ac2925;
      }
      .btn-danger:active,
      .btn-danger.active,
      .open .dropdown-toggle.btn-danger {
        background-image: none;
      }
      .btn-danger.disabled,
      .btn-danger[disabled],
      fieldset[disabled] .btn-danger,
      .btn-danger.disabled:hover,
      .btn-danger[disabled]:hover,
      fieldset[disabled] .btn-danger:hover,
      .btn-danger.disabled:focus,
      .btn-danger[disabled]:focus,
      fieldset[disabled] .btn-danger:focus,
      .btn-danger.disabled:active,
      .btn-danger[disabled]:active,
      fieldset[disabled] .btn-danger:active,
      .btn-danger.disabled.active,
      .btn-danger[disabled].active,
      fieldset[disabled] .btn-danger.active {
        background-color: #d9534f;
        border-color: #d43f3a;
      }
      .btn-danger .badge {
        color: #d9534f;
        background-color: #fff;
      }
      .btn-success {
        color: #ffffff;
        background-color: #5cb85c;
        border-color: #4cae4c;
      }
      .btn-success:hover,
      .btn-success:focus,
      .btn-success:active,
      .btn-success.active,
      .open .dropdown-toggle.btn-success {
        color: #ffffff;
        background-color: #47a447;
        border-color: #398439;
      }
      .btn-success:active,
      .btn-success.active,
      .open .dropdown-toggle.btn-success {
        background-image: none;
      }
      .btn-success.disabled,
      .btn-success[disabled],
      fieldset[disabled] .btn-success,
      .btn-success.disabled:hover,
      .btn-success[disabled]:hover,
      fieldset[disabled] .btn-success:hover,
      .btn-success.disabled:focus,
      .btn-success[disabled]:focus,
      fieldset[disabled] .btn-success:focus,
      .btn-success.disabled:active,
      .btn-success[disabled]:active,
      fieldset[disabled] .btn-success:active,
      .btn-success.disabled.active,
      .btn-success[disabled].active,
      fieldset[disabled] .btn-success.active {
        background-color: #5cb85c;
        border-color: #4cae4c;
      }
      .btn-success .badge {
        color: #5cb85c;
        background-color: #fff;
      }
      .btn-info {
        color: #ffffff;
        background-color: #5bc0de;
        border-color: #46b8da;
      }
      .btn-info:hover,
      .btn-info:focus,
      .btn-info:active,
      .btn-info.active,
      .open .dropdown-toggle.btn-info {
        color: #ffffff;
        background-color: #39b3d7;
        border-color: #269abc;
      }
      .btn-info:active,
      .btn-info.active,
      .open .dropdown-toggle.btn-info {
        background-image: none;
      }
      .btn-info.disabled,
      .btn-info[disabled],
      fieldset[disabled] .btn-info,
      .btn-info.disabled:hover,
      .btn-info[disabled]:hover,
      fieldset[disabled] .btn-info:hover,
      .btn-info.disabled:focus,
      .btn-info[disabled]:focus,
      fieldset[disabled] .btn-info:focus,
      .btn-info.disabled:active,
      .btn-info[disabled]:active,
      fieldset[disabled] .btn-info:active,
      .btn-info.disabled.active,
      .btn-info[disabled].active,
      fieldset[disabled] .btn-info.active {
        background-color: #5bc0de;
        border-color: #46b8da;
      }
      .btn-info .badge {
        color: #5bc0de;
        background-color: #fff;
      }
      .btn-link {
        color: #428bca;
        font-weight: normal;
        cursor: pointer;
        border-radius: 0;
      }
      .btn-link,
      .btn-link:active,
      .btn-link[disabled],
      fieldset[disabled] .btn-link {
        background-color: transparent;
        -webkit-box-shadow: none;
        box-shadow: none;
      }
      .btn-link,
      .btn-link:hover,
      .btn-link:focus,
      .btn-link:active {
        border-color: transparent;
      }
      .btn-link:hover,
      .btn-link:focus {
        color: #2a6496;
        text-decoration: underline;
        background-color: transparent;
      }
      .btn-link[disabled]:hover,
      fieldset[disabled] .btn-link:hover,
      .btn-link[disabled]:focus,
      fieldset[disabled] .btn-link:focus {
        color: #999999;
        text-decoration: none;
      }
      .btn-lg {
        padding: 10px 16px;
        font-size: 18px;
        line-height: 1.33;
        border-radius: 6px;
      }
      .btn-sm {
        padding: 5px 10px;
        font-size: 12px;
        line-height: 1.5;
        border-radius: 3px;
      }
      .btn-xs {
        padding: 1px 5px;
        font-size: 12px;
        line-height: 1.5;
        border-radius: 3px;
      }
      .btn-block {
        display: block;
        width: 100%;
        padding-left: 0;
        padding-right: 0;
      }
      .btn-block + .btn-block {
        margin-top: 5px;
      }
      input[type=&quot;submit&quot;].btn-block,
      input[type=&quot;reset&quot;].btn-block,
      input[type=&quot;button&quot;].btn-block {
        width: 100%;
      }
      .input-group {
        position: relative;
        display: table;
        border-collapse: separate;
      }
      .input-group[class*=&quot;col-&quot;] {
        float: none;
        padding-left: 0;
        padding-right: 0;
      }
      .input-group .form-control {
        width: 100%;
        margin-bottom: 0;
      }
      .input-group-lg &gt; .form-control,
      .input-group-lg &gt; .input-group-addon,
      .input-group-lg &gt; .input-group-btn &gt; .btn {
        height: 46px;
        padding: 10px 16px;
        font-size: 18px;
        line-height: 1.33;
        border-radius: 6px;
      }
      select.input-group-lg &gt; .form-control,
      select.input-group-lg &gt; .input-group-addon,
      select.input-group-lg &gt; .input-group-btn &gt; .btn {
        height: 46px;
        line-height: 46px;
      }
      textarea.input-group-lg &gt; .form-control,
      textarea.input-group-lg &gt; .input-group-addon,
      textarea.input-group-lg &gt; .input-group-btn &gt; .btn {
        height: auto;
      }
      .input-group-sm &gt; .form-control,
      .input-group-sm &gt; .input-group-addon,
      .input-group-sm &gt; .input-group-btn &gt; .btn {
        height: 30px;
        padding: 5px 10px;
        font-size: 12px;
        line-height: 1.5;
        border-radius: 3px;
      }
      select.input-group-sm &gt; .form-control,
      select.input-group-sm &gt; .input-group-addon,
      select.input-group-sm &gt; .input-group-btn &gt; .btn {
        height: 30px;
        line-height: 30px;
      }
      textarea.input-group-sm &gt; .form-control,
      textarea.input-group-sm &gt; .input-group-addon,
      textarea.input-group-sm &gt; .input-group-btn &gt; .btn {
        height: auto;
      }
      .input-group-addon,
      .input-group-btn,
      .input-group .form-control {
        display: table-cell;
      }
      .input-group-addon:not(:first-child):not(:last-child),
      .input-group-btn:not(:first-child):not(:last-child),
      .input-group .form-control:not(:first-child):not(:last-child) {
        border-radius: 0;
      }
      .input-group-addon,
      .input-group-btn {
        width: 1%;
        white-space: nowrap;
        vertical-align: middle;
      }
      .input-group-addon {
        padding: 6px 12px;
        font-size: 14px;
        font-weight: normal;
        line-height: 1;
        color: #555555;
        text-align: center;
        background-color: #eeeeee;
        border: 1px solid #cccccc;
        border-radius: 4px;
      }
      .input-group-addon.input-sm {
        padding: 5px 10px;
        font-size: 12px;
        border-radius: 3px;
      }
      .input-group-addon.input-lg {
        padding: 10px 16px;
        font-size: 18px;
        border-radius: 6px;
      }
      .input-group-addon input[type=&quot;radio&quot;],
      .input-group-addon input[type=&quot;checkbox&quot;] {
        margin-top: 0;
      }
      .input-group .form-control:first-child,
      .input-group-addon:first-child,
      .input-group-btn:first-child &gt; .btn,
      .input-group-btn:first-child &gt; .dropdown-toggle,
      .input-group-btn:last-child &gt; .btn:not(:last-child):not(.dropdown-toggle) {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
      }
      .input-group-addon:first-child {
        border-right: 0;
      }
      .input-group .form-control:last-child,
      .input-group-addon:last-child,
      .input-group-btn:last-child &gt; .btn,
      .input-group-btn:last-child &gt; .dropdown-toggle,
      .input-group-btn:first-child &gt; .btn:not(:first-child) {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
      }
      .input-group-addon:last-child {
        border-left: 0;
      }
      .input-group-btn {
        position: relative;
        white-space: nowrap;
      }
      .input-group-btn:first-child &gt; .btn {
        margin-right: -1px;
      }
      .input-group-btn:last-child &gt; .btn {
        margin-left: -1px;
      }
      .input-group-btn &gt; .btn {
        position: relative;
      }
      .input-group-btn &gt; .btn + .btn {
        margin-left: -4px;
      }
      .input-group-btn &gt; .btn:hover,
      .input-group-btn &gt; .btn:active {
        z-index: 2;
      }
      .nav {
        margin-bottom: 0;
        padding-left: 0;
        list-style: none;
      }
      .nav:before,
      .nav:after {
        content: &quot; &quot;;
        display: table;
      }
      .nav:after {
        clear: both;
      }
      .nav:before,
      .nav:after {
        content: &quot; &quot;;
        display: table;
      }
      .nav:after {
        clear: both;
      }
      .nav &gt; li {
        position: relative;
        display: block;
      }
      .nav &gt; li &gt; a {
        position: relative;
        display: block;
        padding: 10px 15px;
      }
      .nav &gt; li &gt; a:hover,
      .nav &gt; li &gt; a:focus {
        text-decoration: none;
        background-color: #eeeeee;
      }
      .nav &gt; li.disabled &gt; a {
        color: #999999;
      }
      .nav &gt; li.disabled &gt; a:hover,
      .nav &gt; li.disabled &gt; a:focus {
        color: #999999;
        text-decoration: none;
        background-color: transparent;
        cursor: not-allowed;
      }
      .nav .open &gt; a,
      .nav .open &gt; a:hover,
      .nav .open &gt; a:focus {
        background-color: #fff;
        border-color: #428bca;
      }
      .nav .nav-divider {
        height: 1px;
        margin: 9px 0;
        overflow: hidden;
        background-color: #e5e5e5;
      }
      .nav &gt; li &gt; a &gt; img {
        max-width: none;
      }
      .nav-tabs {
        border-bottom: 1px solid #dddddd;
      }
      .nav-tabs &gt; li {
        float: left;
        margin-bottom: -1px;
      }
      .nav-tabs &gt; li &gt; a {
        margin-right: 2px;
        line-height: 1.428571429;
        border: 1px solid transparent;
        border-radius: 4px 4px 0 0;
      }
      .nav-tabs &gt; li &gt; a:hover {
        border-color: #eeeeee #eeeeee #dddddd;
      }
      .nav-tabs &gt; li.active &gt; a,
      .nav-tabs &gt; li.active &gt; a:hover,
      .nav-tabs &gt; li.active &gt; a:focus {
        color: #555555;
        background-color: #ffffff;
        border: 1px solid #dddddd;
        border-bottom-color: transparent;
        cursor: default;
      }
      .nav-tabs.nav-justified {
        width: 100%;
        border-bottom: 0;
      }
      .nav-tabs.nav-justified &gt; li {
        float: none;
      }
      .nav-tabs.nav-justified &gt; li &gt; a {
        text-align: center;
        margin-bottom: 5px;
      }
      .nav-tabs.nav-justified &gt; .dropdown .dropdown-menu {
        top: auto;
        left: auto;
      }
      @media (min-width: 768px) {
        .nav-tabs.nav-justified &gt; li {
          display: table-cell;
          width: 1%;
        }
        .nav-tabs.nav-justified &gt; li &gt; a {
          margin-bottom: 0;
        }
      }
      .nav-tabs.nav-justified &gt; li &gt; a {
        margin-right: 0;
        border-radius: 4px;
      }
      .nav-tabs.nav-justified &gt; .active &gt; a,
      .nav-tabs.nav-justified &gt; .active &gt; a:hover,
      .nav-tabs.nav-justified &gt; .active &gt; a:focus {
        border: 1px solid #dddddd;
      }
      @media (min-width: 768px) {
        .nav-tabs.nav-justified &gt; li &gt; a {
          border-bottom: 1px solid #dddddd;
          border-radius: 4px 4px 0 0;
        }
        .nav-tabs.nav-justified &gt; .active &gt; a,
        .nav-tabs.nav-justified &gt; .active &gt; a:hover,
        .nav-tabs.nav-justified &gt; .active &gt; a:focus {
          border-bottom-color: #ffffff;
        }
      }
      .nav-pills &gt; li {
        float: left;
      }
      .nav-pills &gt; li &gt; a {
        border-radius: 4px;
      }
      .nav-pills &gt; li + li {
        margin-left: 2px;
      }
      .nav-pills &gt; li.active &gt; a,
      .nav-pills &gt; li.active &gt; a:hover,
      .nav-pills &gt; li.active &gt; a:focus {
        color: #ffffff;
        background-color: #428bca;
      }
      .nav-stacked &gt; li {
        float: none;
      }
      .nav-stacked &gt; li + li {
        margin-top: 2px;
        margin-left: 0;
      }
      .nav-justified {
        width: 100%;
      }
      .nav-justified &gt; li {
        float: none;
      }
      .nav-justified &gt; li &gt; a {
        text-align: center;
        margin-bottom: 5px;
      }
      .nav-justified &gt; .dropdown .dropdown-menu {
        top: auto;
        left: auto;
      }
      @media (min-width: 768px) {
        .nav-justified &gt; li {
          display: table-cell;
          width: 1%;
        }
        .nav-justified &gt; li &gt; a {
          margin-bottom: 0;
        }
      }
      .nav-tabs-justified {
        border-bottom: 0;
      }
      .nav-tabs-justified &gt; li &gt; a {
        margin-right: 0;
        border-radius: 4px;
      }
      .nav-tabs-justified &gt; .active &gt; a,
      .nav-tabs-justified &gt; .active &gt; a:hover,
      .nav-tabs-justified &gt; .active &gt; a:focus {
        border: 1px solid #dddddd;
      }
      @media (min-width: 768px) {
        .nav-tabs-justified &gt; li &gt; a {
          border-bottom: 1px solid #dddddd;
          border-radius: 4px 4px 0 0;
        }
        .nav-tabs-justified &gt; .active &gt; a,
        .nav-tabs-justified &gt; .active &gt; a:hover,
        .nav-tabs-justified &gt; .active &gt; a:focus {
          border-bottom-color: #ffffff;
        }
      }
      .tab-content &gt; .tab-pane {
        display: none;
      }
      .tab-content &gt; .active {
        display: block;
      }
      .nav-tabs .dropdown-menu {
        margin-top: -1px;
        border-top-right-radius: 0;
        border-top-left-radius: 0;
      }
      .navbar {
        position: relative;
        min-height: 50px;
        border: 1px solid transparent;
      }
      .navbar:before,
      .navbar:after {
        content: &quot; &quot;;
        display: table;
      }
      .navbar:after {
        clear: both;
      }
      .navbar:before,
      .navbar:after {
        content: &quot; &quot;;
        display: table;
      }
      .navbar:after {
        clear: both;
      }
      @media (min-width: 768px) {
        .navbar {
          border-radius: 4px;
        }
      }
      .navbar-header:before,
      .navbar-header:after {
        content: &quot; &quot;;
        display: table;
      }
      .navbar-header:after {
        clear: both;
      }
      .navbar-header:before,
      .navbar-header:after {
        content: &quot; &quot;;
        display: table;
      }
      .navbar-header:after {
        clear: both;
      }
      @media (min-width: 768px) {
        .navbar-header {
          float: left;
        }
      }
      .navbar-collapse {
        max-height: 340px;
        overflow-x: visible;
        padding-right: 15px;
        padding-left: 15px;
        border-top: 1px solid transparent;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
        -webkit-overflow-scrolling: touch;
      }
      .navbar-collapse:before,
      .navbar-collapse:after {
        content: &quot; &quot;;
        display: table;
      }
      .navbar-collapse:after {
        clear: both;
      }
      .navbar-collapse:before,
      .navbar-collapse:after {
        content: &quot; &quot;;
        display: table;
      }
      .navbar-collapse:after {
        clear: both;
      }
      .navbar-collapse.in {
        overflow-y: auto;
      }
      @media (min-width: 768px) {
        .navbar-collapse {
          width: auto;
          border-top: 0;
          box-shadow: none;
        }
        .navbar-collapse.collapse {
          display: block !important;
          height: auto !important;
          padding-bottom: 0;
          overflow: visible !important;
        }
        .navbar-collapse.in {
          overflow-y: visible;
        }
        .navbar-fixed-top .navbar-collapse,
        .navbar-static-top .navbar-collapse,
        .navbar-fixed-bottom .navbar-collapse {
          padding-left: 0;
          padding-right: 0;
        }
      }
      .container &gt; .navbar-header,
      .container &gt; .navbar-collapse {
        margin-right: -15px;
        margin-left: -15px;
      }
      @media (min-width: 768px) {
        .container &gt; .navbar-header,
        .container &gt; .navbar-collapse {
          margin-right: 0;
          margin-left: 0;
        }
      }
      .navbar-static-top {
        z-index: 1000;
        border-width: 0 0 1px;
      }
      @media (min-width: 768px) {
        .navbar-static-top {
          border-radius: 0;
        }
      }
      .navbar-fixed-top,
      .navbar-fixed-bottom {
        position: fixed;
        right: 0;
        left: 0;
        z-index: 1030;
      }
      @media (min-width: 768px) {
        .navbar-fixed-top,
        .navbar-fixed-bottom {
          border-radius: 0;
        }
      }
      .navbar-fixed-top {
        top: 0;
        border-width: 0 0 1px;
      }
      .navbar-fixed-bottom {
        bottom: 0;
        margin-bottom: 0;
        border-width: 1px 0 0;
      }
      .navbar-brand {
        float: left;
        padding: 15px 15px;
        font-size: 18px;
        line-height: 20px;
      }
      .navbar-brand:hover,
      .navbar-brand:focus {
        text-decoration: none;
      }
      @media (min-width: 768px) {
        .navbar &gt; .container .navbar-brand {
          margin-left: -15px;
        }
      }
      .navbar-toggle {
        position: relative;
        float: right;
        margin-right: 15px;
        padding: 9px 10px;
        margin-top: 8px;
        margin-bottom: 8px;
        background-color: transparent;
        background-image: none;
        border: 1px solid transparent;
        border-radius: 4px;
      }
      .navbar-toggle .icon-bar {
        display: block;
        width: 22px;
        height: 2px;
        border-radius: 1px;
      }
      .navbar-toggle .icon-bar + .icon-bar {
        margin-top: 4px;
      }
      @media (min-width: 768px) {
        .navbar-toggle {
          display: none;
        }
      }
      .navbar-nav {
        margin: 7.5px -15px;
      }
      .navbar-nav &gt; li &gt; a {
        padding-top: 10px;
        padding-bottom: 10px;
        line-height: 20px;
      }
      @media (max-width: 767px) {
        .navbar-nav .open .dropdown-menu {
          position: static;
          float: none;
          width: auto;
          margin-top: 0;
          background-color: transparent;
          border: 0;
          box-shadow: none;
        }
        .navbar-nav .open .dropdown-menu &gt; li &gt; a,
        .navbar-nav .open .dropdown-menu .dropdown-header {
          padding: 5px 15px 5px 25px;
        }
        .navbar-nav .open .dropdown-menu &gt; li &gt; a {
          line-height: 20px;
        }
        .navbar-nav .open .dropdown-menu &gt; li &gt; a:hover,
        .navbar-nav .open .dropdown-menu &gt; li &gt; a:focus {
          background-image: none;
        }
      }
      @media (min-width: 768px) {
        .navbar-nav {
          float: left;
          margin: 0;
        }
        .navbar-nav &gt; li {
          float: left;
        }
        .navbar-nav &gt; li &gt; a {
          padding-top: 15px;
          padding-bottom: 15px;
        }
        .navbar-nav.navbar-right:last-child {
          margin-right: -15px;
        }
      }
      @media (min-width: 768px) {
        .navbar-left {
          float: left !important;
        }
        .navbar-right {
          float: right !important;
        }
      }
      .navbar-form {
        margin-left: -15px;
        margin-right: -15px;
        padding: 10px 15px;
        border-top: 1px solid transparent;
        border-bottom: 1px solid transparent;
        -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);
        margin-top: 8px;
        margin-bottom: 8px;
      }
      @media (min-width: 768px) {
        .navbar-form .form-group {
          display: inline-block;
          margin-bottom: 0;
          vertical-align: middle;
        }
        .navbar-form .form-control {
          display: inline-block;
        }
        .navbar-form select.form-control {
          width: auto;
        }
        .navbar-form .radio,
        .navbar-form .checkbox {
          display: inline-block;
          margin-top: 0;
          margin-bottom: 0;
          padding-left: 0;
        }
        .navbar-form .radio input[type=&quot;radio&quot;],
        .navbar-form .checkbox input[type=&quot;checkbox&quot;] {
          float: none;
          margin-left: 0;
        }
      }
      @media (max-width: 767px) {
        .navbar-form .form-group {
          margin-bottom: 5px;
        }
      }
      @media (min-width: 768px) {
        .navbar-form {
          width: auto;
          border: 0;
          margin-left: 0;
          margin-right: 0;
          padding-top: 0;
          padding-bottom: 0;
          -webkit-box-shadow: none;
          box-shadow: none;
        }
        .navbar-form.navbar-right:last-child {
          margin-right: -15px;
        }
      }
      .navbar-nav &gt; li &gt; .dropdown-menu {
        margin-top: 0;
        border-top-right-radius: 0;
        border-top-left-radius: 0;
      }
      .navbar-fixed-bottom .navbar-nav &gt; li &gt; .dropdown-menu {
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
      }
      .navbar-nav.pull-right &gt; li &gt; .dropdown-menu,
      .navbar-nav &gt; li &gt; .dropdown-menu.pull-right {
        left: auto;
        right: 0;
      }
      .navbar-btn {
        margin-top: 8px;
        margin-bottom: 8px;
      }
      .navbar-btn.btn-sm {
        margin-top: 10px;
        margin-bottom: 10px;
      }
      .navbar-btn.btn-xs {
        margin-top: 14px;
        margin-bottom: 14px;
      }
      .navbar-text {
        margin-top: 15px;
        margin-bottom: 15px;
      }
      @media (min-width: 768px) {
        .navbar-text {
          float: left;
          margin-left: 15px;
          margin-right: 15px;
        }
        .navbar-text.navbar-right:last-child {
          margin-right: 0;
        }
      }
      .navbar-default {
        background-color: #fff;
      }
      .navbar-default .navbar-brand {
        color: #777777;
      }
      .navbar-default .navbar-brand:hover,
      .navbar-default .navbar-brand:focus {
        color: #5e5e5e;
        background-color: transparent;
      }
      .navbar-default .navbar-text {
        color: #777777;
      }
      .navbar-default .navbar-nav &gt; li &gt; a {
        border-top: 5px solid #fff;
        color: #777777;
        padding:26px;
      }
      .navbar-default .navbar-nav &gt; li &gt; a:hover,
      .navbar-default .navbar-nav &gt; li &gt; a:focus {
        border-top: 5px solid #662d91;
        color: #662d91;
        background-color: transparent;
      }
      .navbar-default .navbar-nav &gt; .active &gt; a,
      .navbar-default .navbar-nav &gt; .active &gt; a:hover,
      .navbar-default .navbar-nav &gt; .active &gt; a:focus {
        color: #555555;
        background-color: #e7e7e7;
      }
      .navbar-default .navbar-nav &gt; .disabled &gt; a,
      .navbar-default .navbar-nav &gt; .disabled &gt; a:hover,
      .navbar-default .navbar-nav &gt; .disabled &gt; a:focus {
        color: #cccccc;
        background-color: transparent;
      }
      .navbar-default .navbar-toggle {
        border-color: #dddddd;
      }
      .navbar-default .navbar-toggle:hover,
      .navbar-default .navbar-toggle:focus {
        background-color: #dddddd;
      }
      .navbar-default .navbar-toggle .icon-bar {
        background-color: #cccccc;
      }
      .navbar-default .navbar-collapse,
      .navbar-default .navbar-form {
        border-color: #e7e7e7;
      }
      .navbar-default .navbar-nav &gt; .open &gt; a,
      .navbar-default .navbar-nav &gt; .open &gt; a:hover,
      .navbar-default .navbar-nav &gt; .open &gt; a:focus {
        border-top: 5px solid #662d91;
        color: #662d91;
        padding: 26px;
      }
      @media (max-width: 767px) {
        .navbar-default .navbar-nav .open .dropdown-menu &gt; li &gt; a {
          color: #777777;
        }
        .navbar-default .navbar-nav .open .dropdown-menu &gt; li &gt; a:hover,
        .navbar-default .navbar-nav .open .dropdown-menu &gt; li &gt; a:focus {
          color: #333333;
          background-color: transparent;
        }
        .navbar-default .navbar-nav .open .dropdown-menu &gt; .active &gt; a,
        .navbar-default .navbar-nav .open .dropdown-menu &gt; .active &gt; a:hover,
        .navbar-default .navbar-nav .open .dropdown-menu &gt; .active &gt; a:focus {
          color: #555555;
          background-color: #e7e7e7;
        }
        .navbar-default .navbar-nav .open .dropdown-menu &gt; .disabled &gt; a,
        .navbar-default .navbar-nav .open .dropdown-menu &gt; .disabled &gt; a:hover,
        .navbar-default .navbar-nav .open .dropdown-menu &gt; .disabled &gt; a:focus {
          color: #cccccc;
          background-color: transparent;
        }
      }
      .navbar-default .navbar-link {
        color: #777777;
      }
      .navbar-default .navbar-link:hover {
        color: #333333;
      }
      .navbar-inverse {
        background-color: #222222;
        border-color: #080808;
      }
      .navbar-inverse .navbar-brand {
        color: #999999;
      }
      .navbar-inverse .navbar-brand:hover,
      .navbar-inverse .navbar-brand:focus {
        color: #ffffff;
        background-color: transparent;
      }
      .navbar-inverse .navbar-text {
        color: #999999;
      }
      .navbar-inverse .navbar-nav &gt; li &gt; a {
        color: #999999;
      }
      .navbar-inverse .navbar-nav &gt; li &gt; a:hover,
      .navbar-inverse .navbar-nav &gt; li &gt; a:focus {
        color: #ffffff;
        background-color: transparent;
      }
      .navbar-inverse .navbar-nav &gt; .active &gt; a,
      .navbar-inverse .navbar-nav &gt; .active &gt; a:hover,
      .navbar-inverse .navbar-nav &gt; .active &gt; a:focus {
        color: #ffffff;
        background-color: #080808;
      }
      .navbar-inverse .navbar-nav &gt; .disabled &gt; a,
      .navbar-inverse .navbar-nav &gt; .disabled &gt; a:hover,
      .navbar-inverse .navbar-nav &gt; .disabled &gt; a:focus {
        color: #444444;
        background-color: transparent;
      }
      .navbar-inverse .navbar-toggle {
        border-color: #333333;
      }
      .navbar-inverse .navbar-toggle:hover,
      .navbar-inverse .navbar-toggle:focus {
        background-color: #333333;
      }
      .navbar-inverse .navbar-toggle .icon-bar {
        background-color: #ffffff;
      }
      .navbar-inverse .navbar-collapse,
      .navbar-inverse .navbar-form {
        border-color: #101010;
      }
      .navbar-inverse .navbar-nav &gt; .open &gt; a,
      .navbar-inverse .navbar-nav &gt; .open &gt; a:hover,
      .navbar-inverse .navbar-nav &gt; .open &gt; a:focus {
        background-color: #080808;
        color: #ffffff;
      }
      @media (max-width: 767px) {
        .navbar-inverse .navbar-nav .open .dropdown-menu &gt; .dropdown-header {
          border-color: #080808;
        }
        .navbar-inverse .navbar-nav .open .dropdown-menu .divider {
          background-color: #080808;
        }
        .navbar-inverse .navbar-nav .open .dropdown-menu &gt; li &gt; a {
          color: #999999;
        }
        .navbar-inverse .navbar-nav .open .dropdown-menu &gt; li &gt; a:hover,
        .navbar-inverse .navbar-nav .open .dropdown-menu &gt; li &gt; a:focus {
          color: #ffffff;
          background-color: transparent;
        }
        .navbar-inverse .navbar-nav .open .dropdown-menu &gt; .active &gt; a,
        .navbar-inverse .navbar-nav .open .dropdown-menu &gt; .active &gt; a:hover,
        .navbar-inverse .navbar-nav .open .dropdown-menu &gt; .active &gt; a:focus {
          color: #ffffff;
          background-color: #080808;
        }
        .navbar-inverse .navbar-nav .open .dropdown-menu &gt; .disabled &gt; a,
        .navbar-inverse .navbar-nav .open .dropdown-menu &gt; .disabled &gt; a:hover,
        .navbar-inverse .navbar-nav .open .dropdown-menu &gt; .disabled &gt; a:focus {
          color: #444444;
          background-color: transparent;
        }
      }
      .navbar-inverse .navbar-link {
        color: #999999;
      }
      .navbar-inverse .navbar-link:hover {
        color: #ffffff;
      }
      .label {
        display: inline;
        padding: .2em .6em .3em;
        font-size: 75%;
        font-weight: bold;
        line-height: 1;
        color: #ffffff;
        text-align: center;
        white-space: nowrap;
        vertical-align: baseline;
        border-radius: .25em;
      }
      .label[href]:hover,
      .label[href]:focus {
        color: #ffffff;
        text-decoration: none;
        cursor: pointer;
      }
      .label:empty {
        display: none;
      }
      .btn .label {
        position: relative;
        top: -1px;
      }
      .label-default {
        background-color: #999999;
      }
      .label-default[href]:hover,
      .label-default[href]:focus {
        background-color: #808080;
      }
      .label-primary {
        background-color: #428bca;
      }
      .label-primary[href]:hover,
      .label-primary[href]:focus {
        background-color: #3071a9;
      }
      .label-success {
        background-color: #5cb85c;
      }
      .label-success[href]:hover,
      .label-success[href]:focus {
        background-color: #449d44;
      }
      .label-info {
        background-color: #5bc0de;
      }
      .label-info[href]:hover,
      .label-info[href]:focus {
        background-color: #31b0d5;
      }
      .label-warning {
        background-color: #f0ad4e;
      }
      .label-warning[href]:hover,
      .label-warning[href]:focus {
        background-color: #ec971f;
      }
      .label-danger {
        background-color: #d9534f;
      }
      .label-danger[href]:hover,
      .label-danger[href]:focus {
        background-color: #c9302c;
      }
      .thumbnail {
        display: block;
        padding: 4px;
        margin-bottom: 20px;
        line-height: 1.428571429;
        background-color: #ffffff;
        border: 1px solid #dddddd;
        border-radius: 4px;
        -webkit-transition: all 0.2s ease-in-out;
        transition: all 0.2s ease-in-out;
      }
      .thumbnail &gt; img,
      .thumbnail a &gt; img {
        display: block;
        max-width: 100%;
        height: auto;
        margin-left: auto;
        margin-right: auto;
      }
      a.thumbnail:hover,
      a.thumbnail:focus,
      a.thumbnail.active {
        border-color: #428bca;
      }
      .thumbnail .caption {
        padding: 9px;
        color: #333333;
      }
      .clearfix:before,
      .clearfix:after {
        content: &quot; &quot;;
        display: table;
      }
      .clearfix:after {
        clear: both;
      }
      .center-block {
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
      .pull-right {
        float: right !important;
      }
      .pull-left {
        float: left !important;
      }
      .hide {
        display: none !important;
      }
      .show {
        display: block !important;
      }
      .invisible {
        visibility: hidden;
      }
      .text-hide {
        font: 0/0 a;
        color: transparent;
        text-shadow: none;
        background-color: transparent;
        border: 0;
      }
      .hidden {
        display: none !important;
        visibility: hidden !important;
      }
      .affix {
        position: fixed;
      }
      .form-ct-search{
        width:100px;
        -o-transition: color, text-shadow 0.3s, 0.3s;
        -ms-transition: color, text-shadow 0.3s, 0.3s;
        -moz-transition: color, text-shadow 0.3s, 0.3s;
        -webkit-transition: color, text-shadow 0.3s, 0.3s;    
      }
      .form-ct-search:focus{
        width:100%;
        -o-transition: color, text-shadow 0.3s, 0.3s;
        -ms-transition: color, text-shadow 0.3s, 0.3s;
        -moz-transition: color, text-shadow 0.3s, 0.3s;
        -webkit-transition: color, text-shadow 0.3s, 0.3s;     
      }
      .btn-vil:hover, .btn-vil:focus, .btn-vil:active, .btn-vil.active, .open .dropdown-toggle.btn-vil{
        color: #fff;
        background: #662d91;
        border: 3px solid #fff;
      }
      .btn-vil {
        padding: 15px 40px 13px;
        text-align: center;
        border-radius: 0px;
        display: inline-block;
        border: 2px solid #662d91;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bold;
      }
      .btn-vilot:hover, .btn-vilot:focus, .btn-vilot:active, .btn-vilot.active, .open .dropdown-toggle.btn-vilot{
        color: #fff;
        background: #662d91;
      }
      .btn-vilot {
        background: #662d91;
        padding: 15px 30px 13px;
        text-align: center;
        text-transform: uppercase;
        border-radius: 5px;
        font-weight: 700;
        display: inline-block;
        color: #fff;
      }
      .PopularPosts a {
        line-height: 2px;
        color: #000;
        text-transform: uppercase;
        font-size: 14px;
        font-weight: 600;
      }
      .sidebar .PopularPosts .widget-content ul li {
        border: 1px solid #ddd !important;
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 6px;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
      }
      .blog-pager a{
        color:#662d91;      
      }
      .home-link{
        color:#fff !important;      
      }
      .socialshare{border-bottom:1px solid #d2d2d2;border-top:1px solid #d2d2d2;padding:5px 0;margin:2px 0;float:left;max-height:38px!important;background:#fff;width:100%}.socialshare .twit{float:left;width:100px;border-right:4px solid #fff;margin:0 10px 0 0;padding:2px 0;height:25px}.socialshare .sharertitle{float:left;border-right:1px solid #d2d2d2;padding:2px 10px 2px 0;margin:0 10px 0 0;color:#b1a9a5;font-family:Arial,Helvetica,sans-serif;text-transform:uppercase;line-height:25px;vertical-align:middle}
      .list-label-widget-content ul li{
        float: left;
        padding: 3px!important;
        margin: 0px!important;
        border: 0px!important;
      }
      .list-label-widget-content ul li a {
        float: left;
        background: #662d91;
        padding: 8px 10px 8px 10px;
        border-radius: 4px;
        color: #fff!important;
        text-transform: uppercase;
        font-size: 13px;
      }
      #header-container{
        border-right: 1px solid #ddd;
        border-left: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        border-radius: 0 0 5px 5px;
        margin-bottom:20px;
        background:#fff;      
      }
      .dropdown{position:relative;}.dropdown-toggle:focus{outline:0;}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:160px;padding:5px 0;margin:2px 0 0;list-style:none;font-size:14px;background-color:#ffffff;border:1px solid #cccccc;border:1px solid rgba(0, 0, 0, 0.15);border-radius:4px;-webkit-box-shadow:0 6px 12px rgba(0, 0, 0, 0.175);box-shadow:0 6px 12px rgba(0, 0, 0, 0.175);background-clip:padding-box;}.dropdown-menu.pull-right{right:0;left:auto;}.dropdown-menu .divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5;}.dropdown-menu&gt;li&gt;a{display:block;padding:3px 20px;clear:both;font-weight:normal;line-height:1.428571429;color:#333333;white-space:nowrap;}.dropdown-menu&gt;li&gt;a:hover,.dropdown-menu&gt;li&gt;a:focus{text-decoration:none;color:#262626;background-color:#f5f5f5;}.dropdown-menu&gt;.active&gt;a,.dropdown-menu&gt;.active&gt;a:hover,.dropdown-menu&gt;.active&gt;a:focus{color:#ffffff;text-decoration:none;outline:0;background-color:#428bca;}.dropdown-menu&gt;.disabled&gt;a,.dropdown-menu&gt;.disabled&gt;a:hover,.dropdown-menu&gt;.disabled&gt;a:focus{color:#999999;}.dropdown-menu&gt;.disabled&gt;a:hover,.dropdown-menu&gt;.disabled&gt;a:focus{text-decoration:none;background-color:transparent;background-image:none;filter:progid:DXImageTransform.Microsoft.gradient(enabled = false);cursor:not-allowed;}.open&gt;.dropdown-menu{display:block;}.open&gt;a{outline:0;}.dropdown-header{display:block;padding:3px 20px;font-size:12px;line-height:1.428571429;color:#999999;}.dropdown-backdrop{position:fixed;left:0;right:0;bottom:0;top:0;z-index:990;}.pull-right&gt;.dropdown-menu{right:0;left:auto;}.dropup .caret,.navbar-fixed-bottom .dropdown .caret{border-top:0;border-bottom:4px solid;content:&quot;&quot;;}.dropup .dropdown-menu,.navbar-fixed-bottom .dropdown .dropdown-menu{top:auto;bottom:100%;margin-bottom:1px;}@media (min-width:768px){.navbar-right .dropdown-menu{right:0;left:auto;}}
      .caret {
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: 2px;
        vertical-align: middle;
        border-top: 4px solid;
        border-right: 4px solid transparent;
        border-left: 4px solid transparent;
      }
      .collapse{
        display:none;      
}
    </style>
    <script type='text/javascript'>
      var thumbnail_mode = &quot;no-float&quot; ;
      summary_noimg = 385;
      summary_img = 285;
      img_thumb_height = 200;
      img_thumb_width = 300;
    </script>
    <script type='text/javascript'>
      //<![CDATA[
      function removeHtmlTag(strx,chop){
        if(strx.indexOf("<")!=-1)
        {
          var s = strx.split("<");
          for(var i=0;i<s.length;i++){
            if(s[i].indexOf(">")!=-1){
              s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length);
            }
          }
          strx = s.join("");
        }
        chop = (chop < strx.length-1) ? chop : strx.length-2;
        while(strx.charAt(chop-1)!=' ' && strx.indexOf(' ',chop)!=-1) chop++;
        strx = strx.substring(0,chop-1);
        return strx+'...';
      }
      function createSummaryAndThumb(pID,url){
        var div = document.getElementById(pID);
        var imgtag = "";
        var img = div.getElementsByTagName("img");
        var summ = summary_noimg;
        if(img.length>=1) {
          imgtag = '<a href="'+url+'"><span class="thumbnail" style="float:left;width:100%;"><img src="'+img[0].src+'" height="'+img_thumb_height+'px"/></span></a>';
          summ = summary_img;
        }
        var summary = imgtag + '<div>' + removeHtmlTag(div.innerHTML,summ) + '</div>';
        div.innerHTML = summary;
      }
      //]]>
    </script>
  </head>
  <body>
    <div class='container' id='header-container'>
      <div class='navbar navbar-default navbar-static-top main-top-nav' role='banner'>
        <div class='navbar-header'>
          <button class='navbar-toggle' data-target='.bs-navbar-collapse2' data-toggle='collapse' type='button'>
            <span class='sr-only'>
              Toggle navigation
            </span>
            <span class='icon-bar'/>
            <span class='icon-bar'/>
            <span class='icon-bar'/>
          </button>
          <b:section class='header' id='blog-title' maxwidgets='1' showaddelement='no'>
            <b:widget id='Header1' locked='true' title='Blog Fowl (Header)' type='Header' version='1'>
              <b:widget-settings>
                <b:widget-setting name='displayUrl'>http://4.bp.blogspot.com/-4FbPGrJedMs/WfpFkQKOZsI/AAAAAAAAAI0/UlfXT0YWb5gdgRCpnRUqohg-Ka0KIlsNwCK4BGAYYCw/s1600/bird_dribbble%2Bcopy.png</b:widget-setting>
                <b:widget-setting name='displayHeight'>124</b:widget-setting>
                <b:widget-setting name='sectionWidth'>790</b:widget-setting>
                <b:widget-setting name='useImage'>true</b:widget-setting>
                <b:widget-setting name='shrinkToFit'>false</b:widget-setting>
                <b:widget-setting name='imagePlacement'>REPLACE</b:widget-setting>
                <b:widget-setting name='displayWidth'>300</b:widget-setting>
              </b:widget-settings>
              <b:includable id='main'>
                <b:if cond='data:useImage'>
                  <b:if cond='data:imagePlacement == &quot;BEHIND&quot;'>
                    <!--
Show image as background to text. You can't really calculate the width
reliably in JS because margins are not taken into account by any of
clientWidth, offsetWidth or scrollWidth, so we don't force a minimum
width if the user is using shrink to fit.
This results in a margin-width's worth of pixels being cropped. If the
user is not using shrink to fit then we expand the header.
-->
                    <div expr:style='&quot;background-image: url(\&quot;&quot; + data:sourceUrl + &quot;\&quot;); &quot;                      + &quot;background-position: &quot;                      + data:backgroundPositionStyleStr + &quot;; &quot;                      + data:widthStyleStr                      + &quot;min-height: &quot; + data:height + &quot;px;&quot;                      + &quot;_height: &quot; + data:height + &quot;px;&quot;                      + &quot;background-repeat: no-repeat; &quot;' id='header-inner'>
                      <div class='titlewrapper' style='background: transparent'>
                        <h1 class='title' style='background: transparent; border-width: 0px'>
                          <b:include name='title'/>
                        </h1>
                      </div>
                      <b:include name='description'/>
                    </div>
                    <b:else/>
                    <!--Show the image only-->
                    <div id='header-inner'>
                      <a expr:href='data:blog.homepageUrl' style='display: block'>
                        <img expr:alt='data:title' expr:height='data:height' expr:id='data:widget.instanceId + &quot;_headerimg&quot;' expr:src='data:sourceUrl' expr:width='data:width' style='display: block'/>
                      </a>
                      <!--Show the description-->
                      <b:if cond='data:imagePlacement == &quot;BEFORE_DESCRIPTION&quot;'>
                        <b:include name='description'/>
                      </b:if>
                    </div>
                  </b:if>
                  <b:else/>
                  <!--No header image -->
                  <div id='header-inner'>
                    <div class='titlewrapper'>
                      <h1 class='title'>
                        <b:include name='title'/>
                      </h1>
                    </div>
                    <b:include name='description'/>
                  </div>
                </b:if>
              </b:includable>
              <b:includable id='description'>
                <div class='descriptionwrapper'>
                  <p class='description'>
                    <span>
                      <data:description/>
                    </span>
                  </p>
                </div>
              </b:includable>
              <b:includable id='title'>
                <b:if cond='data:blog.url == data:blog.homepageUrl'>
                  <data:title/>
                  <b:else/>
                  <a expr:href='data:blog.homepageUrl'>
                    <data:title/>
                  </a>
                </b:if>
              </b:includable>
            </b:widget>
          </b:section>
        </div>
        <nav class='collapse navbar-collapse bs-navbar-collapse2' role='navigation'>
          <ul class='nav navbar-nav navbar-right'>
            <li class='open'>
              <a href='/'>
                HOME
              </a>
            </li>
            <li>
              <a href='http://blogfowl.blogspot.com/p/about.html'>
                ABOUT
              </a>
            </li>
            <li>
              <a href='http://blogfowl.blogspot.com/p/blog-page.html'>
                CONTACT
              </a>
            </li>
            <li>
              <a href='#'>
                MAKE MONEY ONLINE
              </a>
            </li>
            <li>
              <a href='https://blogfowl.blogspot.co.uk/search/label/blogging'>
                BLOGGING
              </a>
            </li>
            <li class='dropdown'>
              <a class='dropdown-toggle' data-toggle='dropdown' href='#'>
                CATEGORIES 
                <b class='caret'/>
              </a>
              <ul class='dropdown-menu'>
                <li>
                  <a href='https://blogfowl.blogspot.co.uk/search/label/Youtube'>
                    YOUTUBE
                  </a>
                </li>
                <li>
                  <a href='https://blogfowl.blogspot.co.uk/search/label/SEO'>
                    SEO
                  </a>
                </li>
                <li>
                  <a href='https://blogfowl.blogspot.co.uk/search/label/serial%20keys'>
                    SERIAL KEYS
                  </a>
                </li>
                <li class='divider'/>
                <li>
                  <a href='#'>
                    BRING TRAFFIC
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <form action='/search' class='navbar-form navbar-right nav-form-s' method='get' role='search'>
                <div class='form-group'>
                  <input class='form-control form-ct-search' name='q' placeholder='Search' type='text'/>
                </div>
              </form>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <!--end top-page-menu-->
    <div class='container' id='container'>
      <div class='row'>
        <div class='col-xs-12 col-sm-8 col-md-8 col-lg-8 clearfix  sidebox-start'>
          <b:section class='main' id='main' showaddelement='no'>
            <b:widget id='Blog1' locked='true' title='Blog Posts' type='Blog' version='1'>
              <b:widget-settings>
                <b:widget-setting name='showDateHeader'>true</b:widget-setting>
                <b:widget-setting name='style.textcolor'>#000000</b:widget-setting>
                <b:widget-setting name='showShareButtons'>true</b:widget-setting>
                <b:widget-setting name='authorLabel'>By</b:widget-setting>
                <b:widget-setting name='showCommentLink'>true</b:widget-setting>
                <b:widget-setting name='style.urlcolor'>#008000</b:widget-setting>
                <b:widget-setting name='showAuthor'>false</b:widget-setting>
                <b:widget-setting name='style.linkcolor'>#0000ff</b:widget-setting>
                <b:widget-setting name='style.unittype'>TextAndImage</b:widget-setting>
                <b:widget-setting name='style.bgcolor'>#ffffff</b:widget-setting>
                <b:widget-setting name='showAuthorProfile'>false</b:widget-setting>
                <b:widget-setting name='style.layout'>1x1</b:widget-setting>
                <b:widget-setting name='showLabels'>true</b:widget-setting>
                <b:widget-setting name='showLocation'>true</b:widget-setting>
                <b:widget-setting name='showTimestamp'>true</b:widget-setting>
                <b:widget-setting name='postsPerAd'>3</b:widget-setting>
                <b:widget-setting name='showBacklinks'>false</b:widget-setting>
                <b:widget-setting name='style.bordercolor'>#ffffff</b:widget-setting>
                <b:widget-setting name='showInlineAds'>true</b:widget-setting>
                <b:widget-setting name='showReactions'>false</b:widget-setting>
              </b:widget-settings>
              <b:includable id='main' var='top'>
                <b:if cond='data:mobile == &quot;false&quot;'>
                  <!-- posts -->
                  <div class='blog-posts hfeed'>
                    <b:include data='top' name='status-message'/>
                    <data:defaultAdStart/>
                    <b:loop values='data:posts' var='post'>
                      <b:if cond='data:post.isDateStart'>
                        <b:if cond='data:post.isFirstPost == &quot;false&quot;'>
                          &lt;/div&gt;&lt;/div&gt;
                        </b:if>
                      </b:if>
                      <b:if cond='data:post.isDateStart'>
                        &lt;div class=&quot;date-outer&quot;&gt;
                      </b:if>
                      <b:if cond='data:post.dateHeader'>
                        <h3 class='date-header'>
                          <span>
                            <data:post.dateHeader/>
                          </span>
                        </h3>
                      </b:if>
                      <b:if cond='data:post.isDateStart'>
                        &lt;div class=&quot;date-posts&quot;&gt;
                      </b:if>
                      <div class='post-outer'>
                        <b:include data='post' name='post'/>
                        <b:if cond='data:blog.pageType == &quot;static_page&quot;'>
                          <b:include data='post' name='comment_picker'/>
                        </b:if>
                        <b:if cond='data:blog.pageType == &quot;item&quot;'>
                          <b:include data='post' name='comment_picker'/>
                        </b:if>
                      </div>
                      <b:if cond='data:post.includeAd'>
                        <b:if cond='data:post.isFirstPost'>
                          <data:defaultAdEnd/>
                          <b:else/>
                          <data:adEnd/>
                        </b:if>
                        <div class='inline-ad'>
                          <data:adCode/>
                        </div>
                        <data:adStart/>
                      </b:if>
                    </b:loop>
                    <b:if cond='data:numPosts != 0'>
                      &lt;/div&gt;&lt;/div&gt;
                    </b:if>
                    <data:adEnd/>
                  </div>
                  <!-- navigation -->
                  <b:if cond='data:blog.pageType != &quot;item&quot;'>
                    <b:include name='nextprev'/>
                  </b:if>
                  <!-- feed links -->
                  <b:include name='feedLinks'/>
                  <b:if cond='data:top.showStars'>
                    <script src='//www.google.com/jsapi' type='text/javascript'/>
                    <script type='text/javascript'>
                      google.load(&quot;annotations&quot;, &quot;1&quot;, {&quot;locale&quot;: &quot;<data:top.languageCode/>&quot;});
                      function initialize() {
                        google.annotations.setApplicationId(<data:top.blogspotReviews/>);
                        google.annotations.createAll();
                        google.annotations.fetch();
                      }
                      google.setOnLoadCallback(initialize);
                    </script>
                  </b:if>
                  <b:else/>
                  <b:include name='mobile-main'/>
                </b:if>
                <b:if cond='data:top.showDummy'>
                  <data:top.dummyBootstrap/>
                </b:if>
              </b:includable>
              <b:includable id='backlinkDeleteIcon' var='backlink'>
                <span expr:class='&quot;item-control &quot; + data:backlink.adminClass'>
                  <a expr:href='data:backlink.deleteUrl' expr:title='data:top.deleteBacklinkMsg'>
                    <img src='//www.blogger.com/img/icon_delete13.gif'/>
                  </a>
                </span>
              </b:includable>
              <b:includable id='backlinks' var='post'>
                <a name='links'/>
                <h4>
                  <data:post.backlinksLabel/>
                </h4>
                <b:if cond='data:post.numBacklinks != 0'>
                  <dl class='comments-block' id='comments-block'>
                    <b:loop values='data:post.backlinks' var='backlink'>
                      <div class='collapsed-backlink backlink-control'>
                        <dt class='comment-title'>
                          <span class='backlink-toggle-zippy'>
                            &#160;
                          </span>
                          <a expr:href='data:backlink.url' rel='nofollow'>
                            <data:backlink.title/>
                          </a>
                          <b:include data='backlink' name='backlinkDeleteIcon'/>
                        </dt>
                        <dd class='comment-body collapseable'>
                          <data:backlink.snippet/>
                        </dd>
                        <dd class='comment-footer collapseable'>
                          <span class='comment-author'>
                            <data:post.authorLabel/>
                            <data:backlink.author/>
                          </span>
                          <span class='comment-timestamp'>
                            <data:post.timestampLabel/>
                            <data:backlink.timestamp/>
                          </span>
                        </dd>
                      </div>
                    </b:loop>
                  </dl>
                </b:if>
                <p class='comment-footer'>
                  <a class='comment-link' expr:href='data:post.createLinkUrl' expr:id='data:widget.instanceId + &quot;_backlinks-create-link&quot;' target='_blank'>
                    <data:post.createLinkLabel/>
                  </a>
                </p>
              </b:includable>
              <b:includable id='comment-form' var='post'>
                <div class='comment-form'>
                  <a name='comment-form'/>
                  <b:if cond='data:mobile'>
                    <h4 id='comment-post-message'>
                      <a expr:id='data:widget.instanceId + &quot;_comment-editor-toggle-link&quot;' href='javascript:void(0)'>
                        <data:postCommentMsg/>
                      </a>
                    </h4>
                    <p>
                      <data:blogCommentMessage/>
                    </p>
                    <data:blogTeamBlogMessage/>
                    <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
                    <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='410' id='comment-editor' name='comment-editor' src='' style='display: none' width='100%'/>
                    <b:else/>
                    <h4 id='comment-post-message'>
                      <data:postCommentMsg/>
                    </h4>
                    <p>
                      <data:blogCommentMessage/>
                    </p>
                    <data:blogTeamBlogMessage/>
                    <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
                    <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='410' id='comment-editor' name='comment-editor' src='' width='100%'/>
                  </b:if>
                  <data:post.friendConnectJs/>
                  <data:post.cmtfpIframe/>
                  <script type='text/javascript'>
                    BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;, &#39;<data:post.communityId/>&#39;);
                  </script>
                </div>
              </b:includable>
              <b:includable id='commentDeleteIcon' var='comment'>
                <span expr:class='&quot;item-control &quot; + data:comment.adminClass'>
                  <b:if cond='data:showCmtPopup'>
                    <div class='goog-toggle-button'>
                      <div class='goog-inline-block comment-action-icon'/>
                    </div>
                    <b:else/>
                    <a class='comment-delete' expr:href='data:comment.deleteUrl' expr:title='data:top.deleteCommentMsg'>
                      <img src='//www.blogger.com/img/icon_delete13.gif'/>
                    </a>
                  </b:if>
                </span>
              </b:includable>
              <b:includable id='comment_count_picker' var='post'>
                <b:if cond='data:post.forceIframeComments'>
                  <span class='cmt_count_iframe_holder' expr:data-count='data:post.numComments' expr:data-onclick='data:post.addCommentOnclick' expr:data-url='data:post.canonicalUrl'>
                  </span>
                  <b:else/>
                  <b:if cond='data:post.commentSource == 1'>
                    <span class='cmt_count_iframe_holder' expr:data-count='data:post.numComments' expr:data-onclick='data:post.addCommentOnclick' expr:data-url='data:post.canonicalUrl'>
                    </span>
                    <b:else/>
                    <a class='comment-link' expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'>
                      <data:post.commentLabelFull/>
                      :
                    </a>
                  </b:if>
                </b:if>
              </b:includable>
              <b:includable id='comment_picker' var='post'>
                <b:if cond='data:post.commentSource == 1'>
                  <b:include data='post' name='iframe_comments'/>
                  <b:else/>
                  <b:if cond='data:post.showThreadedComments'>
                    <b:include data='post' name='threaded_comments'/>
                    <b:else/>
                    <b:include data='post' name='comments'/>
                  </b:if>
                </b:if>
              </b:includable>
              <b:includable id='comments' var='post'>
                <div class='comments well' id='comments'>
                  <a name='comments'/>
                  <b:if cond='data:post.allowComments'>
                    <h4>
                      <data:post.commentLabelFull/>
                      :
                    </h4>
                    <b:if cond='data:post.commentPagingRequired'>
                      <span class='paging-control-container'>
                        <b:if cond='data:post.hasOlderLinks'>
                          <a expr:class='data:post.oldLinkClass' expr:href='data:post.oldestLinkUrl'>
                            <data:post.oldestLinkText/>
                          </a>
                          &#160;
                          <a expr:class='data:post.oldLinkClass' expr:href='data:post.olderLinkUrl'>
                            <data:post.olderLinkText/>
                          </a>
                          &#160;
                        </b:if>
                        <data:post.commentRangeText/>
                        <b:if cond='data:post.hasNewerLinks'>
                          &#160;
                          <a expr:class='data:post.newLinkClass' expr:href='data:post.newerLinkUrl'>
                            <data:post.newerLinkText/>
                          </a>
                          &#160;
                          <a expr:class='data:post.newLinkClass' expr:href='data:post.newestLinkUrl'>
                            <data:post.newestLinkText/>
                          </a>
                        </b:if>
                      </span>
                    </b:if>
                    <div expr:id='data:widget.instanceId + &quot;_comments-block-wrapper&quot;'>
                      <dl expr:class='data:post.avatarIndentClass' id='comments-block'>
                        <b:loop values='data:post.comments' var='comment'>
                          <dt expr:class='&quot;comment-author &quot; + data:comment.authorClass' expr:id='data:comment.anchorName'>
                            <b:if cond='data:comment.favicon'>
                              <img expr:src='data:comment.favicon' height='16px' style='margin-bottom:-2px;' width='16px'/>
                            </b:if>
                            <a expr:name='data:comment.anchorName'/>
                            <b:if cond='data:blog.enabledCommentProfileImages'>
                              <data:comment.authorAvatarImage/>
                            </b:if>
                            <b:if cond='data:comment.authorUrl'>
                              <a expr:href='data:comment.authorUrl' rel='nofollow'>
                                <data:comment.author/>
                              </a>
                              <b:else/>
                              <data:comment.author/>
                            </b:if>
                            <data:commentPostedByMsg/>
                          </dt>
                          <dd class='comment-body' expr:id='data:widget.instanceId + data:comment.cmtBodyIdPostfix'>
                            <b:if cond='data:comment.isDeleted'>
                              <span class='deleted-comment'>
                                <data:comment.body/>
                              </span>
                              <b:else/>
                              <p>
                                <data:comment.body/>
                              </p>
                            </b:if>
                          </dd>
                          <dd class='comment-footer'>
                            <span class='comment-timestamp'>
                              <a expr:href='data:comment.url' title='comment permalink'>
                                <data:comment.timestamp/>
                              </a>
                              <b:include data='comment' name='commentDeleteIcon'/>
                            </span>
                          </dd>
                        </b:loop>
                      </dl>
                    </div>
                    <b:if cond='data:post.commentPagingRequired'>
                      <span class='paging-control-container'>
                        <a expr:class='data:post.oldLinkClass' expr:href='data:post.oldestLinkUrl'>
                          <data:post.oldestLinkText/>
                        </a>
                        <a expr:class='data:post.oldLinkClass' expr:href='data:post.olderLinkUrl'>
                          <data:post.olderLinkText/>
                        </a>
                        &#160;
                        <data:post.commentRangeText/>
                        &#160;
                        <a expr:class='data:post.newLinkClass' expr:href='data:post.newerLinkUrl'>
                          <data:post.newerLinkText/>
                        </a>
                        <a expr:class='data:post.newLinkClass' expr:href='data:post.newestLinkUrl'>
                          <data:post.newestLinkText/>
                        </a>
                      </span>
                    </b:if>
                    <p class='comment-footer'>
                      <b:if cond='data:post.embedCommentForm'>
                        <b:if cond='data:post.allowNewComments'>
                          <b:include data='post' name='comment-form'/>
                          <b:else/>
                          <data:post.noNewCommentsText/>
                        </b:if>
                        <b:else/>
                        <b:if cond='data:post.allowComments'>
                          <a expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'>
                            <data:postCommentMsg/>
                          </a>
                        </b:if>
                      </b:if>
                    </p>
                  </b:if>
                  <b:if cond='data:showCmtPopup'>
                    <div id='comment-popup'>
                      <iframe allowtransparency='true' frameborder='0' id='comment-actions' name='comment-actions' scrolling='no'>
                      </iframe>
                    </div>
                  </b:if>
                  <div id='backlinks-container'>
                    <div expr:id='data:widget.instanceId + &quot;_backlinks-container&quot;'>
                      <b:if cond='data:post.showBacklinks'>
                        <b:include data='post' name='backlinks'/>
                      </b:if>
                    </div>
                  </div>
                </div>
              </b:includable>
              <b:includable id='feedLinks'>
                <b:if cond='data:blog.pageType != &quot;item&quot;'>
                  <!-- Blog feed links -->
                  <b:if cond='data:feedLinks'>
                    <div class='blog-feeds'>
                      <b:include data='feedLinks' name='feedLinksBody'/>
                    </div>
                  </b:if>
                  <b:else/>
                  <!--Post feed links -->
                  <div class='post-feeds'>
                    <b:loop values='data:posts' var='post'>
                      <b:if cond='data:post.allowComments'>
                        <b:if cond='data:post.feedLinks'>
                          <b:include data='post.feedLinks' name='feedLinksBody'/>
                        </b:if>
                      </b:if>
                    </b:loop>
                  </div>
                </b:if>
              </b:includable>
              <b:includable id='feedLinksBody' var='links'>
                <div class='feed-links'>
                  <data:feedLinksMsg/>
                  <b:loop values='data:links' var='f'>
                    <a class='feed-link' expr:href='data:f.url' expr:type='data:f.mimeType' target='_blank'>
                      <data:f.name/>
                      (
                      <data:f.feedType/>
                      )
                    </a>
                  </b:loop>
                </div>
              </b:includable>
              <b:includable id='iframe_comments' var='post'>
                <b:if cond='data:post.allowIframeComments'>
                  <script expr:src='data:post.iframeCommentSrc' type='text/javascript'/>
                  <div class='cmt_iframe_holder' expr:data-href='data:post.canonicalUrl' expr:data-viewtype='data:post.viewType'/>
                  <b:if cond='data:post.embedCommentForm == &quot;false&quot;'>
                    <a expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'>
                      <data:postCommentMsg/>
                    </a>
                  </b:if>
                </b:if>
              </b:includable>
              <b:includable id='mobile-index-post' var='post'>
                <div class='mobile-date-outer date-outer'>
                  <b:if cond='data:post.dateHeader'>
                    <div class='date-header'>
                      <span>
                        <data:post.dateHeader/>
                      </span>
                    </div>
                  </b:if>
                  <div class='mobile-post-outer'>
                    <a expr:href='data:post.url'>
                      <h3 class='mobile-index-title entry-title' itemprop='name'>
                        <data:post.title/>
                      </h3>
                      <div class='mobile-index-arrow'>
                        &amp;rsaquo;
                      </div>
                      <div class='mobile-index-contents'>
                        <b:if cond='data:post.thumbnailUrl'>
                          <div class='mobile-index-thumbnail'>
                            <div class='Image'>
                              <img expr:src='data:post.thumbnailUrl'/>
                            </div>
                          </div>
                        </b:if>
                        <div class='post-body'>
                          <b:if cond='data:post.snippet'>
                            <data:post.snippet/>
                          </b:if>
                        </div>
                      </div>
                      <div style='clear: both;'/>
                    </a>
                    <div class='mobile-index-comment'>
                      <b:if cond='data:blog.pageType != &quot;static_page&quot;'>
                        <b:if cond='data:post.allowComments'>
                          <b:if cond='data:post.numComments != 0'>
                            <b:include data='post' name='comment_count_picker'/>
                          </b:if>
                        </b:if>
                      </b:if>
                    </div>
                  </div>
                </div>
              </b:includable>
              <b:includable id='mobile-main' var='top'>
                <!-- posts -->
                <div class='blog-posts hfeed'>
                  <b:include data='top' name='status-message'/>
                  <b:if cond='data:blog.pageType == &quot;index&quot;'>
                    <b:loop values='data:posts' var='post'>
                      <b:include data='post' name='mobile-index-post'/>
                    </b:loop>
                    <b:else/>
                    <b:loop values='data:posts' var='post'>
                      <b:include data='post' name='mobile-post'/>
                    </b:loop>
                  </b:if>
                </div>
                <b:include name='mobile-nextprev'/>
              </b:includable>
              <b:includable id='mobile-nextprev'>
                <div class='blog-pager' id='blog-pager'>
                  <b:if cond='data:newerPageUrl'>
                    <div class='mobile-link-button' id='blog-pager-newer-link'>
                      <a class='blog-pager-newer-link' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-newer-link&quot;' expr:title='data:newerPageTitle'>
                        &amp;lsaquo;
                      </a>
                    </div>
                  </b:if>
                  <b:if cond='data:olderPageUrl'>
                    <div class='mobile-link-button' id='blog-pager-older-link'>
                      <a class='blog-pager-older-link' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;' expr:title='data:olderPageTitle'>
                        &amp;rsaquo;
                      </a>
                    </div>
                  </b:if>
                  <div class='mobile-link-button' id='blog-pager-home-link'>
                    <a class='home-link' expr:href='data:blog.homepageUrl'>
                      <data:homeMsg/>
                    </a>
                  </div>
                  <div class='mobile-desktop-link'>
                    <a class='home-link' expr:href='data:desktopLinkUrl'>
                      <data:desktopLinkMsg/>
                    </a>
                  </div>
                </div>
                <div class='clear'/>
              </b:includable>
              <b:includable id='mobile-post' var='post'>
                <div class='date-outer'>
                  <b:if cond='data:post.dateHeader'>
                    <h3 class='date-header'>
                      <span>
                        <data:post.dateHeader/>
                      </span>
                    </h3>
                  </b:if>
                  <div class='date-posts'>
                    <div class='post-outer'>
                      <div class='post hentry uncustomized-post-template' itemscope='itemscope' itemtype='http://schema.org/BlogPosting'>
                        <b:if cond='data:post.thumbnailUrl'>
                          <meta expr:content='data:post.thumbnailUrl' itemprop='image_url'/>
                        </b:if>
                        <meta expr:content='data:blog.blogId' itemprop='blogId'/>
                        <meta expr:content='data:post.id' itemprop='postId'/>
                        <a expr:name='data:post.id'/>
                        <b:if cond='data:post.title'>
                          <h3 class='post-title entry-title' itemprop='name'>
                            <b:if cond='data:post.link'>
                              <a expr:href='data:post.link'>
                                <data:post.title/>
                              </a>
                              <b:else/>
                              <b:if cond='data:post.url'>
                                <b:if cond='data:blog.url != data:post.url'>
                                  <a expr:href='data:post.url'>
                                    <data:post.title/>
                                  </a>
                                  <b:else/>
                                  <data:post.title/>
                                </b:if>
                                <b:else/>
                                <data:post.title/>
                              </b:if>
                            </b:if>
                          </h3>
                        </b:if>
                        <div class='post-header'>
                          <div class='post-header-line-1'/>
                          <span class='post-comment-link'>
                            <b:if cond='data:blog.pageType != &quot;item&quot;'>
                              <b:if cond='data:blog.pageType != &quot;static_page&quot;'>
                                <b:if cond='data:post.allowComments'>
                                  <b:include data='post' name='comment_count_picker'/>
                                </b:if>
                              </b:if>
                            </b:if>
                          </span>
                          <span class='post-author vcard'>
                            <b:if cond='data:top.showAuthor'>
                              <data:top.authorLabel/>
                              <span class='fn'>
                                <data:post.author/>
                              </span>
                            </b:if>
                          </span>
                          <span class='post-timestamp'>
                            <b:if cond='data:top.showTimestamp'>
                              <data:top.timestampLabel/>
                              <b:if cond='data:post.url'>
                                <a class='timestamp-link' expr:href='data:post.url' rel='bookmark' title='permanent link'>
                                  <abbr class='published' expr:title='data:post.timestampISO8601'>
                                    <data:post.timestamp/>
                                  </abbr>
                                </a>
                              </b:if>
                            </b:if>
                          </span>
                          <span class='post-labels'>
                            <b:if cond='data:post.labels'>
                              <data:postLabelsLabel/>
                              <b:loop values='data:post.labels' var='label'>
                                <a expr:href='data:label.url' rel='tag'>
                                  <data:label.name/>
                                </a>
                                <b:if cond='data:label.isLast != &quot;true&quot;'>
                                  ,
                                </b:if>
                              </b:loop>
                            </b:if>
                          </span>
                        </div>
                        <div class='post-body entry-content' expr:id='&quot;post-body-&quot; + data:post.id' itemprop='articleBody'>
                          <data:post.body/>
                          <div style='clear: both;'/>
                          <!-- clear for photos floats -->
                        </div>
                        <div class='post-footer'>
                          <div class='post-footer-line post-footer-line-1'>
                          </div>
                          <div class='post-footer-line post-footer-line-2'>
                            <b:if cond='data:top.showMobileShare'>
                              <div class='mobile-link-button goog-inline-block' id='mobile-share-button'>
                                <a href='javascript:void(0);'>
                                  <data:shareMsg/>
                                </a>
                              </div>
                            </b:if>
                            <b:if cond='data:top.showDummy'>
                              <div class='goog-inline-block dummy-container'>
                                <data:post.dummyTag/>
                              </div>
                            </b:if>
                          </div>
                        </div>
                      </div>
                      <b:if cond='data:blog.pageType == &quot;static_page&quot;'>
                        <b:include data='post' name='comment_picker'/>
                      </b:if>
                      <b:if cond='data:blog.pageType == &quot;item&quot;'>
                        <b:include data='post' name='comment_picker'/>
                      </b:if>
                    </div>
                  </div>
                </div>
              </b:includable>
              <b:includable id='nextprev'>
                <div class='blog-pager' id='blog-pager'>
                  <b:if cond='data:newerPageUrl'>
                    <span id='blog-pager-newer-link'>
                      <a class='blog-pager-newer-link btn btn-vil' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-newer-link&quot;' expr:title='data:newerPageTitle'>
                        <data:newerPageTitle/>
                      </a>
                    </span>
                  </b:if>
                  <b:if cond='data:olderPageUrl'>
                    <span id='blog-pager-older-link'>
                      <a class='blog-pager-older-link btn btn-vil' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;' expr:title='data:olderPageTitle'>
                        <data:olderPageTitle/>
                      </a>
                    </span>
                  </b:if>
                  <b:if cond='data:blog.pageType != &quot;item&quot;'>
                    <a class='home-link btn btn-vilot' expr:href='data:blog.homepageUrl'>
                      <data:homeMsg/>
                    </a>
                  </b:if>
                  <b:if cond='data:mobileLinkUrl'>
                    <div class='blog-mobile-link'>
                      <a expr:href='data:mobileLinkUrl'>
                        <data:mobileLinkMsg/>
                      </a>
                    </div>
                  </b:if>
                </div>
                <div class='clear'/>
              </b:includable>
              <b:includable id='post' var='post'>
                <div class='post hentry' itemprop='blogPost' itemscope='itemscope' itemtype='http://schema.org/BlogPosting'>
                  <b:if cond='data:post.firstImageUrl'>
                    <meta expr:content='data:post.firstImageUrl' itemprop='image_url'/>
                  </b:if>
                  <meta expr:content='data:blog.blogId' itemprop='blogId'/>
                  <meta expr:content='data:post.id' itemprop='postId'/>
                  <a expr:name='data:post.id'/>
                  <b:if cond='data:post.title'>
                    <b:if cond='data:post.link'>
                      <a expr:href='data:post.link'>
                        <data:post.title/>
                      </a>
                      <b:else/>
                      <b:if cond='data:post.url'>
                        <b:if cond='data:blog.url != data:post.url'>
                          <h2 class='post-title entry-title'>
                            <a expr:href='data:post.url'>
                              <data:post.title/>
                            </a>
                          </h2>
                          <b:else/>
                          <h1 class='post-title entry-title'>
                            <data:post.title/>
                          </h1>
                        </b:if>
                        <b:else/>
                        <data:post.title/>
                      </b:if>
                    </b:if>
                  </b:if>
                  <div class='post-header'>
                    <div class='post-header-line-1'/>
                    <span class='post-comment-link'>
                      <b:if cond='data:blog.pageType != &quot;item&quot;'>
                        <b:if cond='data:blog.pageType != &quot;static_page&quot;'>
                          <b:if cond='data:post.allowComments'>
                            <b:include data='post' name='comment_count_picker'/>
                          </b:if>
                        </b:if>
                      </b:if>
                    </span>
                    <span class='post-author vcard'>
                      <b:if cond='data:top.showAuthor'>
                        <data:top.authorLabel/>
                        <span class='fn'>
                          <data:post.author/>
                        </span>
                      </b:if>
                    </span>
                    <span class='post-timestamp'>
                      <b:if cond='data:top.showTimestamp'>
                        <data:top.timestampLabel/>
                        <b:if cond='data:post.url'>
                          <a class='timestamp-link' expr:href='data:post.url' rel='bookmark' title='permanent link'>
                            <data:post.timestamp/>
                          </a>
                        </b:if>
                      </b:if>
                    </span>
                    <span class='post-labels'>
                      <b:if cond='data:post.labels'>
                        <data:postLabelsLabel/>
                        <b:loop values='data:post.labels' var='label'>
                          <a expr:href='data:label.url' rel='tag'>
                            <data:label.name/>
                          </a>
                          <b:if cond='data:label.isLast != &quot;true&quot;'>
                            ,
                          </b:if>
                        </b:loop>
                      </b:if>
                    </span>
                  </div>
                  <b:if cond='data:blog.pageType == &quot;item&quot;'>
                    <!-- Adsense Below Post Title  -->
                    <div class='socialshare'>
                      <div class='sharertitle'>
                        Share this
                      </div>
                      <div class='twit'>
                        <a class='twitter-share-button' data-related='weblogtemplates' data-via='weblogtemplates' href='https://twitter.com/share'>
                          Tweet
                        </a>
                      </div>
                      <div class='twit'>
                        <div id='fb-root'/>
                        <div class='fb-like' data-layout='button_count' data-send='false' data-show-faces='false' data-width='450'/>
                      </div>
                      <div class='twit'>
                        <div class='g-plusone' data-size='medium'/>
                      </div>
                    </div>
                  </b:if>
                  <b:if cond='data:blog.pageType == &quot;item&quot;'>
                    <data:post.body/>
                    <b:else/>
                    <b:if cond='data:blog.pageType == &quot;static_page&quot;'>
                      <data:post.body/>
                      <b:else/>
                      <div expr:id='&quot;summary&quot; + data:post.id'>
                        <data:post.body/>
                      </div>
                      <script type='text/javascript'>
                        createSummaryAndThumb(&quot;summary<data:post.id/>&quot;,&quot;<data:post.url/>&quot;);
                      </script>
                      <div style='clear: both;'/>
                      <span class='rmlink btn btn-vil'>
                        <a expr:href='data:post.url'>
                          Read More
                        </a>
                      </span>
                    </b:if>
                  </b:if>
                  <b:if cond='data:post.hasJumpLink'>
                    <div class='jump-link'>
                      <a class='btn btn-primary' expr:href='data:post.url + &quot;#more&quot;' expr:title='data:post.title'>
                        <data:post.jumpText/>
                      </a>
                    </div>
                  </b:if>
                  <b:if cond='data:blog.pageType == &quot;item&quot;'>
                    <div class='boxframe'>
                      <div id='related-posts'>
                        <script type='text/javascript'>
                          //<![CDATA[
                          var relatedTitles= new Array();var relatedTitlesNum=0;var relatedUrls= new Array();var thumburl= new Array();function related_results_labels_thumbs(json){for(var i=0;i<json["feed"]["entry"]["length"];i++){var entry=json["feed"]["entry"][i];relatedTitles[relatedTitlesNum]=entry["title"]["$t"];try{thumburl[relatedTitlesNum]=entry["media$thumbnail"]["url"];thumburl=thumburl["replace"]("/s72-c/","/s300-a/");} catch(error){s=entry["content"]["$t"];a=s["indexOf"]("\x3Cimg");b=s["indexOf"]("src=\x22",a);c=s["indexOf"]("\x22",b+5);d=s["substr"](b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){thumburl[relatedTitlesNum]=d;} else {if( typeof (defaultnoimage)!=="undefined"){thumburl[relatedTitlesNum]=defaultnoimage;} else {thumburl[relatedTitlesNum]="http://3.bp.blogspot.com/-PpjfsStySz0/UF91FE7rxfI/AAAAAAAACl8/092MmUHSFQ0/s1600/no_image.jpg";} ;} ;} ;if(relatedTitles[relatedTitlesNum]["length"]>35){relatedTitles[relatedTitlesNum]=relatedTitles[relatedTitlesNum]["substring"](0,35)+"...";} ;for(var k=0;k<entry["link"]["length"];k++){if(entry["link"][k]["rel"]=="alternate"){relatedUrls[relatedTitlesNum]=entry["link"][k]["href"];relatedTitlesNum++;} ;} ;} ;} ;function removeRelatedDuplicates(){var tmp= new Array(0);var tmp2= new Array(0);var tmp3= new Array(0);for(var i=0;i<relatedUrls["length"];i++){if(!contains_thumbs(tmp,relatedUrls[i])){tmp["length"]+=1;tmp[tmp["length"]-1]=relatedUrls[i];tmp2["length"]+=1;tmp3["length"]+=1;tmp2[tmp2["length"]-1]=relatedTitles[i];tmp3[tmp3["length"]-1]=thumburl[i];} ;} ;relatedTitles=tmp2;relatedUrls=tmp;thumburl=tmp3;} ;function contains_thumbs(a,e){for(var j=0;j<a["length"];j++){if(a[j]==e){return true;} ;} ;return false;} ;function printRelatedLabels(current){var splitbarcolor;if( typeof (splittercolor)!=="undefined"){splitbarcolor=splittercolor;} else {splitbarcolor="#DDDDDD";} ;for(var i=0;i<relatedUrls["length"];i++){if((relatedUrls[i]==current)||(!relatedTitles[i])){relatedUrls["splice"](i,1);relatedTitles["splice"](i,1);thumburl["splice"](i,1);i--;} ;} ;var r=Math["floor"]((relatedTitles["length"]-1)*Math["random"]());var i=0;if(relatedTitles["length"]==0){document["write"]("\x3Ch3\x3ENo similar templates\x3C/h3\x3E");} ;if(relatedTitles["length"]>0){document["write"]("\x3Ch3\x3E"+relatedpoststitle+"\x3C/h3\x3E");} ;document["write"]("\x3Cdiv style=\x22clear: both;\x22/\x3E");while(i<relatedTitles["length"]&&i<20&&i<maxresults){document["write"]("\x3Ca style=\x22text-decoration:none;float:left;");if(i!=0){document["write"]("\x22");} else {document["write"]("\x22");} ;document["write"](" href=\x22"+relatedUrls[r]+"\x22\x3E\x3Cimg class=\x22img-reponsive\x22 style=\x22width: 180px;height: 130px;\x22 src=\x22"+thumburl[r]+"\x22/\x3E\x3Cbr/\x3E\x3Cdiv class=\x22imgpost\x22\x3E"+relatedTitles[r]+"\x3C/div\x3E\x3C/a\x3E");i++;if(r<relatedTitles["length"]-1){r++;} else {r=0;} ;} ;document["write"]("\x3C/div\x3E");relatedUrls["splice"](0,relatedUrls["length"]);thumburl["splice"](0,thumburl["length"]);relatedTitles["splice"](0,relatedTitles["length"]);};
                          //]]></script>
                        <b:loop values='data:post.labels' var='label'>
                          <script expr:src='&quot;/feeds/posts/default/-/&quot; + data:label.name + &quot;?alt=json-in-script&amp;callback=related_results_labels_thumbs&amp;max-results=6&quot;' type='text/javascript'/>
                        </b:loop>
                        <script type='text/javascript'>
                          var defaultnoimage=&quot;http://3.bp.blogspot.com/-PpjfsStySz0/UF91FE7rxfI/AAAAAAAACl8/092MmUHSFQ0/s1600/no_image.jpg&quot;;
                          var maxresults=4;
                          var splittercolor=&quot;#DDDDDD&quot;;
                          var relatedpoststitle=&quot; Related articles &quot;;
                          removeRelatedDuplicates();printRelatedLabels(&#39;<data:post.url/>&#39;);</script>
                      </div>
                      <div class='clear'/>
                    </div>
                  </b:if>
                  <b:if cond='data:blog.pageType == &quot;item&quot;'>
                    <!-- navigation -->
                    <b:include name='nextprev'/>
                  </b:if>
                  <div class='post-footer'>
                    <div class='post-footer-line post-footer-line-1'>
                      <span class='post-icons'>
                        <!-- email post links -->
                        <b:if cond='data:post.emailPostUrl'>
                          <span class='item-action'>
                            <a expr:href='data:post.emailPostUrl' expr:title='data:top.emailPostMsg'>
                              <img alt='' class='icon-action' height='13' src='http://img1.blogblog.com/img/icon18_email.gif' width='18'/>
                            </a>
                          </span>
                        </b:if>
                        <!-- quickedit pencil -->
                        <b:include data='post' name='postQuickEdit'/>
                      </span>
                    </div>
                  </div>
                </div>
              </b:includable>
              <b:includable id='postQuickEdit' var='post'>
                <b:if cond='data:post.editUrl'>
                  <span expr:class='&quot;item-control &quot; + data:post.adminClass'>
                    <a expr:href='data:post.editUrl' expr:title='data:top.editPostMsg'>
                      <img alt='' class='icon-action' height='18' src='http://img2.blogblog.com/img/icon18_edit_allbkg.gif' width='18'/>
                    </a>
                  </span>
                </b:if>
              </b:includable>
              <b:includable id='shareButtons' var='post'>
                <b:if cond='data:top.showEmailButton'>
                  <a class='goog-inline-block share-button sb-email' expr:href='data:post.sharePostUrl + &quot;&amp;target=email&quot;' expr:title='data:top.emailThisMsg' target='_blank'>
                    <span class='share-button-link-text'>
                      <data:top.emailThisMsg/>
                    </span>
                  </a>
                </b:if>
                <b:if cond='data:top.showBlogThisButton'>
                  <a class='goog-inline-block share-button sb-blog' expr:href='data:post.sharePostUrl + &quot;&amp;target=blog&quot;' expr:onclick='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=270,width=475\&quot;); return false;&quot;' expr:title='data:top.blogThisMsg' target='_blank'>
                    <span class='share-button-link-text'>
                      <data:top.blogThisMsg/>
                    </span>
                  </a>
                </b:if>
                <b:if cond='data:top.showTwitterButton'>
                  <a class='goog-inline-block share-button sb-twitter' expr:href='data:post.sharePostUrl + &quot;&amp;target=twitter&quot;' expr:title='data:top.shareToTwitterMsg' target='_blank'>
                    <span class='share-button-link-text'>
                      <data:top.shareToTwitterMsg/>
                    </span>
                  </a>
                </b:if>
                <b:if cond='data:top.showFacebookButton'>
                  <a class='goog-inline-block share-button sb-facebook' expr:href='data:post.sharePostUrl + &quot;&amp;target=facebook&quot;' expr:onclick='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=430,width=640\&quot;); return false;&quot;' expr:title='data:top.shareToFacebookMsg' target='_blank'>
                    <span class='share-button-link-text'>
                      <data:top.shareToFacebookMsg/>
                    </span>
                  </a>
                </b:if>
                <b:if cond='data:top.showOrkutButton'>
                  <a class='goog-inline-block share-button sb-orkut' expr:href='data:post.sharePostUrl + &quot;&amp;target=orkut&quot;' expr:title='data:top.shareToOrkutMsg' target='_blank'>
                    <span class='share-button-link-text'>
                      <data:top.shareToOrkutMsg/>
                    </span>
                  </a>
                </b:if>
                <b:if cond='data:top.showDummy'>
                  <div class='goog-inline-block dummy-container'>
                    <data:post.dummyTag/>
                  </div>
                </b:if>
              </b:includable>
              <b:includable id='status-message'>
                <b:if cond='data:navMessage'>
                  <div class='status-msg-wrap'>
                    <div class='status-msg-body'>
                      <data:navMessage/>
                    </div>
                    <div class='status-msg-border'>
                      <div class='status-msg-bg'>
                        <div class='status-msg-hidden'>
                          <data:navMessage/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style='clear: both;'/>
                </b:if>
              </b:includable>
              <b:includable id='threaded-comment-form' var='post'>
                <div class='comment-form'>
                  <a name='comment-form'/>
                  <b:if cond='data:mobile'>
                    <p>
                      <data:blogCommentMessage/>
                    </p>
                    <data:blogTeamBlogMessage/>
                    <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
                    <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='410' id='comment-editor' name='comment-editor' src='' style='display: none' width='100%'/>
                    <b:else/>
                    <p>
                      <data:blogCommentMessage/>
                    </p>
                    <data:blogTeamBlogMessage/>
                    <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
                    <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='410' id='comment-editor' name='comment-editor' src='' width='100%'/>
                  </b:if>
                  <data:post.friendConnectJs/>
                  <data:post.cmtfpIframe/>
                  <script type='text/javascript'>
                    BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;, &#39;<data:post.communityId/>&#39;);
                  </script>
                </div>
              </b:includable>
              <b:includable id='threaded_comment_js' var='post'>
                <script async='async' expr:src='data:post.commentSrc' type='text/javascript'/>
                <script type='text/javascript'>
                  (function() {
                    var items = <data:post.commentJso/>;
                    var msgs = <data:post.commentMsgs/>;
                    var config = <data:post.commentConfig/>;
                    // <![CDATA[
                    var cursor = null;
                    if (items && items.length > 0) {
                      cursor = parseInt(items[items.length - 1].timestamp) + 1;
                    }
                    var bodyFromEntry = function(entry) {
                      if (entry.gd$extendedProperty) {
                        for (var k in entry.gd$extendedProperty) {
                          if (entry.gd$extendedProperty[k].name == 'blogger.contentRemoved') {
                            return '<span class="deleted-comment">' + entry.content.$t + '</span>';
                          }
                        }
                      }
                      return entry.content.$t;
                    }
                    var parse = function(data) {
                      cursor = null;
                      var comments = [];
                      if (data && data.feed && data.feed.entry) {
                        for (var i = 0, entry; entry = data.feed.entry[i]; i++) {
                          var comment = {};
                          // comment ID, parsed out of the original id format
                          var id = /blog-(\d+).post-(\d+)/.exec(entry.id.$t);
                          comment.id = id ? id[2] : null;
                          comment.body = bodyFromEntry(entry);
                          comment.timestamp = Date.parse(entry.published.$t) + '';
                          if (entry.author && entry.author.constructor === Array) {
                            var auth = entry.author[0];
                            if (auth) {
                              comment.author = {
                                name: (auth.name ? auth.name.$t : undefined),
                                profileUrl: (auth.uri ? auth.uri.$t : undefined),
                                avatarUrl: (auth.gd$image ? auth.gd$image.src : undefined)
                              };
                            }
                          }
                          if (entry.link) {
                            if (entry.link[2]) {
                              comment.link = comment.permalink = entry.link[2].href;
                            }
                            if (entry.link[3]) {
                              var pid = /.*comments\/default\/(\d+)\?.*/.exec(entry.link[3].href);
                              if (pid && pid[1]) {
                                comment.parentId = pid[1];
                              }
                            }
                          }
                          comment.deleteclass = 'item-control blog-admin';
                          if (entry.gd$extendedProperty) {
                            for (var k in entry.gd$extendedProperty) {
                              if (entry.gd$extendedProperty[k].name == 'blogger.itemClass') {
                                comment.deleteclass += ' ' + entry.gd$extendedProperty[k].value;
                              } else if (entry.gd$extendedProperty[k].name == 'blogger.displayTime') {
                                comment.displayTime = entry.gd$extendedProperty[k].value;
                              }
                            }
                          }
                          comments.push(comment);
                        }
                      }
                      return comments;
                    };
                    var paginator = function(callback) {
                      if (hasMore()) {
                        var url = config.feed + '?alt=json&v=2&orderby=published&reverse=false&max-results=50';
                        if (cursor) {
                          url += '&published-min=' + new Date(cursor).toISOString();
                        }
                        window.bloggercomments = function(data) {
                          var parsed = parse(data);
                          cursor = parsed.length < 50 ? null
                          : parseInt(parsed[parsed.length - 1].timestamp) + 1
                          callback(parsed);
                          window.bloggercomments = null;
                        }
                        url += '&callback=bloggercomments';
                        var script = document.createElement('script');
                        script.type = 'text/javascript';
                        script.src = url;
                        document.getElementsByTagName('head')[0].appendChild(script);
                      }
                    };
                    var hasMore = function() {
                      return !!cursor;
                    };
                    var getMeta = function(key, comment) {
                      if ('iswriter' == key) {
                        var matches = !!comment.author
                        && comment.author.name == config.authorName
                        && comment.author.profileUrl == config.authorUrl;
                        return matches ? 'true' : '';
                      } else if ('deletelink' == key) {
                        return config.baseUri + '/delete-comment.g?blogID='
                        + config.blogId + '&postID=' + comment.id;
                      } else if ('deleteclass' == key) {
                        return comment.deleteclass;
                      }
                      return '';
                    };
                    var replybox = null;
                    var replyUrlParts = null;
                    var replyParent = undefined;
                    var onReply = function(commentId, domId) {
                      if (replybox == null) {
                        // lazily cache replybox, and adjust to suit this style:
                        replybox = document.getElementById('comment-editor');
                        if (replybox != null) {
                          replybox.height = '250px';
                          replybox.style.display = 'block';
                          replyUrlParts = replybox.src.split('#');
                        }
                      }
                      if (replybox && (commentId !== replyParent)) {
                        document.getElementById(domId).insertBefore(replybox, null);
                        replybox.src = replyUrlParts[0]
                        + (commentId ? '&parentID=' + commentId : '')
                        + '#' + replyUrlParts[1];
                        replyParent = commentId;
                      }
                    };
                    var hash = (window.location.hash || '#').substring(1);
                    var startThread, targetComment;
                    if (/^comment-form_/.test(hash)) {
                      startThread = hash.substring('comment-form_'.length);
                    } else if (/^c[0-9]+$/.test(hash)) {
                      targetComment = hash.substring(1);
                    }
                    // Configure commenting API:
                    var configJso = {
                      'maxDepth': config.maxThreadDepth
                    };
                    var provider = {
                      'id': config.postId,
                      'data': items,
                      'loadNext': paginator,
                      'hasMore': hasMore,
                      'getMeta': getMeta,
                      'onReply': onReply,
                      'rendered': true,
                      'initComment': targetComment,
                      'initReplyThread': startThread,
                      'config': configJso,
                      'messages': msgs
                    };
                    var render = function() {
                      if (window.goog && window.goog.comments) {
                        var holder = document.getElementById('comment-holder');
                        window.goog.comments.render(holder, provider);
                      }
                    };
                    // render now, or queue to render when library loads:
                    if (window.goog && window.goog.comments) {
                      render();
                    } else {
                      window.goog = window.goog || {};
                      window.goog.comments = window.goog.comments || {};
                      window.goog.comments.loadQueue = window.goog.comments.loadQueue || [];
                      window.goog.comments.loadQueue.push(render);
                    }
                  })();
                  // ]]>
                </script>
              </b:includable>
              <b:includable id='threaded_comments' var='post'>
                <div class='comments' id='comments'>
                  <a name='comments'/>
                  <h4>
                    <data:post.commentLabelFull/>
                    :
                  </h4>
                  <div class='comments-content'>
                    <b:if cond='data:post.embedCommentForm'>
                      <b:include data='post' name='threaded_comment_js'/>
                    </b:if>
                    <div id='comment-holder'>
                      <data:post.commentHtml/>
                    </div>
                  </div>
                  <p class='comment-footer'>
                    <b:if cond='data:post.allowNewComments'>
                      <b:include data='post' name='threaded-comment-form'/>
                      <b:else/>
                      <data:post.noNewCommentsText/>
                    </b:if>
                  </p>
                  <b:if cond='data:showCmtPopup'>
                    <div id='comment-popup'>
                      <iframe allowtransparency='true' frameborder='0' id='comment-actions' name='comment-actions' scrolling='no'>
                      </iframe>
                    </div>
                  </b:if>
                  <div id='backlinks-container'>
                    <div expr:id='data:widget.instanceId + &quot;_backlinks-container&quot;'>
                      <b:if cond='data:post.showBacklinks'>
                        <b:include data='post' name='backlinks'/>
                      </b:if>
                    </div>
                  </div>
                </div>
              </b:includable>
            </b:widget>
          </b:section>
          <!-- END Loop --> 
        </div>
        <!-- END Content --> 
        <div class='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
          <div class='sidebox'>
            <b:section class='sidebar' id='sidebar' preferred='yes'>
              <b:widget id='HTML3' locked='false' title='Search this website' type='HTML' version='1'>
                <b:widget-settings>
                  <b:widget-setting name='content'>&lt;form method=&quot;get&quot; class=&quot;search-form&quot; action=&quot;/search&quot; role=&quot;search&quot;&gt;
&lt;div class=&quot;form-group&quot;&gt;
&lt;input type=&quot;search&quot; name=&quot;q&quot; placeholder=&quot;Search this website&#8230;&quot; class=&quot;form-control&quot; /&gt;
&lt;/div&gt;
&lt;/form&gt;</b:widget-setting>
                </b:widget-settings>
                <b:includable id='main'>
                  <!-- only display title if it's non-empty -->
                  <b:if cond='data:title != &quot;&quot;'>
                    <h2 class='title'>
                      <data:title/>
                    </h2>
                  </b:if>
                  <div class='widget-content'>
                    <data:content/>
                  </div>
                  <b:include name='quickedit'/>
                </b:includable>
              </b:widget>
              <b:widget id='PopularPosts2' locked='false' title='Popular Posts' type='PopularPosts' version='1'>
                <b:widget-settings>
                  <b:widget-setting name='numItemsToShow'>10</b:widget-setting>
                  <b:widget-setting name='showThumbnails'>true</b:widget-setting>
                  <b:widget-setting name='showSnippets'>true</b:widget-setting>
                  <b:widget-setting name='timeRange'>LAST_YEAR</b:widget-setting>
                </b:widget-settings>
                <b:includable id='main'>
                  <b:if cond='data:title'>
                    <h2>
                      <data:title/>
                    </h2>
                  </b:if>
                  <div class='widget-content popular-posts'>
                    <ul>
                      <b:loop values='data:posts' var='post'>
                        <li>
                          <b:if cond='data:showThumbnails == &quot;false&quot;'>
                            <b:if cond='data:showSnippets == &quot;false&quot;'>
                              <!-- (1) No snippet/thumbnail -->
                              <a expr:href='data:post.href'>
                                <data:post.title/>
                              </a>
                              <b:else/>
                              <!-- (2) Show only snippets -->
                              <div class='item-title'>
                                <a expr:href='data:post.href'>
                                  <data:post.title/>
                                </a>
                              </div>
                              <div class='item-snippet'>
                                <data:post.snippet/>
                              </div>
                            </b:if>
                            <b:else/>
                            <b:if cond='data:showSnippets == &quot;false&quot;'>
                              <!-- (3) Show only thumbnails -->
                              <div class='item-thumbnail-only'>
                                <b:if cond='data:post.thumbnail'>
                                  <div class='item-thumbnail'>
                                    <a expr:href='data:post.href' target='_blank'>
                                      <img alt='' border='0' expr:height='data:thumbnailSize' expr:src='data:post.thumbnail' expr:width='data:thumbnailSize'/>
                                    </a>
                                  </div>
                                </b:if>
                                <div class='item-title'>
                                  <a expr:href='data:post.href'>
                                    <data:post.title/>
                                  </a>
                                </div>
                              </div>
                              <div style='clear: both;'/>
                              <b:else/>
                              <!-- (4) Show snippets and thumbnails -->
                              <div class='item-content'>
                                <b:if cond='data:post.thumbnail'>
                                  <div class='item-thumbnail'>
                                    <a expr:href='data:post.href' target='_blank'>
                                      <img alt='' border='0' expr:height='data:thumbnailSize' expr:src='data:post.thumbnail' expr:width='data:thumbnailSize'/>
                                    </a>
                                  </div>
                                </b:if>
                                <div class='item-title'>
                                  <a expr:href='data:post.href'>
                                    <data:post.title/>
                                  </a>
                                </div>
                                <div class='item-snippet'>
                                  <data:post.snippet/>
                                </div>
                              </div>
                              <div style='clear: both;'/>
                            </b:if>
                          </b:if>
                        </li>
                      </b:loop>
                    </ul>
                    <b:include name='quickedit'/>
                  </div>
                </b:includable>
              </b:widget>
              <b:widget id='HTML4' locked='false' title='Facebook page' type='HTML'>
                <b:widget-settings>
                  <b:widget-setting name='content'><![CDATA[<div class="fb-page" data-href="https://www.facebook.com/Blog-Bird-122680405111188/" data-width="350" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/Blog-Bird-122680405111188/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Blog-Bird-122680405111188/">Blog Bird</a></blockquote></div>]]></b:widget-setting>
                </b:widget-settings>
                <b:includable id='main'>
  <!-- only display title if it's non-empty -->
  <b:if cond='data:title != &quot;&quot;'>
    <h2 class='title'><data:title/></h2>
  </b:if>
  <div class='widget-content'>
    <data:content/>
  </div>

  <b:include name='quickedit'/>
</b:includable>
              </b:widget>
              <b:widget id='HTML1' locked='false' title='Google +' type='HTML'>
                <b:widget-settings>
                  <b:widget-setting name='content'>&lt;!-- Place this tag in your head or just before your close body tag. --&gt;
&lt;script src=&quot;https://apis.google.com/js/platform.js&quot; async defer&gt;&lt;/script&gt;

&lt;!-- Place this tag where you want the widget to render. --&gt;
&lt;div class=&quot;g-person&quot; data-width=&quot;340&quot; data-href=&quot;//plus.google.com/u/0/111818492561788636734&quot; data-rel=&quot;author&quot;&gt;&lt;/div&gt;</b:widget-setting>
                </b:widget-settings>
                <b:includable id='main'>
  <!-- only display title if it's non-empty -->
  <b:if cond='data:title != &quot;&quot;'>
    <h2 class='title'><data:title/></h2>
  </b:if>
  <div class='widget-content'>
    <data:content/>
  </div>

  <b:include name='quickedit'/>
</b:includable>
              </b:widget>
              <b:widget id='Navbar1' locked='true' title='Navbar' type='Navbar' version='1'>
                <b:includable id='main'>&lt;script type=&quot;text/javascript&quot;&gt;
    function setAttributeOnload(object, attribute, val) {
      if(window.addEventListener) {
        window.addEventListener(&#39;load&#39;,
          function(){ object[attribute] = val; }, false);
      } else {
        window.attachEvent(&#39;onload&#39;, function(){ object[attribute] = val; });
      }
    }
  &lt;/script&gt;
&lt;div id=&quot;navbar-iframe-container&quot;&gt;&lt;/div&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;https://apis.google.com/js/plusone.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
      gapi.load(&quot;gapi.iframes:gapi.iframes.style.bubble&quot;, function() {
        if (gapi.iframes &amp;&amp; gapi.iframes.getContext) {
          gapi.iframes.getContext().openChild({
              url: &#39;https://www.blogger.com/navbar.g?targetBlogID\x3d7879810875168389707\x26blogName\x3dBlog+Fowl\x26publishMode\x3dPUBLISH_MODE_BLOGSPOT\x26navbarType\x3dLIGHT\x26layoutType\x3dLAYOUTS\x26searchRoot\x3dhttps://blogfowl.blogspot.com/search\x26blogLocale\x3den_GB\x26v\x3d2\x26homepageUrl\x3dhttps://blogfowl.blogspot.com/\x26vt\x3d7565224888936364657&#39;,
              where: document.getElementById(&quot;navbar-iframe-container&quot;),
              id: &quot;navbar-iframe&quot;
          });
        }
      });
    &lt;/script&gt;&lt;script type=&quot;text/javascript&quot;&gt;
(function() {
var script = document.createElement(&#39;script&#39;);
script.type = &#39;text/javascript&#39;;
script.src = &#39;//pagead2.googlesyndication.com/pagead/js/google_top_exp.js&#39;;
var head = document.getElementsByTagName(&#39;head&#39;)[0];
if (head) {
head.appendChild(script);
}})();
&lt;/script&gt;
</b:includable>
              </b:widget>
              <b:widget id='AdSense1' locked='false' title='' type='AdSense'>
                <b:includable id='main'>
  <div class='widget-content'>
    <data:adCode/>
    <b:include name='quickedit'/>
  </div>
</b:includable>
              </b:widget>
              <b:widget id='AdSense2' locked='false' title='' type='AdSense'>
                <b:includable id='main'>
  <div class='widget-content'>
    <data:adCode/>
    <b:include name='quickedit'/>
  </div>
</b:includable>
              </b:widget>
            </b:section>
          </div>
        </div>
        <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 footer-top'>
          <div class='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
            <b:section class='footer1' id='footer1' preferred='yes'>
              <b:widget id='Label1' locked='false' title='Labels' type='Label' version='1'>
                <b:widget-settings>
                  <b:widget-setting name='sorting'>ALPHA</b:widget-setting>
                  <b:widget-setting name='display'>LIST</b:widget-setting>
                  <b:widget-setting name='selectedLabelsList'/>
                  <b:widget-setting name='showType'>ALL</b:widget-setting>
                  <b:widget-setting name='showFreqNumbers'>false</b:widget-setting>
                </b:widget-settings>
                <b:includable id='main'>
                  <b:if cond='data:title'>
                    <h2>
                      <data:title/>
                    </h2>
                  </b:if>
                  <div expr:class='&quot;widget-content &quot; + data:display + &quot;-label-widget-content&quot;'>
                    <b:if cond='data:display == &quot;list&quot;'>
                      <ul>
                        <b:loop values='data:labels' var='label'>
                          <li>
                            <b:if cond='data:blog.url == data:label.url'>
                              <span expr:dir='data:blog.languageDirection'>
                                <data:label.name/>
                              </span>
                              <b:else/>
                              <a expr:dir='data:blog.languageDirection' expr:href='data:label.url'>
                                <data:label.name/>
                              </a>
                            </b:if>
                            <b:if cond='data:showFreqNumbers'>
                              <span dir='ltr'>
                                (
                                <data:label.count/>
                                )
                              </span>
                            </b:if>
                          </li>
                        </b:loop>
                      </ul>
                      <b:else/>
                      <b:loop values='data:labels' var='label'>
                        <span expr:class='&quot;label-size label-size-&quot; + data:label.cssSize'>
                          <b:if cond='data:blog.url == data:label.url'>
                            <span expr:dir='data:blog.languageDirection'>
                              <data:label.name/>
                            </span>
                            <b:else/>
                            <a expr:dir='data:blog.languageDirection' expr:href='data:label.url'>
                              <data:label.name/>
                            </a>
                          </b:if>
                          <b:if cond='data:showFreqNumbers'>
                            <span class='label-count' dir='ltr'>
                              (
                              <data:label.count/>
                              )
                            </span>
                          </b:if>
                        </span>
                      </b:loop>
                    </b:if>
                    <b:include name='quickedit'/>
                  </div>
                </b:includable>
              </b:widget>
            </b:section>
          </div>
          <div class='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
            <b:section class='footer2' id='footer2' preferred='yes'>
              <b:widget id='PopularPosts1' locked='false' title='Popular Posts' type='PopularPosts' version='1'>
                <b:widget-settings>
                  <b:widget-setting name='numItemsToShow'>3</b:widget-setting>
                  <b:widget-setting name='showThumbnails'>true</b:widget-setting>
                  <b:widget-setting name='showSnippets'>true</b:widget-setting>
                  <b:widget-setting name='timeRange'>LAST_YEAR</b:widget-setting>
                </b:widget-settings>
                <b:includable id='main'>
                  <b:if cond='data:title'>
                    <h2>
                      <data:title/>
                    </h2>
                  </b:if>
                  <div class='widget-content popular-posts'>
                    <ul>
                      <b:loop values='data:posts' var='post'>
                        <li>
                          <b:if cond='data:showThumbnails == &quot;false&quot;'>
                            <b:if cond='data:showSnippets == &quot;false&quot;'>
                              <!-- (1) No snippet/thumbnail -->
                              <a expr:href='data:post.href'>
                                <data:post.title/>
                              </a>
                              <b:else/>
                              <!-- (2) Show only snippets -->
                              <div class='item-title'>
                                <a expr:href='data:post.href'>
                                  <data:post.title/>
                                </a>
                              </div>
                              <div class='item-snippet'>
                                <data:post.snippet/>
                              </div>
                            </b:if>
                            <b:else/>
                            <b:if cond='data:showSnippets == &quot;false&quot;'>
                              <!-- (3) Show only thumbnails -->
                              <div class='item-thumbnail-only'>
                                <b:if cond='data:post.thumbnail'>
                                  <div class='item-thumbnail'>
                                    <a expr:href='data:post.href' target='_blank'>
                                      <img alt='' border='0' expr:height='data:thumbnailSize' expr:src='data:post.thumbnail' expr:width='data:thumbnailSize'/>
                                    </a>
                                  </div>
                                </b:if>
                                <div class='item-title'>
                                  <a expr:href='data:post.href'>
                                    <data:post.title/>
                                  </a>
                                </div>
                              </div>
                              <div style='clear: both;'/>
                              <b:else/>
                              <!-- (4) Show snippets and thumbnails -->
                              <div class='item-content'>
                                <b:if cond='data:post.thumbnail'>
                                  <div class='item-thumbnail'>
                                    <a expr:href='data:post.href' target='_blank'>
                                      <img alt='' border='0' expr:height='data:thumbnailSize' expr:src='data:post.thumbnail' expr:width='data:thumbnailSize'/>
                                    </a>
                                  </div>
                                </b:if>
                                <div class='item-title'>
                                  <a expr:href='data:post.href'>
                                    <data:post.title/>
                                  </a>
                                </div>
                                <div class='item-snippet'>
                                  <data:post.snippet/>
                                </div>
                              </div>
                              <div style='clear: both;'/>
                            </b:if>
                          </b:if>
                        </li>
                      </b:loop>
                    </ul>
                    <b:include name='quickedit'/>
                  </div>
                </b:includable>
              </b:widget>
            </b:section>
          </div>
          <div class='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
            <b:section class='footer3' id='footer3' preferred='yes'>
              <b:widget id='Image1' locked='false' title='' type='Image'>
                <b:widget-settings>
                  <b:widget-setting name='displayUrl'>http://2.bp.blogspot.com/-b2tH-uhyM3Q/Wfq8T-0Ki-I/AAAAAAAAAJE/FO_Q5aPVOdQVvvBv1HKl-_Uh-fUd7Wv5ACK4BGAYYCw/s1600/bird_dribbble%2Bcopy.png</b:widget-setting>
                  <b:widget-setting name='displayHeight'>124</b:widget-setting>
                  <b:widget-setting name='sectionWidth'>790</b:widget-setting>
                  <b:widget-setting name='shrinkToFit'>false</b:widget-setting>
                  <b:widget-setting name='displayWidth'>300</b:widget-setting>
                  <b:widget-setting name='link'/>
                  <b:widget-setting name='caption'/>
                </b:widget-settings>
                <b:includable id='main'>
    <b:if cond='data:title != &quot;&quot;'>
      <h2><data:title/></h2>
    </b:if>
    <div class='widget-content'>
      <b:tag cond='data:link' expr:href='data:link' name='a'>
        <img expr:alt='data:title' expr:height='data:height' expr:id='data:widget.instanceId + &quot;_img&quot;' expr:src='data:sourceUrl' expr:width='data:width'/>
      </b:tag>
      <br/>
      <b:if cond='data:caption'>
        <span class='caption'><data:caption/></span>
      </b:if>
    </div>
    <b:include name='quickedit'/>
  </b:includable>
              </b:widget>
              <b:widget id='ContactForm1' locked='false' title='Contact Form' type='ContactForm'>
                <b:includable id='main'>
  <b:if cond='data:title != &quot;&quot;'>
    <h2 class='title'><data:title/></h2>
  </b:if>
  <div class='contact-form-widget'>
    <div class='form'>
      <form name='contact-form'>
        <p/>
        <data:contactFormNameMsg/>
        <br/>
        <input class='contact-form-name' expr:id='data:widget.instanceId + &quot;_contact-form-name&quot;' name='name' size='30' type='text' value=''/>
        <p/>
        <data:contactFormEmailMsg/> <span style='font-weight: bolder;'>*</span>
        <br/>
        <input class='contact-form-email' expr:id='data:widget.instanceId + &quot;_contact-form-email&quot;' name='email' size='30' type='text' value=''/>
        <p/>
        <data:contactFormMessageMsg/> <span style='font-weight: bolder;'>*</span>
        <br/>
        <textarea class='contact-form-email-message' cols='25' expr:id='data:widget.instanceId + &quot;_contact-form-email-message&quot;' name='email-message' rows='5'/>
        <p/>
        <input class='contact-form-button contact-form-button-submit' expr:id='data:widget.instanceId + &quot;_contact-form-submit&quot;' expr:value='data:contactFormSendMsg' type='button'/>
        <p/>
        <div style='text-align: center; max-width: 222px; width: 100%'>
          <p class='contact-form-error-message' expr:id='data:widget.instanceId + &quot;_contact-form-error-message&quot;'/>
          <p class='contact-form-success-message' expr:id='data:widget.instanceId + &quot;_contact-form-success-message&quot;'/>
        </div>
      </form>
    </div>
  </div>
  <b:include name='quickedit'/>
</b:includable>
              </b:widget>
            </b:section>
          </div>
        </div>
      </div>
    </div>
    <!-- END Container --> 
    <div id='footer'>
      <script src='http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js?ver=1.7.2' type='text/javascript'/>
      <script src='http://netdna.bootstrapcdn.com/bootstrap/3.0.0-wip/js/bootstrap.min.js'/>
      <p class='footer-link'>
        &#169; 
        <a expr:href='data:blog.homepageUrl'>
          <strong>
            <data:blog.title/>
          </strong>
        </a>
        2014 . Powered by
        <a href='https://weblyb.com/' title='WebLyb'>
          WebLyb
        </a>
      </p>
    </div>
    <!-- END Footer -->
    <div id='fb-root'/>
    <script>
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = &quot;//connect.facebook.net/en_US/all.js#xfbml=1&quot;;
        fjs.parentNode.insertBefore(js, fjs);
      }(document, &#39;script&#39;, &#39;facebook-jssdk&#39;));</script>
    <script>
      !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=&quot;//platform.twitter.com/widgets.js&quot;;fjs.parentNode.insertBefore(js,fjs);}}(document,&quot;script&quot;,&quot;twitter-wjs&quot;);</script>
  </body>
</html>
