import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProduitsComponent } from './produits/produits.component';
import { ProposComponent } from './propos/propos.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "produits/:id", component: ProduitsComponent},
    {path: "propos", component: ProposComponent}
];
