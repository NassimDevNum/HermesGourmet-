<?php
$file = new SplFileObject("users.csv", "a"); 
$file->fputcsv(array($_COOKIE['nom'],$_COOKIE['prenom'],$_COOKIE['role'],$_COOKIE['moyenne'])); 
$file = null;

$moyfile = new SplFileObject("moyenne.csv", "a");
$moyfile->fputcsv(array($_COOKIE['nom'],$_COOKIE['moyenne']));
$moyfile = null;
?>