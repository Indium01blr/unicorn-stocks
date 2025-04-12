import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';

export const routes: Routes = [
    { path: "Home" , component : HomeComponent },
    { path: "Login", component : LoginComponent },
    { path: "Portfolio", component : PortfolioComponent },
    { path: "WatchList", component: WatchlistComponent},
    { path: "Dashboard", component: DashboardComponent }
];
