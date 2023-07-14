<h1 align="center">
  @traent/ngx-toast
</h1>

<p align="center">
  <img width="250px" height="auto" src="https://traent.com/wp-content/uploads/2022/07/logo-color.svg">
</p>

<br />

> @traent/ngx-toast is an Angular library that provides a toast service for showing some predefined typologies of toasts.

> Notice: This library is currently under development and might be subjected to breaking changes. We also plan to move it inside [@traent/ngx-components](https://github.com/traent/ngx-components).

## Compatibility with Angular Versions

| @traent/ngx-toast | Angular        |
| ----------------- | -------------- |
| 0.0.x             | 14             |


## Installation

You can install it through **NPM**:

```bash
npm install @traent/ngx-toast
```

When you install using **npm**, you will also need to import `NgxT3ToastModule` in your `app.module`:

```typescript
import { NgxT3ToastModule } from '@traent/ngx-toast';

@NgModule({
  imports: [NgxT3ToastModule],
})
class AppModule {}
```

## API & Examples

The example app can be launched using `npm run serve:example`.

Please note that the `example-app` depends from `@traent/design-system` and in particular from its `fonts.scss`, `material/theme` and `mat-toast` configurations and styles.

In it, you can find a simple usage of `NgxT3ToastService` that is used to instantiate customizable toasts.

The available default `ToastTypes` are `info`, `error`, `warning`, `success`, but we can customize the toast further by using the `message` or `show` methods.

## Building & Publishing

The building and publishing of this library to NPM is performed through an internal Organization flow that uses the standard Angular approach.

In the future, we will improve the tooling to allow everyone to build this library easily.

## License

`@traent/ngx-toast` is available under the Apache-2 license. See the [LICENSE](./LICENSE) file for more info.

## Contributors

We are open to any contributions and feedbacks.
