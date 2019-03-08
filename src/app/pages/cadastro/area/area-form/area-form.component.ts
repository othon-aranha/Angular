import { Component, OnInit, Injector } from '@angular/core';
import { Area } from '../../../../domain/area';
import { BaseResourceFormComponent } from '../../../../shared/components/base-resource-form/base-resource-form.component';
import { AreaService } from '../../../../service/area.service';

@Component({
  selector: 'app-area-form',
  templateUrl: './area-form.component.html',
  styleUrls: ['./area-form.component.css']
})
export class AreaFormComponent extends BaseResourceFormComponent<Area> implements OnInit {

  constructor(protected areaService: AreaService, protected injector: Injector) {
    super(injector, new Area(), areaService, Area.fromJson);
  }


  ngOnInit() {
  }

  buildResourceForm() {

  }

  onAfterloadResource() {

  }

}
