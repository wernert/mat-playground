import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-clock',
    imports: [
      MatButtonModule,
      MatIconModule
    ],
    templateUrl: './clock.component.html',
    styleUrl: './clock.component.scss'
})
export class ClockComponent implements AfterViewInit {
  constructor(
    private router: Router,
    private location: Location
  ) {}
  @ViewChild('renderCanvas2', { static: false })
  public renderCanvas2!: ElementRef<HTMLCanvasElement>;
  // private renderCanvas2: ElementRef = {} as ElementRef;

  canvas!: HTMLCanvasElement;
  // ctx = this.renderCanvas2
  ctx!: CanvasRenderingContext2D;
  id : ReturnType<typeof setTimeout> | undefined;

  baseColor = 'rgba(68, 21, 155, 0.75)';
  accentColor = 'rgba(233, 221, 255, 0.75)';

  ngAfterViewInit(): void {
    this.canvas = this.renderCanvas2.nativeElement as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    let radius = this.canvas.height / 2;
    this.ctx.translate(radius, radius);
    radius = radius * 0.9;

    // setInterval(this.drawClock, 1000);
    this.drawClock(this.ctx, radius);
    this.id = setInterval(() => {
      this.drawClock(this.ctx, radius);
    }, 10000);
  }
  openWin(){
    const windowFeatures = "left=100,top=100,width=500,height=500";
    const url = this.location.prepareExternalUrl(this.router.serializeUrl(
      this.router.createUrlTree(['/clock'])
    ));
    window.open(url, "clock", windowFeatures);
  }
  drawClock(ctx: CanvasRenderingContext2D, radius: number) {
    this.drawFace(this.ctx, radius);
    this.drawNumbers(this.ctx, radius);
    this.drawTime(this.ctx, radius);
  }

  drawFace(ctx: CanvasRenderingContext2D, radius: number) {
    const grad = ctx.createRadialGradient(
      0,
      0,
      radius * 0.1,
      0,
      0,
      radius * 1.05
    );
    grad.addColorStop(0, this.baseColor);
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, this.accentColor);

    ctx.beginPath();
    ctx.arc(0, 0, radius * 1, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();

    ctx.strokeStyle = grad;
    ctx.lineWidth = radius * 0.5;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.07, 0, 2 * Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
  }

  drawNumbers(ctx: CanvasRenderingContext2D, radius: number) {
    ctx.font = radius * 0.1 + 'px arial';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    for (let num = 1; num < 13; num++) {
      let ang = (num * Math.PI) / 6;
      ctx.rotate(ang);
      ctx.translate(0, -radius * 0.87);
      //ctx.rotate(-ang);
      ctx.fillText(num.toString(), 0, 0);
      //ctx.rotate(ang);
      ctx.translate(0, radius * 0.87);
      ctx.rotate(-ang);
    }
  }

  drawTime(ctx: CanvasRenderingContext2D, radius: number) {
    const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    //hour
    hour = hour % 12;
    hour =
      (hour * Math.PI) / 6 +
      (minute * Math.PI) / (6 * 60) +
      (second * Math.PI) / (360 * 60);
    this.drawHand(ctx, hour, radius * 0.5, radius * 0.07);
    //minute
    minute = (minute * Math.PI) / 30 + (second * Math.PI) / (30 * 60);
    this.drawHand(ctx, minute, radius * 0.77, radius * 0.07);
    // second
    // second = (second * Math.PI) / 30;
    // this.drawHand(ctx, second, radius * 0.9, radius * 0.02);
  }

  drawHand(
    ctx: CanvasRenderingContext2D,
    pos: number,
    length: number,
    width: number
  ) {
    ctx.strokeStyle = this.baseColor;
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = 'round';
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
  }
}
