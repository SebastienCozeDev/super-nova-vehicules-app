import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VEHICLES } from '../mock-vehicle-list';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-detail-vehicle',
  templateUrl: './detail-vehicle.component.html',
  styles: [
  ]
})
export class DetailVehicleComponent implements OnInit {


  /**
   * Liste des véhicules.
   */
  vehicleList: Vehicle[];

  /**
   * Véhicule choisi par l'utilisateur.
   */
  vehicle: Vehicle | undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }

  /**
   * Se lance à l'initialisation du composant.
   */
  ngOnInit(): void {
    this.vehicleList = VEHICLES;
    const vehicleId: string | null = this.route.snapshot.paramMap.get('id');
    if (vehicleId) {
      this.vehicle = this.vehicleList.find(vehicle => vehicle.id == +vehicleId);
    }
  }

  /**
   * Redirige l'utilisateur vers la liste des véhicules.
   */
  goToVehicleList() {
    this.router.navigate(['/vehicles']);
  }

}
