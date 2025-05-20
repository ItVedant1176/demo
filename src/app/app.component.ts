import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { DatatypesComponent } from "./datatypes/datatypes.component";
import { StructuraldirectiveComponent } from "./structuraldirective/structuraldirective.component";
import { BindingsComponent } from "./bindings/bindings.component";
import { ParentinputdecoratorComponent } from "./parentinputdecorator/parentinputdecorator.component";
import { ParentoutputdecoratorComponent } from "./parentoutputdecorator/parentoutputdecorator.component";
import { InbuiltpipesComponent } from "./inbuiltpipes/inbuiltpipes.component";
import { TemplateformComponent } from "./templateform/templateform.component";
import { ReactiveformComponent } from "./reactiveform/reactiveform.component";
import { ServiceExaampleComponent } from "./service-exaample/service-exaample.component";
import { GethttprequestComponent } from "./gethttprequest/gethttprequest.component";
import { CrudComponent } from "./crud/crud.component";
import { BasicroutingComponent } from "./basicrouting/basicrouting.component";
import { SignalComponent } from "./signal/signal.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink, BasicComponent, DatatypesComponent, StructuraldirectiveComponent, BindingsComponent, ParentinputdecoratorComponent, ParentoutputdecoratorComponent, InbuiltpipesComponent, TemplateformComponent, ReactiveformComponent, ServiceExaampleComponent, GethttprequestComponent, CrudComponent, BasicroutingComponent, SignalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demoproject';
}
