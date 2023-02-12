<?php

class OpenAIownapikey
{

    function __construct(
        public $secretKey,
        public $baseURL = "https://api.openai.com/v1/",
        private $defaultEngine = "davinci" // ada, babbage, etc
    ) {
    }

    public function setDefaultEngine(string $defaultEngine): void
    {
        $this->defaultEngine = $defaultEngine;
    }

    public function _curl(string $url, string $type = "POST", string $postFields = ""): array|stdClass|string
    {
        $url = $this->baseURL . $url;
        echo $url . "<p>";
        $curl = curl_init();
        $curlOpts = [
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_HTTPHEADER => [
                'Content-Type: application/json',
                'Authorization: ' . $this->secretKey
            ],
        ];
        if ($type == "POST") {
            $curlOpts[CURLOPT_CUSTOMREQUEST] = "POST";
            $curlOpts[CURLOPT_POSTFIELDS] = $postFields;
        }
        curl_setopt_array($curl, $curlOpts);
        $response = curl_exec($curl);
        $err = curl_error($curl);
        //echo "algun error? " . $err . "<p>";
        //echo "resp = " . $response;
        curl_close($curl);
        return $err ? ["error" => "Error #:" . $err] : json_decode($response);
    }

    private function _removeUnfinishedSentence(string $str): string
    {
        //return preg_replace("/\.[^.]+$/", "", $str) ?? $str;
        return $str;
    }

    public function search(array $documents, $query): array|stdClass|string
    {

        $request_body = [
            "max_tokens" => 10,
            "temperature" => 0.7,
            "top_p" => 1,
            "presence_penalty" => 0.75,
            "frequency_penalty" => 0.75,
            "documents" => $documents,
            "query" => $query
        ];

        $postFields = json_encode($request_body);


        return $this->_curl(url: "engines/" . $this->defaultEngine . "/search", postFields: $postFields);
    }

    public function complete(string $prompt, int|string $max_tokens = 5, array|null $parameters = null, bool $returnResult = false, bool $json = false): array|stdClass|string
    {
        $request_body = [
            "prompt" => $prompt,
            "max_tokens" => $max_tokens,
            "top_p" => 1,
            "best_of" => 1,
            "stream" => false,
            //"temperature" => 0.7,          //These 3 commented because they are sent by the calling function
            //"presence_penalty" => 0.75,
            //"frequency_penalty"=> 0.75,
        ];

        if (!empty($parameters))
            $request_body = array_merge($request_body, $parameters);

        //echo $request_body,   //Uncomment to know full set of parameters as sent

        $postFields = json_encode($request_body);

        $result = $this->_curl(url: "engines/" . $this->defaultEngine . "/completions", postFields: $postFields);
        return $returnResult ? ($json ? json_encode($result) : $result) : $this->_removeUnfinishedSentence($prompt . ($result?->choices[0]?->text ?? ""));
    }
}
