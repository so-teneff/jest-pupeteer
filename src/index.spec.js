import puppeteer from "puppeteer-core";
import path from "path";

describe("index.html", () => {
  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(100000);
    browser = await puppeteer.launch({
      // macos
      executablePath:
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
      headless: false
    });
    page = await browser.newPage();
    const URL = `file:///${path.resolve(__dirname, "./index.html")}`;
    await page.goto(URL, {
      waitUntil: "networkidle2"
    });
  });

  afterAll(async () => {
    await browser.close();
  });

  describe("page with dialog", () => {
    const dialogHandler = jest.fn(dialog => dialog.dismiss());
    beforeAll(() => {
      page.on("dialog", dialogHandler);
    });

    describe("when the ToDoInput button is clicked", () => {
      beforeAll(async () => {
        await page.click("#root > div > div > div.ToDoInput > button");
      });

      it("should display a dialog", () => {
        expect(dialogHandler).toHaveBeenCalled();
      });

      it('should have message "Please enter a todo!"', () => {
        const [firstCall] = dialogHandler.mock.calls;
        const [dialog] = firstCall;
        expect(dialog.message()).toEqual("Please enter a todo!");
      });
    });
  });
});
