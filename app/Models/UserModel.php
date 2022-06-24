<?php

namespace App\Models;

use CodeIgniter\Model;

class UserModel extends Model
{    
    protected $table            = 'users';
    protected $allowedFields = ['name', 'last_name', 'phone', 'age'];
    protected $validationRules = [
        'name'       => 'required|alpha_space|min_length[3]|max_length[46]',
        'last_name'  => 'required|alpha_space|min_length[3]|max_length[46]',
        'phone'      => 'required|numeric|min_length[10]|max_length[10]|is_unique[users.phone]',
        'age'        => 'required|numeric|less_than_equal_to[100]|greater_than_equal_to[12]'
    ];
    protected $validationMessages = [
        'name' => [
            'required'    => 'Es requerido.',
            'alpha_space' => 'Sólo  debe llevar letras y espacios.',
            'min_length'  => 'Debe de ser de al menos 3 caracteres de longitud.',
            'max_length'  => 'Debe de ser de máximo 46 caracteres de longitud.'
        ],
        'last_name' => [
            'required'    => 'Es requerido.',
            'alpha_space' => 'Sólo  debe llevar letras y espacios.',
            'min_length'  => 'Debe de ser de al menos 3 caracteres de longitud.',
            'max_length'  => 'Debe de ser de máximo 46 caracteres de longitud.'
        ],
        'phone' => [
            'required'    => 'Es requerido.',
            'numeric'     => 'Sólo acepta números.',
            'is_unique'   => 'Ya existe.',
            'min_length'  => 'Debe de ser de al menos 10 caracteres de longitud.',
            'max_length'  => 'Debe de ser de máximo 10 caracteres de longitud.'
        ],
        'age' => [
            'required'               => 'Es requerido.',
            'numeric'                => 'Debe de ser un valor numérico.',
            'less_than_equal_to'     => 'No debe de ser mayor a 99.',
            'greater_than_equal_to'  => 'No debe de ser menor a 12'
        ],
    ];
}
