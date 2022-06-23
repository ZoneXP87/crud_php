<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<title>Bootstrap CRUD Data Table for Database with Modal Form</title>
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round">
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
		<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" href="assets/css/main.css?v=<?= time() ?>">
	</head>
	<body>
		<?= (isset($navbar) && $navbar == true) ? $this->include('layout/navbar') : '' ?>
		<div class="container">
			<div class="row">
				<?= (isset($content) && !empty($content)) ? $this->include($content) : '' ?>
			</div>
		</div>
		
		<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
		<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>		
		<?php if (isset($js) && count($js) > 0): ?>
			<?php foreach ($js as $script): ?>
				<script src="assets/js/<?= $script ?>.js?v=<?= time() ?>"></script>
			<?php endforeach; ?>
		<?php endif; ?>

	</body>
</html>