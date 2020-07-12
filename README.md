# vue-vibrancy

[![Demo](https://raw.githubusercontent.com/dietrich-stein/vibrancy.js/3243c65d1af1155fe5cc1849869d355ed6ea5135/images/vibrancy-preview.png)](http://dietrich-stein.github.io/vue-vibrancy)

## Demo <a name="demo"></a>

http://dietrich-stein.github.io/vue-vibrancy

## Description <a name="description"></a>

This is a [Vue](https://vuejs.org) component for adding stylish frosted glass effects over images.

## Installation <a name="installation"></a>

This Vue component consists of one file (Vibrancy.vue) that can be copied directly into your Vue.js projects and can
also be installed as a dependency via the NPM package like so:

```
npm install @vuenique/vue-vibrancy --save
```

## Usage <a name="usage"></a>

```html
<template>
  <layout>
    <div class="parent">
      <vibrancy :radius="180" :modify-parent="true"/>
    </div>
  </layout>
</template>

<script>
  import Vibrancy from '../components/Vibrancy.vue'

  export default {
    name: 'Example',
    components: {
      Vibrancy
    }
  }
</script>

<style>
  .parent {
    background: url('https://source.unsplash.com/random') no-repeat;
  }
</style>
```

## Configuration <a name="configuration"></a>

| Prop Name       | Type      | Default | Description                                                                  |
| --------------- | --------- | ------- | -----------------------------------------------------------------------------|
| `filter`        | *String*  | `''`    | Affects the `filter` property of the internal canvas via the `filter` property of the `CanvasRenderingContext2D` API. Using a value like `saturate(200%) brightness(150%)` is recommended to best replicate the intended effect. However, this API property is not currently supported in Safari for iOS and macOS. |
| `radius`        | *Number*  | `90`    | Sets the intensity of the blur effect in a range of values between 0 and 180. A setting of somehwere between 90 and 180 is recommended for best results. |
| `modify-parent` | *Boolean* | `true`  | When set to `true`, the component will automatically set the width and height of the closest parent with a valid `background-image` style so that the dimensions exactly match the actual width and height dimensions of the image. |
| `noise`         | *Number*  | `0`     | Sets the intensity of the noise effect in range of values between `0.0` and `1.0`. This enables simulating the "acrylic" effect introduced by Microsoft. Values above `0.3` are unlikely to give visually pleasing results. |

## Limitations <a name="limitation"></a>

The current implementation of this component is only designed for very limited use case. Do you have any of the
following requirements?

- Support for background images that are tiled or stretched with parent styles like `background-size: cover` or `background-repeat: repeat`
- Support for responsive design changes resulting from resizing of the browser window or changes in device orientation
- Support for dragging/moving the target element or scrolling while the background image of the parent element has a `background-attachment: fixed`
- Support for background images affected by a `background-position` value other than the default of `0% 0%`

In most cases, adding support for these requirements is possible but relatively tricky to solve reliably. Future support
for these features is a possible but not currently planned.

## Questions & Answers <a name="q-and-a"></a>

#### What is vibrancy?

Vibrancy is name for a visual effect that was refined and made popular by Apple in 2014 with the introduction of OS X
Yosemite. They
[describe](https://developer.apple.com/design/human-interface-guidelines/macos/visual-design/translucency/) it as
follows in their Human Interface Guidelines as follows:

> &hellip;a subtle effect that dynamically blends the foreground and background colors using a careful balance of
lightening and darkening techniques. This combination helps make foreground content stand out against any background.

The effect is an evolution of the glass-like effects first popularized by Microsoft in 2006 with the
[Windows Aero](https://en.wikipedia.org/wiki/Windows_Aero) design language introduced in Windows Vista.


#### What about the `blur()` CSS function?

The CSS `blur()` function now has widespread browser support. However, it fails to provide an effect that is evenly
applied across full backgrounds. As a result the edges and corners of blurred elements are less blurred than the the
inner region. It is possible to minimize this defect using margin tricks but such solutions must be tweaked to
compensate for the specifics of individual background images.

#### How does `vue-vibrancy` blur background images?

This component uses the [StackBlur](http://incubator.quasimondo.com/processing/fast_blur_deluxe.php) algorithm by Mario
Klingemann; a fast hybrid of the Gaussian and box blur methods. This algorithm was chosen because it provides the
fastest and most visually satisfying blur effect currently known by the author of this component.

## Links <a name="links"></a>

- [vibrancy.js](https://github.com/dietrich-stein/vibrancy.js) &mdash; An unmaintained jQuery plug-in for vibrancy
effects.

## Troubleshooting

Bug reports and feature requests are welcome. Please use GitHub's Issues tab to create them.

## Contribution <a name="contribution"></a>

Contribution is always welcome. Simply follow these easy steps:

- Fork this repository
- Clone your forked repository to your machine
- Make your changes on the `master` branch of your repository and push up your code
- Create a pull request from [here](https://github.com/dietrich-stein/vue-vibrancy/compare) by selecting your fork using
the "Choose a Head Repository" dropdown

## License <a name="license"></a>

The **@vuenique/vue-vibrancy** package is freely distributable under the terms of the [MIT license](LICENSE.md).
