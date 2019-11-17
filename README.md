# Testing alert with Jest and Puppeteer

created as answer for [StackOverflow question][soq]

## To run

- `clone`
- `npm i`
- `npm test`

## Uses

- jest
- babel
- puppeteer

## Result

```sh
> jest-pupeteer@1.0.0 test jest-pupeteer
> jest

 PASS  src/index.spec.js
  index.html
    page with dialog
      when the ToDoInput button is clicked
        ✓ should display a dialog (4ms)
        ✓ should have message "Please enter a todo!" (1ms)
```

[soq]: https://stackoverflow.com/questions/58887985/how-to-test-an-alert-displaying-using-jest-puppeteer/58888885
