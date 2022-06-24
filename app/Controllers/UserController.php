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
            if ($users->save($this->request->getPost()) == false) {
                $defaultView['errors'] = $users->errors();
                $defaultView['old'] = $this->request->getPost();
            }
        }
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
