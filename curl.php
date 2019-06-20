<?php
	$api = "https://samples.openweathermap.org/data/2.5/weather?q=London&appid=b1b15e88fa79722";
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_HEADER, 0);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_URL, $api);
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
	curl_setopt($ch, CURLOPT_VERBOSE, 0);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	$response = curl_exec($ch);

	curl_close($ch);
	$data = json_decode($response);

	//creation of necessary variables for ajax 
	$city = $data->name;
	$temp = $data->main->temp;
	$maind = strtolower($data->weather[0]->main);
	$humidity = $data->main->humidity;
	// the vars to transfer to ajax
	echo $city;
	echo $temp;
	echo $maind;
	echo $humidity;
	
?>