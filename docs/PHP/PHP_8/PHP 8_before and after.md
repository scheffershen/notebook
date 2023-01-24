PHP 8: before and after
=======================

https://stitcher.io/blog/php-8-before-and-after
July 20, 2020

## Events subscribers with attributes

configuring event listeners is an example of an annotation I'll be using extensively.

php 7.4

```php
// Before

class CartsProjector implements Projector
{
    use ProjectsEvents;

    protected array $handlesEvents = [
        CartStartedEvent::class => 'onCartStarted',
        CartItemAddedEvent::class => 'onCartItemAdded',
        CartItemRemovedEvent::class => 'onCartItemRemoved',
        CartExpiredEvent::class => 'onCartExpired',
        CartCheckedOutEvent::class => 'onCartCheckedOut',
        CouponAddedToCartItemEvent::class => 'onCouponAddedToCartItem',
    ];

    public function onCartStarted(CartStartedEvent $event): void
    { /* … */ }

    public function onCartItemAdded(CartItemAddedEvent $event): void
    { /* … */ }

    public function onCartItemRemoved(CartItemRemovedEvent $event): void
    { /* … */ }

    public function onCartCheckedOut(CartCheckedOutEvent $event): void
    { /* … */ }

    public function onCartExpired(CartExpiredEvent $event): void
    { /* … */ }

    public function onCouponAddedToCartItem(CouponAddedToCartItemEvent $event): void
    { /* … */ }
}
```

PHP 8

```php
class CartsProjector implements Projector
{
    use ProjectsEvents;

    #[SubscribesTo(CartStartedEvent::class)]
    public function onCartStarted(CartStartedEvent $event): void
    { /* … */ }

    #[SubscribesTo(CartItemAddedEvent::class)]
    public function onCartItemAdded(CartItemAddedEvent $event): void
    { /* … */ }

    #[SubscribesTo(CartItemRemovedEvent::class)]
    public function onCartItemRemoved(CartItemRemovedEvent $event): void
    { /* … */ }

    #[SubscribesTo(CartCheckedOutEvent::class)]
    public function onCartCheckedOut(CartCheckedOutEvent $event): void
    { /* … */ }

    #[SubscribesTo(CartExpiredEvent::class)]
    public function onCartExpired(CartExpiredEvent $event): void
    { /* … */ }

    #[SubscribesTo(CouponAddedToCartItemEvent::class)]
    public function onCouponAddedToCartItem(CouponAddedToCartItemEvent $event): void
    { /* … */ }
}
```