import { AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-magi',
  imports: [],
  templateUrl: './magi.component.html',
  styleUrl: './magi.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MagiComponent implements AfterViewInit {
  canvas!:HTMLCanvasElement;
  ctx!:CanvasRenderingContext2D;
  private angle: number = 0;

  ngAfterViewInit() {
    this.canvas = document.getElementById("magicCircle") as HTMLCanvasElement;
    this.canvas.width = 600;
    this.canvas.height = 600;
    this.ctx = this.canvas.getContext("2d")!;
    // this.canvas.width = window.innerWidth;
    // this.canvas.height = window.innerHeight;
    this.draw();
    // this.animate();

  }

  public draw(): void {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.strokeStyle = "gold";
      this.ctx.lineWidth = 3;
      this.ctx.globalCompositeOperation = "lighter"; // Glow effect

      this.drawConcentricCircles();
      this.drawRadialLines();
      this.ctx.strokeStyle = "blue";
      this.drawArcaneElements();
  }

  private drawConcentricCircles(): void {
      for (let i = 0; i < 3; i++) {
          this.ctx.beginPath();
          this.ctx.arc(this.canvas.width / 2, this.canvas.height / 2, 120 + i * 40, 0, Math.PI * 2);
          this.ctx.stroke();
      }
  }

  private drawRadialLines(): void {
      for (let i = 0; i < 10; i++) {
          const angle = (i / 10) * Math.PI * 2;
          const x1 = this.canvas.width / 2 + Math.cos(angle) * 160;
          const y1 = this.canvas.height / 2 + Math.sin(angle) * 160;
          const x2 = this.canvas.width / 2 + Math.cos(angle) * 80;
          const y2 = this.canvas.height / 2 + Math.sin(angle) * 80;

          this.ctx.beginPath();
          this.ctx.moveTo(x1, y1);
          this.ctx.lineTo(x2, y2);
          this.ctx.stroke();
      }
  }

  private drawArcaneElements(): void {
      for (let i = 0; i < 5; i++) {
          const angle = (i / 5) * Math.PI * 2;
          const x = this.canvas.width / 2 + Math.cos(angle) * 180;
          const y = this.canvas.height / 2 + Math.sin(angle) * 180;

          this.drawPentagram(x, y, 30);

          this.drawFloralArc(x, y, 50);
      }

      this.drawPentagram(this.canvas.width / 2, this.canvas.height / 2, 50);
      this.drawFloralArc(this.canvas.width / 2, this.canvas.height / 2, 70);
  }

  private drawPentagram(x: number, y: number, size: number): void {
      this.ctx.beginPath();
      const angle = Math.PI / 5;

      for (let i = 0; i < 10; i++) {
          const radius = i % 2 === 0 ? size : size / 2;
          const px = x + Math.cos(angle * i) * radius;
          const py = y + Math.sin(angle * i) * radius;
          this.ctx.lineTo(px, py);
      }

      this.ctx.closePath();
      this.ctx.stroke();
  }

  private drawFloralArc(x: number, y: number, radius: number): void {
    this.ctx.strokeStyle = "red";
      this.ctx.beginPath();
      for (let i = 0; i < 5; i++) {
          const angleStart = (i / 5) * Math.PI * 2;
          const angleEnd = angleStart + Math.PI / 3;
          this.ctx.arc(x, y, radius, angleStart, angleEnd);
      }
      this.ctx.stroke();
    this.ctx.strokeStyle = "blue";
  }

  public animate(): void {
      const animateFrame = () => {
          this.ctx.save();
          this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
          this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);
          this.ctx.rotate(this.angle);
          this.ctx.translate(-this.canvas.width / 2, -this.canvas.height / 2);
          this.draw();
          this.ctx.restore();
          this.angle += 0.01;
          requestAnimationFrame(animateFrame);
      };
      animateFrame();
  }

}
