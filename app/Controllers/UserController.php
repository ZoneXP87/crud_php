<?php

namespace App\Controllers;
use App\Models\UserModel;

class UserController extends BaseController
{
    public function create()
    {
        if ($this->request->getMethod() == "post")
        {
            
        }
        
        return view("users/create");
    }

    public function read()
    {
        $users = new UserModel();
        
        // List all users
        return view("users/index", array("users" => $users->findAll()));
    }   

    public function update()
    {

    }

    public function delete()
    {

    }

    public function restore()
    {

    }    
}
