    <div class="table-responsive">
		<div class="table-wrapper">
			<div class="table-title">
				<div class="row">
					<div class="col-sm-6">
						<h2>Administrar <b>usuarios</b></h2>
					</div>
					<div class="col-sm-6">
						<button class="btn btn-success" data-toggle="modal" data-target="#addUserModal"><i class="material-icons">&#xE147;</i> <span>Agregar nuevo usuario</span></button>
						<button href="#deleteEmployeeModal" class="btn btn-danger" data-toggle="modal"><i class="material-icons">&#xE15C;</i> <span>Eliminar</span></button>
					</div>
				</div>
			</div>
			<table class="table table-striped table-hover">
				<thead>
					<tr>
						<?php if (isset($users) && count($users) > 0): ?>
						<th>
							<span class="custom-checkbox">
								<input type="checkbox" id="selectAll">
								<label for="selectAll"></label>
							</span>
						</th>
						<?php endif; ?>
						<th scope="col">Id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Teléfono</th>
                        <th scope="col">Edad</th>
						<?php if (isset($users) && count($users) > 0): ?>
                        <th scope="col">Acciones</th>
						<?php endif; ?>
					</tr>
				</thead>
				<tbody>
                    <?php if (isset($users) && count($users) > 0): ?>
                        <?php foreach ($users as $user): ?>
                            <tr>
                                <td>
                                    <span class="custom-checkbox">
                                        <input type="checkbox" id="checkbox1" name="options" value="1">
                                        <label for="checkbox1"></label>
                                    </span>
                                </td>
                                <td><?= (isset($user->id)) ? $user->id : "" ?></td>
                                <td><?= (isset($user->name)) ? $user->name : "" ?></td>
                                <td><?= (isset($user->last_name)) ? $user->last_name : "" ?></td>
                                <td><?= (isset($user->phone)) ? $user->phone : "" ?></td>
                                <td><?= (isset($user->age)) ? $user->age : "" ?></td>
                                <td>
                                    <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                    <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                    <?php else: ?>
                        <tr>
                            <td colspan="5" class="text-center">Sin registros</td>
                        </tr>
                    <?php endif; ?>
				</tbody>
			</table>
			<!-- <div class="clearfix">
				<div class="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
				<ul class="pagination">
					<li class="page-item disabled"><a href="#">Previous</a></li>
					<li class="page-item"><a href="#" class="page-link">1</a></li>
					<li class="page-item"><a href="#" class="page-link">2</a></li>
					<li class="page-item active"><a href="#" class="page-link">3</a></li>
					<li class="page-item"><a href="#" class="page-link">4</a></li>
					<li class="page-item"><a href="#" class="page-link">5</a></li>
					<li class="page-item"><a href="#" class="page-link">Next</a></li>
				</ul>
			</div> -->
		</div>
	</div>

    <!-- Edit Modal HTML -->
<div id="addUserModal" class="modal fade in">
	<div class="modal-dialog">
		<div class="modal-content">
			<form method="post" enctype="multipart/form-data">
                <?= csrf_field() ?>
				<div class="modal-header">						
					<h4 class="modal-title">Agregar nuevo usuario</h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>
				<div class="modal-body">					
					<div class="form-group">
						<label>Nombre</label>
						<input type="text" class="form-control" name="name" required value="<?= isset($old['name']) ? esc($old['name']) : '';?>">
						<?php if (! empty($errors['name'])): ?>
							<div class="alert alert-danger alert-error" role="alert">
								<p><?= $errors['name'] ?></p>
							</div>
						<?php endif ?>
					</div>
					<div class="form-group">
						<label>Apellido</label>
						<input type="text" class="form-control" name="last_name" required value="<?= isset($old['last_name']) ? esc($old['last_name']) : '';?>">
						<?php if (! empty($errors['last_name'])): ?>
							<div class="alert alert-danger alert-error" role="alert">
								<p><?= $errors['last_name'] ?></p>
							</div>
						<?php endif ?>
					</div>
					<div class="form-group">
						<label>Teléfono</label>
						<input type="phone" class="form-control" name="phone" required value="<?= isset($old['phone']) ? esc($old['phone']) : '';?>">
						<?php if (! empty($errors['phone'])): ?>
							<div class="alert alert-danger alert-error" role="alert">
								<p><?= $errors['phone'] ?></p>
							</div>
						<?php endif ?>
					</div>
					<div class="form-group">
						<label>Edad</label>
						<input type="number" class="form-control" name="age" required value="<?= isset($old['age']) ? esc($old['age']) : '';?>" min="12" max="99">
						<?php if (! empty($errors['age'])): ?>
							<div class="alert alert-danger alert-error" role="alert">
								<p><?= $errors['age'] ?></p>
							</div>
						<?php endif ?>
					</div>					
				</div>
				<div class="modal-footer">
					<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancelar">
					<input type="submit" class="btn btn-success" value="Agregar">
				</div>
			</form>
		</div>
	</div>
</div>