import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { EditorComponent } from './editor/editor.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [ModalComponent, EditorComponent],
    imports: [CommonModule, AngularEditorModule, HttpClientModule, FormsModule],
    exports: [ModalComponent, EditorComponent],
})
export class SharedModule {}
