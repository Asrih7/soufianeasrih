import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as THREE from 'three';

@Injectable({ providedIn: 'root' })
export class ThreeSceneService {
  private platformId = inject(PLATFORM_ID);

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private pts!: THREE.Points;
  private geo!: THREE.BufferGeometry;
  private posA!: Float32Array;
  private posB!: Float32Array;
  private morphT = 0;
  private scrollR = 0;
  private tX = 0; private tY = 0;
  private cX = 0; private cY = 0;
  private t = 0;
  private animId = 0;
  private N = 3800;

  init(canvas: HTMLCanvasElement): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    this.renderer.setSize(innerWidth, innerHeight);

    this.scene  = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(42, innerWidth / innerHeight, 0.1, 200);
    this.camera.position.set(0, 0, 22);

    this.buildParticles();
    this.buildDust();
    this.bindEvents();
    this.animate();
  }

  private buildParticles(): void {
    const N = this.N;
    this.posA = new Float32Array(N * 3);
    this.posB = new Float32Array(N * 3);
    const col = new Float32Array(N * 3);

    // Fibonacci sphere
    for (let i = 0; i < N; i++) {
      const phi = Math.acos(1 - 2 * (i / N));
      const th  = Math.PI * 2 * i * 1.6180339887;
      const r   = 5.8 + (Math.random() - 0.5) * 0.4;
      this.posA[i*3]   = r * Math.sin(phi) * Math.cos(th);
      this.posA[i*3+1] = r * Math.sin(phi) * Math.sin(th);
      this.posA[i*3+2] = r * Math.cos(phi);
    }

    // Torus
    for (let i = 0; i < N; i++) {
      const u = (i / N) * Math.PI * 2;
      const v = ((i * 13) % N / N) * Math.PI * 2;
      const R = 5, r = 1.9;
      this.posB[i*3]   = (R + r * Math.cos(v)) * Math.cos(u);
      this.posB[i*3+1] = (R + r * Math.cos(v)) * Math.sin(u) * 0.5;
      this.posB[i*3+2] = r * Math.sin(v);
    }

    // Colors: 30% accent orange, rest warm ink
    for (let i = 0; i < N; i++) {
      if (i / N < 0.30) { col[i*3] = 0.788; col[i*3+1] = 0.294; col[i*3+2] = 0.047; }
      else               { col[i*3] = 0.21;  col[i*3+1] = 0.20;  col[i*3+2] = 0.18;  }
    }

    this.geo = new THREE.BufferGeometry();
    this.geo.setAttribute('position', new THREE.BufferAttribute(this.posA.slice(), 3));
    this.geo.setAttribute('color',    new THREE.BufferAttribute(col, 3));

    this.pts = new THREE.Points(this.geo, new THREE.PointsMaterial({
      size: 0.055, vertexColors: true, transparent: true, opacity: 0.88, sizeAttenuation: true,
    }));
    this.pts.position.set(4.5, 0, 0);
    this.scene.add(this.pts);
  }

  private buildDust(): void {
    const pos = new Float32Array(500 * 3);
    for (let i = 0; i < 500; i++) {
      pos[i*3]   = (Math.random() - 0.5) * 50;
      pos[i*3+1] = (Math.random() - 0.5) * 35;
      pos[i*3+2] = (Math.random() - 0.5) * 12 - 10;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.scene.add(new THREE.Points(g, new THREE.PointsMaterial({
      size: 0.04, color: 0xC0A070, transparent: true, opacity: 0.22,
    })));
  }

  private bindEvents(): void {
    document.addEventListener('mousemove', (e) => {
      this.tX = (e.clientX / innerWidth  - 0.5) * 2;
      this.tY = (e.clientY / innerHeight - 0.5) * 2;
    });
    window.addEventListener('scroll', () => {
      const max = document.body.scrollHeight - innerHeight;
      this.scrollR = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
    }, { passive: true });
    window.addEventListener('resize', () => {
      this.camera.aspect = innerWidth / innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(innerWidth, innerHeight);
    });
  }

  private animate(): void {
    this.animId = requestAnimationFrame(() => this.animate());
    this.t += 0.007;

    this.cX += (this.tX * 1.5 - this.cX) * 0.05;
    this.cY += (-this.tY      - this.cY) * 0.05;
    this.camera.position.x = this.cX;
    this.camera.position.y = this.cY;
    this.camera.lookAt(this.scene.position);

    this.pts.rotation.y = this.t * 0.17;
    this.pts.rotation.x = this.t * 0.05;

    this.morphT += (this.scrollR - this.morphT) * 0.02;
    const pa = this.geo.attributes['position'] as THREE.BufferAttribute;
    for (let i = 0; i < this.N; i++) {
      const w = Math.sin(this.t * 1.2 + i * 0.008) * 0.09;
      pa.array[i*3]   = this.posA[i*3]   * (1 - this.morphT) + this.posB[i*3]   * this.morphT + w;
      pa.array[i*3+1] = this.posA[i*3+1] * (1 - this.morphT) + this.posB[i*3+1] * this.morphT + w * 0.5;
      pa.array[i*3+2] = this.posA[i*3+2] * (1 - this.morphT) + this.posB[i*3+2] * this.morphT;
    }
    pa.needsUpdate = true;
    this.renderer.render(this.scene, this.camera);
  }

  destroy(): void {
    cancelAnimationFrame(this.animId);
    this.renderer?.dispose();
  }
}