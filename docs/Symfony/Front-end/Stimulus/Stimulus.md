Stimulus
========

A modest JavaScript framework for the HTML you already have.

## Symfony UX

Symfony UX is all about helping you build better JavaScript interfaces faster.

The first piece of UX is `Stimulus`: a JavaScript library built around the idea that your server should return HTML. `Stimulus` gives you the ability to add JavaScript to any part of your page in an object-oriented way that you will love:

- Installing Stimulus & the Stimulus Bridge
- Stimulus controller basics & "instances"
- Adding targets and using actions
- Replacing a select element with a JS-powered color selector
- Managing "state"
- Stimulus values API
- Free Stimulus libraries! stimulus-use and stimulus-components
- The UX PHP packages: building chart.js in PHP!
- Using React, Vue or some other frontend framework
- Laziness: loading controllers lazily

## What is Symfony stimulus?

The `Stimulus bridge` integrates `Stimulus` into your Symfony app by automatically loading both third-party controllers and your own custom controllers. It works by reading a `controllers.json` file that describes your third-party controllers.

## Examples

Sprinkle your HTML with controller, target, and action attributes => Write a compatible controller and watch Stimulus bring it to life:

```html
<!--HTML from anywhere-->
<div data-controller="hello">
  <input data-hello-target="name" type="text">

  <button data-action="click->hello#greet">
    Greet
  </button>

  <span data-hello-target="output">
  </span>
</div>
```

```js
// hello_controller.js
import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "name", "output" ]

  greet() {
    this.outputTarget.textContent =
      `Hello, ${this.nameTarget.value}!`
  }
}
```

## Resources

- https://github.com/SymfonyCasts/symfony-ux.git
- https://www.stimulus-components.com/docs/