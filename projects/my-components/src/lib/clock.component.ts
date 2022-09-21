import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'my-clock',
  template: `
    {{ now | date:format }}
  `,
  styles: [
  ]
})
export class ClockComponent implements OnInit, OnChanges, OnDestroy {

  @Input() format = 'HH:mm:ss';
  @Input() delay = 1000;

  now = new Date();

  private _interval;

  constructor() {
    // console.log('constructor delay', this.delay); -> 1000 (valeur par défaut)
  }

  ngOnInit(): void {
    // console.log('ngOnInit delay', this.delay); -> 60000 (valeur qui vient du parent)
    this._interval = setInterval(() => {
      this.now = new Date();
    }, this.delay);

    // si on quitte le composant le callback async
    // ne s'arrête pas
    // ça aurait été parail pour :
    // setInterval -> clearInterval
    // addEventListener -> removeEventListener
    // new WebSocket -> ws.close()
    // new Worker -> worker.destroy()
    // obs.subscribe() -> subscriber.unsubscribe()
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
    if (!changes['delay']?.isFirstChange() && changes['delay']?.currentValue !== changes['delay']?.previousValue) {
      console.log('delay changed');
      clearInterval(this._interval);
      this._interval = setInterval(() => {
        this.now = new Date();
      }, this.delay);
    }

  }

  ngOnDestroy(): void {
    clearInterval(this._interval);
  }

  start() {
    this._interval = setInterval(() => {
      this.now = new Date();
    }, this.delay);
  }

  stop() {
    clearInterval(this._interval);
  }
}
