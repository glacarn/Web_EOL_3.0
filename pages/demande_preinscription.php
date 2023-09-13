<?php
   $name = $_POST['name'];
   $surname = $_POST['surname'];
   $need = $_POST['need'];
   $rappel = $_POST['rappel'];
   $email = $_POST['email'];
   $phone = $_POST['phone'];
   $commentaire = $_POST['commentaire'];
   $jpo = implode("",$_POST['jpo']);
   $monUrl = "https://www.ecole-optique-lille.com/confirmation.html";
   
   require_once("PHPMailer-master/src/PHPMailer.php");
   require_once("PHPMailer-master/src/Exception.php");
   require_once("PHPMailer-master/src/SMTP.php");


   $mail = new PHPMailer\PHPMailer\PHPMailer();
   
      $mail->IsSMTP();
      
      $mail->CharSet="UTF-8";
      $mail->Host = "mail.gandi.net";
      $mail->SMTPDebug = 1; 
      $mail->Port = 587; //465 or 587
   
      $mail->SMTPSecure = 'tls';  
      $mail->SMTPAuth = true; 
      $mail->IsHTML(true);
   
      //Authentication
      //$mail->Username = "hugo.vanrobaeys@gmail.com";
      //$mail->Password = "Hugo142002";
      $mail->Username = "a.glacet@ecole-optique-lille.com";
      $mail->Password = "m8eP2S2jP";

      //Set Params
      //$mail->SetFrom("hugo.vanrobaeys@gmail.com");
      $mail->SetFrom("a.glacet@ecole-optique-lille.com");

      //$mail->addAddress('hugo.vanrobaeys@laposte.net');
      
      //$mail->addAddress('p.dhulst@ecole-optique-lille.com');
      $mail->addAddress('glacarn@gmail.com');
      $mail->Subject = "Demande de préinscription de ".$name." ".$surname." depuis le site ecole-optique-lille.com";
      $mail->Body = "Prénom : ".$name."<br> Nom : ".$surname."<br> Formation : ".$need."<br> Rdv : ".$rappel."<br> E-mail : ".$email."<br> Numéro de téléphone : ".$phone."<br> Commentaire : ".$commentaire."<br> Journée portes ouvertes : ".$jpo." ";

   
   if(!$mail->Send()) {
      echo "Mailer Error: " . $mail->ErrorInfo;
   }
   else {
      header("Status: 301 Moved Permanently", false, 301);
      header("Location: https://www.ecole-optique-lille.com/confirmation.html");
      exit();
   }
      
?>

