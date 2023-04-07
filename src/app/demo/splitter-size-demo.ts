import { Component } from '@angular/core';

@Component({
  selector: "splitter-size-demo",
  templateUrl: "./splitter-size-demo.html",
})
export class SplitterSizeDemo {
  editorOptions = {
    theme: "vs-dark",
    language: "javascript",
    autoLayout: true,
    automaticLayout: true,
  };
  code: string = 'function x() {\nconsole.log("Hello world!");\n}';
}