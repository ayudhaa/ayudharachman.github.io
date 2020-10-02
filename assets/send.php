<?php
  require '../vendor/autoload.php';
  use \Mailjet\Resources;
  $mj = new \Mailjet\Client('0aeefd704c6646fc63cc94eab97c5cff','3831e35fb14e89474d369fe98699a339',true,['version' => 'v3.1']);
  $body = [
    'Messages' => [
      [
        'From' => [
          'Email' => $_POST['email'],
          'Name' => $_POST['email']
        ],
        'To' => [
          [
            'Email' => "ayudharachman@gmail.com",
            'Name' => "Ridho Ayudha Rachman"
          ]
        ],
        'Subject' => "Isi hati netizen",
        'TextPart' => "",
        'HTMLPart' => "<h3>".$_POST['isi']."</h3><br />Thanks!",
        'CustomID' => "AppGettingStartedTest"
      ]
    ]
  ];
  $response = $mj->post(Resources::$Email, ['body' => $body]);
  $response->success() && var_dump($response->getData());
?>
