mcc3 2015 - easyrtc
===

## easyrtc

cd C:\sandbox\mcc3.universalmedica.com\public_html\easyrtc\server_example
forever start server.js 

http://localhost:8080 

http://192.168.110.44:8080/demos/demo_audio_video_simple.html  OK

http://192.168.110.44:8080/demos/demo_multiparty.html  OK 

http://192.168.110.44:8080/demos/demo_multistream_no_iframe.html

## Tawk Screen Share : 
https://chrome.google.com/webstore/detail/tawk-screen-share/bemabaogbdfpbkkganibcmhbgjogabfj/related

## https://github.com/muaz-khan/WebRTC-Experiment

https://www.webrtc-experiment.com/Pluginfree-Screen-Sharing/ OK 

Make sure that you are using Firefox Nightly and you enabled: media.getusermedia.screensharing.enabled flag from about:config page. You also need to add your domain in "media.getusermedia.screensharing.allowed_domains" flag.

chrome.exe --enable-usermedia-screen-capturing

## chrome extension

https://chrome.google.com/webstore/detail/webrtc-desktop-sharing/nkemblooioekjnpfekmjhpgkackcajhg

https://chrome.google.com/webstore/detail/hangouts/nckgahadagoaajjgafhacjanaoiihapd/related?hl=fr

## ANY Firewall .com

http://stackoverflow.com/questions/28441063/turn-server-with-easyrtc-doesnt-work

http://www.eyeball.com/products/stun-turn-ice-library/

http://www.eyeball.com/products/messenger-sdk-webrtc/

```php
//Begin constructing an ICE server configuration using the password and application name created in service set-up

function GetIceServerConfig($applicationName, $password) {
    date_default_timezone_set(“UTC”);
    //Create the key using password + “_” + current UTC year + “-” + current UTC month + “-” + current UTC day then encrypt the key using SHA256
    $key = hash ( “sha256″ ,$password . “_” . date(“Y-m-d”, time()));
    //POST request with parameters for service, username and key, in order to get the ephemeral credential
    $service_url = ‘http://www.anyfirewall.com/demo/ephemeral-credential.php?service=turn&username=’.$applicationName.”&key=”.$key;
    $curl = curl_init($service_url);
    $curl_post_data = array();
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $curl_post_data);
    $curl_response = curl_exec($curl);
    //If no response from server, return to here.
    if ($curl_response === false) return NULL;
    curl_close($curl);
    $response = json_decode($curl_response);
    //On received response from REST API, check response type.
    if(!empty($response->{“status”}) && ($response->{“status”} == “Error”||$response->{“status”} == “Failure”)) return json_encode($response);
    else { //Success response, construct IceServer JSON object
        $turnUris = $response->{“uris”};
        $iceServer = array(array(‘url’ => ‘stun:stun.anyfirewall.com:3478′));
        for($i=0;$i<count($turnuris);$i++) {=”" array_push($iceserver,=”" array(‘url’=”"> $turnUris[$i], ‘username’=> $response->{“username”}, ‘credential’ => $response->{“password”}));
        }
        return  json_encode(array(‘iceServers’ => $iceServer));
    }
    return NULL;
}
```