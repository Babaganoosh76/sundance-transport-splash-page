<script>
	import "../scss/style.scss";
	const currentYear = (new Date().getFullYear());
</script>

<nav class="navbar bg-dark border-bottom border-body navbar-expand-lg py-0" data-bs-theme="dark">
	<div class="container">
		<a class="navbar-brand py-0" href="#">
			<img src="sunburst-half.png" class="mt-3" alt="Sundance Transport Logo" width="120" height="60">
		</a>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav flex-grow-1 justify-content-center mb-2 mb-lg-0">
				<li class="nav-item">
					<a class="nav-link active" aria-current="page" href="#">Home</a>
				</li>
				
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Services
					</a>
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="#">Action</a></li>
						<li><a class="dropdown-item" href="#">Another action</a></li>
						<li><hr class="dropdown-divider"></li>
						<li><a class="dropdown-item" href="#">Something else here</a></li>
					</ul>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">About Us</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Contact</a>
				</li>
			</ul>
			<button class="btn btn-primary fw-bold px-4">(916) 933-2870</button>
		</div>
	</div>
</nav>

<slot></slot>

<footer class="bg-dark text-body" data-bs-theme="dark">
	<div class="container py-5">
		<div class="row align-items-center">
			<div class="col-md-4">
				<img src="sunburst-half.png" width="60" height="30" class="mb-1">
				<p class="h4 mb-1">Sundance Transport, Inc.</p>
				<p class="small text-body-secondary mb-1">Copyright &copy; { currentYear }</p>
				<p class="small text-body-secondary mb-1">Managed by Adam Miller</p>
			</div>
			<div class="col-md-4">
				<p class="h5">Contact</p>
				<p class="mb-1"><a href="tel:9169332870">(916) 933-2870</a>
				<p class="mb-1"><a href="mailto:sundancetransportinc@gmail.com">sundancetransportinc@gmail.com</a></p>
			</div>
			<div class="col-md-4">
				<p class="h5">Follow us!</p>
				<div class="d-flex">
					<button class="btn btn-link">F</button>
					<button class="btn btn-link">L</button>
					<button class="btn btn-link">Y</button>
				</div>
			</div>
		</div>
	</div>
</footer>