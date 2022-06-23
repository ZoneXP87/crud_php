<!doctype html>
<html lang="en">
  <head>
    <title>Title</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS v5.2.0-beta1 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"  integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">

  </head>
  <body>

  <div class="container">
    <div class="row">
    
    <?php if (isset($users) && count($users) > 0): ?>
        <table class="table table-striped col-8 mt-3">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Teléfono</th>
                    <th scope="col">Edad</th>
                </tr>
            </thead>
      
            <tbody>                
                <?php foreach ($users as $user): ?>
                    <tr>
                        <td><?= (isset($user->id)) ? $user->id : "" ?></td>
                        <td><?= (isset($user->name)) ? $user->name : "" ?></td>
                        <td><?= (isset($user->last_name)) ? $user->last_name : "" ?></td>
                        <td><?= (isset($user->phone)) ? $user->phone : "" ?></td>
                        <td><?= (isset($user->age)) ? $user->age : "" ?></td>
                    </tr>
                <?php endforeach; ?>                
            </tbody>
        </table>
    <?php else: ?>
        <div class="alert alert-success mt-5 text-center" role="alert">
            Sin registros
        </div>
    <?php endif; ?>
    </div>
  </div>
      

    

    <!-- Bootstrap JavaScript Libraries -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js" integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" crossorigin="anonymous"></script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy" crossorigin="anonymous"></script>
  </body>
</html>