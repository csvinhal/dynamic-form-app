import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { DynamicFormModule } from "./dynamic-form/dynamic-form.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DynamicFormModule, ReactiveFormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
