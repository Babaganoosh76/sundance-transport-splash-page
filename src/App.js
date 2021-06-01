// import './App.css';
import React, { useEffect } from 'react'
import $ from 'jquery'

import banner from './media/banner.jpg'
import sunburst from './media/sunburst.png'

import img_svc_1 from './media/service-trucking.jpg'
import img_svc_2 from './media/service-hotshot.jpg'
import img_svc_3 from './media/service-forklift.jpg'

import glp_trailer from './media/glyphicon-trailer.png'
import glp_forklift from './media/glyphicon-forklift.png'

import img_gly_1 from './media/gallery/img_1.jpg'
import img_gly_2 from './media/gallery/img_2.jpg'
import img_gly_3 from './media/gallery/img_3.jpg'
import img_gly_4 from './media/gallery/img_4.jpg'
// import img_gly_5 from './media/gallery/img_5.jpg'
import img_gly_6 from './media/gallery/img_6.jpg'
import img_gly_7 from './media/gallery/img_7.jpg'
import img_gly_8 from './media/gallery/img_8.jpg'
import img_gly_9 from './media/gallery/img_9.jpg'
import img_gly_10 from './media/gallery/img_10.jpg'
import img_gly_11 from './media/gallery/img_11.jpg'
// import img_gly_12 from './media/gallery/img_12.jpg'
import img_gly_13 from './media/gallery/img_13.jpg'

import img_mtt_1 from './media/reb_mil.jpg'
import img_mtt_2 from './media/bry_mil.jpg'

function App() {

	useEffect(function() {
		let rot

		// SPIN
		$(window).scroll( function(){
			rot = $(window).scrollTop()/10
			$('.sunburst').css({"transform": "rotate("+rot+"deg)"})
		});

		// LOAD
		$(window).on('load', function(){
			$('.sunburst').attr("src", sunburst)
		})

		// RESIZE
		$(window).on('load resize', function(){
			$('#desktopNav .spinner').css({"height": $('#desktopNav .spinner').width()/2 +"px"})
		})
	})

	return (
		<div className="App">
			<header class="position-relative" style={{background: `url(${banner}) center/cover`,height:'40vh'}}>
				<div class="d-flex flex-column justify-content-center text-center text-white h-100" style={{background:'rgba(0,0,0,0.5)'}}>
					<h1><span class="b">S</span>undance <span class="b">T</span>ransport, Inc.</h1>
					<p class="lead"><i>&mdash; Established 1995 &mdash;</i></p>
				</div>
			</header>
			
			{/* Desktop Navbar */}
			<div class="desktopNavContainer d-none d-md-block">
				<div id="desktopNav" class="col-sm-3 bg-dark py-3">
					
					<div class="spinner" style={{height: '160px'}}>
						<img src={ sunburst } class="sunburst" style={{transform: 'rotate(0deg)'}} />
					</div>
					<nav class="navbar p-0">
						<ul class="list-unstyled w-100">
							<li class=""><a href="#services">SERVICES</a></li>
							<li class=""><a href="#trucking">TRUCKING</a></li>
							<li class=""><a href="#equipment">EQUIPMENT</a></li>
							<li class=""><a href="#team">MEET THE OWNERS</a></li>
							<li class=""><a href="#contact">CONTACT US</a></li>
						</ul>
					</nav>

					<hr class="mx-auto" style={{background:'#bbb','maxWidth':'200px'}} />

					<p class="lead text-center text-light m-0"><i>Visit our socials!</i></p>
					<ul class="text-center list-unstyled list-social py-3">
						<li><a href="https://www.facebook.com/sundancetransportinc" target="blank" title="Visit Sundance Transport on Facebook"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310" fill="currentColor"><path d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064 c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996	V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545 C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703 c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"/></svg></a></li>
						<li><a href="https://www.linkedin.com/company/sundance-transport-inc" target="blank" title="Visit Sundance Transport on LinkedIn"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310" fill="currentColor"><path d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73 C77.16,101.969,74.922,99.73,72.16,99.73z"/><path d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4 c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"/><path d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599 c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319 c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995 C310,145.43,300.549,94.761,230.454,94.761z"/></svg></a></li>
						<li><a href="https://g.page/sundance-transport?share" target="blank" title="Visit Sundance Transport on Google"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 210" fill="currentColor"><path d="M0,105C0,47.103,47.103,0,105,0c23.383,0,45.515,7.523,64.004,21.756l-24.4,31.696C133.172,44.652,119.477,40,105,40 c-35.841,0-65,29.159-65,65s29.159,65,65,65c28.867,0,53.398-18.913,61.852-45H105V85h105v20c0,57.897-47.103,105-105,105 S0,162.897,0,105z"/></svg></a></li>
						<li><a href="https://www.yelp.com/biz/sundance-transport-el-dorado-hills-3" target="blank" title="Visit Sundance Transport on Yelp"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 98" fill="currentColor"><path d="M42.117,0.022c-6.995,0.42-13.626,2.332-19.86,5.498c-3.151,1.599-3.525,3.392-1.647,6.366 c6.502,10.299,13.004,20.597,19.544,30.872c0.683,1.073,1.498,2.123,2.453,2.95c2.367,2.048,5.353,1.168,6.183-1.833 c0.378-1.372,0.365-2.852,0.484-3.878c-0.823-12.203-1.6-23.979-2.419-35.754C46.624,0.942,45.452-0.178,42.117,0.022z"/><path d="M60.41,55.08c0.344-0.049,0.775-0.072,1.188-0.174c6.864-1.708,13.734-3.396,20.583-5.158 c3.014-0.775,3.979-2.483,2.888-5.407c-2.019-5.402-5.175-10.112-9.399-14.036c-2.274-2.113-4.274-1.875-6.114,0.591 c-4.296,5.758-8.53,11.562-12.795,17.342c-1.034,1.4-1.111,2.883-0.308,4.38C57.271,54.141,58.545,55.028,60.41,55.08z"/><path d="M40.762,58.363c0.09-2.102-0.806-3.545-2.843-4.38c-6.446-2.641-12.896-5.272-19.363-7.863 c-3.274-1.312-5.189-0.451-5.968,3c-0.704,3.118-1.132,11.078-0.424,16.727c0.606,2.796,2.313,3.719,5.021,2.881 c6.81-2.104,13.599-4.274,20.39-6.438C39.69,61.613,40.676,60.354,40.762,58.363z"/><path d="M83.524,70.723c-7.013-2.346-14.021-4.7-21.041-7.022c-1.711-0.566-3.19-0.053-4.328,1.31 c-1.189,1.426-1.708,3.087-0.688,4.759c3.974,6.493,7.999,12.954,12.067,19.388c0.983,1.558,2.55,1.891,4.234,1.086 c0.719-0.342,1.41-0.794,2.008-1.318c3.871-3.393,7.028-7.358,9.358-11.956c0.45-0.892,0.673-1.898,1.001-2.853 C86.036,72.305,85.123,71.258,83.524,70.723z"/><path d="M48.922,72.397c-0.01-2.089-0.826-3.312-2.596-4.016c-1.891-0.75-3.649-0.406-4.964,1.142 c-4.693,5.526-9.372,11.064-14.004,16.641c-1.751,2.11-1.568,4.105,0.696,5.659c4.998,3.427,10.57,5.484,16.606,6.082 c2.706,0.267,4.107-1.187,4.137-3.917c0.041-3.599,0.01-7.197,0.01-10.796c0.041,0,0.081,0,0.12,0 C48.927,79.594,48.941,75.995,48.922,72.397z"/></svg></a></li>
					</ul>

				</div>
			</div>

			{/* Mobile Navbar*/}
			<nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark p-0 d-md-none">
				<div class="container-fluid">
					<a class="navbar-brand" href="/">
						<img src={ sunburst } width="60" height="30" style={{'objectFit':'cover','objectPosition':'top'}}/>
					</a>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#NavbarMobile" aria-controls="NavbarMobile" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="NavbarMobile">
						<div class="navbar-nav">
							<a class="nav-link" href="#services">SERVICES</a>
							<a class="nav-link" href="#trucking">TRUCKING</a>
							<a class="nav-link" href="#equipment">EQUIPMENT</a>
							<a class="nav-link" href="#team">MEET THE OWNERS</a>
							<a class="nav-link" href="#contact">CONTACT US</a>
						</div>
					</div>
				</div>
			</nav>

			<div id="colorBar" style={{'backgroundColor':'#e4742e',height:'4px'}}></div>

			{/*<!-- Services -->*/}
			<section id="services" class="bg-white">
				<div class="container py-5">
					<div class="offset-sm-3 col-sm-9">
						<h2 class="mb-4"><span class="b">O</span>ur <span class="b">S</span>ervices</h2>
						<div class="row">

							<div class="col-md-4">
								<div class="card text-center h-100">
									<img src={ img_svc_1 } class="card-img-top" alt="..." />
									<div class="card-body">
										<h3 class="card-title">TRUCKING</h3>
										<p class="card-text">Our <b>single-point-of-contact</b> strategy ensures adaptability needed to follow contractors’ specifications.</p>
										<a href="#trucking">Learn More</a>
									</div>
								</div>
							</div>

							<div class="col-md-4">
								<div class="card text-center h-100">
									<img src={ img_svc_2 } class="card-img-top" alt="..." />
									<div class="card-body">
										<h3 class="card-title">HOTSHOT LOADS</h3>
										<p class="card-text">Our hotshot trucks can carry smaller loads into <b>hard-to-reach</b> jobsites for a reduced cost.</p>
										<a href="#trucking">Learn More</a>
									</div>
								</div>
							</div>

							<div class="col-md-4">
								<div class="card text-center h-100">
									<img src={ img_svc_3 } class="card-img-top" alt="..." />
									<div class="card-body">
										<h3 class="card-title">FORKLIFTS</h3>
										<p class="card-text">We have piggy-back forklifts to handle <b>jobsite delivery</b>.</p>
										<a href="#trucking">Learn More</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/*<!-- Trucking -->*/}
			<section id="trucking" class="bg-grey">
				<div class="container py-5">
					<div class="offset-sm-3 col-sm-9">
						<h2><span class="b">O</span>ur <span class="b">S</span>pecialties</h2>
						<div class="row text-center">
							<div class="col-sm-4 my-3">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 6v8h7v-2h-5v-6h-2zm10.854 7.683l1.998.159c-.132.854-.351 1.676-.652 2.46l-1.8-.905c.2-.551.353-1.123.454-1.714zm-2.548 7.826l-1.413-1.443c-.486.356-1.006.668-1.555.933l.669 1.899c.821-.377 1.591-.844 2.299-1.389zm1.226-4.309c-.335.546-.719 1.057-1.149 1.528l1.404 1.433c.583-.627 1.099-1.316 1.539-2.058l-1.794-.903zm-20.532-5.2c0 6.627 5.375 12 12.004 12 1.081 0 2.124-.156 3.12-.424l-.665-1.894c-.787.2-1.607.318-2.455.318-5.516 0-10.003-4.486-10.003-10s4.487-10 10.003-10c2.235 0 4.293.744 5.959 1.989l-2.05 2.049 7.015 1.354-1.355-7.013-2.184 2.183c-2.036-1.598-4.595-2.562-7.385-2.562-6.629 0-12.004 5.373-12.004 12zm23.773-2.359h-2.076c.163.661.261 1.344.288 2.047l2.015.161c-.01-.755-.085-1.494-.227-2.208z"/></svg>
								<h3 class="my-3">FLEXIBILITY</h3>
								<p>We can accommodate next day deliveries and adapt to dynamic construction schedule changes.</p>
							</div>
							<div class="col-sm-4 my-3">
								<span id="glyphicon-trailer"><img src={ glp_trailer } height="54" /></span>
								<h3 class="my-3">TRAILERS</h3>
								<p>Our flatbed and drop-deck trailers can deliver all types of materials and equipment.</p>
							</div>
							<div class="col-sm-4 my-3">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 24v-8h-24v8h24zm-22-6h2v2h1v-2h2v3h1v-3h2v2h1v-2h2v2h1v-2h2v3h1v-3h2v2h1v-2h2v4h-20v-4zm14-10h-8v4l-8-6 8-6v4h8v-4l8 6-8 6v-4z"/></svg>
								<h3 class="my-3">WIDE LOADS</h3>
								<p>All of our trucks carry the necessary permits to haul loads up to 12 feet wide.</p>
							</div>
							<div class="col-sm-4 my-3">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.787 7.531c-5.107 2.785-12.72 9.177-15.787 15.469h2.939c.819-2.021 2.522-4.536 3.851-5.902 8.386 3.747 17.21-2.775 17.21-11.343 0-1.535-.302-3.136-.92-4.755-2.347 3.119-5.647 1.052-10.851 1.625-7.657.844-11.162 6.797-8.764 11.54 3.506-3.415 9.523-6.38 12.322-6.634z"/></svg>
								<h3 class="my-3">SUSTAINABILITY</h3>
								<p>All of our trucks are CARB-compliant.</p>
							</div>
							<div class="col-sm-4 my-3">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c2.131 0 4 1.73 4 3.702 0 2.05-1.714 4.941-4 8.561-2.286-3.62-4-6.511-4-8.561 0-1.972 1.869-3.702 4-3.702zm0-2c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm8 12c0 2.209-3.581 4-8 4s-8-1.791-8-4c0-1.602 1.888-2.98 4.608-3.619l1.154 1.824c-.401.068-.806.135-1.178.242-3.312.949-3.453 2.109-.021 3.102 2.088.603 4.777.605 6.874-.001 3.619-1.047 3.164-2.275-.268-3.167-.296-.077-.621-.118-.936-.171l1.156-1.828c2.723.638 4.611 2.016 4.611 3.618z"/></svg>
								<h3 class="my-3">DELIVERY RANGE</h3>
								<p>We service Northern &amp; Central California.</p>
							</div>
							<div class="col-sm-4 my-3">
								<span id="glyphicon-forklift"><img src={ glp_forklift } height="54" /></span>
								<h3 class="my-3">FORKLIFTS</h3>
								<p>We have piggy-back forklifts to handle jobsite delivery.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/*<!-- EQUIPMENT -->*/}
			<section id="equipment" class="bg-white">
				<div class="container py-5">
					<div class="offset-sm-3 col-sm-9">
						<h2><span class="b">O</span>ur <span class="b">E</span>quipment</h2>
						<div class="row g-0">
							
							<div class="col-md-7">
								<div id="Carousel1" class="carousel slide h-100" data-ride="carousel">
									<div class="carousel-inner h-100">
										<div class="carousel-item active"><img src={ img_gly_6 } class="d-block w-100 h-100" alt="..." /></div>
										<div class="carousel-item h-100"><img src={ img_gly_8 } class="d-block w-100 h-100" alt="..." /></div>
										<div class="carousel-item"><img src="media/gallery/img_12.jpg" class="d-block w-100 h-100" alt="..." /></div>
										<div class="carousel-item"><img src="media/gallery/img_5.jpg" class="d-block w-100 h-100" alt="..." /></div>
									</div>
								</div>
							</div>

							<div class="col-md-5"><img src={ img_gly_11 } class="w-100 h-100" alt="..." /></div>

							<div class="col-md-5"><img src={ img_gly_1 } class="w-100 h-100" alt="..." /></div>

							<div class="col-md-3"><img src={ img_gly_4 } class="w-100 h-100" alt="..." /></div>

							<div class="col-md-4"><img src={ img_gly_9 } class="w-100 h-100" alt="..." /></div>

							<div class="col-md-6"><img src={ img_gly_13 } class="w-100 h-100" alt="..." /></div>

							<div class="col-md-6">
								<div id="Carousel2" class="carousel slide h-100" data-ride="carousel">
									<div class="carousel-inner h-100">
										<div class="carousel-item active"><img src={ img_gly_3 } class="d-block w-100 h-100" alt="..." /></div>
										<div class="carousel-item"><img src={ img_gly_10 } class="d-block w-100 h-100" alt="..." /></div>
										<div class="carousel-item"><img src={ img_gly_2 } class="d-block w-100 h-100" alt="..." /></div>
										<div class="carousel-item"><img src={ img_gly_7 } class="d-block w-100 h-100" alt="..." /></div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</section>

			{/*<!-- Meet the Team -->*/}
			<section id="team" class="bg-grey">
				<div class="container py-5">
				
					<div class="offset-sm-3 col-sm-9">
						<h2><span class="b">M</span>eet the <span class="b">O</span>wners</h2>

						<div class="row">
							<div class="col-md-6">
								<div class="card mb-3">
									<div class="row g-0">
										<div class="col-md-4">
											<img src={ img_mtt_1 } class="card-img h-100" style={{'objectFit':'cover'}} />
										</div>
										<div class="col-md-8">
											<div class="card-body">
												<h3 class="card-title">Rebecca Miller</h3>
												<p class="card-text">CEO / Accounting<br/>Office: <a href="tel:19169332870">(916) 933-2870</a><br/>Mobile: <a href="tel:19162755915">(916) 275-5915</a></p>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class="col-md-6">
								<div class="card mb-3">
									<div class="row g-0">
										<div class="col-md-4">
											<img src={ img_mtt_2 } class="card-img h-100" style={{'objectFit':'cover'}} />
										</div>
										<div class="col-md-8">
											<div class="card-body">
												<h3 class="card-title">Bryan Miller</h3>
												<p class="card-text">COO / Dispatcher<br/>Office: <a href="tel:19169332870">(916) 933-2870</a><br/>Mobile: <a href="tel:19168708885">(916) 870-8885</a></p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div id="colorBar" style={{'backgroundColor':'#e4742e',height:'4px'}}></div>

			{/* Contact */}
			<div id="contact" class="bg-white">
				<div class="container py-5">
					<div class="row">

						<div class="col-sm-6 text-center">
							<h2><span class="b">C</span>ontact <span class="b">U</span>s</h2>
							<p><u>Phone Number:</u><br/><a href="tel:19169332870">(916) 933-2870</a></p>
							<p><u>Email Address:</u><br/><a href="mailto:sundancetransportinc@gmail.com">sundancetransportinc@gmail.com</a></p>
							<p><u>Mailing Address:</u><br/>Sundance Transport, Inc.<br/>P.O. Box 5605<br/>El Dorado Hills, CA 95762</p>
						</div>

						<div class="col-sm-6">
							<h2 class="text-center"><span class="b">G</span>et a <span class="b">Q</span>uote</h2>
							<form action="https://formspree.io/sundancetransportinc@gmail.com" method="POST">
								<input type="hidden" name="_subject" value="Sundance Contact Form" />
								<input type="hidden" name="_next" value="https://sundancetransportinc.com" />
								<div class="col-sm-12 form-group pb-3">
									<input class="form-control" type="text" name="name" placeholder="Name" required="" />
								</div>
								<div class="col-sm-12 form-group pb-3">
									<input class="form-control" type="email" name="_replyto" placeholder="Email" required="" />
								</div>
								<div class="col-sm-12 form-group pb-3">
									<textarea class="form-control" name="message" rows="5" placeholder="Your message" required=""></textarea>
								</div>
								<div class="col-sm-12 form-group text-center">
									<input class="btn btn-primary px-4" type="submit" value="Send" />
								</div>
							</form>
						</div>

					</div>
				</div>
			</div>

			{/*<!-- FOOTER -->*/}
			<footer class="bg-dark text-light">
				<div class="container py-5">
					<div class="row">
						<div class="col-12 col-md my-3">
							<img class="mb-2" src={ sunburst } alt="" width="60" height="30" style={{'objectFit':'cover','objectPosition':'top'}} />
							<h6 class="d-block">Sundance Transport, Inc.</h6>
							<small class="d-block text-muted">Copyright &copy; 2020</small>
							<small class="text-muted">Managed by <a href="https://www.linkedin.com/in/amiller5233/" target="_blank" rel="noreferrer" style={{'fontStyle': 'normal'}}>Adam Miller</a></small>
						</div>
						<div class="col-12 col-md my-3">
							<h5>Navigation</h5>
							<ul class="list-unstyled text-small">
								<li><a class="text-muted" href="#services">SERVICES</a></li>
								<li><a class="text-muted" href="#trucking">TRUCKING</a></li>
								<li><a class="text-muted" href="#equipment">EQUIPMENT</a></li>
								<li><a class="text-muted" href="#team">MEET THE OWNERS</a></li>
							</ul>
						</div>
						<div class="col-12 col-md my-3">
							<h5>Socials</h5>
							<ul class="list-unstyled list-social py-3">
								<li><a href="https://www.facebook.com/sundancetransportinc" target="blank" title="Visit Sundance Transport on Facebook"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310" fill="currentColor"><path d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064 c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996	V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545 C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703 c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"/></svg></a></li>
								<li><a href="https://www.linkedin.com/company/sundance-transport-inc" target="blank" title="Visit Sundance Transport on LinkedIn"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310" fill="currentColor"><path d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73 C77.16,101.969,74.922,99.73,72.16,99.73z"/><path d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4 c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"/><path d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599 c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319 c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995 C310,145.43,300.549,94.761,230.454,94.761z"/></svg></a></li>
								<li><a href="https://g.page/sundance-transport?share" target="blank" title="Visit Sundance Transport on Google"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 210" fill="currentColor"><path d="M0,105C0,47.103,47.103,0,105,0c23.383,0,45.515,7.523,64.004,21.756l-24.4,31.696C133.172,44.652,119.477,40,105,40 c-35.841,0-65,29.159-65,65s29.159,65,65,65c28.867,0,53.398-18.913,61.852-45H105V85h105v20c0,57.897-47.103,105-105,105 S0,162.897,0,105z"/></svg></a></li>
								<li><a href="https://www.yelp.com/biz/sundance-transport-el-dorado-hills-3" target="blank" title="Visit Sundance Transport on Yelp"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 98" fill="currentColor"><path d="M42.117,0.022c-6.995,0.42-13.626,2.332-19.86,5.498c-3.151,1.599-3.525,3.392-1.647,6.366 c6.502,10.299,13.004,20.597,19.544,30.872c0.683,1.073,1.498,2.123,2.453,2.95c2.367,2.048,5.353,1.168,6.183-1.833 c0.378-1.372,0.365-2.852,0.484-3.878c-0.823-12.203-1.6-23.979-2.419-35.754C46.624,0.942,45.452-0.178,42.117,0.022z"/><path d="M60.41,55.08c0.344-0.049,0.775-0.072,1.188-0.174c6.864-1.708,13.734-3.396,20.583-5.158 c3.014-0.775,3.979-2.483,2.888-5.407c-2.019-5.402-5.175-10.112-9.399-14.036c-2.274-2.113-4.274-1.875-6.114,0.591 c-4.296,5.758-8.53,11.562-12.795,17.342c-1.034,1.4-1.111,2.883-0.308,4.38C57.271,54.141,58.545,55.028,60.41,55.08z"/><path d="M40.762,58.363c0.09-2.102-0.806-3.545-2.843-4.38c-6.446-2.641-12.896-5.272-19.363-7.863 c-3.274-1.312-5.189-0.451-5.968,3c-0.704,3.118-1.132,11.078-0.424,16.727c0.606,2.796,2.313,3.719,5.021,2.881 c6.81-2.104,13.599-4.274,20.39-6.438C39.69,61.613,40.676,60.354,40.762,58.363z"/><path d="M83.524,70.723c-7.013-2.346-14.021-4.7-21.041-7.022c-1.711-0.566-3.19-0.053-4.328,1.31 c-1.189,1.426-1.708,3.087-0.688,4.759c3.974,6.493,7.999,12.954,12.067,19.388c0.983,1.558,2.55,1.891,4.234,1.086 c0.719-0.342,1.41-0.794,2.008-1.318c3.871-3.393,7.028-7.358,9.358-11.956c0.45-0.892,0.673-1.898,1.001-2.853 C86.036,72.305,85.123,71.258,83.524,70.723z"/><path d="M48.922,72.397c-0.01-2.089-0.826-3.312-2.596-4.016c-1.891-0.75-3.649-0.406-4.964,1.142 c-4.693,5.526-9.372,11.064-14.004,16.641c-1.751,2.11-1.568,4.105,0.696,5.659c4.998,3.427,10.57,5.484,16.606,6.082 c2.706,0.267,4.107-1.187,4.137-3.917c0.041-3.599,0.01-7.197,0.01-10.796c0.041,0,0.081,0,0.12,0 C48.927,79.594,48.941,75.995,48.922,72.397z"/></svg></a></li>
							</ul>
						</div>
					</div>
				</div>
			</footer>

		</div>
	);
}

export default App;
