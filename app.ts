// your code goes here
import {
    NgModule,
    Component
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@Component({
    selector: 'hello-world',
    template: `
    <ul>
        <li *ngFor="let name of names"> Hello {{ name }}</li>
    </ul>
    `
})

class HelloWorld {
    names: string[];

    constructor() {
        this.names = ['Rich','odie','siena','vero']
    }
}

@NgModule({
    declarations: [ HelloWorld ],
    imports: [ BrowserModule ],
    bootstrap: [ HelloWorld ]
})

class HelloWorldAppModule {}

platformBrowserDynamic().bootstrapModule(HelloWorldAppModule);

/**
 * A basic Component has two parts:
 *  1) A Component annotation
 *  2) A component definition class
 *
 *  @Component({})
 *
 *  Think of annotations as metadata added to your code. When we use @Component on the HelloWorld class, we are 'decorating' this HelloWorld as a Component. We want to be able to use this component in our markup by using a <hello-world> tag. To do that we configure the @Component and specify the selector as hello-world
 *
 *  Notice that we're defining our template string between backticks. This is a new feature of ES6 that allows us to do multiline strings.
 *
 *  Angular has a powerful concept of modules. When you boot an Angular app, you're not booting a component directly, but instead you create an NgModule which points to the component you want to load.
 *
 *  Like all annotations, this @NgModule() code adds metadata to the class immediately following (HelloWorldAppModule).
 *  declarations: defines the components in thsi module. In this case, we just have one, but you often have several.
 *  imports: describes which dependencies this module has. We're creating a browser app, so we want to import the BrowserModule.
 *  bootstraps: tells Angular that when this module is used to bootstrap an app, we will load the HelloWorld component as the top-level component. Th
 *
 * */