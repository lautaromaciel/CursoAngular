import { Component,Output,EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-input-paises',
  templateUrl: './input-paises.component.html',
  styleUrls: ['./input-paises.component.css']
})
export class InputPaisesComponent implements OnInit {

  @Output() onEnter : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce : EventEmitter<string> = new EventEmitter();

  @Input() placeholder : string;

  debouncer : Subject<string> = new Subject();


  termino : string = "";


  buscar(){
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(){
    this.debouncer.next(this.termino);
  }



  constructor() { }

  ngOnInit(): void {
     this.debouncer
     .pipe(
       debounceTime(300)
     )
     .subscribe(valor => {
       console.log("debouncer",valor)
       this.onDebounce.emit(valor)
     })
  }

}
