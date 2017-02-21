flexible-bootstrap-carousel
===========================

Bootstrap Flexible Bootstrap Carousel plugin

This plugin makes possible showing different numbers of items in your Bootstrap carousel depending on the window width. In fact it creates several columns in each item of a Bootstrap carousel. Then it is watching if the width of a browser window is changing and is adjusting number of columns in each item respectively to window's size (in this version of the plugin - from 1 through 3 columns).

To initiate the plugin you just need to add a .flexible class name to some Bootstrap carousel in your html code 

	<div class="carousel flexible slide" data-ride="carousel" data-interval="5000" data-wrap="true">
		
		//some stuff inside the carousel
		
	</div>

Then you need to create inside of the carousel a container with class name of .items. You also should put the items, which you want to appear in the carousel, into this container (each of them should have class of .item).

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

Container that has class name of .carousel-inner can be empty.

You've done it! Enjoy of your page with built in flexible Bootstrap carousel.