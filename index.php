<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');
$name = $_POST['name'];
$email = $_POST['email'];
$tel = $_POST['tel'];



$users = [
          1=>['user','user@test.com','123']
        ];
        $response = [];
        $status = false;




              foreach ($users as $key => $user) {
                if ($user[0]==$name && $user[1]==$email && $user[2]==$tel) {
                  $status = true;
                  break;
                }
              }

          if ($status) {
            $response = ['message'=>$name];
          }elseif (!$status) {
            $response = ['message'=>'no2'];
          }
        


     echo json_encode($response);

?>