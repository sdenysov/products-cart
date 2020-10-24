import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ControlErrorComponent} from '@@shared/forms/control-error/control-error.omponent';

/**
 * All the dumb components and pipes should be implemented here
 * These components don’t import and inject services from core or other features in their constructors.
 * They should receive all data though attributes in the template of the component using them.
 * It doesn’t have any dependency to the rest of our application.
 */

const SHARE_DECLARATIONS = [ControlErrorComponent];

const SHARE_IMPORTS = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule
];

@NgModule({
  imports: [
    ...SHARE_IMPORTS
  ],
  declarations: SHARE_DECLARATIONS,
  exports: [
    ...SHARE_IMPORTS,
    ...SHARE_DECLARATIONS
  ]
})
export class AppSharedModule {}
