
import { Routes } from '@angular/router';
import { MyDocumentsComponent } from './my-documents/my-documents.component';
import { LabsComponent } from './labs/labs.component';
import { ImagingComponent } from './imaging/imaging.component';
import { PathologyComponent } from './pathology/pathology.component';

export const myDocumentsRoutes: Routes = [
    {
        path: '',
        component: MyDocumentsComponent,
        children: [
            {
                path: 'labs',
                component: LabsComponent,
                data: { title: 'Labs' }
            },
            {
                path: 'imaging',
                component: ImagingComponent,
                data: { title: 'Imaging' }
            },
            {
                path: 'pathology',
                component: PathologyComponent,
                data: { title: 'Pathology' }
            },
        ],
    },
];
