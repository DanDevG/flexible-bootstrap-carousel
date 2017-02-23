#flexible-bootstrap-carousel

Flexible Bootstrap Carousel plugin

##Introducing
This plugin makes possible showing different numbers of items in your Bootstrap carousel depending on the browser's window width. In fact it creates several columns in each item of a Bootstrap carousel. Then it is watching if the width of a browser window is changing and is adjusting number of columns in each item respectively to window's size (in this version of the plugin - from 1 through 3 columns).

##Dependencies

```html
<link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<script type="text/javascript" src="js/bootstrap.js"></script>
```

##Installing
You can download flexible-bootstrap-carousel.js and flexible-bootstrap-carousel.css manually to you project or you can install with npm:

```shall

npm install flexible-bootstrap-carousel

```

or bower:

```shall

bower install flexible-bootstrap-carousel

```

##Usage

First of all, you'll want to link the flexible-bootstrap-carousel.js and flexible-bootstrap-carousel.css files to your web-page:

```html
<link rel="stylesheet" type="text/css" href="css/flexible-bootstrap-carousel.css" />
<script type="text/javascript" src="js/flexible-bootstrap-carousel.js"></script>
```

Instead of linking the flexible-bootstrap-carousel.css file to your web-page you can include in your main style sheet the next css rule:

```css

.carousel.flexible .items {
	display: none;
}

```

To initiate the plugin you just need to add a *.flexible* class name to some Bootstrap carousel in your html code 

```html
<div class="carousel flexible slide" data-ride="carousel" data-interval="5000" data-wrap="true">
	
	//some stuff inside the carousel
	
</div>
```

Then you need to create inside of the carousel a container with class name of *.items*. You also should put the items, which you want to appear in the carousel, into this container (each of them should have class of *.item*).

```html
<div class="carousel flexible slide" data-ride="carousel" data-interval="5000" data-wrap="true">
	<div class="items">
		<div class="flex-item">
			<img class="img-responsive" src="images/item1.jpg"/>
		</div>
	
		<div class="flex-item">
			<img class="img-responsive" src="images/item2.jpg"/>
		</div>
		
		<div class="flex-item">
			<img class="img-responsive" src="images/item3.jpg"/>
		</div>
		
		<div class="flex-item">
			<img class="img-responsive" src="images/item4.jpg"/>
		</div>
		
		<div class="flex-item">
			<img class="img-responsive" src="images/item5.jpg"/>
		</div>
		
		<div class="flex-item">
			<img class="img-responsive" src="images/item6.jpg"/>
		</div>
	</div>
	
	<div class="carousel-inner" role="listbox">
		
	</div>
	
	<a class="left carousel-control" href="#simple-content-carousel" role="button" data-slide="prev">
		<span class="fa fa-angle-left" aria-hidden="true"></span>
		<span class="sr-only">Previous</span>
	</a>
	<a class="right carousel-control" href="#simple-content-carousel" role="button" data-slide="next">
		<span class="fa fa-angle-right" aria-hidden="true"></span>
		<span class="sr-only">Next</span>
	</a>
	
</div>
```

You can leave empty container with class name of *.carousel-inner*.

You've done it! Enjoy of your page with built in flexible Bootstrap carousel.

##License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/DanDevG/flexible-bootstrap-carousel/blob/master/LICENSE.md) file for details
