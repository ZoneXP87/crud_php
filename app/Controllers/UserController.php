<?php

namespace App\Controllers;
use App\Models\UserModel;

class UserController extends BaseController
{
    public function create()
    {
        $users = new UserModel();
        $defaultView = $this->getDefaultView();
        $defaultView['content'] = 'sections/users/index';
        $defaultView['js'] = ['users'];
        $defaultView['users'] = $users->findAll();
        if ($this->request->getMethod() == "post") {
            echo '<pre>';
            echo 'is post';
            var_dump($this->request->getPost());
        }
        die();
        return $this->loadViewParts($defaultView);
    }

    public function read()
    {
        $users = new UserModel();        
        $defaultView = $this->getDefaultView();
        $defaultView['content'] = 'sections/users/index';
        $defaultView['js'] = ['users'];
        $defaultView['users'] = $users->findAll();
        // List all users
        return $this->loadViewParts($defaultView);
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
