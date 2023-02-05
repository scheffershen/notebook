<?php

// this client will be used in our test
final class FakeHttpClient implements HttpClientInterface
{
  private array $responses;
  
  /**
  *  
  * We create an array of response with the $url as "key" and $response as "value"
  * ex: $responses = [
  *      '/external/user_exists' => new MockResponse($content)
  * ];
  */
  public function __construct(array $responses = [])
  {
     $this->responses = $responses;
  }
  
  
   public function request(string $method, string $url, array $options = []): ResponseInterface
   {
        // Get the reponse by accessing to the "key" 
        $response = $this->responses[$url] ?? null; //"null coalescing operator", added in php 7.0. 
     
        if (null === $response) {
            throw new \LogicException(\Safe\sprintf('There is no response for url: %s', $url));
        }

        return (new MockHttpClient($response, 'https://user_service_api.fake'))->request($method, $url);
   }
  
  public function stream($responses, float $timeout = null): ResponseStreamInterface
    {
        throw new \LogicException(sprintf('%s() is not implemented', __METHOD__));
    }

    public function withOptions(): self
    {
        return $this;
    }
}